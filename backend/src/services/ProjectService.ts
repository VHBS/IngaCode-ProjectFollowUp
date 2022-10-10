import { InputProjectType } from '../@types/project';
import { ProjectServiceType } from '../@types/projectService';
import Project from '../sequelize/models/Project';
import { IProjectService } from './interfaces/IProjectService';

export default class ProjectService implements IProjectService<ProjectServiceType> {
  public findAll = async (): Promise<ProjectServiceType> => {
    const allProjects = await Project.findAll();
    return { status: 200, json: allProjects };
  };

  public create = async (entity: InputProjectType): Promise<ProjectServiceType> => {
    const newProject = await Project.create(entity);
    return { status: 200, json: newProject };
  };

  public update = async (id: string, entity: InputProjectType): Promise<ProjectServiceType> => {
    const { name } = entity;
    const findProjectById = await Project.findByPk(id);

    if (!findProjectById) {
      return { status: 404, json: { message: 'Project not found!' } };
    }

    await findProjectById.update({
      name,
      updatedAt: new Date(),
    });
    return { status: 200, json: findProjectById };
  };
}
