import { MongoClient } from 'mongodb';
import { DomainEvent } from '../../domain/DomainEvent';
import { DomainEventDeserializer } from './DomainEventDeserializer';
export declare class DomainEventFailOverPublisher {
    private connection;
    private deserializer?;
    static collectionName: string;
    constructor(connection: MongoClient);
    private get collection();
    setDeserializer(deserializer: DomainEventDeserializer): void;
    publish(event: DomainEvent, published: boolean): Promise<void>;
    consume(): Promise<Array<DomainEvent>>;
}
//# sourceMappingURL=DomainEventFailOverPublisher.d.ts.map