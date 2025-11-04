import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrinksModule } from './drinks/drinks.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PedidoItensModule } from './pedido-itens/pedido-itens.module';
import { EquipesModule } from './equipes/equipes.module';
import { EstoquesModule } from './estoques/estoques.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'licor_user',
      password: 'licorTCC',
      database: 'licor_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Somente em desenvolvimento
    }),
    DrinksModule,
    PedidosModule,
    UsuariosModule,
    PedidoItensModule,
    EquipesModule,
    EstoquesModule,
    IngredientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
