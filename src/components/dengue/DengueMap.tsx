
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Filter, Map } from "lucide-react";

// Mock data for dengue hotspots
const dengueData = [
  { lat: 19.076, lng: 72.877, cases: 120, severity: "high", area: "Dadar" },
  { lat: 19.058, lng: 72.833, cases: 75, severity: "medium", area: "Bandra" },
  { lat: 19.113, lng: 72.869, cases: 45, severity: "medium", area: "Andheri" },
  { lat: 19.033, lng: 72.855, cases: 90, severity: "high", area: "Worli" },
  { lat: 19.021, lng: 72.847, cases: 30, severity: "low", area: "Lower Parel" },
  { lat: 19.006, lng: 72.817, cases: 60, severity: "medium", area: "Mahim" },
  { lat: 19.048, lng: 72.921, cases: 110, severity: "high", area: "Ghatkopar" },
  { lat: 19.175, lng: 72.948, cases: 25, severity: "low", area: "Mulund" },
  { lat: 19.090, lng: 72.910, cases: 55, severity: "medium", area: "Kurla" },
];

const DengueMapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [dateRange, setDateRange] = useState([50]);
  const [severityFilter, setSeverityFilter] = useState("all");

  // For demo purposes - simulating filter functionality
  const filteredData = dengueData.filter(
    (spot) => severityFilter === "all" || spot.severity === severityFilter
  );

  return (
    <Card className="border-0 shadow-none bg-transparent h-full">
      <CardHeader className="p-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <CardTitle>Dengue Outbreak Map</CardTitle>
          <div className="flex flex-wrap gap-2">
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-36 h-9">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severity</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="h-9">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Last 30 Days</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="glass-card p-0 overflow-hidden rounded-lg">
          <div className="bg-gray-100 dark:bg-gray-800 h-[500px] relative">
            {/* Map placeholder - would be replaced with actual map implementation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 flex items-center justify-center">
              <div className="text-center px-4">
                <Map className="h-16 w-16 mx-auto text-primary/60 mb-4" />
                <h3 className="text-xl font-medium mb-2">Interactive Dengue Heatmap</h3>
                <p className="text-muted-foreground mb-4">
                  This component would display a real-time heatmap of dengue-affected areas in Mumbai using mapping libraries like Leaflet.js or Google Maps API.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-6">
                  {filteredData.map((spot, i) => (
                    <div 
                      key={i}
                      className={`text-center p-2 rounded-lg ${
                        spot.severity === 'high' ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                        spot.severity === 'medium' ? 'bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' :
                        'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                      }`}
                    >
                      <div className="font-medium">{spot.area}</div>
                      <div className="text-xs">{spot.cases} cases</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="text-sm text-muted-foreground">Time Range:</div>
              <div className="flex-1">
                <Slider
                  value={dateRange}
                  max={100}
                  step={1}
                  onValueChange={setDateRange}
                  className="w-full"
                />
              </div>
              <div className="text-sm font-medium">Last {dateRange[0]} days</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DengueMapComponent;
