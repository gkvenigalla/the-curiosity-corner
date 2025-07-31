import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Health = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Health & Wellness</h1>
        <p className="text-lg text-muted-foreground">
          Holistic approaches to physical health, mental wellbeing, and living a balanced life.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Wellness Journey</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Exploring nutrition, fitness, mindfulness, and sustainable practices 
              for long-term health and vitality.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Begin documenting your wellness insights.
              <br />
              Share tips, research, and personal health discoveries.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Health