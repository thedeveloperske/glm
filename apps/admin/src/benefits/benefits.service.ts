import { Injectable } from '@nestjs/common';

export interface Benefit {
  id: number;
  name: string;
  description: string;
  percentage: number;
  coverTypeId: number;
  coverTypeName: string;
  isActive: boolean;
  createdAt: Date;
}

@Injectable()
export class BenefitsService {
  // Dummy data - similar to glm-mua-ke project
  private benefits: Benefit[] = [
    {
      id: 1,
      name: 'Windscreen Cover',
      description: 'Coverage for windscreen damage and replacement',
      percentage: 15.5,
      coverTypeId: 2,
      coverTypeName: 'Comprehensive',
      isActive: true,
      createdAt: new Date('2024-01-15'),
    },
    {
      id: 2,
      name: 'Excess Protector',
      description: 'Protects against excess payments in case of claims',
      percentage: 10.0,
      coverTypeId: 2,
      coverTypeName: 'Comprehensive',
      isActive: true,
      createdAt: new Date('2024-01-16'),
    },
    {
      id: 3,
      name: 'Roadside Assistance',
      description: '24/7 roadside assistance and towing services',
      percentage: 5.0,
      coverTypeId: 2,
      coverTypeName: 'Comprehensive',
      isActive: true,
      createdAt: new Date('2024-01-17'),
    },
    {
      id: 4,
      name: 'Personal Accident Cover',
      description: 'Coverage for personal accidents while in the vehicle',
      percentage: 12.5,
      coverTypeId: 2,
      coverTypeName: 'Comprehensive',
      isActive: true,
      createdAt: new Date('2024-01-18'),
    },
    {
      id: 5,
      name: 'Theft Protection',
      description: 'Enhanced protection against vehicle theft',
      percentage: 8.0,
      coverTypeId: 2,
      coverTypeName: 'Comprehensive',
      isActive: true,
      createdAt: new Date('2024-01-19'),
    },
    {
      id: 6,
      name: 'Third Party Liability',
      description: 'Basic third party liability coverage',
      percentage: 20.0,
      coverTypeId: 1,
      coverTypeName: 'Third Party',
      isActive: true,
      createdAt: new Date('2024-01-20'),
    },
  ];

  private nextId = 7;

  getAll(): Benefit[] {
    return this.benefits;
  }

  getById(id: number): Benefit | undefined {
    return this.benefits.find((b) => b.id === id);
  }

  create(benefitData: Omit<Benefit, 'id' | 'createdAt'>): Benefit {
    const newBenefit: Benefit = {
      id: this.nextId++,
      ...benefitData,
      createdAt: new Date(),
    };
    this.benefits.push(newBenefit);
    return newBenefit;
  }

  update(id: number, benefitData: Partial<Benefit>): Benefit | null {
    const index = this.benefits.findIndex((b) => b.id === id);
    if (index === -1) return null;

    this.benefits[index] = { ...this.benefits[index], ...benefitData };
    return this.benefits[index];
  }

  delete(id: number): boolean {
    const index = this.benefits.findIndex((b) => b.id === id);
    if (index === -1) return false;

    this.benefits.splice(index, 1);
    return true;
  }
}

