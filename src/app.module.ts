import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { categoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { Usuario } from './usuario/entities/usuario.entities';
import { UsuarioModule } from './usuario/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_loja',
      entities: [Produto, Categoria, Usuario],
      synchronize: true
    }),
    ProdutoModule, categoriaModule, UsuarioModule, AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
