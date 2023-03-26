import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

const sortType = ['asc', 'desc'] as const;
export type Sort = (typeof sortType)[number];

export class GetAllRequest {
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsPositive()
  page: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsPositive()
  pageSize: number;

  @IsOptional()
  field: string;

  @IsOptional()
  @IsIn(sortType)
  sort: Sort;
}
