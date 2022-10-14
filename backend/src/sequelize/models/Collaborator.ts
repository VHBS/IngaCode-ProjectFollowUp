import { DataTypes, Model } from 'sequelize';
import db from '.';
import ICollaborator from './interfaces/ICollaborator';
import Task from './Task';

class Collaborator extends Model implements ICollaborator {
  declare id: string;

  declare name: string;

  declare userId: string;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare deletedAt?: Date;

  get getData() {
    return {
      id: this.id,
      name: this.name,
      userId: this.userId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

Collaborator.init(
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
    userId: {
      allowNull: false,
      type: DataTypes.UUID,
      unique: true,
      field: 'user_id',
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
    modelName: 'Collaborator',
    tableName: 'Collaborators',
  },
);

Collaborator.belongsToMany(Task, {
  through: 'CollaboratorTasks',
  as: 'tasks',
  foreignKey: 'collaboratorId',
});

Task.belongsToMany(Collaborator, {
  through: 'CollaboratorTasks',
  as: 'collaborators',
  foreignKey: 'taskId',
});

export default Collaborator;
