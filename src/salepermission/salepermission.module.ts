import { Module } from '@nestjs/common';
import { SaleService } from './salepermission.service';
import { SaleResolver } from './salepermission.resolver';

@Module({
  providers: [SaleResolver, SaleService]
})
export class SaleModule {}
