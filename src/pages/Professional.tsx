import { ArticleList } from "@/components/ArticleList"

const Professional = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Professional Topics</h1>
        <p className="text-lg text-muted-foreground">
          Career insights, industry trends, professional development, and workplace wisdom.
        </p>
      </div>

      <ArticleList category="professional" />
    </div>
  )
}

export default Professional