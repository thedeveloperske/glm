import { Controller, Get, UseGuards, Res } from '@nestjs/common';
import { Response } from 'express';
import { SessionGuard } from '../auth/guards/session.guard';

@Controller('dashboard')
@UseGuards(SessionGuard)
export class DashboardController {
  @Get()
  showDashboard(@Res() res: Response) {
    return res.render('dashboard/index', {
      title: 'Dashboard - GLM Admin',
      page: 'dashboard',
    });
  }

  @Get('products')
  showProducts(@Res() res: Response) {
    return res.render('dashboard/products', {
      title: 'Products - GLM Admin',
      page: 'products',
    });
  }

  @Get('vehicle-types')
  showVehicleTypes(@Res() res: Response) {
    return res.render('dashboard/vehicle-types', {
      title: 'Vehicle Types - GLM Admin',
      page: 'vehicle-types',
    });
  }

  @Get('vehicle-makes')
  showVehicleMakes(@Res() res: Response) {
    return res.render('dashboard/vehicle-makes', {
      title: 'Vehicle Makes - GLM Admin',
      page: 'vehicle-makes',
    });
  }

  @Get('benefits')
  showBenefits(@Res() res: Response) {
    return res.render('dashboard/benefits', {
      title: 'Insurance Benefits - GLM Admin',
      page: 'benefits',
    });
  }

  @Get('cover-types')
  showCoverTypes(@Res() res: Response) {
    return res.render('dashboard/cover-types', {
      title: 'Cover Types - GLM Admin',
      page: 'cover-types',
    });
  }

  @Get('quotes')
  showQuotes(@Res() res: Response) {
    return res.render('dashboard/quotes', {
      title: 'Quotes - GLM Admin',
      page: 'quotes',
    });
  }
}

