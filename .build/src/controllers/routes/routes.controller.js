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
exports.RoutesController = void 0;
const common_1 = require("@nestjs/common");
const routes_service_js_1 = require("./routes.service.js");
const request_1 = require("./request/request");
let RoutesController = class RoutesController {
    constructor(routeService) {
        this.routeService = routeService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.routeService.findAll();
        });
    }
    addRoute(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.routeService.addRoute(body);
            return body;
        });
    }
    deleteRoute(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.routeService.deleteRoute(body.uuid);
            return body;
        });
    }
    updateRoute(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.routeService.updateRoute(body.uuid, body.route);
            return body;
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_1.RoutesAddRouteRequest]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "addRoute", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "deleteRoute", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "updateRoute", null);
RoutesController = __decorate([
    (0, common_1.Controller)('routes'),
    __metadata("design:paramtypes", [routes_service_js_1.RoutesService])
], RoutesController);
exports.RoutesController = RoutesController;
//# sourceMappingURL=routes.controller.js.map