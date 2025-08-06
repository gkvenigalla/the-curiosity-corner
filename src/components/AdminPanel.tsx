import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { supabase, type Article } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

const categories = [
  'professional',
  'india',
  'technology',
  'business',
  'questions',
  'about'
]

export const AdminPanel = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentArticle, setCurrentArticle] = useState<Partial<Article>>({
    title: '',
    content: '',
    excerpt: '',
    category: 'professional',
    published: false
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
    }
  }

  const handleSave = async () => {
    try {
      if (isEditing && currentArticle.id) {
        const { error } = await supabase
          .from('articles')
          .update({
            title: currentArticle.title,
            content: currentArticle.content,
            excerpt: currentArticle.excerpt,
            category: currentArticle.category,
            published: currentArticle.published,
            updated_at: new Date().toISOString()
          })
          .eq('id', currentArticle.id)

        if (error) throw error
        toast({ title: "Article updated successfully!" })
      } else {
        const { error } = await supabase
          .from('articles')
          .insert([{
            title: currentArticle.title,
            content: currentArticle.content,
            excerpt: currentArticle.excerpt,
            category: currentArticle.category,
            published: currentArticle.published
          }])

        if (error) throw error
        toast({ title: "Article created successfully!" })
      }

      setCurrentArticle({
        title: '',
        content: '',
        excerpt: '',
        category: 'professional',
        published: false
      })
      setIsEditing(false)
      fetchArticles()
    } catch (error) {
      console.error('Error saving article:', error)
      toast({ title: "Error saving article", variant: "destructive" })
    }
  }

  const handleEdit = (article: Article) => {
    setCurrentArticle(article)
    setIsEditing(true)
  }

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id)

      if (error) throw error
      toast({ title: "Article deleted successfully!" })
      fetchArticles()
    } catch (error) {
      console.error('Error deleting article:', error)
      toast({ title: "Error deleting article", variant: "destructive" })
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? 'Edit Article' : 'Create New Article'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={currentArticle.title}
              onChange={(e) => setCurrentArticle({...currentArticle, title: e.target.value})}
              placeholder="Article title"
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={currentArticle.excerpt}
              onChange={(e) => setCurrentArticle({...currentArticle, excerpt: e.target.value})}
              placeholder="Brief description of the article"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={currentArticle.content}
              onChange={(e) => setCurrentArticle({...currentArticle, content: e.target.value})}
              placeholder="Article content (supports markdown)"
              rows={10}
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={currentArticle.category}
              onValueChange={(value) => setCurrentArticle({...currentArticle, category: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={currentArticle.published}
              onCheckedChange={(checked) => setCurrentArticle({...currentArticle, published: checked})}
            />
            <Label htmlFor="published">Published</Label>
          </div>

          <div className="flex space-x-2">
            <Button onClick={handleSave}>
              {isEditing ? 'Update Article' : 'Create Article'}
            </Button>
            {isEditing && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsEditing(false)
                  setCurrentArticle({
                    title: '',
                    content: '',
                    excerpt: '',
                    category: 'professional',
                    published: false
                  })
                }}
              >
                Cancel
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {article.category} • {article.published ? 'Published' : 'Draft'}
                  </p>
                </div>
                <div className="space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(article)}>
                    Edit
                  </Button>
                  <Button 
                    size="sm" 
                    variant="destructive" 
                    onClick={() => handleDelete(article.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}