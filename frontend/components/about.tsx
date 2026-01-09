import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Experienced Senior Software Developer with expertise in full-stack development, cloud technologies, and modern frameworks.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Software Engineer with over 3 years of expertise in software development, cloud computing, and system design. 
                Proficient in Python, Java, and JavaScript, with a proven track record of building scalable, high-performance applications, 
                and secure APIs. Committed to advancing my career as a software architect, with a focus on delivering innovative multi-cloud solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                Skills & Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="font-medium">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">Cloud Technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <span className="font-medium">Modern Frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <span className="font-medium">Database Design</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}