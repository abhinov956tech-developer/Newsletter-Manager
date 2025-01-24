import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'

interface Newsletter {
  id: string;
  title: string;
  status: string;
  created: string;
}

interface NewslettersListProps {
  newsletters: Newsletter[];
  onDelete: (id: string) => void;
  onSend: (id: string) => void;
}

const NewslettersList: React.FC<NewslettersListProps> = ({ newsletters, onDelete , onSend }) => {
  if (newsletters.length === 0) {
    return <p className="text-center py-12 text-muted-foreground">No newsletters available</p>
  }
  return (
    <Card className="card-gradient border-none shadow-xl" >
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tight">Newsletters</CardTitle>
        <p className="text-sm text-muted-foreground">
          Manage and track your newsletter campaigns
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsletters.map((newsletter) => (
            <div key={newsletter.id} className="group relative flex justify-between items-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-200 hover:shadow-md hover:bg-background/80 animate-fade-in">
              <div className="space-y-1">
                <div className="flex items-center gap-2"><h3 className="font-semibold text-lg tracking-tight">{newsletter.title}</h3></div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground text-gray-500">
                  Status: <span className="capitalize  px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{newsletter.status}</span> | 
                  Created: {newsletter.created}
                </div>
              </div>
              <div className='flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                <button className='p-2 gap-1 text-white rounded-lg bg-green-500'
                onClick={()=>{onSend(newsletter.id); console.log(newsletter.id)}}>
                  Send
                </button>
                <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(newsletter.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default NewslettersList