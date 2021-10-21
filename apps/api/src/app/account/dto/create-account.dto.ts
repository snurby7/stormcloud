import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { ICreateAccount } from 'contracts';
import { SupportedAccountType } from '../../constants';

export class CreateAccount implements ICreateAccount {
  @IsUUID()
  budgetId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(SupportedAccountType, {
    message: 'Value must match a supported enum value',
  })
  type: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;
}
