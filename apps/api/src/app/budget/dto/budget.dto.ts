import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ICreateBudget } from 'contracts';

export class Budget implements ICreateBudget {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Name property given to your budget',
    example: 'Colorado Getaway',
    required: true,
  })
  name: string;
}
