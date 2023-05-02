import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto } from './dto/change-password';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(createAuthDto: SignInDto): Promise<any>;
    getMe(id: string): Promise<{
        name: string;
        created_at: Date;
        updated_at: Date;
        id: number;
        email: string;
        is_admin: boolean;
    }>;
    changePassword(id: string, changePasswordDto: ChangePasswordDto): Promise<void>;
}
