import { Module } from '@nestjs/common';
import { NaService } from './na.service';
import { NaResolver } from './na.resolver';

@Module({
  providers: [NaResolver, NaService]
})
export class NaModule {}
