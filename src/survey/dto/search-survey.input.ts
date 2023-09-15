import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class SearchSurveyInput {
  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  villageId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  survey_no: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  sub_division: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  owner_name: string;
}
