import { Injectable } from '@nestjs/common';

export interface CoverType {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

@Injectable()
export class CoverTypesService {
  // Dummy cover types data
  private coverTypes: CoverType[] = [
    {
      id: 1,
      name: 'Third Party',
      description: 'Basic third party insurance coverage',
      isActive: true,
    },
    {
      id: 2,
      name: 'Comprehensive',
      description: 'Full comprehensive insurance coverage',
      isActive: true,
    },
    {
      id: 3,
      name: 'COMESA',
      description: 'COMESA yellow card insurance coverage',
      isActive: true,
    },
  ];

  getAll(): CoverType[] {
    return this.coverTypes.filter((ct) => ct.isActive);
  }

  getById(id: number): CoverType | undefined {
    return this.coverTypes.find((ct) => ct.id === id);
  }
}

