import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {

  @ApiProperty({ example: "My day", description: "Post title" })
  readonly title: string;

  @ApiProperty({ example: "My day is so great", description: "Here must be content of your post" })
  readonly content: string;

  // По хорошему нужно доставать Id из токена
  @ApiProperty({ example: 1, description: "The ID of the user who creates the post" })
  readonly userId: number;
}