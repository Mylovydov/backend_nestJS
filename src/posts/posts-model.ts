import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";

interface IPostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, IPostCreationAttrs> {
  @ApiProperty({ example: 1, description: "Unique id" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "My day", description: "Post title" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: "My day is so great", description: "Here must be content of your post" })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({example: 'image.jpeg', description: "Your post image"})
  @Column({type: DataType.STRING})
  image: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User
}