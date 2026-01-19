'use client';

import React from "react"

import { useState } from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Mail, Lock, Leaf, Users } from 'lucide-react';

const SignUp = () => {
  const [userType, setUserType] = useState<'farmer' | 'organization'>('farmer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.name && formData.email && formData.password) {
      // Mock registration
      localStorage.setItem(
        'user',
        JSON.stringify({ 
          email: formData.email, 
          name: formData.name,
          type: userType 
        })
      );
      // Redirect based on user type
      if (userType === 'organization') {
        navigate('/organization/dashboard');
      } else {
        navigate('/farmer/dashboard');
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="w-full max-w-md">
        {/* Logo */}
        <NavLink to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Leaf className="text-white" size={24} />
          </div>
          <span className="text-3xl font-bold text-primary">Swayam</span>
        </NavLink>

        <Card className="p-8 bg-white border border-border">
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-foreground/60 mb-6">
            Join our sustainable agriculture platform
          </p>

          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setUserType('farmer')}
              className={`p-4 rounded-lg border-2 transition ${
                userType === 'farmer'
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-white hover:border-primary'
              }`}
            >
              <User className={`mx-auto mb-2 ${userType === 'farmer' ? 'text-primary' : 'text-foreground/60'}`} size={20} />
              <p className="font-semibold text-foreground text-sm">Farmer</p>
            </button>
            <button
              onClick={() => setUserType('organization')}
              className={`p-4 rounded-lg border-2 transition ${
                userType === 'organization'
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-white hover:border-primary'
              }`}
            >
              <Users className={`mx-auto mb-2 ${userType === 'organization' ? 'text-primary' : 'text-foreground/60'}`} size={20} />
              <p className="font-semibold text-foreground text-sm">Organization</p>
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {userType === 'farmer' ? 'Full Name' : 'Organization Name'}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-foreground/40" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={userType === 'farmer' ? 'John Doe' : 'Your Company'}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-foreground/40" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-foreground/40" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-foreground/40" size={20} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" required />
              <span className="text-sm text-foreground/70">
                I agree to the{' '}
                <NavLink to="/" className="text-primary hover:underline">
                  Terms of Service
                </NavLink>
              </span>
            </label>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-2"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-foreground/70">
              Already have an account?{' '}
              <NavLink to="/signin" className="text-primary font-semibold hover:underline">
                Sign in
              </NavLink>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SignUp
