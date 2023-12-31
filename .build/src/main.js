"use strict";
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
exports.getValidationPipe = exports.handler = void 0;
const aws_serverless_express_1 = require("aws-serverless-express");
const middleware_1 = require("aws-serverless-express/middleware");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const express = require('express');
const binaryMimeTypes = [];
let cachedServer;
function bootstrapServer() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!cachedServer) {
            const expressApp = express();
            const nestApp = yield core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
            nestApp.enableCors({ origin: '*' });
            nestApp.use((0, middleware_1.eventContext)());
            yield nestApp.init();
            cachedServer = (0, aws_serverless_express_1.createServer)(expressApp, undefined, binaryMimeTypes);
        }
        return cachedServer;
    });
}
const handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    cachedServer = yield bootstrapServer();
    return (0, aws_serverless_express_1.proxy)(cachedServer, event, context, 'PROMISE').promise;
});
exports.handler = handler;
bootstrapServer();
function getValidationPipe() {
    return new common_1.ValidationPipe();
}
exports.getValidationPipe = getValidationPipe;
//# sourceMappingURL=main.js.map