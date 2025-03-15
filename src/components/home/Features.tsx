
import React from "react";
import { cn } from "@/lib/utils";
import { Map, MessageCircle, Shield, Activity } from "lucide-react";

const features = [
  {
    icon: <Map className="h-6 w-6" />,
    title: "Dengue Heatmap",
    description: "Interactive visualization of dengue-affected areas with real-time data on infection density and risk zones.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Mental Health Assistant",
    description: "AI-powered voice assistant that analyzes tone and emotions to provide personalized mental health guidance.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Pollution Monitoring",
    description: "Real-time pollution monitoring with personalized health alerts based on your location and environmental conditions.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Health Insights Dashboard",
    description: "Personalized health reports showing pollution exposure history, mental health trends, and preventive healthcare tips.",
    color: "from-emerald-500 to-green-500",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Comprehensive Health Resilience Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform integrates multiple health monitoring systems to provide a holistic view of urban health challenges in Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 rounded-xl shadow-subtle p-6 transition-all duration-300 card-hover"
            >
              <div
                className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
                  feature.color
                )}
              />
              <div
                className={cn(
                  "w-12 h-12 mb-4 rounded-lg flex items-center justify-center text-white bg-gradient-to-br",
                  feature.color
                )}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
