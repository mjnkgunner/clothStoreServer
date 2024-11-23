import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/webshop', {
      connectionFactory: (connection) => {
        connection.once('open', () => {
          console.log('Connected to MongoDB');
        });
        connection.on('error', (err) => {
          console.error('Error connecting to MongoDB:', err);
        });
        return connection;
      },
    }),
    ProductsModule,
    CategoriesModule,
    UsersModule,
    OrderModule,
  ],
})
export class AppModule {}
