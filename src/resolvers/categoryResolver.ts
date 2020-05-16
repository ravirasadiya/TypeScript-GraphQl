import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Field,
  InputType,
  Int,
  ID,
} from "type-graphql";
import { Category } from "../entity/Category";

@InputType({ description: "New Category Data" })
class AddCategoryInput implements Partial<Category> {

  @Field()
  name!: string;

  @Field({ defaultValue: null })
  type!: string;

  @Field({ nullable: true })
  icon!: string;

  @Field({ nullable: true })
  slug!: string;


  @Field({ nullable: true })
  parentId!: string;
}

@Resolver()
export class CategoryResolver {


  @Mutation(() => Category, { description: "Create Category" })
  async createCategory(
    @Arg("category") category: AddCategoryInput
  ): Promise<Category> {
    const newCategory = Category.create(category);
    return await newCategory.save();
  }

}
