import { DataTypes, Model } from 'sequelize';
import db from '.';
import Collaborator from './Collaborator';
import ITimeTracker from './interfaces/ITimeTracker';
import Task from './Task';

class TimeTracker extends Model implements ITimeTracker {
  declare id: string;

  declare startDate: Date;

  declare endDate: Date;

  declare timeZoneId: string;

  declare taskId: string;

  declare collaboratorId: string;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare deletedAt?: Date;

  get getData() {
    return {
      id: this.id,
      startDate: this.startDate,
      endDate: this.endDate,
      timeZoneId: this.timeZoneId,
      taskId: this.taskId,
      collaboratorId: this.collaboratorId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

TimeTracker.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'start_date',
    },
    endDate: {
      type: DataTypes.DATE,
      field: 'end_date',
    },
    timeZoneId: {
      allowNull: false,
      type: DataTypes.STRING(200),
      field: 'time_zone_id',
    },
    taskId: {
      type: DataTypes.UUID,
      field: 'task_id',
    },
    collaboratorId: {
      type: DataTypes.UUID,
      field: 'collaborator_id',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'TimeTracker',
    tableName: 'TimeTrackers',
  },
);

TimeTracker.belongsTo(Task, { foreignKey: 'taskId' });
TimeTracker.belongsTo(Collaborator, { foreignKey: 'collaboratorId' });

export default TimeTracker;
