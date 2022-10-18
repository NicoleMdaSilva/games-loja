import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaController } from "./controllers/categoria.controller";
import { Categoria } from "./entities/categoria.entity";
import { categoriaService } from "./services/categoria.service";


@Module({
    controllers: [categoriaController],
    exports: [TypeOrmModule],
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [categoriaService]
})
export class categoriaModule {}