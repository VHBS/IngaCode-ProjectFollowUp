import ICollaborator from './collaborator';
import IProject from './project';

type ITask = {
  id: string;
  name: string;
  description: string;
  projectId: string;
  project?: IProject;
  collaborators?: ICollaborator[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export default ITask;
