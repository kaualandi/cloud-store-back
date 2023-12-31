import { PrismaService } from 'src/modules/prisma';
export declare class HomeService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    config(): Promise<{
        tags: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            icon: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }, unknown, never> & {})[];
        articles: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            image: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }, unknown, never> & {})[];
        banners: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            image: string;
            created_at: Date;
            updated_at: Date;
            config_id: number;
        }, unknown, never> & {})[];
        _count: {
            tags: number;
            banners: number;
            articles: number;
        };
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        instagram: string;
        facebook: string;
        twitter: string;
        whatsapp: string;
        tiktok: string;
        email: string;
        phone: string;
        cnpj: string;
        customization_fee: number;
        delivery_fee: number;
        free_shipping: boolean;
        installment_limit: number;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
    teamsSellers(): Promise<{
        teams: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            url: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
        products: ({
            team: import("@prisma/client/runtime/library").GetResult<{
                id: number;
                name: string;
                url: string;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {};
            images: (import("@prisma/client/runtime/library").GetResult<{
                id: number;
                product_id: number;
                url: string;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
        } & import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            description: string;
            base_price: number;
            trending: boolean;
            discount: number;
            team_id: number;
            sold: number;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
    }>;
    releases(): Promise<({
        team: import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string;
            url: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
        images: (import("@prisma/client/runtime/library").GetResult<{
            id: number;
            product_id: number;
            url: string;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
    } & import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        description: string;
        base_price: number;
        trending: boolean;
        discount: number;
        team_id: number;
        sold: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {})[]>;
}
