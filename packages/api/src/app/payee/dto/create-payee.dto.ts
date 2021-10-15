import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ICreatePayee } from 'contracts';

export class CreatePayee implements ICreatePayee {
  @IsNotEmpty()
  @IsUUID()
  budgetId: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
