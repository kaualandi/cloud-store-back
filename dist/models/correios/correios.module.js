"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreiosModule = void 0;
const common_1 = require("@nestjs/common");
const correios_service_1 = require("./correios.service");
const correios_controller_1 = require("./correios.controller");
const axios_1 = require("@nestjs/axios");
const prisma_1 = require("../../modules/prisma");
let CorreiosModule = class CorreiosModule {
};
CorreiosModule = __decorate([
    (0, common_1.Module)({
        controllers: [correios_controller_1.CorreiosController],
        imports: [axios_1.HttpModule, prisma_1.PrismaModule],
        providers: [correios_service_1.CorreiosService],
    })
], CorreiosModule);
exports.CorreiosModule = CorreiosModule;
//# sourceMappingURL=correios.module.js.map