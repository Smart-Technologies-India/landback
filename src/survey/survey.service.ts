import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSurveyInput } from './dto/create-survey.input';
import { UpdateSurveyInput } from './dto/update-survey.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchSurveyInput } from './dto/search-survey.input';

@Injectable()
export class SurveyService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllSurvey() {
    const survey = await this.prisma.survey.findMany({
      where: { deletedAt: null },
    });
    if (survey.length == 0)
      throw new BadRequestException('There is no survey.');
    return survey;
  }

  async getAllSurveyById(id: number) {
    const survey = await this.prisma.survey.findFirst({
      where: { id, deletedAt: null },
    });
    if (!survey) throw new BadRequestException('No survey exist with this id.');
    return survey;
  }

  async getSurveyNumber(data: SearchSurveyInput) {
    const survey = await this.prisma.survey.findMany({
      where: {
        villageId: data.villageId,
      },
      distinct: ['survey_no'],
    });
    if (survey.length == 0) throw new NotFoundException(`No survey found`);
    return survey;
  }

  async getSubDivision(data: SearchSurveyInput) {
    const survey = await this.prisma.survey.findMany({
      where: {
        villageId: data.villageId,
        survey_no: data.survey_no,
      },
      // distinct: ['survey_no'],
    });
    if (survey.length == 0)
      throw new NotFoundException(`No sub division found`);
    return survey;
  }
}
