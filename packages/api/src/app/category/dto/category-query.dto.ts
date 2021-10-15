import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { ICategoryQuery } from 'contracts';

export class CategoryQuery implements ICategoryQuery {
  @IsNotEmpty()
  @IsUUID()
  budgetId: string;

  @IsOptional()
  limit?: number;
}
