import { Module } from '@nestjs/common';
import { BenefitsController } from './benefits.controller';
import { BenefitsService } from './benefits.service';
import { CoverTypesService } from '../cover-types/cover-types.service';
import { CoverTypesController } from '../cover-types/cover-types.controller';

@Module({
  controllers: [BenefitsController, CoverTypesController],
  providers: [BenefitsService, CoverTypesService],
  exports: [BenefitsService, CoverTypesService],
})
export class BenefitsModule {}

