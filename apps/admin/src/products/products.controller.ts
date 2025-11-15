import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProductsService, Product } from './products.service';
import { SessionGuard } from '../auth/guards/session.guard';

@Controller('api/products')
@UseGuards(SessionGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productsService.getById(+id);
  }

  @Post()
  create(@Body() createProductDto: Omit<Product, 'id' | 'createdAt'>) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Partial<Product>) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(+id);
  }
}

