import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import { Field, Int, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column()
  type!: string;

  @Field(() => String)
  @Column()
  icon!: string;

  @Field(() => String)
  @Column()
  slug!: string;

  @Field(() => Int)
  @Column("int", { default: 0 })
  number_of_product!: number;

  @Field(() => String)
  @Column()
  parentId!: string;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  creation_date!: string;
}
