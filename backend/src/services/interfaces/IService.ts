export interface IService<T> {
  findAll: () => Promise<T>;
}
