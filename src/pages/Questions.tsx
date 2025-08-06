import { ArticleList } from "@/components/ArticleList"

const Questions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Tough Questions</h1>
        <p className="text-lg text-muted-foreground">
          Challenging inquiries, moral dilemmas, and complex problems that don't have easy answers.
        </p>
      </div>

      <ArticleList category="questions" />
    </div>
  )
}

export default Questions