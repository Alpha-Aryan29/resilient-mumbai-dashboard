
import React from "react";
import Layout from "@/components/layout/Layout";
import PageContainer from "@/components/layout/PageContainer";
import DengueMapComponent from "@/components/dengue/DengueMap";
import DengueStats from "@/components/dengue/DengueStats";
import CommunityReports from "@/components/dengue/CommunityReports";

const DengueMapPage = () => {
  return (
    <Layout>
      <PageContainer>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dengue Outbreak Tracker</h1>
          <p className="text-muted-foreground">
            Real-time visualization of dengue-affected areas in Mumbai
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DengueMapComponent />
          </div>
          <div className="space-y-6">
            <DengueStats />
            <CommunityReports />
          </div>
        </div>
      </PageContainer>
    </Layout>
  );
};

export default DengueMapPage;
