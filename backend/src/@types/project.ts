import IProject from '../sequelize/models/interfaces/IProject';

export type InputProjectType = {
  name: string;
};
export type ProjectType = IProject | InputProjectType;
