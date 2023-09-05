import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NaService } from './na.service';
import { Na } from './entities/na.entity';
import { CreateNaInput } from './dto/create-na.input';
import { UpdateNaInput } from './dto/update-na.input';

@Resolver(() => Na)
export class NaResolver {
  constructor(private readonly naService: NaService) {}

  @Query(() => [Na])
  getAllNa() {
    return this.naService.getAllNa();
  }

  @Query(() => Na)
  getNaById(@Args('id', { type: () => Int }) id: number) {
    return this.naService.getNaById(id);
  }

  @Mutation(() => Na)
  createNa(
    @Args('createNaInput') createNaInput: CreateNaInput,
  ) {
    return this.naService.createNa(createNaInput);
  }

  @Mutation(() => Na)
  updateNaById(
    @Args('updateNaInput') updateNaInput: UpdateNaInput,
  ) {
    return this.naService.updateNaById(updateNaInput);
  }

  @Mutation(() => Na)
  deleteNaById(
    @Args('updateNaInput') updateNaInput: UpdateNaInput,
  ) {
    return this.naService.deleteNaById(updateNaInput);
  }
}
