import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { UpdateProductDto } from './dto/update-product.dto';
import { options } from 'tsconfig-paths/lib/options';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(body: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(body);
    return newProduct.save();
  }

  async update(id: string, body: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, body, { new: true });
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }
}
