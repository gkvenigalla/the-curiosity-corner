import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">About Me</h1>
        <p className="text-lg text-muted-foreground">
          Personal background, journey, experiences, and the story behind this knowledge collection.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">My Journey</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The experiences, influences, and perspectives that have shaped my thinking 
              across various domains of knowledge and life.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Share your personal story and background.
              <br />
              Connect with visitors through your unique perspective.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About