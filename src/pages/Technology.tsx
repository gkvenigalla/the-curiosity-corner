import { ArticleList } from "@/components/ArticleList"

const Technology = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Technology & AI</h1>
        <p className="text-lg text-muted-foreground">
          Exploring artificial intelligence, emerging technologies, software development, and digital innovation.
        </p>
      </div>

      <ArticleList category="technology" />
    </div>
  )
}

export default Technology