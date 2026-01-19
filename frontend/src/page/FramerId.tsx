'use client';

import { NavLink, useParams } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Package,
  DollarSign,
  Leaf,
  Calendar,
  ArrowLeft,
} from 'lucide-react';

// Mock farmer details
const getFarmerDetails = (id: string) => {
  const farmers: Record<string, any> = {
    '1': {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Punjab',
      image: '👨‍🌾',
      rating: 4.8,
      reviews: 45,
      farmSize: '12 hectares',
      description:
        'Experienced farmer with 15 years in sustainable agriculture. Produces high-quality organic materials.',
      products: [
        {
          id: 1,
          crop: 'Wheat Stubble',
          quantity: '500 kg',
          price: '₹2,500',
          quality: 'Premium',
          harvestDate: '2024-01-10',
          description: 'Clean wheat stubble, free from foreign matter.',
        },
        {
          id: 2,
          crop: 'Rice Stubble',
          quantity: '800 kg',
          price: '₹1,800',
          quality: 'Good',
          harvestDate: '2024-01-05',
          description: 'Quality rice stubble, suitable for industrial use.',
        },
      ],
    },
    '2': {
      id: 2,
      name: 'Harjeet Patel',
      location: 'Haryana',
      image: '👨‍🌾',
      rating: 4.6,
      reviews: 32,
      farmSize: '8 hectares',
      description: 'Dedicated to sustainable farming practices.',
      products: [
        {
          id: 1,
          crop: 'Wheat Stubble',
          quantity: '600 kg',
          price: '₹2,400',
          quality: 'Premium',
          harvestDate: '2024-01-12',
          description: 'High-grade wheat stubble.',
        },
        {
          id: 2,
          crop: 'Maize Stubble',
          quantity: '400 kg',
          price: '₹1,600',
          quality: 'Good',
          harvestDate: '2024-01-08',
          description: 'Clean maize stubble.',
        },
      ],
    },
  };
  return farmers[id] || farmers['1'];
};

const FarmerDetailPage = () => {
  const params = useParams();
  const farmerId = params.id as string;
  const farmer = getFarmerDetails(farmerId);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <NavLink
            to="/farmers"
            className="flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft size={20} />
            Back to Farmers
          </NavLink>

          {/* Farmer Info */}
          <Card className="p-8 bg-white border border-border mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-7xl mb-4">{farmer.image}</div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {farmer.name}
                </h1>
                <div className="flex items-center gap-2 text-foreground/60 mb-4">
                  <MapPin size={18} />
                  <span>{farmer.location}</span>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <p className="text-lg text-foreground/80">{farmer.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground/60 mb-1">Rating</p>
                    <p className="text-2xl font-bold text-primary">
                      {farmer.rating}⭐ ({farmer.reviews} reviews)
                    </p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <p className="text-sm text-foreground/60 mb-1">Farm Size</p>
                    <p className="text-2xl font-bold text-foreground">
                      {farmer.farmSize}
                    </p>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Contact Farmer
                </Button>
              </div>
            </div>
          </Card>

          {/* Products */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Available Stubbles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {farmer.products.map((product: any) => (
                <Card
                  key={product.id}
                  className="p-6 bg-white border border-border hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.crop}
                      </h3>
                      <p className="text-foreground/70">{product.description}</p>
                    </div>
                    <Leaf className="text-primary flex-shrink-0" size={32} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-y border-border">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Quantity</p>
                      <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                        <Package size={20} />
                        {product.quantity}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Quality Grade</p>
                      <p className="text-lg font-semibold text-primary">
                        {product.quality}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Price</p>
                      <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                        <DollarSign size={20} />
                        {product.price}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Harvest Date</p>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Calendar size={16} />
                        {product.harvestDate}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Request to Buy
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FarmerDetailPage