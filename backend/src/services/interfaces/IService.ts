export interface IService<T> {
  findAll: () => Promise<T>;
  delete: (id: string) => Promise<T>;
  findOne: (id: string) => Promise<T>;
}
