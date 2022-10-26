//Criação de classe para o banco de dados
import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_produto'})
export class Produto{
    @PrimaryGeneratedColumn() 
    id: number;

    @IsNotEmpty() 
    @Column({length:100 , nullable: false}) 
    nome: string;

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 7, scale: 2 , nullable: false})
    preco: number;

    @IsNotEmpty()
    @Column({nullable:false})
    qtd: number;

    @UpdateDateColumn()
    data: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto,{
        onDelete: 'CASCADE'
    })
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: 'CASCADE'
    })
    usuario: Usuario;
}