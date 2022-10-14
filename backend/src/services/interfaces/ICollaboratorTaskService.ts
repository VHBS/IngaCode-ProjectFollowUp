import { InputCollaboratorTaskType } from '../../@types/collaboratorTask';

export interface ICollaboratorTaskService<T> {
  create: (entity: InputCollaboratorTaskType) => Promise<T>;
}
