import { InputProjectType, ProjectType } from '../@types/project';
import IProject from '../sequelize/models/interfaces/IProject';
import Project from '../sequelize/models/Project';
import { IService } from './interfaces/IService';

export default class ProjectService implements IService<ProjectType> {
  public findAll = async (): Promise<IProject[]> => {
    const allProjects = await Project.findAll();
    return allProjects;
  };

  public create = async (entity: InputProjectType) => {
    const newProject = await Project.create(entity);
    return newProject;
  };
}
