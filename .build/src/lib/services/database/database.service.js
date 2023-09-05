"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DatabaseService = class DatabaseService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    find(target) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = yield this.entityManager.find(target);
                if (!entity.length)
                    return null;
                return entity;
            }
            catch (err) {
                console.error(err);
                throw new Error(err);
            }
        });
    }
    insert(target, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.entityManager.insert(target, entity);
            }
            catch (err) {
                console.error(err);
                throw new Error(err);
            }
        });
    }
    delete(target, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(target, uuid);
                yield this.entityManager.delete(target, {
                    uuid: uuid,
                });
            }
            catch (err) {
                console.error(err);
                throw new Error(err);
            }
        });
    }
    update(target, uuid, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.entityManager.update(target, { uuid: uuid }, entity);
            }
            catch (err) {
                console.error(err);
                throw new Error(err);
            }
        });
    }
};
DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map