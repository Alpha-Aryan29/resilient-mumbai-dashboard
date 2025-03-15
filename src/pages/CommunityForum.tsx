
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageContainer from "@/components/layout/PageContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Flag,
  ThumbsUp,
  MessageCircle,
  Share,
  Filter,
  PlusCircle,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample data for forum posts
const forumPosts = [
  {
    id: 1,
    author: "Dr. Sharma",
    avatar: "DR",
    title: "Increased dengue cases in Bandra area",
    content:
      "I've noticed a significant rise in dengue cases in my clinic over the past week. Most patients are from the Bandra East area. Has anyone else observed similar patterns?",
    date: "2 hours ago",
    likes: 24,
    comments: 8,
    category: "alerts",
    tags: ["dengue", "outbreak", "bandra"],
  },
  {
    id: 2,
    author: "Environmental Activist",
    avatar: "EA",
    title: "Volunteers needed for drainage cleanup",
    content:
      "We're organizing a community drainage cleanup this weekend to reduce mosquito breeding sites. Looking for volunteers in the Dadar area. Please comment if you can join us.",
    date: "5 hours ago",
    likes: 42,
    comments: 15,
    category: "community",
    tags: ["volunteer", "cleanup", "prevention"],
  },
  {
    id: 3,
    author: "Mental Health Expert",
    avatar: "MH",
    title: "Free online stress management workshop",
    content:
      "I'll be hosting a free online workshop on stress management techniques especially useful during disease outbreaks. The session will be held this Saturday at 4 PM. Link to register in comments.",
    date: "1 day ago",
    likes: 56,
    comments: 12,
    category: "resources",
    tags: ["mental-health", "workshop", "stress"],
  },
  {
    id: 4,
    author: "City Health Official",
    avatar: "CH",
    title: "Official update on pollution levels",
    content:
      "The Air Quality Index has reached hazardous levels in several areas today. Please limit outdoor activities and wear masks if you must go outside. Especially risky for those with respiratory conditions.",
    date: "8 hours ago",
    likes: 87,
    comments: 32,
    category: "alerts",
    tags: ["pollution", "air-quality", "safety"],
  },
];

const ForumPost = ({ post }: { post: typeof forumPosts[0] }) => {
  return (
    <Card className="mb-4 transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              {post.avatar}
            </div>
            <div>
              <h3 className="font-medium text-lg">{post.title}</h3>
              <p className="text-sm text-muted-foreground">
                Posted by {post.author} • {post.date}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Flag className="h-4 w-4" />
            <span className="sr-only">Report</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{post.content}</p>
        <div className="flex gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{post.comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm">
          <Share className="h-4 w-4 mr-1" />
          <span>Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Layout>
      <PageContainer>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Community Forum</h1>
          <p className="text-muted-foreground">
            Connect, share insights, and stay updated with your community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <Tabs
                defaultValue="all"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full sm:w-auto"
              >
                <TabsList>
                  <TabsTrigger value="all">All Posts</TabsTrigger>
                  <TabsTrigger value="alerts">Health Alerts</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
                <Button size="sm" className="gap-1 ml-auto sm:ml-0">
                  <PlusCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">New Post</span>
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              {forumPosts.map((post) => (
                <ForumPost key={post.id} post={post} />
              ))}
            </TabsContent>
            
            <TabsContent value="alerts" className="mt-0">
              {forumPosts
                .filter((post) => post.category === "alerts")
                .map((post) => (
                  <ForumPost key={post.id} post={post} />
                ))}
            </TabsContent>
            
            <TabsContent value="community" className="mt-0">
              {forumPosts
                .filter((post) => post.category === "community")
                .map((post) => (
                  <ForumPost key={post.id} post={post} />
                ))}
            </TabsContent>
            
            <TabsContent value="resources" className="mt-0">
              {forumPosts
                .filter((post) => post.category === "resources")
                .map((post) => (
                  <ForumPost key={post.id} post={post} />
                ))}
            </TabsContent>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Post</CardTitle>
                <CardDescription>
                  Share health insights or ask questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Post title" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Write your post here..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <div>
                    <Input placeholder="Add tags (separated by commas)" />
                  </div>
                  <Button className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Post to Community
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 w-10 h-10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Members</p>
                      <p className="font-semibold">1,245</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400 w-10 h-10 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Posts</p>
                      <p className="font-semibold">5,723</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 w-10 h-10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Reports Submitted</p>
                      <p className="font-semibold">832</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 w-10 h-10 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Online Right Now</p>
                      <p className="font-semibold">87</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Search Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search posts, topics, or tags..."
                    className="pl-9"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </Layout>
  );
};

export default CommunityForum;
