import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  size: string;

  @Prop()
  color: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  stock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
