## How to use

### MyBotClass.ts

```ts
/* Example */
class MyBot {

    commands: Map<string, CommandClass>;

    async connect () {
        await this.init();
        return super.connect();//@lil_macrock22/eris-sharder use .connect() to start the bot.
    }

    async init(): Promise<true> {
        await this.loadEvents();
        await this.loadCommands();
        await this.loadImages();
        this.commands = new Map();
        return true;
    }

};

export default MyBot;
/* Example */
```

### index.ts

```ts
import MyBot from './MyBotClass';
import dotenv from 'dotenv';
import * as sharder from '@lil_marcrock22/eris-sharder';//npm i https://github.com/MARCROCK22/eris-sharder
import eris from 'eris-pluris';//or import eris from 'eris';
dotenv.config();//Optional, you know.
const { Base } = sharder;

class Sharder extends Base {

    constructor(client: { bot: MyBot; clusterID: number; ipc: unknown }) {
        super(client);
    }
    async launch(): Promise<boolean> {
        console.log(`Shards loaded. :thumbsup:`)
        return true;
    }

}

export default Sharder;
```

### shard.ts
```ts
import * as Sharder from '@lil_marcrock22/eris-sharder';
import dotenv from 'dotenv';
import MyBot from './MyBotClass';
dotenv.config();
const token = 'WebhookToken';
const id = 'WebhookID';

new Sharder.Master(process.env.DISCORD_TOKEN, `./dist/index.js`, {
    name: 'name of the bot, idk',
    clientOptions: {//eris ClientOptions
        allowedMentions: {
            everyone: false,
            roles: [],
            users: [],
            repliedUser: true
        },
        defaultImageFormat: 'png',
        defaultImageSize: 2048,
        intents: 1701,
        maxShards: 'auto'
    },
    webhooks: {//Look the image
        cluster: { id, token },
        shard: { id, token }
    },
    debug: false//debug (?)
}, MyBot);//put your custom class o Eris.Client
```
![Image jsjs](https://cdn.discordapp.com/attachments/842090973311270914/842090980626923600/unknown.png)

# dir
```md
## ./Proyect
    # src
        > MyBotClass.ts
        > index.ts
        > shard.ts
    # dist
        > MyBotClass.js
        > index.js
        > shard.js
```

Also see https://github.com/discordware/eris-sharder