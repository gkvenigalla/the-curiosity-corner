import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Psychology = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Psychology</h1>
        <p className="text-lg text-muted-foreground">
          Understanding the human mind, behavior patterns, and the science behind how we think and feel.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Mind & Behavior</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Insights into cognitive science, behavioral psychology, and the fascinating 
              workings of the human psyche.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Dive into the complexities of human psychology.
              <br />
              Explore thoughts, emotions, and behavioral insights.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Psychology