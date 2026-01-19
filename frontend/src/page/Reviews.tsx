'use client';

import React from "react"

import { useState } from 'react';
// import {NavLink} from "react-router-dom";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MessageSquare, Send,  } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Farmer',
    rating: 5,
    date: '2024-01-15',
    review:
      'Swayam has been a game-changer for my farm. I was able to sell my stubbles at a fair price and prevent burning. Highly recommended!',
    avatar: '👨‍🌾',
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Organization Manager',
    rating: 5,
    date: '2024-01-14',
    review:
      'Excellent platform for sourcing organic materials. The transparency and reliability are exceptional. Our supply chain has improved significantly.',
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: 'Harjeet Patel',
    role: 'Farmer',
    rating: 4,
    date: '2024-01-13',
    review:
      'Great experience overall. The payment process was smooth and the support team was very helpful.',
    avatar: '👨‍🌾',
  },
  {
    id: 4,
    name: 'Neha Sharma',
    role: 'CSR Director',
    rating: 5,
    date: '2024-01-12',
    review:
      'Perfect platform for our sustainability initiatives. We can directly support farmers while sourcing quality materials.',
    avatar: '👩‍💼',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Farmer',
    rating: 5,
    date: '2024-01-11',
    review:
      'The platform made it so easy to list my products and connect with buyers. No more burning stubbles!',
    avatar: '👨‍🌾',
  },
  {
    id: 6,
    name: 'Ananya Gupta',
    role: 'Organization Manager',
    rating: 4,
    date: '2024-01-10',
    review:
      'Good platform with fair pricing. The farmer network is diverse and products are consistently high quality.',
    avatar: '👩‍💼',
  },
];

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Farmer',
    rating: 5,
    review: '',
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.review) {
      const newReview = {
        id: reviews.length + 1,
        name: formData.name,
        role: formData.role,
        rating: formData.rating,
        date: new Date().toISOString().split('T')[0],
        review: formData.review,
        avatar: formData.role === 'Farmer' ? '👨‍🌾' : '👩‍💼',
      };
      setReviews([newReview, ...reviews]);
      setFormData({ name: '', role: 'Farmer', rating: 5, review: '' });
      setShowForm(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Community Reviews
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              See what farmers and organizations are saying about Swayam
            </p>

            {/* Rating Summary */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-8">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {avgRating}⭐
                </div>
                <p className="text-lg text-foreground/70 mb-4">
                  Based on {reviews.length} reviews
                </p>
                <Button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-primary hover:bg-primary/90 text-white gap-2"
                >
                  <MessageSquare size={20} />
                  Share Your Review
                </Button>
              </div>
            </Card>
          </div>

          {/* Review Form */}
          {showForm && (
            <Card className="p-8 bg-white border border-border mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Share Your Experience
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="Farmer">Farmer</option>
                      <option value="Organization">Organization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, rating: star })
                        }
                        className={`text-3xl transition ${
                          star <= formData.rating
                            ? 'text-accent'
                            : 'text-border'
                        }`}
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Review
                  </label>
                  <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    placeholder="Share your experience with Swayam..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white gap-2"
                  >
                    <Send size={18} />
                    Submit Review
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="p-6 bg-white border border-border hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{review.avatar}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {review.name}
                    </h3>
                    <p className="text-sm text-foreground/60">{review.role}</p>
                    <p className="text-xs text-foreground/50 mt-1">{review.date}</p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  "{review.review}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ReviewsPage