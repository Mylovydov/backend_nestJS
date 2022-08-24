import { Body, Controller, Get, Post, UseGuards, UsePipes,  } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags('Users')
@Controller("users")
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 200, type: User })
  // Pipe помогают валидировать данные (тут используется локально на уровне функции контроллера)
  // @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User] })
  // Можем ограничить доступ к эндпоинту с помощью Guards
  // @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Assign a role to a user" })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  async addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: "Ban a user" })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  async ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }
}