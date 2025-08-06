import { ArticleList } from "@/components/ArticleList"

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">About Me</h1>
        <p className="text-lg text-muted-foreground">
          Personal background, journey, experiences, and the story behind this knowledge collection.
        </p>
      </div>

      <ArticleList category="about" />
    </div>
  )
}

export default About