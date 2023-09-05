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
exports.RoutesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const route_entity_js_1 = require("../../lib/services/database/entities/route.entity.js");
const database_service_1 = require("../../lib/services/database/database.service");
let RoutesService = class RoutesService {
    constructor(routeRepository, databaseService) {
        this.routeRepository = routeRepository;
        this.databaseService = databaseService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield this.databaseService.find(route_entity_js_1.RouteEntity));
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    addRoute(route) {
        return __awaiter(this, void 0, void 0, function* () {
            const routeEntity = new route_entity_js_1.RouteEntity();
            routeEntity.departureCity = route.departureCity;
            routeEntity.destinationCity = route.destinationCity;
            routeEntity.distance = route.distance;
            routeEntity.departureDate = route.departureDate;
            routeEntity.executionDate = route.executionDate;
            routeEntity.requiredTransportType = route.requiredTransportType;
            routeEntity.expectedRevenue = route.expectedRevenue;
            routeEntity.transportId = route.transportId ? route.transportId : null;
            routeEntity.status = route.status;
            yield this.databaseService.insert(route_entity_js_1.RouteEntity, routeEntity);
        });
    }
    deleteRoute(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.databaseService.delete(route_entity_js_1.RouteEntity, uuid);
        });
    }
    updateRoute(uuid, route) {
        return __awaiter(this, void 0, void 0, function* () {
            const routeEntity = new route_entity_js_1.RouteEntity();
            routeEntity.departureCity = route.departureCity;
            routeEntity.destinationCity = route.destinationCity;
            routeEntity.distance = route.distance;
            routeEntity.departureDate = route.departureDate;
            routeEntity.executionDate = route.executionDate;
            routeEntity.requiredTransportType = route.requiredTransportType;
            routeEntity.expectedRevenue = route.expectedRevenue;
            routeEntity.transportId = route.transportId ? route.transportId : null;
            routeEntity.status = route.status;
            if (!validateEmptyObject(route)) {
                yield this.databaseService.update(route_entity_js_1.RouteEntity, uuid, routeEntity);
            }
        });
    }
};
RoutesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(route_entity_js_1.RouteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        database_service_1.DatabaseService])
], RoutesService);
exports.RoutesService = RoutesService;
function validateEmptyObject(object) {
    return Object.keys(object).length === 0;
}
//# sourceMappingURL=routes.service.js.map