import { Module } from '@nestjs/common';
import { GiftService } from './giftpermission.service';
import { GiftResolver } from './giftpermission.resolver';

@Module({
  providers: [GiftResolver, GiftService]
})
export class GiftModule {}
