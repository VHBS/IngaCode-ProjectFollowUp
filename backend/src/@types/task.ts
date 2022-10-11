import ITask from '../sequelize/models/interfaces/ITask';

export type InputTaskType = {
  name: string;
  description: string;
  projectId: string;
};

export type TaskType = ITask | InputTaskType;
