import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

export default = {
        migrations: {
          path: './migrations',
          pattern: /^[\w-]+\d+\.[tj]s$/,
        },
        entities: [Post],
        dbName: 'readit',
        type: 'postgresql',
        debug: !__prod__,
} as Parameters<typeof MikroOrm.init>[0];

