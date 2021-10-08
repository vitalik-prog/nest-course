import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll() {
    return 'getAll';
  }
  @Get(':id')
  getOne(@Param('id') id) {
    return 'getOne' + id;
  }
  @Post()
  create(@Body() body) {
    return 'Create';
  }
  @Put()
  update() {
    return 'Update';
  }
  @Delete()
  remove() {
    return 'Delete';
  }
}
