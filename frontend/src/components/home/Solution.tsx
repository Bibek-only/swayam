import { Card } from "../ui/card";
import Carousel from "../Carousal";
import {
  CheckCircle,
  Users,
  Leaf,
  TrendingUp,
  Award,
  Sprout,
} from "lucide-react";

const solutionsData = [
  {
    id: 1,
    title: "For Farmers",
    icon: Users,
    benefits: [
      "Convert waste into income",
      "Quick buyer connections",
      "Fair pricing guaranteed",
      "Support for logistics",
    ],
    color: "border-primary",
    bgColor: "bg-primary/5",
  },
  {
    id: 2,
    title: "For Organizations",
    icon: Sprout,
    benefits: [
      "Access organic materials",
      "Direct farmer networks",
      "Quality assurance",
      "Scalable supply chain",
    ],
    color: "border-accent",
    bgColor: "bg-accent/5",
  },
  {
    id: 3,
    title: "For Environment",
    icon: Leaf,
    benefits: [
      "Reduce air pollution",
      "Prevent soil degradation",
      "Carbon footprint reduction",
      "Sustainable ecosystem",
    ],
    color: "border-primary",
    bgColor: "bg-primary/5",
  },
  {
    id: 4,
    title: "Economic Growth",
    icon: TrendingUp,
    benefits: [
      "Job creation",
      "Rural development",
      "Tax incentives",
      "Investment opportunities",
    ],
    color: "border-accent",
    bgColor: "bg-accent/5",
  },
  {
    id: 5,
    title: "Quality & Standards",
    icon: Award,
    benefits: [
      "Certified materials",
      "Testing & verification",
      "Compliance assured",
      "Best practices",
    ],
    color: "border-primary",
    bgColor: "bg-primary/5",
  },
];

const SolutionsSection = () => {
  const solutionCards = solutionsData.map((solution) => {
    const IconComponent = solution.icon;
    return (
      <Card
        key={solution.id}
        className={`p-6 ${solution.bgColor} border-2 ${solution.color} h-full hover:shadow-lg transition`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
            <IconComponent className="text-primary" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {solution.title}
          </h3>
        </div>
        <ul className="space-y-3">
          {solution.benefits.map((benefit, idx) => (
            <li key={idx} className="flex gap-2 items-start">
              <CheckCircle
                className="text-primary  flex-shrink-0 mt-1"
                size={18}
              />
              <span className="text-foreground/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </Card>
    );
  });

  return (
    <section
      id="solutions"
      className="py-20 px-4 sm:px-6 lg:px-8  from-accent/5 to-primary/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="text-primary" size={24} />
            <span className="text-primary font-semibold text-lg">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We create value for all stakeholders: farmers, organizations, and
            the environment.
          </p>
        </div>

        <div className="md:px-20">
          <Carousel items={solutionCards} itemsPerView={3} />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
