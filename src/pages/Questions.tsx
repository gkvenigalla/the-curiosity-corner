import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Questions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Tough Questions</h1>
        <p className="text-lg text-muted-foreground">
          Challenging inquiries, moral dilemmas, and complex problems that don't have easy answers.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Deep Inquiries</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Exploring difficult questions about life, society, ethics, and human nature 
              that require careful consideration and nuanced thinking.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Pose and explore challenging questions.
              <br />
              Dive into complex issues that demand deeper reflection.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Questions