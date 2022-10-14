import { CollaboratorServiceType } from '../@types/collaboratorService';
import Collaborator from '../sequelize/models/Collaborator';
import { ICollaboratorService } from './interfaces/ICollaboratorService';

export default class CollaboratorService implements ICollaboratorService<CollaboratorServiceType> {
  public findAll = async (): Promise<CollaboratorServiceType> => {
    const allCollaborator = await Collaborator.findAll();
    return { status: 200, json: allCollaborator };
  };
}
