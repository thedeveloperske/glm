import { Injectable } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: Date;
}

@Injectable()
export class ProductsService {
  // Dummy data for products
  private products: Product[] = [
    {
      id: 1,
      name: 'Comprehensive Motor Insurance',
      shortDescription: 'Complete protection for your vehicle with comprehensive coverage including theft, fire, and third-party liability.',
      imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      isActive: true,
      createdAt: new Date('2024-01-10'),
    },
    {
      id: 2,
      name: 'Third Party Insurance',
      shortDescription: 'Essential third-party liability coverage to protect you against claims from other parties.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      isActive: true,
      createdAt: new Date('2024-01-11'),
    },
    {
      id: 3,
      name: 'COMESA Yellow Card',
      shortDescription: 'Cross-border insurance coverage for travel within COMESA member countries.',
      imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
      isActive: true,
      createdAt: new Date('2024-01-12'),
    },
    {
      id: 4,
      name: 'Motorcycle Insurance',
      shortDescription: 'Specialized insurance coverage designed specifically for motorcycles and scooters.',
      imageUrl: 'https://images.unsplash.com/photo-1558980664-1db506751c6c?w=400&h=300&fit=crop',
      isActive: true,
      createdAt: new Date('2024-01-13'),
    },
    {
      id: 5,
      name: 'Commercial Vehicle Insurance',
      shortDescription: 'Comprehensive insurance solutions for commercial vehicles and fleet management.',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
      isActive: true,
      createdAt: new Date('2024-01-14'),
    },
  ];

  private nextId = 6;

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  create(productData: Omit<Product, 'id' | 'createdAt'>): Product {
    const newProduct: Product = {
      id: this.nextId++,
      ...productData,
      createdAt: new Date(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, productData: Partial<Product>): Product | null {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    this.products[index] = { ...this.products[index], ...productData };
    return this.products[index];
  }

  delete(id: number): boolean {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}

