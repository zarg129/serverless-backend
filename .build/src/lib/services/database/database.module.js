"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_1 = require("../../utils/utils");
const route_entity_1 = require("./entities/route.entity");
const transport_entity_1 = require("./entities/transport.entity");
const database_service_1 = require("./database.service");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: (0, utils_1.getEnvVariable)('DATABASE_HOST'),
                port: parseInt((0, utils_1.getEnvVariable)('DATABASE_PORT')),
                database: (0, utils_1.getEnvVariable)('DATABASE_NAME'),
                username: (0, utils_1.getEnvVariable)('DATABASE_USER'),
                password: (0, utils_1.getEnvVariable)('DATABASE_PASSWORD'),
                entities: [route_entity_1.RouteEntity, transport_entity_1.TransportEntity],
                migrations: [`${__dirname}/../../../migrations/**/*.js`],
                synchronize: false,
                logging: false,
                retryAttempts: 10,
                autoLoadEntities: true,
                retryDelay: 3500,
                migrationsRun: true,
            }),
        ],
        providers: [database_service_1.DatabaseService],
        exports: [database_service_1.DatabaseService],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map