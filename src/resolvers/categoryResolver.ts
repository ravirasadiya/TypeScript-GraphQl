import { Resolver, Query, Mutation, Arg, Field, InputType, Int, ID, registerEnumType } from 'type-graphql'
import { Category } from '../entity/Category';
import { TaskStateEnum } from "../entity/const";


@InputType()
class CategoryCreateInput {

    @Field({ nullable: true })
    parent_id?: number;

    @Field()
    name!: string;

    @Field({ nullable: true })
    slug?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    picture?: string;

    @Field({ nullable: true })
    icon_class?: string;

    @Field()
    type?: TaskStateEnum;

    @Field({ nullable: true })
    active?: number;
}

@Resolver()
export class CategoryResolver {

    @Mutation(() => Category)
    async  createCategory(
        @Arg("variables", type => CategoryCreateInput) variables: CategoryCreateInput
    ) {

        const newCategory = Category.create(variables)
        return await newCategory.save();
    }


}