import { Controller, Get, UseGuards } from '@nestjs/common';
import { CoverTypesService } from './cover-types.service';
import { SessionGuard } from '../auth/guards/session.guard';

@Controller('api/cover-types')
@UseGuards(SessionGuard)
export class CoverTypesController {
  constructor(private readonly coverTypesService: CoverTypesService) {}

  @Get()
  getAll() {
    return this.coverTypesService.getAll();
  }
}

