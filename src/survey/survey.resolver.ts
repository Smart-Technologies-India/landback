import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SurveyService } from './survey.service';
import { Survey } from './entities/survey.entity';
import { CreateSurveyInput } from './dto/create-survey.input';
import { UpdateSurveyInput } from './dto/update-survey.input';
import { SearchSurveyInput } from './dto/search-survey.input';

@Resolver(() => Survey)
export class SurveyResolver {
  constructor(private readonly surveyService: SurveyService) {}

  @Query(() => [Survey])
  getAllSurvey() {
    return this.surveyService.getAllSurvey();
  }

  @Query(() => Survey)
  getAllSurveyById(@Args('id', { type: () => Int }) id: number) {
    return this.surveyService.getAllSurveyById(id);
  }

  @Query(() => [Survey])
  getSurveyNumber(
    @Args('searchSurveyInput') searchSurveyInput: SearchSurveyInput,
  ) {
    return this.surveyService.getSurveyNumber(searchSurveyInput);
  }

  @Query(() => [Survey])
  getSubDivision(
    @Args('searchSurveyInput') searchSurveyInput: SearchSurveyInput,
  ) {
    return this.surveyService.getSubDivision(searchSurveyInput);
  }
}
