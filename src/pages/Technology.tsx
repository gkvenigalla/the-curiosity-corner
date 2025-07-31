import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Technology = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Technology</h1>
        <p className="text-lg text-muted-foreground">
          Exploring the latest in software development, emerging technologies, and digital innovation.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Getting Started</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This section will contain my notes and articles about technology trends, 
              programming concepts, and technical insights.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Ready for your first technology article! 
              <br />
              Start writing about your favorite tech topics here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Technology