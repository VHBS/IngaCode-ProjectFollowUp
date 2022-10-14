import ICollaboratorTask from '../sequelize/models/interfaces/ICollaboratorTask';

export type InputCollaboratorTaskType = {
  collaboratorId: string;
  taskId: string;
};

export type CollaboratorTaskType = ICollaboratorTask | InputCollaboratorTaskType;
