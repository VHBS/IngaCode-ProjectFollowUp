export default interface ICollaborator {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
