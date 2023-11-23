import {Model, Modifiers} from "objection";

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

  async findByIdWithJoin(id: string, includes: string[]): Promise<T | null> {
    const result = await this.model.query().findById(id).withGraphFetched(`[${includes}]`);
    return result as T | null;
  }

  async find(criteria: Record<string, any>): Promise<T | null> {
    const result = await this.model.query().where(criteria).first();
    return result as T | null;
  }

  async findWithJoin(criteria: Record<string, any>, includes: string[], modifiers: Modifiers = {}): Promise<T | null> {
    const result = await this.model.query().where(criteria).withGraphFetched(`[${includes}]`).first().modifiers(modifiers);
    return result as T | null;
  }

  async findOr(criteria: Record<string, any>, orCriteria: Record<string, any>): Promise<T | null> {
    const result = await this.model.query().where(criteria).orWhere(orCriteria).first();
    return result as T |null;
  }

  async findOrWithJoin(criteria: Record<string, any>, orCriteria: Record<string, any>, includes: string[]): Promise<T | null> {
    const result = await this.model.query().where(criteria).orWhere(orCriteria).withGraphFetched(`[${includes}]`).first();
    return result as T |null;
  }

  async findAll(): Promise<T[]> {
    const results = await this.model.query();
    return results as T[];
  }

  async findAllWithJoin(includes: string[], modifiers: Modifiers = {}): Promise<T[]> {
    const results = await this.model.query().withGraphFetched(`[${includes}]`).modifiers(modifiers);
    return results as T[];
  }

  async findAllWithCriteria(criteria: Record<string, any>): Promise<T[]> {
    const results = await this.model.query().where(criteria).select();
    return results as T[];
  }

  async findAllWithCriteriaAndJoin(criteria: Record<string, any>, includes: string[], modifiers: Modifiers = {}): Promise<T[]> {
    let result = await this.model.query().where(criteria).withGraphFetched(`[${includes}]`).modifiers(modifiers);
    return result as T[];
  }

  async update(id: string, entity: T): Promise<T> {
    const save = await this.model.query().patchAndFetchById(id, entity);
    return save as T;
  }

  async delete(id: string): Promise<void> {
    await this.model.query().deleteById(id);
  }
}
