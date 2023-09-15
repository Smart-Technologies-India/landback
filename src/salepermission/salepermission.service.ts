import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSaleInput } from './dto/create-salepermission.input';
import { UpdateSaleInput } from './dto/update-salepermission.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllSale() {
    const sale = await this.prisma.sale_form.findMany({
      where: { deletedAt: null },
    });
    if (sale.length == 0) throw new BadRequestException('There is no sale file.');
    return sale;
  }

  async getSaleById(id: number) {
    const sale = await this.prisma.sale_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!sale) throw new BadRequestException('No Sale file exist with this id.');
    return sale;
  }

  async createSale(sale: CreateSaleInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(sale)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Sale = await this.prisma.sale_form.create({
      data: dataToCreate,
    });

    if (!Sale) throw new BadRequestException('Unable to create Sale File');
    return Sale;
  }

  async updateSaleById(sale: UpdateSaleInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(sale)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.sale_form.findUnique({
      where: { id: sale.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Sale File with id ${sale.id} not found`);
    }

    const updatedSale = this.prisma.sale_form.update({
      where: { id: sale.id },
      data: dataToUpdate,
    });
    if (!updatedSale) throw new BadRequestException('Unable to update sale file.');
    return updatedSale;
  }

  async deleteSaleById(sale: UpdateSaleInput) {
    const existing = await this.prisma.sale_form.findUnique({
      where: { id: sale.id },
    });

    if (!existing) {
      throw new NotFoundException(`Sale with id ${sale.id} not found`);
    }

    const deleteSale = this.prisma.sale_form.update({
      where: { id: sale.id },
      data: { deletedAt: sale.deletedAt },
    });

    if (!deleteSale) throw new BadRequestException('Unable to update Sale file.');
    return deleteSale;
  }
}
