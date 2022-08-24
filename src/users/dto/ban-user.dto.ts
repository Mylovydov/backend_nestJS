import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {

  @ApiProperty({ example: 1, description: "User id" })
  readonly userId: number;

  @ApiProperty({ example: "Hooligan", description: "Reason to ban" })
  readonly banReason: string
}