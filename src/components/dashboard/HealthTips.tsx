
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Shield, Heart, Mask, DropletPlus } from "lucide-react";

const tips = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Air Pollution",
    description: "Use N95 masks when outdoors during high pollution days.",
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Mental Wellbeing",
    description: "Practice deep breathing exercises for 5 minutes daily.",
    color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
  },
  {
    icon: <Mask className="h-5 w-5" />,
    title: "Dengue Prevention",
    description: "Eliminate standing water sources around your home.",
    color: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
  },
  {
    icon: <DropletPlus className="h-5 w-5" />,
    title: "Hydration",
    description: "Increase water intake during high temperature days.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  },
];

const HealthTips = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Tips For You</CardTitle>
        <CardDescription>
          Personalized recommendations based on your environment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 transition-all hover:bg-muted"
            >
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", tip.color)}>
                {tip.icon}
              </div>
              <div>
                <h3 className="font-medium">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthTips;
