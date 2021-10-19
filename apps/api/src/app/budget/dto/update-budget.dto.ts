import { IsNotEmpty, IsString } from 'class-validator';
import { IUpdateBudget } from 'contracts';
import { Budget } from './budget.dto';

export class UpdateBudget extends Budget implements IUpdateBudget {
  @IsNotEmpty()
  @IsString()
  id: string;
}
