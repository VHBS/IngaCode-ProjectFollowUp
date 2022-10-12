import { DataTypes, Model } from 'sequelize';
import db from '.';
import IProject from './interfaces/IProject';
import ITask from './interfaces/ITask';
import Task from './Task';

class Project extends Model implements IProject {
  declare id: string;

  declare name: string;

  declare tasks: ITask[];

  declare createdAt: Date;

  declare updatedAt: Date;

  declare deletedAt?: Date;

  get getData() {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
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

Project.hasMany(Task, {
  foreignKey: 'projectId',
  as: 'tasks',
});

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  as: 'project',
});

export default Project;
