import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Produto } from "./entities/produto.entity"; 
import { ProdutoService } from "./services/produto.service";
import { ProdutoControler } from "./controllers/produto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoControler],
    exports: [TypeOrmModule]
})
export class ProdutoModule{}