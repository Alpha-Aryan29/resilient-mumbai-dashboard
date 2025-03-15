
import React from "react";
import { cn } from "@/lib/utils";
import { Shield, AlertTriangle, Heart, Sun } from "lucide-react";

interface HealthStatusProps {
  title: string;
  value: string | number;
  status: "good" | "warning" | "danger" | "neutral";
  icon: React.ReactNode;
  info?: string;
}

const HealthStatusCard = ({ title, value, status, icon, info }: HealthStatusProps) => {
  const statusColors = {
    good: "text-green-500 bg-green-50 dark:bg-green-900/20",
    warning: "text-amber-500 bg-amber-50 dark:bg-amber-900/20",
    danger: "text-red-500 bg-red-50 dark:bg-red-900/20",
    neutral: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
  };

  return (
    <div className="glass-card p-6 flex flex-col h-full">
      <div className="flex justify-between items-start">
        <div className="text-xl font-medium">{title}</div>
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            statusColors[status]
          )}
        >
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-end">
        <div
          className={cn(
            "text-3xl font-bold",
            status === "good" && "text-green-500",
            status === "warning" && "text-amber-500",
            status === "danger" && "text-red-500",
            status === "neutral" && "text-blue-500"
          )}
        >
          {value}
        </div>
        {info && <div className="ml-2 text-sm text-muted-foreground">{info}</div>}
      </div>
    </div>
  );
};

export const AirQualityCard = () => (
  <HealthStatusCard
    title="Air Quality Index"
    value={156}
    status="warning"
    icon={<Shield className="h-5 w-5" />}
    info="Unhealthy"
  />
);

export const DengueRiskCard = () => (
  <HealthStatusCard
    title="Dengue Risk"
    value="High"
    status="danger"
    icon={<AlertTriangle className="h-5 w-5" />}
    info="Alert in your area"
  />
);

export const MentalHealthCard = () => (
  <HealthStatusCard
    title="Mental Wellbeing"
    value="Good"
    status="good"
    icon={<Heart className="h-5 w-5" />}
    info="Stable"
  />
);

export const WeatherCard = () => (
  <HealthStatusCard
    title="Temperature"
    value="32°C"
    status="neutral"
    icon={<Sun className="h-5 w-5" />}
    info="Feels like 36°C"
  />
);
