import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll() {
    return 'getAll';
  }
  @Get(':id')
  getOne(@Param('id') id): string {
    return 'getOne' + id;
  }
  @Post()
  create(@Body() body: CreateProductDto): string {
    return `Title ${body.title} Price: ${body.price}`;
  }
  @Put(':id')
  update(@Body() body: UpdateProductDto, @Param('id') id: string) {
    return 'Update' + id;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Delete' + id;
  }
}
