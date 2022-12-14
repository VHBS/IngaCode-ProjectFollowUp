import { InputProjectType } from '../@types/project';
import { ProjectServiceType } from '../@types/projectService';
import Collaborator from '../sequelize/models/Collaborator';
import Project from '../sequelize/models/Project';
import Task from '../sequelize/models/Task';
import { IProjectService } from './interfaces/IProjectService';

export default class ProjectService implements IProjectService<ProjectServiceType> {
  public projectNotFound = 'Project not found!';

  public projectAlreadyDeleted = 'Project has already been deleted!';

  public findAll = async (): Promise<ProjectServiceType> => {
    const allProjects = await Project.findAll({
      where: {
        deletedAt: null,
      },
      include: [
        {
          model: Task,
          as: 'tasks',
          where: {
            deletedAt: null,
          },
          required: false,
          include: [
            {
              model: Collaborator,
              as: 'collaborators',
              through: {
                attributes: [],
              },
              required: false,
            },
          ],
        },
      ],
    });
    return { status: 200, json: allProjects };
  };

  public create = async (entity: InputProjectType): Promise<ProjectServiceType> => {
    const newProject = await Project.create(entity);
    return { status: 201, json: newProject };
  };

  public update = async (id: string, entity: InputProjectType): Promise<ProjectServiceType> => {
    const { name } = entity;
    const findProjectById = await Project.findByPk(id);

    if (!findProjectById) {
      return { status: 404, json: { message: this.projectNotFound } };
    }

    if (findProjectById.deletedAt) {
      return { status: 400, json: { message: this.projectAlreadyDeleted } };
    }

    await findProjectById.update({
      name,
      updatedAt: new Date(),
    });
    return { status: 200, json: findProjectById };
  };

  public delete = async (id: string): Promise<ProjectServiceType> => {
    const findProjectById = await Project.findByPk(id);

    if (!findProjectById) {
      return { status: 404, json: { message: this.projectNotFound } };
    }

    if (findProjectById.deletedAt) {
      return { status: 400, json: { message: this.projectAlreadyDeleted } };
    }

    await findProjectById.update({
      deletedAt: new Date(),
    });

    return { status: 204, json: findProjectById };
  };

  public findOne = async (id: string): Promise<ProjectServiceType> => {
    const findProjectById = await Project.findByPk(id, {
      include: [
        {
          model: Task,
          as: 'tasks',
          where: {
            deletedAt: null,
          },
          required: false,
          include: [
            {
              model: Collaborator,
              as: 'collaborators',
              through: {
                attributes: [],
              },
              required: false,
            },
          ],
        },
      ],
    });

    if (!findProjectById) {
      return { status: 404, json: { message: this.projectNotFound } };
    }

    if (findProjectById.deletedAt) {
      return { status: 400, json: { message: this.projectAlreadyDeleted } };
    }

    return { status: 200, json: findProjectById };
  };
}
