import { Card } from "../ui/card";
import Carousel from "../Carousal";
import { Star, MessageSquare } from "lucide-react";

const feedbackData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Farmer, Punjab",
    image: "👨‍🌾",
    rating: 5,
    message:
      "Swayam helped me convert my stubbles into income. The platform is easy to use and the buyers are trustworthy. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Organization Manager",
    image: "👩‍💼",
    rating: 5,
    message:
      "We found high-quality organic materials through Swayam. The transparency and reliability make this platform invaluable for our business.",
  },
  {
    id: 3,
    name: "Harjeet Patel",
    role: "Farmer, Haryana",
    image: "👨‍🌾",
    rating: 5,
    message:
      "No more burning fields! I earned good money from my stubbles and helped the environment. This platform is a game-changer!",
  },
  {
    id: 4,
    name: "Neha Sharma",
    role: "CSR Director",
    image: "👩‍💼",
    rating: 5,
    message:
      "Perfect platform for our sustainability initiatives. We can source organic materials while supporting farmers directly.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Farmer, Uttarakhand",
    image: "👨‍🌾",
    rating: 5,
    message:
      "The payment system is transparent and quick. Swayam has truly transformed how I manage my farm waste.",
  },
];

const FeedbackSection = () => {
  const feedbackCards = feedbackData.map((feedback) => (
    <Card
      key={feedback.id}
      className="p-6 bg-white border border-border hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4 items-start flex-1">
          <div className="text-4xl">{feedback.image}</div>
          <div>
            <h3 className="font-semibold text-foreground">{feedback.name}</h3>
            <p className="text-sm text-foreground/60">{feedback.role}</p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: feedback.rating }).map((_, i) => (
            <Star key={i} size={16} className="fill-accent text-accent" />
          ))}
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed">"{feedback.message}"</p>
    </Card>
  ));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="text-primary" size={24} />
            <span className="text-primary font-semibold text-lg">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What People Are Saying
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Real feedback from farmers and organizations using Swayam.
          </p>
        </div>

        <div className="md:px-20">
          <Carousel items={feedbackCards} itemsPerView={2} />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
