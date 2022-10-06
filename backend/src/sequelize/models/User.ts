import { DataTypes, Model } from 'sequelize';
import db from '.';
import IUser from './interfaces/IUser';

class User extends Model implements IUser {
  private _id: string;

  private _userName: string;

  private _password: string;

  private _createdAt: Date;

  private _updatedAt: Date;

  private _deletedAt?: Date;

  get id() {
    return this._id;
  }

  get userName() {
    return this._userName;
  }

  get password() {
    return this._password;
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

User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userName: {
      type: DataTypes.STRING(250),
      field: 'user_name',
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(512),
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
    modelName: 'User',
    tableName: 'Users',
  },
);

export default User;
