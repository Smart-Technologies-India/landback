import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@ObjectType()
export class Survey {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  villageId: number;

  @Field(() => String)
  survey_no: string;

  @Field(() => String, { nullable: true })
  sub_division: string;

  @Field(() => String)
  owner_name: string;

  @Field(() => String)
  area: string;

  @Field(() => String)
  zone: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
