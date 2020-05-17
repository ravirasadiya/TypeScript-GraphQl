import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    BaseEntity,
} from "typeorm";
import { Field, Int, ObjectType, ID } from "type-graphql";
import { TaskStateEnum } from "./const";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id?: number;

    @Field()
    @Column({ nullable: true })
    translation_lang?: string;

    @Field()
    @Column({ nullable: true })
    translation_of?: number;

    @Field()
    @Column({ nullable: true, default: 0 })
    parent_id?: number;

    @Field()
    @Column({ default: '' })
    name!: string;

    @Field()
    @Column({ nullable: true })
    slug?: string;

    @Field()
    @Column({ nullable: true })
    description?: string;

    @Field()
    @Column({ nullable: true })
    picture?: string;

    @Field()
    @Column({ nullable: true })
    icon_class?: string;

    @Field()
    @Column({ nullable: true })
    lft?: number;

    @Field()
    @Column({ nullable: true })
    rgt?: number;

    @Field()
    @Column({ nullable: true })
    depth?: number;

    @Field()
    @Column({ type: "enum", enum: TaskStateEnum, nullable: true, comment: 'Only select this for parent categories', default: TaskStateEnum.Classified })
    type?: TaskStateEnum;

    @Field()
    @Column({ type: 'tinyint', nullable: true, default: 1 })
    active?: number;

}
