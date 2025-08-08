import { useEffect, useState } from "react"
import { supabase } from "@/integrations/supabase/client"
import { Eye } from "lucide-react"

export const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null)
  const [hasIncremented, setHasIncremented] = useState(false)

  useEffect(() => {
    const incrementAndGetVisits = async () => {
      try {
        // Check if we've already incremented this session
        const sessionKey = "visit_incremented"
        const hasIncrementedThisSession = sessionStorage.getItem(sessionKey)
        
        if (!hasIncrementedThisSession && !hasIncremented) {
          // Increment visit count
          const { data: incrementData, error: incrementError } = await supabase.rpc('increment_visit_count')
          
          if (incrementError) {
            console.error('Error incrementing visit count:', incrementError)
            // Fallback to just getting the current count
            const { data: countData } = await supabase
              .from('site_visits')
              .select('visit_count')
              .single()
            
            setVisitCount(countData?.visit_count || 0)
          } else {
            setVisitCount(incrementData)
            setHasIncremented(true)
            sessionStorage.setItem(sessionKey, "true")
          }
        } else {
          // Just get current count
          const { data } = await supabase
            .from('site_visits')
            .select('visit_count')
            .single()
          
          setVisitCount(data?.visit_count || 0)
        }
      } catch (error) {
        console.error('Error with visit counter:', error)
        setVisitCount(0)
      }
    }

    incrementAndGetVisits()
  }, [hasIncremented])

  if (visitCount === null) {
    return null
  }

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>
        {visitCount.toLocaleString()} {visitCount === 1 ? 'visit' : 'visits'}
      </span>
    </div>
  )
}