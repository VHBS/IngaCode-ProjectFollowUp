import { DataTypes, Model } from 'sequelize';
import db from '.';
import ICollaborator from './interfaces/ICollaborator';
import User from './User';

class Collaborator extends Model implements ICollaborator {
  private _id: string;

  private _name: string;

  private _userId: string;

  private _createdAt: Date;

  private _updatedAt: Date;

  private _deletedAt?: Date;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get userId() {
    return this._userId;
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
      // unique: true,
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

Collaborator.belongsTo(User, { foreignKey: 'userId' });

export default Collaborator;
