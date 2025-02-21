import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users, MapPin, Network, Code, Globe, Lightbulb, ArrowRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
const Index = () => {
  const [showHearts, setShowHearts] = useState(false);
  const [hearts, setHearts] = useState<{
    id: number;
    left: string;
  }[]>([]);
  const createHeart = useCallback(() => {
    const id = Date.now();
    const left = `${Math.random() * 100}%`;
    return {
      id,
      left
    };
  }, []);
  const handleHeartHover = () => {
    setShowHearts(true);
    const newHearts = Array.from({
      length: 15
    }, createHeart);
    setHearts(newHearts);
    setTimeout(() => {
      setShowHearts(false);
      setHearts([]);
    }, 2000);
  };
  const featuredCommunities = [{
    name: "Stockholm Tech Hub",
    type: "Local",
    members: 234,
    description: "Connect with fellow entrepreneurs in Stockholm's vibrant tech scene.",
    icon: MapPin
  }, {
    name: "App Distribution Network",
    type: "Thematic",
    members: 567,
    description: "Share strategies and insights about app distribution and growth.",
    icon: Network
  }, {
    name: "Berlin Startup Circle",
    type: "Local",
    members: 342,
    description: "Join Berlin's most active community of tech entrepreneurs and innovators.",
    icon: MapPin
  }, {
    name: "AI Integration Guild",
    type: "Thematic",
    members: 891,
    description: "Explore AI integration strategies and best practices for your applications.",
    icon: Code
  }, {
    name: "Global Founders Network",
    type: "Thematic",
    members: 1205,
    description: "Connect with founders worldwide and share your entrepreneurial journey.",
    icon: Globe
  }, {
    name: "London Innovation Lab",
    type: "Local",
    members: 456,
    description: "Collaborate with London's brightest minds on cutting-edge tech solutions.",
    icon: Lightbulb
  }];
  return <div className="min-h-screen">
      <div className={`heart-shower ${showHearts ? 'active' : ''}`}>
        {hearts.map(heart => <div key={heart.id} className="floating-heart" style={{
        left: heart.left
      }} />)}
      </div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="heart animate-heartbeat" onMouseEnter={handleHeartHover} />
            <Badge variant="secondary" className="mb-6 animate-fadeIn">
              Join the Community
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight animate-fadeIn [animation-delay:200ms]">Connect + Collaborate + Grow = Lovpreneurs</h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fadeIn [animation-delay:400ms]">Join thriving communities of lovpreneurs, share insights, and build meaningful connections that help your business grow.</p>
            <div className="flex items-center justify-center gap-4 animate-fadeIn [animation-delay:600ms]">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Communities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Communities</h2>
            <p className="text-muted-foreground">
              Join active communities that match your interests and location
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredCommunities.map(community => <Card key={community.name} className="glass-card p-6 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${community.type === "Local" ? "bg-community-local" : "bg-community-thematic"}`}>
                    <community.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{community.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {community.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {community.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{community.members} members</span>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Index;