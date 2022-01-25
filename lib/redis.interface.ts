import { ModuleMetadata } from '@nestjs/common/interfaces';
import { Redis, RedisOptions } from 'ioredis';
import { Graph } from 'redisgraph.js';

export interface RedisModuleOptions extends RedisOptions {
  name?: string;
  url?: string;
  graphId: string;
  onClientReady?(client: Graph): void;
  // onClientReady?(client: Redis): void;
}

export interface RedisModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (
    ...args: any[]
  ) =>
    | RedisModuleOptions
    | RedisModuleOptions[]
    | Promise<RedisModuleOptions>
    | Promise<RedisModuleOptions[]>;
  inject?: any[];
}
