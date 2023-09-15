import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GiftService } from './giftpermission.service';
import { Gift } from './entities/giftpermission.entity';
import { CreateGiftInput } from './dto/create-giftpermission.input';
import { UpdateGiftInput } from './dto/update-giftpermission.input';

@Resolver(() => Gift)
export class GiftResolver {
  constructor(private readonly giftpermissionService: GiftService) {}

  @Query(() => [Gift])
  getAllGift() {
    return this.giftpermissionService.getAllGift();
  }

  @Query(() => Gift)
  getGiftById(@Args('id', { type: () => Int }) id: number) {
    return this.giftpermissionService.getGiftById(id);
  }

  @Mutation(() => Gift)
  createGift(
    @Args('createGiftInput') createGiftInput: CreateGiftInput,
  ) {
    return this.giftpermissionService.createGift(createGiftInput);
  }

  @Mutation(() => Gift)
  updateGiftById(
    @Args('updateGiftInput') updateGiftInput: UpdateGiftInput,
  ) {
    return this.giftpermissionService.updateGiftById(updateGiftInput);
  }

  @Mutation(() => Gift)
  deleteGiftById(
    @Args('updateGiftInput') updateGiftInput: UpdateGiftInput,
  ) {
    return this.giftpermissionService.deleteGiftById(updateGiftInput);
  }
}
