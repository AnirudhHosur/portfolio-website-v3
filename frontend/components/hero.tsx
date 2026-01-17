import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image Section */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/me_awesome.jpg"
                  alt="Anirudh Hosur"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Software Developer</span>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Senior Software Developer
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Anirudh Hosur
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Passionate about creating <span className="font-semibold text-primary">efficient</span>, <span className="font-semibold text-purple-600">scalable</span>, and <span className="font-semibold text-blue-600">user-friendly</span> applications with modern technologies.
            </p>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="px-8 py-3 text-lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-2" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}