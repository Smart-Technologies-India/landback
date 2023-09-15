import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, Status, ScSt } from '@prisma/client';

@ObjectType()
export class Sale {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId: number;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => ScSt, { nullable: true })
  scst: ScSt;

  @Field(() => String, { nullable: true })
  occupation: string;

  @Field(() => String, { nullable: true })
  govt_employee: string;

  @Field(() => Int)
  village_id: number;

  @Field(() => String)
  survey_no: string;

  @Field(() => String)
  sub_division: string;

  @Field(() => String, { nullable: true })
  land_use: string;

  @Field(() => String, { nullable: true })
  land_situate: string;

  @Field(() => String, { nullable: true })
  electric: string;

  @Field(() => String, { nullable: true })
  road_access: string;

  @Field(() => String, { nullable: true })
  land_acq: string;

  @Field(() => String, { nullable: true })
  sale_reason: string;

  @Field(() => String, { nullable: true })
  name_purchaser: string;

  @Field(() => String, { nullable: true })
  address_purchaser: string;

  @Field(() => String, { nullable: true })
  mobile_purchaser: string;

  @Field(() => String, { nullable: true })
  addition_land: string;

  @Field(() => String, { nullable: true })
  past_appln_reject: string;

  @Field(() => String)
  agri_evidence_url: string;

  @Field(() => String)
  govt_evidence_url: string;

  @Field(() => String)
  land_site_plan_url: string;

  @Field(() => String)
  nakel_url_1_14: string;

  @Field(() => String, { nullable: true })
  remarks: string;

  @Field(() => String, { nullable: true })
  signature_url: string;

  @Field(() => String, { nullable: true })
  rejection_reason: string;

  @Field(() => String, { nullable: true })
  certificate_id: string;

  @Field(() => Date, { nullable: true })
  certificate_date: Date;

  @Field(() => String, { nullable: true })
  certificate_url: string;

  @Field(() => String, { nullable: true })
  comments_dept: string;

  @Field(() => String, { nullable: true })
  condition_to_follow: string;

  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @Field(() => Status, { nullable: true })
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
