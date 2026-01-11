import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Globe, Youtube } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          {/* Portfolio Showcase Section */}
          <div className="text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Explore My Work
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-8">
                Check out my portfolio websites showcasing my projects and professional journey
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <AnimatedSection delay={0.1}>
                <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-purple-600/5">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-xl">
                      <Globe className="h-6 w-6 text-primary" />
                      Portfolio V2 (Latest)
                    </CardTitle>
                    <CardDescription>Modern design with enhanced features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="lg" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90" asChild>
                      <a href="https://anirudhhosur.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Visit Live Site
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-secondary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-xl">
                      <Globe className="h-6 w-6 text-secondary-foreground" />
                      Portfolio V1
                    </CardTitle>
                    <CardDescription>Original portfolio design</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="lg" variant="secondary" className="w-full" asChild>
                      <a href="https://anirudhhosur.netlify.app/" target="_blank" rel="noopener noreferrer">
                        Visit Archive
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Contact Information Section */}
          <div className="grid max-w-4xl mx-auto gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Connect With Me</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" asChild className="justify-start">
                          <a href="https://www.linkedin.com/in/anirudh-hosur-8b924315b/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="justify-start">
                          <a href="https://github.com/AnirudhHosur" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="justify-start">
                          <a href="https://www.youtube.com/channel/UCfSbPJredtPkBFaWcXifDXw" target="_blank" rel="noopener noreferrer">
                            <Youtube className="h-4 w-4 mr-2" />
                            YouTube
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="justify-start">
                          <a href="mailto:an516658@dal.ca">
                            <Globe className="h-4 w-4 mr-2" />
                            Email
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Location</h3>
                      <p className="text-muted-foreground">Calgary, Alberta, Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <Input placeholder="Your email" />
                    </div>
                    <div>
                      <Textarea placeholder="Your message" className="min-h-[120px]" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}