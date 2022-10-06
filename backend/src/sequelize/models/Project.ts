import { DataTypes, Model } from 'sequelize';
import db from '.';
import IProject from './interfaces/IProject';

class Project extends Model implements IProject {
  private _id: string;

  private _name: string;

  private _createdAt: Date;

  private _updatedAt: Date;

  private _deletedAt?: Date;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
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

Project.init(
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
    modelName: 'Project',
    tableName: 'Projects',
  },
);

export default Project;
