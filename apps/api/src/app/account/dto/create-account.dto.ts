import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { ICreateAccount, SupportedAccountType } from 'contracts';

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
  type: SupportedAccountType;

  @IsNumber()
  @IsNotEmpty()
  balance: number;
}
