export interface ICollaboratorService<T> {
  findAll: () => Promise<T>;
}
