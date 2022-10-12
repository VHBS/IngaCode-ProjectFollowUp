import ITask from './task';

type IProject = {
  id: string;
  name: string;
  tasks?: ITask[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export default IProject;
