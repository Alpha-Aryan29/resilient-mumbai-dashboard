
import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "This app has been a game-changer for managing my family's health during dengue season. The real-time alerts help us avoid high-risk areas.",
    author: "Priya Sharma",
    role: "Parent & Teacher",
    rating: 5,
  },
  {
    content: "As someone with respiratory issues, the pollution monitoring feature has helped me plan my outdoor activities and significantly reduced my health issues.",
    author: "Rajesh Mehta",
    role: "Software Engineer",
    rating: 5,
  },
  {
    content: "The mental health assistant provides practical coping strategies when I'm feeling stressed. It's like having a supportive friend in my pocket.",
    author: "Ananya Patel",
    role: "College Student",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Mumbai Residents Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from people using our platform to improve their health resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted stroke-muted"
                    )}
                  />
                ))}
              </div>
              <p className="text-foreground/90 italic">"{testimonial.content}"</p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
