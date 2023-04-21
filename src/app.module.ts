import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './models/projects/projects.module';
import { ProductsModule } from './models/products/products.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Global()
@Module({
  imports: [ProjectsModule, ProductsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
