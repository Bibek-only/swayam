'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Ban, Shield } from 'lucide-react';

// All Farmers Section
export function AllFarmersSection() {
  const farmers = [
    { id: 1, name: 'Rajesh Kumar', location: 'Punjab', status: 'Active', earnings: '₹45,000' },
    { id: 2, name: 'Harjeet Patel', location: 'Haryana', status: 'Active', earnings: '₹32,000' },
    { id: 3, name: 'Vikram Singh', location: 'Uttarakhand', status: 'Inactive', earnings: '₹15,000' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">All Farmers</h2>

      <Card className="p-0 bg-white border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Earnings</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((farmer) => (
              <tr key={farmer.id} className="border-b border-border hover:bg-primary/5">
                <td className="px-6 py-4 font-semibold text-foreground">{farmer.name}</td>
                <td className="px-6 py-4 text-foreground">{farmer.location}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    farmer.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {farmer.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-primary">{farmer.earnings}</td>
                <td className="px-6 py-4 flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Eye size={16} /> View
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50 gap-2 bg-transparent">
                    <Ban size={16} /> Suspend
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// All Organizations Section
export function AllOrganizationsSection() {
  const organizations = [
    { id: 1, name: 'GreenTech Industries', type: 'Manufacturing', status: 'Active', spent: '₹3,50,000' },
    { id: 2, name: 'Eco Solutions Ltd', type: 'Consulting', status: 'Active', spent: '₹2,15,000' },
    { id: 3, name: 'SustainCorp', type: 'Trading', status: 'Pending', spent: '₹45,000' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">All Organizations</h2>

      <Card className="p-0 bg-white border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Total Spent</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <tr key={org.id} className="border-b border-border hover:bg-primary/5">
                <td className="px-6 py-4 font-semibold text-foreground">{org.name}</td>
                <td className="px-6 py-4 text-foreground">{org.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    org.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {org.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-primary">{org.spent}</td>
                <td className="px-6 py-4 flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Eye size={16} /> View
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50 gap-2 bg-transparent">
                    <Ban size={16} /> Suspend
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// Payment History Section (Admin)
export function AdminPaymentHistorySection() {
  const payments = [
    { id: 1, date: '2024-01-15', farmer: 'Rajesh Kumar', org: 'GreenTech', amount: '₹2,500', status: 'Completed' },
    { id: 2, date: '2024-01-14', farmer: 'Harjeet Patel', org: 'Eco Solutions', amount: '₹4,000', status: 'Processing' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Payment History</h2>

      <Card className="p-0 bg-white border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Farmer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-border hover:bg-primary/5">
                <td className="px-6 py-4 text-foreground">{payment.date}</td>
                <td className="px-6 py-4 text-foreground">{payment.farmer}</td>
                <td className="px-6 py-4 text-foreground">{payment.org}</td>
                <td className="px-6 py-4 font-semibold text-primary">{payment.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    payment.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {payment.status}
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

// Purchase History Section (Admin)
export function AdminPurchaseHistorySection() {
  const purchases = [
    { id: 1, date: '2024-01-15', crop: 'Wheat Stubble', quantity: '500 kg', price: '₹2,500', farmer: 'Rajesh Kumar' },
    { id: 2, date: '2024-01-14', crop: 'Rice Stubble', quantity: '800 kg', price: '₹4,000', farmer: 'Harjeet Patel' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Purchase History</h2>

      <Card className="p-0 bg-white border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Crop</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Farmer</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id} className="border-b border-border hover:bg-primary/5">
                <td className="px-6 py-4 text-foreground">{purchase.date}</td>
                <td className="px-6 py-4 text-foreground">{purchase.crop}</td>
                <td className="px-6 py-4 text-foreground">{purchase.quantity}</td>
                <td className="px-6 py-4 font-semibold text-primary">{purchase.price}</td>
                <td className="px-6 py-4 text-foreground">{purchase.farmer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// Buy Requests Section (Admin)
export function AdminBuyRequestsSection() {
  const requests = [
    { id: 1, farmer: 'Rajesh Kumar', quantity: '500 kg', crop: 'Wheat', org: 'GreenTech', status: 'Pending' },
    { id: 2, farmer: 'Harjeet Patel', quantity: '800 kg', crop: 'Rice', org: 'Eco Solutions', status: 'Approved' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Buy Requests</h2>

      <Card className="p-0 bg-white border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Farmer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Crop</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Organization</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="border-b border-border hover:bg-primary/5">
                <td className="px-6 py-4 font-semibold text-foreground">{request.farmer}</td>
                <td className="px-6 py-4 text-foreground">{request.crop}</td>
                <td className="px-6 py-4 text-foreground">{request.quantity}</td>
                <td className="px-6 py-4 text-foreground">{request.org}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    request.status === 'Approved'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Shield size={16} /> Review
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// Settings Section
export function AdminSettingsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Admin Settings</h2>

      <Card className="p-6 bg-white border border-border">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Platform Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-border">
                <div>
                  <p className="font-semibold text-foreground">Commission Rate</p>
                  <p className="text-sm text-foreground/60">Platform commission percentage</p>
                </div>
                <input type="text" className="border border-border px-3 py-2 rounded-lg w-24" defaultValue="5%" />
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-border">
                <div>
                  <p className="font-semibold text-foreground">Minimum Transaction</p>
                  <p className="text-sm text-foreground/60">Minimum amount for transactions</p>
                </div>
                <input type="text" className="border border-border px-3 py-2 rounded-lg w-24" defaultValue="₹500" />
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-border">
                <div>
                  <p className="font-semibold text-foreground">Max Listing Duration</p>
                  <p className="text-sm text-foreground/60">Days a listing stays active</p>
                </div>
                <input type="text" className="border border-border px-3 py-2 rounded-lg w-24" defaultValue="30 days" />
              </div>
            </div>
          </div>

          <div>
            <Button className="bg-primary hover:bg-primary/90 text-white">Save Settings</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
