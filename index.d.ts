import Eris from "eris";

interface OPTIONS { }

declare namespace Sharder {

    export class Master {


        constructor(token: string, path: string, options: OPTIONS, CLASS: any);
        CLASS: any;
        shardCount: number;
        firstShardID: number;
        lastShardID: number;
        clusterCount: number;
        clusterTimeout: number;
        token: string | false;
        clusters: Map<string | number, any>;
        workers: Map<string | number, any>;
        queue: Map<string | number, any>;
        options: {
            stats: boolean;
            debug: boolean;
        };
        statsInterval: number;
        mainFile: string;
        name: string;
        guildsPerShard: string;
        webhooks: {
            cluster: {
                id: string;
                token: string;
            };
            shard: {
                id: string;
                token: string;
            };
        };
        clientOptions: Eris.ClientOptions;
        callbacks: Map<any, any>;
        stats: boolean;
        isMaster(): boolean;
        startStats(): void;
        executeStats(): void;
        start(clusterID?: number): void;
        private launch(): void;
        chunk(shards: any[], clusterCount: number): void;
        private connectShards(): void;
        private sendWebhook(type: string, embed: any): void;
        printLogo(): void;
        restartCluster(worker: number, code: number): void;
        calculateShards(): Promise<number>;
        fetchInfo(start: any, type: any, value: any): void;
        broadcast(start: any, message: any): void;
        sendTo(cluster: number | string, message: any): void;
    };

    class Base {
        constructor(setup: { bot: any, clusterID: number; ipc: any });
        restartCluster(clusterID: number): void;
    };

}

export = Sharder;