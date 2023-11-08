import { Model } from "objection";

export class Repository<T extends Model> {
  constructor(private model: typeof Model) {}

  async save(entity: Partial<T>): Promise<T> {
    const result = await this.model.query().insert(entity);
    return result as T;
  }

  async findById(id: string): Promise<T | null> {
    const result = await this.model.query().findById(id);
    return result as T | null;
  }

  async find(criteria: Record<string, any>): Promise<T | null> {
    const result = await this.model.query().where(criteria).first();
    return result as T | null;
  }

  async findAll(): Promise<T[]> {
    const results = await this.model.query();
    return results as T[];
  }

  async findAllWithCriteria(criteria: Record<string, any>): Promise<T[]> {
    const results = await this.model.query().where(criteria).select();
    return results as T[];
  }

  async update(id: string, entity: T): Promise<T> {
    const save = await this.model.query().patchAndFetchById(id, entity);
    return save as T;
  }

  async delete(id: string): Promise<void> {
    await this.model.query().deleteById(id);
  }
}
