
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, AlertTriangle, Thermometer, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  {
    id: 1,
    type: "pollution",
    title: "High Pollution Alert",
    description: "AQI levels exceeding 150 in your area. Consider limiting outdoor activities.",
    time: "2 hours ago",
    severity: "warning",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    id: 2,
    type: "dengue",
    title: "Dengue Outbreak Alert",
    description: "Multiple dengue cases reported in Bandra. Take precautionary measures.",
    time: "6 hours ago",
    severity: "danger",
    icon: <AlertTriangle className="h-4 w-4" />,
  },
  {
    id: 3,
    type: "weather",
    title: "Heat Advisory",
    description: "Temperatures expected to reach 36°C tomorrow. Stay hydrated.",
    time: "1 day ago",
    severity: "warning",
    icon: <Thermometer className="h-4 w-4" />,
  },
  {
    id: 4,
    type: "flood",
    title: "Heavy Rain Warning",
    description: "Heavy rainfall expected in South Mumbai. Potential flooding in low-lying areas.",
    time: "1 day ago",
    severity: "info",
    icon: <Droplets className="h-4 w-4" />,
  },
];

const RecentAlerts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>
          Health and environmental alerts for your area
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            className={cn(
              "transition-all hover:translate-x-1 cursor-pointer",
              alert.severity === "danger" && "border-red-500/50 dark:border-red-500/40",
              alert.severity === "warning" && "border-amber-500/50 dark:border-amber-500/40",
              alert.severity === "info" && "border-blue-500/50 dark:border-blue-500/40"
            )}
          >
            <div className="flex gap-2">
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                  alert.severity === "danger" && "bg-red-100 dark:bg-red-900/20 text-red-500",
                  alert.severity === "warning" && "bg-amber-100 dark:bg-amber-900/20 text-amber-500",
                  alert.severity === "info" && "bg-blue-100 dark:bg-blue-900/20 text-blue-500"
                )}
              >
                {alert.icon}
              </div>
              <div className="flex-1">
                <AlertTitle className="flex justify-between">
                  <span>{alert.title}</span>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </AlertTitle>
                <AlertDescription className="text-sm text-muted-foreground">
                  {alert.description}
                </AlertDescription>
              </div>
            </div>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentAlerts;
