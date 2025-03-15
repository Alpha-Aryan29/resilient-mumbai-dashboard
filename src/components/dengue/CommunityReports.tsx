
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Plus, Calendar, LocateFixed } from "lucide-react";
import { cn } from "@/lib/utils";

const reports = [
  {
    id: 1,
    location: "Dadar West",
    details: "Standing water in construction site near Dadar station",
    dateReported: "Today, 10:30 AM",
    status: "pending" as const,
    upvotes: 12,
  },
  {
    id: 2,
    location: "Andheri East",
    details: "Multiple dengue cases reported in apartment complex",
    dateReported: "Yesterday, 2:15 PM",
    status: "investigating" as const,
    upvotes: 34,
  },
  {
    id: 3,
    location: "Bandra Kurla Complex",
    details: "Mosquito breeding near drainage area",
    dateReported: "2 days ago",
    status: "resolved" as const,
    upvotes: 8,
  },
  {
    id: 4,
    location: "Powai",
    details: "Stagnant water in empty lots near lake",
    dateReported: "1 week ago",
    status: "resolved" as const,
    upvotes: 22,
  },
];

const CommunityReports = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Community Reports</CardTitle>
        <Button size="sm" className="h-8">
          <Plus className="h-4 w-4 mr-1" />
          Report Issue
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface ReportCardProps {
  report: {
    id: number;
    location: string;
    details: string;
    dateReported: string;
    status: "pending" | "investigating" | "resolved";
    upvotes: number;
  };
}

const ReportCard = ({ report }: ReportCardProps) => {
  const statusColors = {
    pending: "text-amber-500 bg-amber-100 dark:bg-amber-900/20",
    investigating: "text-blue-500 bg-blue-100 dark:bg-blue-900/20",
    resolved: "text-green-500 bg-green-100 dark:bg-green-900/20",
  };

  const statusLabels = {
    pending: "Pending Review",
    investigating: "Under Investigation",
    resolved: "Resolved",
  };

  return (
    <div className="glass-effect p-4 rounded-lg transition-all hover:bg-background/80">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <LocateFixed className="h-4 w-4 text-primary" />
          <span className="font-medium">{report.location}</span>
        </div>
        <div
          className={cn(
            "text-xs px-2 py-0.5 rounded-full",
            statusColors[report.status]
          )}
        >
          {statusLabels[report.status]}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{report.details}</p>
      
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          {report.dateReported}
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Upvote ({report.upvotes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityReports;
