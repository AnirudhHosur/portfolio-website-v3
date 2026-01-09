import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Key Projects
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                Featured projects showcasing my work and expertise
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedSection delay={0.1}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  Telecommunications Data Pipeline
                </CardTitle>
                <CardDescription>Microservices Architecture with Kafka</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built a robust data ingestion pipeline using Nest.js and Kafka for a major US telecommunications company. 
                  Implemented real-time customer violation detection and automated remediation workflows.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Nest.js", "Kafka", "AWS", "Lambda", "Step Functions"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-600 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  AI-Powered Credit Card Insights
                </CardTitle>
                <CardDescription>RAG System with Vector Search</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developed an end-to-end AI system on GCP connecting Firebase Firestore with Vertex AI Gemini Flash. 
                  Enabled natural language querying of credit card reward data using vector embeddings and RAG.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Python", "GCP", "Vertex AI", "VectorDB", "Firebase", "RAG"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-500/10 text-purple-600 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  Serverless Cost Optimization
                </CardTitle>
                <CardDescription>Cloud Architecture Migration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Successfully migrated traditional cloud infrastructure to serverless architecture, 
                  reducing operational costs by over 90% while improving scalability and maintainability.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Cloud Run", "Artifact Registry", "Firestore", "Cost Optimization"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-green-500/10 text-green-600 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}