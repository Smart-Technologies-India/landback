import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNaInput } from './dto/create-na.input';
import { UpdateNaInput } from './dto/update-na.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NaService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllNa() {
    const na = await this.prisma.na_form.findMany({
      where: { deletedAt: null },
    });
    if (na.length == 0) throw new BadRequestException('There is no Na file.');
    return na;
  }

  async getNaById(id: number) {
    const na = await this.prisma.na_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!na) throw new BadRequestException('No Na file exist with this id.');
    return na;
  }

  async createNa(na: CreateNaInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(na)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Na = await this.prisma.na_form.create({
      data: dataToCreate,
    });

    if (!Na) throw new BadRequestException('Unable to create Na File');
    return Na;
  }

  async updateNaById(na: UpdateNaInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(na)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.na_form.findUnique({
      where: { id: na.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Na File with id ${na.id} not found`);
    }

    const updatedNa = this.prisma.na_form.update({
      where: { id: na.id },
      data: dataToUpdate,
    });
    if (!updatedNa) throw new BadRequestException('Unable to update na file.');
    return updatedNa;
  }

  async deleteNaById(na: UpdateNaInput) {
    const existing = await this.prisma.na_form.findUnique({
      where: { id: na.id },
    });

    if (!existing) {
      throw new NotFoundException(`Na with id ${na.id} not found`);
    }

    const deleteNa = this.prisma.na_form.update({
      where: { id: na.id },
      data: { deletedAt: na.deletedAt },
    });

    if (!deleteNa) throw new BadRequestException('Unable to update na file.');
    return deleteNa;
  }
}
