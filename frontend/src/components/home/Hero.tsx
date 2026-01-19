import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Zap, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8  from-primary/5 via-white to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            <span className="text-primary">Sustainable Agriculture</span>
            <br />
            <span>Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 text-balance max-w-3xl mx-auto mb-8">
            Connect with farmers to responsibly manage organic stubbles, prevent agricultural waste burning, and create sustainable income opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
              asChild
            >
              <NavLink to="/farmers">Explore Farmers</NavLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 bg-transparent"
              asChild
            >
              <NavLink to="/organizations">For Organizations</NavLink>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Leaf className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Eco-Friendly
            </h3>
            <p className="text-foreground/70">
              Prevent stubble burning and protect the environment while creating value.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Zap className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Quick Connection
            </h3>
            <p className="text-foreground/70">
              Instantly connect farmers with organizations seeking organic materials.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <BarChart3 className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Fair Pricing
            </h3>
            <p className="text-foreground/70">
              Get competitive rates for your organic stubbles and increase farm income.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection