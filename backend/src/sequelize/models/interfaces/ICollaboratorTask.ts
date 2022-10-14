export default interface ICollaboratorTask {
  id: string;
  collaboratorId: string;
  taskId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
