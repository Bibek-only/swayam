'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Trash2, Edit, Plus } from 'lucide-react';

// Profile Section
export function ProfileSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <h2 className="text-3xl font-bold text-foreground">My Profile</h2>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
          <Edit size={18} />
          Edit Profile
        </Button>
      </div>

      <Card className="p-6 bg-white border border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-6xl mb-4">👨‍🌾</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Rajesh Kumar</h3>
            <p className="text-foreground/60 mb-4">Farmer • Punjab</p>
            <div className="space-y-2 text-foreground/70">
              <p>📧 rajesh@email.com</p>
              <p>📱 +91 98765 43210</p>
              <p>📍 Village Nangal, District Ropar, Punjab</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Account Status</p>
              <p className="text-lg font-semibold text-primary">Verified ✓</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Farm Size</p>
              <p className="text-lg font-semibold">12 hectares</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Member Since</p>
              <p className="text-lg font-semibold">January 2024</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Total Earnings</p>
              <p className="text-lg font-semibold text-primary">₹45,000</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Stubbles Section
export function StubblesSection() {
  const stubbles = [
    {
      id: 1,
      crop: 'Wheat Stubble',
      quantity: '500 kg',
      quality: 'Premium',
      price: '₹2,500',
      status: 'Available',
    },
    {
      id: 2,
      crop: 'Rice Stubble',
      quantity: '800 kg',
      quality: 'Good',
      price: '₹1,800',
      status: 'Pending',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <h2 className="text-3xl font-bold text-foreground">My Stubbles</h2>
        <Button className="bg-accent hover:bg-accent/90 text-foreground gap-2">
          <Plus size={18} />
          List Stubble
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {stubbles.map((stubble) => (
          <Card
            key={stubble.id}
            className="p-6 bg-white border border-border hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stubble.crop}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-foreground/60">Quantity</p>
                    <p className="font-semibold text-foreground">{stubble.quantity}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Quality</p>
                    <p className="font-semibold text-foreground">{stubble.quality}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Price</p>
                    <p className="font-semibold text-primary">{stubble.price}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Status</p>
                    <p className={`font-semibold ${
                      stubble.status === 'Available'
                        ? 'text-green-600'
                        : 'text-yellow-600'
                    }`}>
                      {stubble.status}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Edit size={18} />
                </Button>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50 bg-transparent"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Requests Section
export function RequestsSection() {
  const requests = [
    {
      id: 1,
      org: 'GreenTech Industries',
      quantity: '300 kg',
      price: '₹2,800',
      status: 'Pending',
    },
    {
      id: 2,
      org: 'Eco Solutions Ltd',
      quantity: '500 kg',
      price: '₹2,500',
      status: 'Accepted',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Buy Requests</h2>

      <div className="grid grid-cols-1 gap-4">
        {requests.map((request) => (
          <Card
            key={request.id}
            className="p-6 bg-white border border-border hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {request.org}
                </h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-foreground/60">Quantity Required</p>
                    <p className="font-semibold text-foreground">{request.quantity}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Offered Price</p>
                    <p className="font-semibold text-primary">{request.price}/kg</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Status</p>
                    <p className={`font-semibold ${
                      request.status === 'Accepted'
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

// History Section
export function HistorySection() {
  const history = [
    {
      id: 1,
      date: '2024-01-15',
      action: 'Sold Wheat Stubble',
      amount: '₹2,500',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-01-10',
      action: 'Listed Rice Stubble',
      amount: 'Pending',
      status: 'In Progress',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Transaction History</h2>

      <Card className="p-0 bg-white border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                Action
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
            {history.map((item) => (
              <tr key={item.id} className="border-b border-border hover:bg-primary/5">
                <td className="px-6 py-4 text-foreground">{item.date}</td>
                <td className="px-6 py-4 text-foreground">{item.action}</td>
                <td className="px-6 py-4 font-semibold text-primary">{item.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    item.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.status}
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

// Payments Section
export function PaymentsSection() {
  const payments = [
    { id: 1, date: '2024-01-15', amount: '₹2,500', status: 'Completed' },
    { id: 2, date: '2024-01-10', amount: '₹1,800', status: 'Processing' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Payments</h2>

      <Card className="p-6 bg-primary/10 border border-primary/20">
        <p className="text-foreground/60 mb-1">Total Earned</p>
        <p className="text-4xl font-bold text-primary">₹45,000</p>
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
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              payment.status === 'Completed'
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-100 text-blue-700'
            }`}>
              {payment.status}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Reviews Section
export function ReviewsSection() {
  const reviews = [
    { id: 1, org: 'GreenTech Industries', rating: 5, comment: 'Excellent quality!' },
    { id: 2, org: 'Eco Solutions', rating: 4, comment: 'Good service' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">My Reviews</h2>

      <div className="grid grid-cols-1 gap-4">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="p-6 bg-white border border-border hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-2">{review.org}</h3>
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
