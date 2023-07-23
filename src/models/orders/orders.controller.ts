import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { AuthGuard, AuthRequest } from 'src/common/guards/auth.guard';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'status',
      'total',
      'address_id',
      'subtotal',
      'delivery_fee',
      'customization_fee',
      'order_items',
      'payment_method',
      'card_number',
      'card_validity',
      'card_cvv',
      'card_holder_name',
      'installments',
    ]),
  )
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.create(createOrderDto);
  }

  @Get()
  @UseGuards(AdminGuard)
  async findAll(
    @Param('page') page: string,
    @Param('page_size') page_size: string,
  ) {
    return await this.ordersService.findAll(+page, +page_size);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ordersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'status',
      'total',
      'address_id',
      'subtotal',
      'delivery_fee',
      'customization_fee',
      'order_items',
      'payment_method',
    ]),
  )
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(+id);
  }

  @Patch(':id/cancel')
  @UseGuards(AuthGuard)
  async cancel(@Param('id') id: string, @Request() request: AuthRequest) {
    return await this.ordersService.cancel(+id, request.user_id);
  }
}
