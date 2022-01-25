import { Graph } from 'redisgraph.js';
import { RedisClient } from './redis-client.provider';
export declare class RedisService {
    private readonly redisClient;
    constructor(redisClient: RedisClient);
    getClient(name?: string): Graph;
    getClients(): Map<string, Graph>;
}
