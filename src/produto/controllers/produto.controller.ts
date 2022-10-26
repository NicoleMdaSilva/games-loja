import { Controller, Get } from "@nestjs/common";
import { Body, Delete, HttpCode, Param, Post, Put, UseGuards } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";


@Controller('/produto')
@UseGuards(JwtAuthGuard)
export class ProdutoControler{
    constructor (private readonly produtoService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.produtoService.findAll(); 
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param('id', ParseIntPipe)
        id: number
    ): Promise<Produto>{
        return this.produtoService.findById(id);
    }

    @Get('/produto/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome: string): Promise<Produto[]>{
        return this.produtoService.findByName(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body()
        produto: Produto
    ): Promise<Produto>{
        return this.produtoService.create(produto); //criar
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        produto: Produto
    ): Promise<Produto>{
        return this.produtoService.update(produto); //atualizar
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id: number
    ){
        return this.produtoService.delete(id);
    }
}