import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BenefitsService, Benefit } from './benefits.service';
import { SessionGuard } from '../auth/guards/session.guard';
import { CoverTypesService } from '../cover-types/cover-types.service';

@Controller('api/benefits')
@UseGuards(SessionGuard)
export class BenefitsController {
  constructor(
    private readonly benefitsService: BenefitsService,
    private readonly coverTypesService: CoverTypesService,
  ) {}

  @Get()
  getAll() {
    return this.benefitsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.benefitsService.getById(+id);
  }

  @Post()
  create(@Body() createBenefitDto: Omit<Benefit, 'id' | 'createdAt' | 'coverTypeName'>) {
    const coverType = this.coverTypesService.getById(createBenefitDto.coverTypeId);
    if (!coverType) {
      throw new Error('Cover type not found');
    }

    return this.benefitsService.create({
      ...createBenefitDto,
      coverTypeName: coverType.name,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBenefitDto: Partial<Benefit>) {
    return this.benefitsService.update(+id, updateBenefitDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.benefitsService.delete(+id);
  }
}

