import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Learning = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Learning</h1>
        <p className="text-lg text-muted-foreground">
          Techniques for continuous growth, knowledge acquisition, and mastering new skills effectively.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Knowledge Acquisition</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Study methods, learning frameworks, and strategies for rapid skill 
              development and knowledge retention.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Capture your learning methodologies and insights.
              <br />
              Share techniques that accelerate understanding and retention.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Learning