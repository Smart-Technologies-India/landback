import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGiftInput } from './dto/create-giftpermission.input';
import { UpdateGiftInput } from './dto/update-giftpermission.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class GiftService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllGift() {
    const gift = await this.prisma.gift_form.findMany({
      where: { deletedAt: null },
    });
    if (gift.length == 0) throw new BadRequestException('There is no gift file.');
    return gift;
  }

  async getGiftById(id: number) {
    const gift = await this.prisma.gift_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!gift) throw new BadRequestException('No Gift file exist with this id.');
    return gift;
  }

  async createGift(gift: CreateGiftInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(gift)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Gift = await this.prisma.gift_form.create({
      data: dataToCreate,
    });

    if (!Gift) throw new BadRequestException('Unable to create Gift File');
    return Gift;
  }

  async updateGiftById(gift: UpdateGiftInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(gift)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.gift_form.findUnique({
      where: { id: gift.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Gift File with id ${gift.id} not found`);
    }

    const updatedGift = this.prisma.gift_form.update({
      where: { id: gift.id },
      data: dataToUpdate,
    });
    if (!updatedGift) throw new BadRequestException('Unable to update gift file.');
    return updatedGift;
  }

  async deleteGiftById(gift: UpdateGiftInput) {
    const existing = await this.prisma.gift_form.findUnique({
      where: { id: gift.id },
    });

    if (!existing) {
      throw new NotFoundException(`Gift with id ${gift.id} not found`);
    }

    const deleteGift = this.prisma.gift_form.update({
      where: { id: gift.id },
      data: { deletedAt: gift.deletedAt },
    });

    if (!deleteGift) throw new BadRequestException('Unable to update Gift file.');
    return deleteGift;
  }
}
