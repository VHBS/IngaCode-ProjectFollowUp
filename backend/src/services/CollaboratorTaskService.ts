import { InputCollaboratorTaskType } from '../@types/collaboratorTask';
import { CollaboratorTaskServiceType } from '../@types/collaboratorTaskService';
import CollaboratorTask from '../sequelize/models/CollaboratorTask';
import { ICollaboratorTaskService } from './interfaces/ICollaboratorTaskService';

export default class CollaboratorTaskService implements ICollaboratorTaskService<CollaboratorTaskServiceType> {
  public create = async (entity: InputCollaboratorTaskType): Promise<CollaboratorTaskServiceType> => {
    const collaboratorTask = await CollaboratorTask.create(entity);
    return { status: 200, json: collaboratorTask };
  };
}
