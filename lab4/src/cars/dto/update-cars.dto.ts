import { PartialType } from '@nestjs/mapped-types';
import { CreateStockDto } from './create-cars.dto';

export class UpdateStockDto extends PartialType(CreateStockDto) {}
