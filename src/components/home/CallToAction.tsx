
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Take Control of Your Urban Health Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of Mumbai residents who are using our platform to stay informed, 
            protected, and resilient against urban health challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/dashboard">
                Get Started Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/mental-health">Try Mental Health Assistant</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
