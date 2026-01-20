"use client";

import { Card } from "../ui/card";
import Carousel from "../Carousal";
import {
  AlertCircle,
  Flame,
  Cloud,
  DollarSign,
  TreePine,
  TrendingDown,
} from "lucide-react";

const problemsData = [
  {
    id: 1,
    icon: Flame,
    title: "Stubble Burning",
    description:
      "Farmers often burn stubbles to clear fields quickly, causing severe air pollution.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: 2,
    icon: Cloud,
    title: "Air Quality Crisis",
    description:
      "Burning agricultural waste releases harmful pollutants affecting public health.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    id: 3,
    icon: TreePine,
    title: "Soil Degradation",
    description:
      "Repeated burning reduces soil fertility and damages long-term productivity.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Lost Income",
    description:
      "Farmers waste valuable organic material that could generate additional income.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    id: 5,
    icon: TrendingDown,
    title: "Economic Impact",
    description:
      "Communities face health costs and decreased productivity from pollution.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
];

const ProblemsSection = () => {
  const problemCards = problemsData.map((problem) => {
    const IconComponent = problem.icon;
    return (
      <Card
        key={problem.id}
        className={`p-6 ${problem.bgColor} border-0 h-full hover:shadow-lg transition`}
      >
        <div
          className={`w-12 h-12 rounded-lg ${problem.bgColor} flex items-center justify-center mb-4`}
        >
          <IconComponent className={problem.color} size={24} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {problem.title}
        </h3>
        <p className="text-foreground/70">{problem.description}</p>
      </Card>
    );
  });

  return (
    <section id="problems" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="text-red-500" size={24} />
            <span className="text-primary font-semibold text-lg">
              The Challenge
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Problems We Solve
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Agricultural stubble burning poses severe environmental and health
            challenges across the region.
          </p>
        </div>

        <div className="md:px-20">
          <Carousel items={problemCards} itemsPerView={3} />
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
