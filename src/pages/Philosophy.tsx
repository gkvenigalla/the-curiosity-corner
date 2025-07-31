import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Philosophy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Philosophy</h1>
        <p className="text-lg text-muted-foreground">
          Deep thoughts on life, ethics, consciousness, and the fundamental questions that shape our existence.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Philosophical Inquiries</CardTitle>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This space is reserved for exploring philosophical concepts, ethical dilemmas, 
              and the timeless questions that have puzzled humanity.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              Begin your philosophical journey here.
              <br />
              Share your thoughts on existence, morality, and meaning.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Philosophy