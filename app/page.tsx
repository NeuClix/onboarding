import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Star, ChevronRight, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import BookingForm from "@/components/booking-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Glamorous Paws Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold tracking-tight">Glamorous Paws</span>
          </div>
          <Button asChild>
            <Link href="#booking">Book Now</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
          <div className="container relative flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Glamorous Paws <span className="text-pink-500">Grooming</span> and More
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Professional pet grooming services with a personal touch. Family-owned and operated in El Dorado
                Springs, Missouri.
              </p>
            </div>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild>
                <Link href="#booking">Book an Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="container pb-8 flex justify-center">
            <Image
              src="/pink-paw-parlor.png"
              alt="Glamorous Paws Grooming Salon"
              width={1200}
              height={500}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-muted py-16 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                We offer a range of professional grooming services to keep your pets looking and feeling their best.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Full Grooming"
                description="Complete bath, haircut, nail trim, ear cleaning, and more tailored to your pet's breed and needs."
                icon="scissors"
                price="From $45"
              />
              <ServiceCard
                title="Bath & Brush"
                description="Thorough bath with premium shampoo, blow dry, and brush out to keep your pet's coat healthy."
                icon="droplets"
                price="From $25"
              />
              <ServiceCard
                title="Nail Trim"
                description="Quick and gentle nail trimming to keep your pet comfortable and prevent scratches."
                icon="scissors"
                price="From $15"
              />
              <ServiceCard
                title="Spa Treatments"
                description="Luxury treatments including de-shedding, deep conditioning, and aromatherapy for a pampered pet."
                icon="sparkles"
                price="From $20"
              />
              <ServiceCard
                title="Teeth Cleaning"
                description="Gentle teeth cleaning to maintain your pet's oral health and fresh breath."
                icon="smile"
                price="From $15"
              />
              <ServiceCard
                title="Pet Bakery"
                description="Homemade treats and pet-friendly baked goods made with quality ingredients."
                icon="cake"
                price="Varies"
              />
            </div>
            <div className="flex justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="#booking">
                  Book a Service <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Family-Owned Pet Care</h2>
                <p className="text-muted-foreground">
                  Glamorous Paws Grooming and More is a family-owned pet grooming and bakery located in El Dorado
                  Springs, Missouri. We take pride in providing personalized care for each pet that visits our salon.
                </p>
                <p className="text-muted-foreground">
                  Our experienced groomers work with patience and love to ensure your pet has a stress-free grooming
                  experience. We use premium products that are gentle on your pet's skin and coat.
                </p>
                <p className="text-muted-foreground">
                  In addition to our grooming services, we offer homemade pet treats from our bakery, made with
                  high-quality ingredients that pets love.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-pink-500" />
                    <span className="text-sm">Open now</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-pink-500" />
                    <span className="text-sm">5-star rated</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/gentle-grooming.png"
                  alt="Grooming in action"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-background p-6 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-pink-100 p-2">
                      <Star className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">100% Satisfaction</p>
                      <p className="text-xs text-muted-foreground">Based on 5 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-muted py-16 md:py-24">
          <div className="container space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Furry Clients</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Take a look at some of our happy customers after their grooming sessions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="overflow-hidden rounded-lg bg-white p-2 shadow-md">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DIEtvmCXRIgJJJF0QpdifemWq53Ei8.png"
                    alt="Grandpa - A tan pug mix with a black and white bandana"
                    fill
                    className="object-cover object-center transition-transform hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center font-medium">Grandpa</p>
              </div>
              <div className="overflow-hidden rounded-lg bg-white p-2 shadow-md">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c6BIO86ha8VSlwKa0fXQNCreXF3W9f.png"
                    alt="Oscar - A black cocker spaniel with a blue collar"
                    fill
                    className="object-cover object-center transition-transform hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center font-medium">Oscar</p>
              </div>
              <div className="overflow-hidden rounded-lg bg-white p-2 shadow-md">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zTZ6vcy5SC732dGNKoFjyBdvSWw0s1.png"
                    alt="A black and white poodle with a pink bandana"
                    fill
                    className="object-cover object-center transition-transform hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center font-medium">Bella</p>
              </div>
              <div className="overflow-hidden rounded-lg bg-white p-2 shadow-md">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J0B70fGkxSHWzlATa1fknCsr9wub95.png"
                    alt="Two dogs with matching purple bandanas"
                    fill
                    className="object-cover object-center transition-transform hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center font-medium">Max & Ruby</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Don't just take our word for it - hear from our satisfied customers.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Sarah Johnson"
                pet="Max, Golden Retriever"
                quote="My dog always comes back looking amazing! The staff is so gentle and caring with him."
                rating={5}
              />
              <TestimonialCard
                name="Michael Thompson"
                pet="Bella, Shih Tzu"
                quote="Bella is always anxious at groomers, but she's so calm here. They really know how to handle nervous pets."
                rating={5}
              />
              <TestimonialCard
                name="Jennifer Davis"
                pet="Charlie, Poodle"
                quote="The grooming is excellent and their homemade treats are Charlie's favorite! He gets excited when we pull up to the shop."
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Book Your Pet's Appointment</h2>
                <p className="text-muted-foreground">
                  Schedule a grooming session for your furry friend. We'll make sure they look and feel their best!
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                    <div>
                      <p className="font-medium">Call us directly</p>
                      <p className="text-muted-foreground">(417) 309-9677</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                    <div>
                      <p className="font-medium">Email us</p>
                      <p className="text-muted-foreground">conard_ashley@yahoo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                    <div>
                      <p className="font-medium">Visit our salon</p>
                      <p className="text-muted-foreground">203 W Freeman Ave, El Dorado Springs, MO, 64744</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          src="/map-eldorado.png"
                          alt="Map showing Glamorous Paws location in El Dorado Springs"
                          width={800}
                          height={450}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Glamorous Paws Logo" width={40} height={40} className="rounded-full" />
                <span className="text-xl font-bold tracking-tight">Glamorous Paws</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Family-owned pet grooming and bakery located in El Dorado Springs, Missouri.
              </p>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-muted-foreground hover:text-foreground">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#booking" className="text-muted-foreground hover:text-foreground">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Full Grooming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Bath & Brush
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Nail Trimming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Spa Treatments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pet Bakery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">203 W Freeman Ave, El Dorado Springs, MO, 64744</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">(417) 309-9677</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">conard_ashley@yahoo.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Open now</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Glamorous Paws Grooming and More. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
