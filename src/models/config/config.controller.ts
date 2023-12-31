import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { RemoveExtraKeysPipe } from 'src/common/pipes/models/remove-extra-keys/remove-extra-keys.pipe';
import { ConfigService } from './config.service';
import { UpdateConfigDto } from './dto/update-config.dto';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  findOne() {
    return this.configService.findOne(1);
  }

  @Patch()
  @UseGuards(AdminGuard)
  @UsePipes(
    new RemoveExtraKeysPipe([
      'instagram',
      'facebook',
      'twitter',
      'whatsapp',
      'tiktok',
      'email',
      'phone',
      'cnpj',
      'customization_fee',
      'delivery_fee',
      'free_shipping',
      'installment_limit',
    ]),
  )
  update(@Body() updateConfigDto: UpdateConfigDto) {
    return this.configService.update(updateConfigDto);
  }
}
