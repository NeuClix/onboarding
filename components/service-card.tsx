import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Droplets, Sparkles, Smile, Cake } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  price: string
}

export default function ServiceCard({ title, description, icon, price }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "scissors":
        return <Scissors className="h-6 w-6 text-pink-500" />
      case "droplets":
        return <Droplets className="h-6 w-6 text-pink-500" />
      case "sparkles":
        return <Sparkles className="h-6 w-6 text-pink-500" />
      case "smile":
        return <Smile className="h-6 w-6 text-pink-500" />
      case "cake":
        return <Cake className="h-6 w-6 text-pink-500" />
      default:
        return <Scissors className="h-6 w-6 text-pink-500" />
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="rounded-full bg-pink-100 p-2">{getIcon()}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
        <span className="font-medium">{price}</span>
        <Link href="#booking" className="text-sm font-medium text-pink-500 hover:underline">
          Book Now
        </Link>
      </CardFooter>
    </Card>
  )
}
