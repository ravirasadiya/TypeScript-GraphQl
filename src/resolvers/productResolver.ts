import { Resolver, Query, Mutation, Arg, Field, InputType, Int, ID } from 'type-graphql'
import { Product } from '../entity/Product';

@InputType()
class ProductInput {

    @Field(() => String, { nullable: true })
    name!: String
    @Field(() => Int, { nullable: true })
    quantity!: number
}

@InputType()
class ProductUpdateInput {

    @Field()
    name?: string;

    @Field()
    quantity?: number;

}


@Resolver()
export class ProductResolver {

    @Mutation(() => Product)
    async  createProduct(
        @Arg("variables", () => ProductUpdateInput) variables: ProductUpdateInput
    ) {

        const newProduct = Product.create(variables)
        return await newProduct.save();
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg("id", () => Int) id: number) {
        await Product.delete(id)
        return true
    }

    @Mutation(() => Boolean)
    async updateProduct(@Arg("id", () => Int) id: number, @Arg("fields", () => ProductInput) fields: ProductInput) {
        await Product.update({ id }, fields)
        return true;

    }

    @Query(() => [Product])
    async products() {
        return await Product.find()
    }

}