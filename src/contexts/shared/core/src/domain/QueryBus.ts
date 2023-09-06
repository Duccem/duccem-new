import { Query } from './Query';

export interface QueryBus {
  ask(query: Query): Promise<any>;
}
