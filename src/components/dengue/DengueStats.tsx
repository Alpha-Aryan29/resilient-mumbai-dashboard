
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, TrendingUp, MapPin, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const DengueStats = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Dengue Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="prevention">Prevention</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                title="Active Cases"
                value="1,245"
                icon={<AlertTriangle className="h-4 w-4" />}
                change="+12% from last week"
                status="danger"
              />
              <StatCard
                title="High Risk Areas"
                value="8"
                icon={<MapPin className="h-4 w-4" />}
                change="3 new areas this month"
                status="warning"
              />
              <StatCard
                title="Avg. Recovery Time"
                value="14 days"
                icon={<TrendingUp className="h-4 w-4" />}
                change="Stable"
                status="neutral"
              />
              <StatCard
                title="Rainfall Impact"
                value="High"
                icon={<Droplets className="h-4 w-4" />}
                change="Monsoon correlation"
                status="info"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="trends">
            <div className="p-6 text-center">
              <TrendingUp className="h-12 w-12 mx-auto text-primary/60 mb-4" />
              <h3 className="text-lg font-medium mb-2">Dengue Trend Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Trend analysis charts and data will be implemented in the next update.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="prevention">
            <div className="space-y-4 p-2">
              <PreventionTip
                title="Eliminate Standing Water"
                description="Regularly empty or cover containers that can hold water, such as flower pots, buckets, and drain trays."
              />
              <PreventionTip
                title="Use Mosquito Repellents"
                description="Apply mosquito repellent to exposed skin, especially during peak mosquito activity at dawn and dusk."
              />
              <PreventionTip
                title="Install Screens"
                description="Use window and door screens to prevent mosquitoes from entering your home."
              />
              <PreventionTip
                title="Wear Protective Clothing"
                description="Wear long-sleeved shirts and pants when outdoors, especially in high-risk areas."
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  status: "danger" | "warning" | "neutral" | "info";
}

const StatCard = ({ title, value, icon, change, status }: StatCardProps) => {
  const statusColors = {
    danger: "text-red-500",
    warning: "text-amber-500",
    neutral: "text-blue-500",
    info: "text-green-500",
  };

  return (
    <div className="glass-effect p-4 rounded-lg space-y-2">
      <div className="flex justify-between items-start">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div
          className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center",
            status === "danger" && "bg-red-100 dark:bg-red-900/20 text-red-500",
            status === "warning" && "bg-amber-100 dark:bg-amber-900/20 text-amber-500",
            status === "neutral" && "bg-blue-100 dark:bg-blue-900/20 text-blue-500",
            status === "info" && "bg-green-100 dark:bg-green-900/20 text-green-500"
          )}
        >
          {icon}
        </div>
      </div>
      <div className={cn("text-xl font-semibold", statusColors[status])}>{value}</div>
      <div className="text-xs text-muted-foreground">{change}</div>
    </div>
  );
};

interface PreventionTipProps {
  title: string;
  description: string;
}

const PreventionTip = ({ title, description }: PreventionTipProps) => (
  <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-500 mt-0.5">
      <AlertTriangle className="h-3 w-3" />
    </div>
    <div>
      <h4 className="font-medium text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default DengueStats;
