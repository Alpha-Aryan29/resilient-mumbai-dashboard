
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet marker icons in React
// (This is needed because Leaflet expects the marker images in a specific location)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom marker icons for different risk levels
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

const highRiskIcon = createCustomIcon('#ef4444');
const mediumRiskIcon = createCustomIcon('#f59e0b');
const lowRiskIcon = createCustomIcon('#10b981');

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
  const [timeRange, setTimeRange] = useState<'week' | 'month'>('week');
  const [severityFilter, setSeverityFilter] = useState("all");
  const [map, setMap] = useState<L.Map | null>(null);
  
  // Mumbai center coordinates
  const position: [number, number] = [19.076, 72.877]; 

  // Filter data based on severity
  const filteredData = dengueData.filter(
    (spot) => severityFilter === "all" || spot.severity === severityFilter
  );

  // Count the number of areas by risk level
  const riskCounts = {
    high: dengueData.filter(spot => spot.severity === "high").length,
    medium: dengueData.filter(spot => spot.severity === "medium").length,
    low: dengueData.filter(spot => spot.severity === "low").length,
  };

  // Get the appropriate icon based on severity
  const getMarkerIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return highRiskIcon;
      case 'medium':
        return mediumRiskIcon;
      case 'low':
        return lowRiskIcon;
      default:
        return new L.Icon.Default();
    }
  };

  // Update map view when it's initialized
  useEffect(() => {
    if (map) {
      map.setView(position, 12);
    }
  }, [map, position]);

  return (
    <Card className="border shadow-sm">
      <CardHeader className="p-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <CardTitle>Dengue Outbreak Heatmap</CardTitle>
          <div className="flex flex-wrap gap-2">
            <Tabs value={timeRange} onValueChange={(value) => setTimeRange(value as 'week' | 'month')} className="w-fit">
              <TabsList>
                <TabsTrigger value="week">This Week</TabsTrigger>
                <TabsTrigger value="month">This Month</TabsTrigger>
              </TabsList>
            </Tabs>
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
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-hidden rounded-md">
          <div className="h-[500px] w-full relative">
            <MapContainer 
              className="h-full w-full"
              center={position}
              zoom={12} 
              zoomControl={false}
              scrollWheelZoom={true}
              ref={setMap}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <ZoomControl position="topleft" />
              
              {filteredData.map((spot, index) => {
                const iconInstance = getMarkerIcon(spot.severity);
                return (
                  <Marker 
                    key={index} 
                    position={[spot.lat, spot.lng]}
                    icon={iconInstance}
                  >
                    <Popup>
                      <div className="p-1">
                        <h3 className="font-medium">{spot.area}</h3>
                        <p className="text-sm">Cases: {spot.cases}</p>
                        <p className={`text-sm capitalize font-medium ${
                          spot.severity === 'high' ? 'text-red-600' : 
                          spot.severity === 'medium' ? 'text-amber-600' : 
                          'text-green-600'
                        }`}>
                          {spot.severity} risk
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 p-4 mt-2">
          <div className="bg-red-50 p-3 rounded-lg border border-red-100">
            <h3 className="text-red-600 font-medium">High Risk Areas</h3>
            <p className="text-sm text-red-800">{riskCounts.high} zones identified</p>
          </div>
          <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
            <h3 className="text-amber-600 font-medium">Medium Risk Areas</h3>
            <p className="text-sm text-amber-800">{riskCounts.medium} zones identified</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-100">
            <h3 className="text-green-600 font-medium">Low Risk Areas</h3>
            <p className="text-sm text-green-800">{riskCounts.low} zones identified</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DengueMapComponent;
