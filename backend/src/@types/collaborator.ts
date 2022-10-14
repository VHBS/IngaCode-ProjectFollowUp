import ICollaborator from '../sequelize/models/interfaces/ICollaborator';

export type InputCollaboratorType = {
  name: string;
};

export type CollaboratorType = ICollaborator | InputCollaboratorType;
