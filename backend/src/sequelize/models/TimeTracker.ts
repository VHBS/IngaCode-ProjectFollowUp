import { DataTypes, Model } from 'sequelize';
import db from '.';
import Collaborator from './Collaborator';
import ITimeTracker from './interfaces/ITimeTracker';
import Task from './Task';

class TimeTracker extends Model implements ITimeTracker {
  private _id: string;

  private _startDate: Date;

  private _endDate: Date;

  private _timeZoneId: string;

  private _taskId: string;

  private _collaboratorId: string;

  private _createdAt: Date;

  private _updatedAt: Date;

  private _deletedAt?: Date;

  get id() {
    return this._id;
  }

  get startDate() {
    return this._startDate;
  }

  get endDate() {
    return this._endDate;
  }

  get timeZoneId() {
    return this._timeZoneId;
  }

  get taskId() {
    return this._taskId;
  }

  get collaboratorId() {
    return this._collaboratorId;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get deletedAt() {
    return this._deletedAt;
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
