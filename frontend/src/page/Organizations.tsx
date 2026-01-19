'use client';

import { useState } from 'react';
import Navbar from '@/components/NavBar';
import Footer from "@/components/Footer"
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search,  Building2, Star } from 'lucide-react';
// import { useSearchParams } from 'react-router-dom';
// import Loading from "@/components/Loading";

const organizationsData = [
  {
    id: 1,
    name: 'GreenTech Industries',
    type: 'Manufacturing',
    location: 'Delhi',
    employees: '250+',
    rating: 4.8,
    focus: ['Wheat Stubble', 'Rice Stubble'],
    image: '🏢',
  },
  {
    id: 2,
    name: 'Eco Solutions Ltd',
    type: 'Consulting',
    location: 'Mumbai',
    employees: '150+',
    rating: 4.6,
    focus: ['All Crops'],
    image: '🏢',
  },
  {
    id: 3,
    name: 'SustainCorp',
    type: 'Trading',
    location: 'Bangalore',
    employees: '100+',
    rating: 4.5,
    focus: ['Maize', 'Sugarcane'],
    image: '🏢',
  },
  {
    id: 4,
    name: 'GreenLife Industries',
    type: 'Manufacturing',
    location: 'Pune',
    employees: '300+',
    rating: 4.9,
    focus: ['Rice Stubble', 'Wheat Stubble'],
    image: '🏢',
  },
  {
    id: 5,
    name: 'Organic Ventures',
    type: 'Trading',
    location: 'Chennai',
    employees: '80+',
    rating: 4.7,
    focus: ['Pulses', 'All Organic'],
    image: '🏢',
  },
  {
    id: 6,
    name: 'NextGen Biotech',
    type: 'Manufacturing',
    location: 'Hyderabad',
    employees: '200+',
    rating: 4.4,
    focus: ['All Crops'],
    image: '🏢',
  },
];

const OrganizationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
//   const searchParams = useSearchParams();
  const types = ['Manufacturing', 'Consulting', 'Trading'];

  const filteredOrganizations = organizationsData.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || org.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our Organizations
            </h1>
            <p className="text-xl text-foreground/70">
              Discover verified organizations seeking quality organic materials.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6 mb-12">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3 text-foreground/40" size={20} />
              <input
                type="text"
                placeholder="Search by organization name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Filter by Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Organizations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrganizations.map((org) => (
              <Card
                key={org.id}
                className="p-6 bg-white border border-border hover:shadow-lg transition flex flex-col"
              >
                <div className="text-6xl mb-4">{org.image}</div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {org.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 size={18} className="text-primary" />
                  <span className="text-foreground/60">{org.type}</span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-foreground/70">
                  <p>
                    <span className="font-semibold text-foreground">Location:</span>{' '}
                    {org.location}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Employees:</span>{' '}
                    {org.employees}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Focus:</span>{' '}
                    {org.focus.join(', ')}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <Star className="fill-accent text-accent" size={20} />
                  <span className="text-lg font-bold text-foreground">{org.rating}</span>
                  <span className="text-foreground/60">(Verified)</span>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white mt-auto"
                >
                  Contact Organization
                </Button>
              </Card>
            ))}
          </div>

          {filteredOrganizations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-foreground/60">
                No organizations found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default OrganizationsPage