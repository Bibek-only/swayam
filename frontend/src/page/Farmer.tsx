"use client";

import { useState, Suspense } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MapPin, TrendingUp } from "lucide-react";
// import { useSearchParams } from "react-router-dom";

const farmersData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Punjab",
    farmSize: "12 hectares",
    crops: ["Wheat", "Rice"],
    rating: 4.8,
    listings: 5,
    image: "👨‍🌾",
  },
  {
    id: 2,
    name: "Harjeet Patel",
    location: "Haryana",
    farmSize: "8 hectares",
    crops: ["Wheat", "Maize"],
    rating: 4.6,
    listings: 3,
    image: "👨‍🌾",
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Uttarakhand",
    farmSize: "5 hectares",
    crops: ["Rice"],
    rating: 4.5,
    listings: 2,
    image: "👨‍🌾",
  },
  {
    id: 4,
    name: "Priya Sharma",
    location: "Bihar",
    farmSize: "10 hectares",
    crops: ["Wheat", "Rice", "Pulses"],
    rating: 4.7,
    listings: 4,
    image: "👩‍🌾",
  },
  {
    id: 5,
    name: "Arjun Verma",
    location: "Uttar Pradesh",
    farmSize: "15 hectares",
    crops: ["Wheat", "Sugarcane"],
    rating: 4.9,
    listings: 6,
    image: "👨‍🌾",
  },
  {
    id: 6,
    name: "Neha Desai",
    location: "Maharashtra",
    farmSize: "7 hectares",
    crops: ["Sugarcane", "Maize"],
    rating: 4.4,
    listings: 2,
    image: "👩‍🌾",
  },
];

const Loading = () => null;

const FarmersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
//   const searchParams = useSearchParams();

  const crops = ["Wheat", "Rice", "Maize", "Sugarcane", "Pulses"];
  const locations = [
    "Punjab",
    "Haryana",
    "Uttarakhand",
    "Bihar",
    "Uttar Pradesh",
    "Maharashtra",
  ];

  const filteredFarmers = farmersData.filter((farmer) => {
    const matchesSearch =
      farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCrop = !selectedCrop || farmer.crops.includes(selectedCrop);
    const matchesLocation =
      !selectedLocation || farmer.location === selectedLocation;

    return matchesSearch && matchesCrop && matchesLocation;
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Explore Our Farmers
              </h1>
              <p className="text-xl text-foreground/70">
                Connect directly with farmers and purchase quality organic
                stubbles.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-6 mb-12">
              {/* Search Bar */}
              <div className="relative">
                <Search
                  className="absolute left-4 top-3 text-foreground/40"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by farmer name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Filter by Crop
                  </label>
                  <select
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Crops</option>
                    {crops.map((crop) => (
                      <option key={crop} value={crop}>
                        {crop}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Filter by Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Farmers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFarmers.map((farmer) => (
                <Card
                  key={farmer.id}
                  className="p-6 bg-white border border-border hover:shadow-lg transition flex flex-col"
                >
                  <div className="text-6xl mb-4">{farmer.image}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {farmer.name}
                  </h3>
                  <div className="flex items-center gap-2 text-foreground/60 mb-4">
                    <MapPin size={18} />
                    <span>{farmer.location}</span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-foreground/70">
                    <p>
                      <span className="font-semibold text-foreground">
                        Farm Size:
                      </span>{" "}
                      {farmer.farmSize}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        Crops:
                      </span>{" "}
                      {farmer.crops.join(", ")}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">
                        {farmer.rating}⭐
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-accent">
                      <TrendingUp size={16} />
                      <span className="text-sm font-semibold">
                        {farmer.listings} listings
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white mt-auto"
                    asChild
                  >
                    <NavLink to={`/farmers/${farmer.id}`}>
                      View Products
                    </NavLink>
                  </Button>
                </Card>
              ))}
            </div>

            {filteredFarmers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-foreground/60">
                  No farmers found matching your criteria. Try adjusting your
                  filters.
                </p>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default FarmersPage;
