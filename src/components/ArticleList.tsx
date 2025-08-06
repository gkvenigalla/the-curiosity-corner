import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { supabase, type Article } from '@/lib/supabase'

interface ArticleListProps {
  category: string
}

export const ArticleList = ({ category }: ArticleListProps) => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [category])

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('category', category)
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <Card key={article.id} className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{article.title}</CardTitle>
              <Badge variant="outline">
                {new Date(article.created_at).toLocaleDateString()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {article.excerpt}
            </p>
            <Button variant="outline" size="sm">
              Read More
            </Button>
          </CardContent>
        </Card>
      ))}
      
      {articles.length === 0 && (
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              No articles published yet in this category.
              <br />
              Check back soon for new content!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}