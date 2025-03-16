
import React from "react";
import Layout from "@/components/layout/Layout";
import { PageContainer } from "@/components/layout/PageContainer";
import { VoiceAssistant } from "@/components/mental-health/VoiceAssistant";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, PhoneCall, Calendar, Heart, RefreshCcw } from "lucide-react";

const MentalHealth = () => {
  return (
    <Layout>
      <PageContainer>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Mental Health Support</h1>
            <p className="mt-2 text-muted-foreground">
              Access mental health resources, schedule consultations, and get immediate support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  24/7 Helpline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Immediate support from trained professionals, anytime you need it.</p>
                <Button className="w-full">Call Now</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Book Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Schedule a video call with a mental health professional.</p>
                <Button variant="outline" className="w-full">Book Appointment</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Community Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Connect with others who understand what you're going through.</p>
                <Button variant="outline" className="w-full">Join Group</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  AI Mental Health Assistant
                </CardTitle>
                <CardDescription>
                  Talk with our virtual assistant for immediate support and guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <VoiceAssistant />
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCcw className="h-5 w-5 text-primary" />
                  Daily Wellness Check
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Take a moment to reflect on your mental well-being. How are you feeling today?
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">😊 Great</Button>
                  <Button variant="outline" size="sm">😐 Okay</Button>
                  <Button variant="outline" size="sm">😔 Down</Button>
                  <Button variant="outline" size="sm">😰 Anxious</Button>
                  <Button variant="outline" size="sm">😴 Tired</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </Layout>
  );
};

export default MentalHealth;
