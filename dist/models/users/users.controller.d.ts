import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findAll(name: string): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        created_at: Date;
        updated_at: Date;
        id: number;
        email: string;
        is_admin: boolean;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        created_at: Date;
        updated_at: Date;
        id: number;
        email: string;
        is_admin: boolean;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").User>;
}
