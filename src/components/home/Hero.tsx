
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/30 to-teal-400/30 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-teal-300/30 to-blue-300/30 blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent text-accent-foreground">
              <ShieldCheck className="h-4 w-4 mr-2" />
              <span>Integrated Urban Health Resilience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Smart Health</span> Resilience for Mumbai
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering Mumbai residents with real-time health insights, pollution monitoring, 
              and disease outbreak tracking to build a more resilient community.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/dashboard">
                  View Dashboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <Link to="/dengue-map">Explore Dengue Map</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">24/7</span>
                <span className="text-sm text-muted-foreground">Real-time Monitoring</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">90%</span>
                <span className="text-sm text-muted-foreground">Alert Accuracy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">150k+</span>
                <span className="text-sm text-muted-foreground">Active Users</span>
              </div>
            </div>
          </div>
          
          <div className="relative w-full max-w-md aspect-square animate-fade-in animation-delay-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-teal-400/20 animate-pulse-slow" />
            </div>
            <div className="relative p-8">
              <div className="glass-card overflow-hidden rounded-2xl card-hover transform transition-all duration-500 animate-float">
                <div className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-effect rounded-lg p-4 space-y-1">
                      <div className="text-xs text-muted-foreground">Air Quality</div>
                      <div className="text-xl font-medium flex items-center">
                        <span className="text-amber-500 font-semibold">156</span>
                        <span className="ml-1 text-xs badge badge-warning">Unhealthy</span>
                      </div>
                    </div>
                    <div className="glass-effect rounded-lg p-4 space-y-1">
                      <div className="text-xs text-muted-foreground">Temperature</div>
                      <div className="text-xl font-medium">32°C</div>
                    </div>
                    <div className="glass-effect rounded-lg p-4 space-y-1">
                      <div className="text-xs text-muted-foreground">Dengue Risk</div>
                      <div className="text-xl font-medium flex items-center">
                        <span className="text-red-500 font-semibold">High</span>
                        <span className="ml-1 text-xs badge badge-danger">Alert</span>
                      </div>
                    </div>
                    <div className="glass-effect rounded-lg p-4 space-y-1">
                      <div className="text-xs text-muted-foreground">Mental Health</div>
                      <div className="text-xl font-medium flex items-center">
                        <span className="text-green-500 font-semibold">Good</span>
                        <span className="ml-1 text-xs badge badge-success">Stable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
