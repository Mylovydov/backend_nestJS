import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "example.com", description: "User Email" })
  @IsString({ message: "Must be a string" })
  @IsEmail({}, { message: "Uncorrected email" })
  readonly email: string;

  @ApiProperty({ example: "12345678", description: "User password" })
  @IsString({ message: "Must be a string" })
  @Length(4, 16, { message: "Must be not less 4 and not more 16 characters" })
  readonly password: string;
}