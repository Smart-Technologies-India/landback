import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Agree, ScSt, TypeOfNA, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

registerEnumType(ScSt, {
  name: 'ScSt',
});
registerEnumType(TypeOfNA, {
  name: 'TypeOfNA',
});
registerEnumType(Agree, {
  name: 'Agree',
});

@InputType()
export class CreateNaInput {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => ScSt, { nullable: true })
  scst: ScSt;

  @IsOptional()
  @Field(() => String, { nullable: true })
  occupation: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  govt_employee: string;

  @IsNotEmpty()
  @Field(() => Int)
  village_id: number;

  @IsNotEmpty()
  @Field(() => String)
  survey_no: string;

  @IsNotEmpty()
  @Field(() => String)
  sub_division: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  land_use: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  land_situate: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  electric: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  road_access: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  road_adjoin: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  na_reason: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  addition_land: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  past_appln_reject: string;

  @IsNotEmpty()
  @Field(() => String)
  agri_evidence_url: string;

  @IsNotEmpty()
  @Field(() => String)
  govt_evidence_url: string;

  @IsOptional()
  @Field(() => TypeOfNA, { nullable: true })
  land_purpose: TypeOfNA;

  @IsNotEmpty()
  @Field(() => String)
  land_site_plan_url: string;

  @IsNotEmpty()
  @Field(() => String)
  nakel_url_1_14: string;

  @IsNotEmpty()
  @Field(() => String)
  nakel_rr_14: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  remarks: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  signature_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
