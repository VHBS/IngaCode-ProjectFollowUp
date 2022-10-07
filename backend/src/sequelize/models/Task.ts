import { DataTypes, Model } from 'sequelize';
import db from '.';
import ITask from './interfaces/ITask';
import Project from './Project';

class Task extends Model implements ITask {
  private _id: string;

  private _name: string;

  private _description: string;

  private _projectId: string;

  private _createdAt: Date;

  private _updatedAt: Date;

  private _deletedAt?: Date;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get projectId() {
    return this._projectId;
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

Task.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    projectId: {
      allowNull: false,
      type: DataTypes.UUID,
      field: 'project_id',
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
    modelName: 'Task',
    tableName: 'Tasks',
  },
);

Task.belongsTo(Project, { foreignKey: 'projectId' });

export default Task;
