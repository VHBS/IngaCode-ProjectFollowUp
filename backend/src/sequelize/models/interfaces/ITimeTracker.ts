export default interface ITimeTracker {
  id: string;
  startDate: Date;
  endDate: Date;
  timeZoneId: string;
  taskId: string;
  collaboratorId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
