import { DataTypes, Model } from 'sequelize';
import db from '.';
import ICollaboratorTask from './interfaces/ICollaboratorTask';

class CollaboratorTask extends Model implements ICollaboratorTask {
  declare id: string;

  declare collaboratorId: string;

  declare taskId: string;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare deletedAt?: Date;

  get getData() {
    return {
      id: this.id,
      collaboratorId: this.collaboratorId,
      taskId: this.taskId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

CollaboratorTask.init(
  {
    collaboratorId: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      field: 'collaborator_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Collaborator',
        key: 'id',
      },
    },
    taskId: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      field: 'task_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Task',
        key: 'id',
      },
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
    modelName: 'CollaboratorTask',
    tableName: 'CollaboratorTasks',
  },
);

export default CollaboratorTask;
