import { ArticleList } from "@/components/ArticleList"

const Business = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Business & Investments</h1>
        <p className="text-lg text-muted-foreground">
          Strategic insights, investment philosophy, market analysis, and entrepreneurial ventures.
        </p>
      </div>

      <ArticleList category="business" />
    </div>
  )
}

export default Business