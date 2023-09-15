import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SaleService } from './salepermission.service';
import { Sale } from './entities/salepermission.entity';
import { CreateSaleInput } from './dto/create-salepermission.input';
import { UpdateSaleInput } from './dto/update-salepermission.input';

@Resolver(() => Sale)
export class SaleResolver {
  constructor(private readonly salepermissionService: SaleService) {}

  @Query(() => [Sale])
  getAllSale() {
    return this.salepermissionService.getAllSale();
  }

  @Query(() => Sale)
  getSaleById(@Args('id', { type: () => Int }) id: number) {
    return this.salepermissionService.getSaleById(id);
  }

  @Mutation(() => Sale)
  createSale(
    @Args('createSaleInput') createSaleInput: CreateSaleInput,
  ) {
    return this.salepermissionService.createSale(createSaleInput);
  }

  @Mutation(() => Sale)
  updateSaleById(
    @Args('updateSaleInput') updateSaleInput: UpdateSaleInput,
  ) {
    return this.salepermissionService.updateSaleById(updateSaleInput);
  }

  @Mutation(() => Sale)
  deleteSaleById(
    @Args('updateSaleInput') updateSaleInput: UpdateSaleInput,
  ) {
    return this.salepermissionService.deleteSaleById(updateSaleInput);
  }
}
