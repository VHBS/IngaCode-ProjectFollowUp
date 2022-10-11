import { InputTaskType, TaskType } from '../@types/task';
import { TaskServiceType } from '../@types/taskService';
import Task from '../sequelize/models/Task';
import { ITaskService } from './interfaces/ITaskService';

export default class TaskService implements ITaskService<TaskServiceType> {
  public taskNotFound = 'Task not found!';

  public taskAlreadyDeleted = 'Task has already been deleted!';

  public findAll = async (): Promise<TaskServiceType> => {
    const allTasks = await Task.findAll({
      where: {
        deletedAt: null,
      },
    });

    return { status: 200, json: allTasks };
  };

  public create = async (entity: InputTaskType): Promise<TaskServiceType> => {
    const newTask = await Task.create(entity);
    return { status: 201, json: newTask };
  };

  public update = async (id: string, entity: TaskType): Promise<TaskServiceType> => {
    console.log('service');
    const { name, description, projectId } = entity;
    const findTaskById = await Task.findByPk(id);

    if (!findTaskById) {
      return { status: 404, json: { message: this.taskNotFound } };
    }

    if (findTaskById.deletedAt) {
      return { status: 400, json: { message: this.taskAlreadyDeleted } };
    }

    await findTaskById.update({
      name,
      description,
      projectId,
      updatedAt: new Date(),
    });
    return { status: 200, json: findTaskById };
  };

  public delete = async (id: string): Promise<TaskServiceType> => {
    const findTaskById = await Task.findByPk(id);

    if (!findTaskById) {
      return { status: 404, json: { message: this.taskNotFound } };
    }

    if (findTaskById.deletedAt) {
      return { status: 400, json: { message: this.taskAlreadyDeleted } };
    }

    await findTaskById.update({
      deletedAt: new Date(),
    });

    return { status: 204, json: findTaskById };
  };
}
