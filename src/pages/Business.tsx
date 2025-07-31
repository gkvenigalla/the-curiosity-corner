import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Business = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Business</h1>
        <p className="text-lg text-muted-foreground">
          Strategic insights, entrepreneurship, market trends, and the art of building successful ventures.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Business Strategy</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Thoughts on business development, leadership principles, and navigating 
              the entrepreneurial landscape.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Share your business wisdom and strategic insights.
              <br />
              Document lessons learned and growth strategies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Business