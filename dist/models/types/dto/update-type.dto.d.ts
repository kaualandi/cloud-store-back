import { CreateTypeDto } from './create-type.dto';
declare const UpdateTypeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTypeDto>>;
export declare class UpdateTypeDto extends UpdateTypeDto_base {
    name: string;
    price: number;
    product_id: number;
}
export {};
