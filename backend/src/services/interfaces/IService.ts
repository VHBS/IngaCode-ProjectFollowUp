export interface IService<T> {
  findAll: () => Promise<T[]>;
  create: (entity: T) => Promise<T>;
}
