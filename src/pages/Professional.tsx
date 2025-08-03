import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Professional = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Professional Topics</h1>
        <p className="text-lg text-muted-foreground">
          Career insights, industry trends, professional development, and workplace wisdom.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Career Development</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Thoughts on career growth, professional skills, leadership, and navigating 
              the modern workplace landscape.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Share your professional experiences and insights.
              <br />
              Document lessons learned and career wisdom.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Professional