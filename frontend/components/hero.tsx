import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Senior Software Developer
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Anirudh Hosur
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Passionate about creating <span className="font-semibold text-primary">efficient</span>, <span className="font-semibold text-purple-600">scalable</span>, and <span className="font-semibold text-blue-600">user-friendly</span> applications with modern technologies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-8 py-3 text-lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-2" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}