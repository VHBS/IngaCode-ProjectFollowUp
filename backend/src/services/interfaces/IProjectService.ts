import { InputProjectType, ProjectType } from '../../@types/project';
import { IService } from './IService';

export interface IProjectService<T> extends IService<T> {
  create: (entity: InputProjectType) => Promise<T>;
  update: (id: string, entity: ProjectType) => Promise<T>;
}
