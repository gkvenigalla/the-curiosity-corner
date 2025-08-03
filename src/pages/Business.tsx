import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Business = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Business & Investments</h1>
        <p className="text-lg text-muted-foreground">
          Strategic insights, investment philosophy, market analysis, and entrepreneurial ventures.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Investment Strategy</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Investment principles, market insights, business development strategies, 
              and financial wisdom for building wealth and successful enterprises.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Share your business and investment insights.
              <br />
              Document strategies for building wealth and successful ventures.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Business