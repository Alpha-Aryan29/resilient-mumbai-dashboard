
import React from "react";
import Layout from "@/components/layout/Layout";
import PageContainer from "@/components/layout/PageContainer";
import {
  AirQualityCard,
  DengueRiskCard,
  MentalHealthCard,
  WeatherCard,
} from "@/components/dashboard/HealthStatusCard";
import HealthMetricsChart from "@/components/dashboard/HealthMetricsChart";
import RecentAlerts from "@/components/dashboard/RecentAlerts";
import HealthTips from "@/components/dashboard/HealthTips";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Health Dashboard</h1>
            <p className="text-muted-foreground">
              Your personal health metrics and environmental conditions
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="gap-1">
              <RefreshCw className="h-4 w-4" />
              <span>Refresh</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <AirQualityCard />
          <DengueRiskCard />
          <MentalHealthCard />
          <WeatherCard />
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pollution">Pollution</TabsTrigger>
            <TabsTrigger value="dengue">Dengue</TabsTrigger>
            <TabsTrigger value="mental">Mental Health</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <HealthMetricsChart />
              </div>
              <div>
                <RecentAlerts />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="pollution" className="pt-4">
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Pollution Data View</h3>
              <p className="text-muted-foreground">
                Detailed pollution analysis will be available in the next update.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="dengue" className="pt-4">
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Dengue Tracking View</h3>
              <p className="text-muted-foreground">
                Detailed dengue analysis will be available in the next update.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="mental" className="pt-4">
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Mental Health Analysis</h3>
              <p className="text-muted-foreground">
                Detailed mental health analytics will be available in the next update.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-8">
          <HealthTips />
        </div>
      </PageContainer>
    </Layout>
  );
};

export default Dashboard;
