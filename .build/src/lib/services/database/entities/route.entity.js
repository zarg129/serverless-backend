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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteEntity = void 0;
const typeorm_1 = require("typeorm");
let RouteEntity = class RouteEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RouteEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RouteEntity.prototype, "departureCity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RouteEntity.prototype, "destinationCity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RouteEntity.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RouteEntity.prototype, "departureDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RouteEntity.prototype, "executionDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RouteEntity.prototype, "requiredTransportType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RouteEntity.prototype, "expectedRevenue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RouteEntity.prototype, "transportId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RouteEntity.prototype, "status", void 0);
RouteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'routes' })
], RouteEntity);
exports.RouteEntity = RouteEntity;
//# sourceMappingURL=route.entity.js.map