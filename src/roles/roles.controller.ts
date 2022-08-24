import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { Role } from "./roles.model";

@ApiTags('Roles')
@Controller("roles")
export class RolesController {

  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: "Create role" })
  @ApiResponse({ status: 201, type: Role })
  @Post()
  async create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: "Create role by value" })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  async getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
