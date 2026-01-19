'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Plus, Edit } from 'lucide-react';

// Profile Section
export function OrgProfileSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <h2 className="text-3xl font-bold text-foreground">Organization Profile</h2>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
          <Edit size={18} />
          Edit Profile
        </Button>
      </div>

      <Card className="p-6 bg-white border border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">GreenTech Industries</h3>
            <p className="text-foreground/60 mb-4">Sustainable Manufacturing • Delhi</p>
            <div className="space-y-2 text-foreground/70">
              <p>📧 info@greentech.com</p>
              <p>📱 +91 11 4000 5000</p>
              <p>📍 Industrial Area, Delhi</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Company Type</p>
              <p className="text-lg font-semibold">Manufacturing</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Employees</p>
              <p className="text-lg font-semibold">250+</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Member Since</p>
              <p className="text-lg font-semibold">June 2023</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Total Purchases</p>
              <p className="text-lg font-semibold text-primary">₹3,50,000</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Purchase History Section
export function PurchaseHistorySection() {
  const purchases = [
    {
      id: 1,
      date: '2024-01-15',
      farmer: 'Rajesh Kumar',
      product: 'Wheat Stubble',
      quantity: '500 kg',
      amount: '₹2,500',
      status: 'Delivered',
    },
    {
      id: 2,
      date: '2024-01-10',
      farmer: 'Harjeet Patel',
      product: 'Rice Stubble',
      quantity: '800 kg',
      amount: '₹4,000',
      status: 'In Transit',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Purchase History</h2>

      <Card className="p-0 bg-white border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                Farmer
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                Product
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id} className="border-b border-border hover:bg-primary/5">
                <td className="px-6 py-4 text-foreground">{purchase.date}</td>
                <td className="px-6 py-4 text-foreground">{purchase.farmer}</td>
                <td className="px-6 py-4 text-foreground">
                  {purchase.product} ({purchase.quantity})
                </td>
                <td className="px-6 py-4 font-semibold text-primary">{purchase.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    purchase.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {purchase.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// Stubble Requests Section
export function StubbleRequestsSection() {
  const requests = [
    {
      id: 1,
      farmer: 'Rajesh Kumar',
      quantity: '1000 kg',
      crop: 'Wheat',
      deadline: '2024-02-15',
      status: 'Pending',
    },
    {
      id: 2,
      farmer: 'Harjeet Patel',
      quantity: '500 kg',
      crop: 'Rice',
      deadline: '2024-02-10',
      status: 'Approved',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <h2 className="text-3xl font-bold text-foreground">Stubble Requests</h2>
        <Button className="bg-accent hover:bg-accent/90 text-foreground gap-2">
          <Plus size={18} />
          New Request
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {requests.map((request) => (
          <Card
            key={request.id}
            className="p-6 bg-white border border-border hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {request.farmer}
                </h3>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-foreground/60">Crop Type</p>
                    <p className="font-semibold text-foreground">{request.crop}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Quantity</p>
                    <p className="font-semibold text-foreground">{request.quantity}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Deadline</p>
                    <p className="font-semibold text-foreground">{request.deadline}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Status</p>
                    <p className={`font-semibold ${
                      request.status === 'Approved'
                        ? 'text-green-600'
                        : 'text-yellow-600'
                    }`}>
                      {request.status}
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Payments Section (Organization)
export function OrgPaymentsSection() {
  const payments = [
    { id: 1, date: '2024-01-15', amount: '₹2,500', status: 'Completed' },
    { id: 2, date: '2024-01-10', amount: '₹4,000', status: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Payments</h2>

      <Card className="p-6 bg-primary/10 border border-primary/20">
        <p className="text-foreground/60 mb-1">Total Spent</p>
        <p className="text-4xl font-bold text-primary">₹3,50,000</p>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {payments.map((payment) => (
          <Card
            key={payment.id}
            className="p-4 bg-white border border-border flex justify-between items-center"
          >
            <div>
              <p className="text-foreground font-semibold">{payment.date}</p>
              <p className="text-foreground/60">{payment.amount}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
              {payment.status}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Reviews Section (Organization)
export function OrgReviewsSection() {
  const reviews = [
    { id: 1, farmer: 'Rajesh Kumar', rating: 5, comment: 'Good quality materials!' },
    { id: 2, farmer: 'Harjeet Patel', rating: 4, comment: 'Quick payments' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Reviews from Farmers</h2>

      <div className="grid grid-cols-1 gap-4">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="p-6 bg-white border border-border hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-2">{review.farmer}</h3>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground/70">{review.comment}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
