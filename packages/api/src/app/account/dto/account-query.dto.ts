import { IsOptional, IsUUID } from 'class-validator';
import { IAccountQuery } from 'contracts';
export class AccountQuery implements IAccountQuery {
  @IsUUID()
  budgetId: string;

  @IsOptional()
  limit?: number;
}
