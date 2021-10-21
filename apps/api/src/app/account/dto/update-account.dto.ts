import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { IAccount } from 'contracts';
import { SupportedAccountType } from '../../constants';

export class UpdateAccount implements IAccount {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsNotEmpty()
  budgetId: string;

  @IsNotEmpty()
  @IsEnum(SupportedAccountType, {
    message: 'Value must match a supported enum value',
  })
  type: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  balance: number;
}
