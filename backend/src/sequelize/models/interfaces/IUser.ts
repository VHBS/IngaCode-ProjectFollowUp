export default interface IUser {
  id: string;
  userName: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
