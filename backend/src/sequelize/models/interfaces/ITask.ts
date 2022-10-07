export default interface ITask {
  id: string;
  name: string;
  description: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
