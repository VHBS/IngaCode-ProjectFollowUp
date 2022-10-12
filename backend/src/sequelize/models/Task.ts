import { DataTypes, Model } from 'sequelize';
import db from '.';
import ITask from './interfaces/ITask';

class Task extends Model implements ITask {
  declare id: string;

  declare name: string;

  declare description: string;

  declare projectId: string;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare deletedAt?: Date;

  get getData() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      projectId: this.projectId,
      createdAt: this.createdAt,
      deletedAt: this.updatedAt,
    };
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

export default Task;
