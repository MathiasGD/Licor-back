import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrinksModule } from './drinks/drinks.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EstoquesModule } from './estoques/estoques.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ComposicoesDrinksModule } from './composicoes-drinks/composicoes-drinks.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      // host: 'localhost',
      // port: 5432,
      // username: 'licor_user',
      // password: 'FnZ4VBQ0SHN1lrDNjXbGO4NuZO9qZHtP',
      // database: 'licor_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Somente em desenvolvimento
      ssl: { rejectUnauthorized: false },
    }),
    DrinksModule,
    PedidosModule,
    UsuariosModule,
    EstoquesModule,
    IngredientesModule,
    ComposicoesDrinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
