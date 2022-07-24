import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'db.sqlite'),
      autoLoadModels: true,
      models: [Order],
    }),
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
