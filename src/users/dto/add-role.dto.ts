import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {

  @ApiProperty({ example: "USER", description: "Role for user" })
  @IsString({message: "Must be a string"})
  readonly value: string;

  @ApiProperty({ example: 1, description: "User id" })
  @IsNumber({}, {message: "Must be a number"})
  readonly userId: number;
}