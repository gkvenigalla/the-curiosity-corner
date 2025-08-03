import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Technology = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Technology & AI</h1>
        <p className="text-lg text-muted-foreground">
          Exploring artificial intelligence, emerging technologies, software development, and digital innovation.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">AI & Innovation</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Deep dives into artificial intelligence, machine learning, software engineering, 
              and the transformative impact of technology on society.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Explore the frontiers of technology and AI.
              <br />
              Share insights on digital transformation and innovation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Technology