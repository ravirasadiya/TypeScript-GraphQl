import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, BaseEntity } from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Product extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    name!: String;

    @Field(() => Int)
    @Column("int", { default: 0 })
    quantity!: number;

    @Field(() => String)
    @CreateDateColumn({ type: "timestamp" })
    created_at!: string;


}