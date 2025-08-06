import { ArticleList } from "@/components/ArticleList"

const India = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Musings on India</h1>
        <p className="text-lg text-muted-foreground">
          Reflections on Indian culture, society, history, and the evolving landscape of the subcontinent.
        </p>
      </div>

      <ArticleList category="india" />
    </div>
  )
}

export default India