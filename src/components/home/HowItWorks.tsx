
import React from "react";
import { cn } from "@/lib/utils";
import { Smartphone, AlertTriangle, UserCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Connect Your Device",
    description: "Download our app and enable location sharing to receive personalized health alerts.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Get Real-time Alerts",
    description: "Receive notifications about pollution levels, disease outbreaks, and health recommendations.",
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Take Preventive Actions",
    description: "Follow personalized health guidance to minimize health risks in your area.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform simplifies urban health monitoring to keep you informed and protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="text-primary/60 h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
