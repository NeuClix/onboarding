import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  pet: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, pet, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={`/placeholder.svg?height=48&width=48&query=person with dog`}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{pet}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-muted-foreground">"{quote}"</p>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
