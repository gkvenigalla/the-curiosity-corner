import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const India = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Musings on India</h1>
        <p className="text-lg text-muted-foreground">
          Reflections on Indian culture, society, history, and the evolving landscape of the subcontinent.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Cultural Observations</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Insights into Indian traditions, modern transformations, and the rich 
              tapestry of life across diverse regions and communities.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Share your thoughts and observations about India.
              <br />
              Explore the complexity and beauty of Indian society.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default India