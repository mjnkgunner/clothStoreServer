import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string; // Unique username for login

  @Prop({ required: true })
  password: string; // Plain text password (NOT recommended for production)

  @Prop({ required: true, unique: true })
  email: string; // Unique email for contact and login

  @Prop()
  address: string; // Optional address for customer

  @Prop()
  phone: string; // Optional phone number for contact

  @Prop({ default: [] })
  orderHistory: string[]; // Array of Order IDs

  @Prop({ default: 'customer' })
  role: string; // Role-based access, e.g., "customer", "admin"

  @Prop({ default: Date.now })
  createdAt: Date; // Automatically stores when the account was created
}

export const UserSchema = SchemaFactory.createForClass(User);
