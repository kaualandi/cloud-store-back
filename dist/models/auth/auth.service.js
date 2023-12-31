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
exports.AuthService = void 0;
const prisma_service_1 = require("./../../modules/prisma/prisma.service");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, prismaService, jwtService) {
        this.usersService = usersService;
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.itemsToCalcRegisterPercent = [
            'name',
            'email',
            'phone',
            'cpf',
            'birth_date',
            'profile_url',
        ];
    }
    async signIn(createAuthDto) {
        const { email, password: pass } = createAuthDto;
        const user = await this.usersService.findOneByEmail(email);
        if ((user === null || user === void 0 ? void 0 : user.password) !== pass) {
            throw new common_1.BadRequestException('E-mail ou senha inválidos');
        }
        const payload = { email: user.email, id: user.id, admin: user.is_admin };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async signUp(createUserDto) {
        const user = await this.usersService.create(createUserDto);
        const payload = { email: user.email, id: user.id, admin: user.is_admin };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    getMe(id) {
        return this.usersService.findOne(parseInt(id));
    }
    async changePassword(id, changePasswordDto) {
        const user = await this.usersService.findOneWithPassword(parseInt(id));
        if (user.password !== changePasswordDto.old_password) {
            throw new common_1.BadRequestException('Senha atual incorreta');
        }
        user.password = changePasswordDto.new_password;
        await this.usersService.update(parseInt(id), user);
    }
    async update(id, updateUserDto) {
        await this.usersService.findOne(parseInt(id));
        await this.usersService.update(parseInt(id), updateUserDto);
        return this.usersService.findOne(parseInt(id));
    }
    async accountResume(id) {
        const user = await this.getMe(id + '');
        const lastOrder = await this.prismaService.order.findFirst({
            where: {
                user_id: id,
            },
            orderBy: {
                created_at: 'desc',
            },
            include: {
                address: true,
            },
        });
        const { percent, text_status: textStatus } = this.calcUserPercent(user);
        return {
            user,
            last_order: lastOrder,
            user_register_percent: percent,
            user_register_text_status: textStatus,
        };
    }
    async accountOrders(id) {
        const orders = await this.prismaService.order.findMany({
            where: {
                user_id: id,
            },
            orderBy: {
                created_at: 'desc',
            },
            include: {
                address: true,
                order_items: true,
            },
        });
        return orders;
    }
    calcUserPercent(user) {
        const quantityValid = this.itemsToCalcRegisterPercent.reduce((acc, curr) => {
            if (user[curr]) {
                acc++;
            }
            return acc;
        }, 0);
        const percent = Math.round((quantityValid / this.itemsToCalcRegisterPercent.length) * 100);
        const textStatus = percent < 20
            ? 'Nada mal!'
            : percent < 60
                ? 'Quase lá!'
                : percent < 100
                    ? 'Falta pouco!'
                    : 'Parabéns!';
        return {
            percent,
            text_status: textStatus,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map