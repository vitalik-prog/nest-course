import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getAll() {
    return this.productsService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id): string {
    return this.productsService.getById(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
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
