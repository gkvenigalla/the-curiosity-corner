import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Productivity = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Productivity</h1>
        <p className="text-lg text-muted-foreground">
          Systems, tools, and methodologies for optimizing performance and achieving meaningful goals.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Efficiency Systems</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Time management techniques, workflow optimization, and productivity 
              frameworks that drive results.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Document your productivity experiments and findings.
              <br />
              Share systems that help achieve more with less effort.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Productivity