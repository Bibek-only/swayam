import React from "react"

import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Lock, Leaf } from 'lucide-react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // Mock authentication - in production, call your API
    if (formData.email && formData.password) {
      // Store user session (mock)
      localStorage.setItem('user', JSON.stringify({ email: formData.email }));
      // Redirect based on email
      if (formData.email.includes('org')) {
        navigate('/organization/dashboard');
      } else if (formData.email.includes('admin')) {
        navigate('/admin/dashboard');
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
          <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-foreground/60 mb-6">
            Sign in to your Swayam account
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-foreground/70">Remember me</span>
              </label>
              <NavLink to="/" className="text-sm text-primary hover:underline">
                Forgot password?
              </NavLink>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-2"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-foreground/70">
              Don't have an account?{' '}
              <NavLink to="/signup" className="text-primary font-semibold hover:underline">
                Sign up
              </NavLink>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm font-semibold text-foreground mb-2">Demo Credentials:</p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li><strong>Farmer:</strong> farmer@demo.com</li>
              <li><strong>Organization:</strong> org@demo.com</li>
              <li><strong>Admin:</strong> admin@demo.com</li>
              <li><strong>Password:</strong> demo123</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}


export default SignIn