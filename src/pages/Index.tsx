import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-knowledge.jpg";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  Gopi Krishna Venigalla
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Welcome to the
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    {" "}Curiosity Corner
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">A curated collection of thoughts, insights, and discoveries across technology, philosophy, psychology, business, and life.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
                  <Link to="/technology">
                    Start Exploring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <img src="/lovable-uploads/d24f51fe-946e-43c1-b5f2-2e4609e391f6.png" alt="Gopi Krishna Venigalla - Professional Portrait" className="relative w-full h-auto rounded-2xl shadow-elegant object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore Knowledge Domains
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deep into various subjects and discover insights that shape our understanding 
              of the world and ourselves.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Diverse Topics</h3>
                <p className="text-muted-foreground">
                  From technology and business to philosophy and wellness - explore a wide range of subjects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Lightbulb className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Deep Insights</h3>
                <p className="text-muted-foreground">
                  Thoughtful analysis and personal reflections on complex topics and emerging trends.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-secondary/70 transition-colors">
                  <Target className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  Regular updates with new learnings, methodologies, and practical applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;