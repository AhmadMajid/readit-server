"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = () => {
    const orm = yield core_1.MikroORM.init(mikro_orm_config_1.default);
    const post = orm.em.create(Post, { title: 'my first post' });
    yield orm.em.persistAndFlush(post);
    console.log('----------sql 2------------');
    yield orm.em.nativeInsert(Post, { title: 'my first post 2' });
};
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map