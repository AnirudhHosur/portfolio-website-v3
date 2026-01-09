import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Areas of Expertise
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                Technologies and tools I specialize in
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection delay={0.1}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "TypeScript", "JavaScript", "SQL", "C", "C++"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "Spring MVC", "Spring Data", "Spring Batch", "Node.js", "Nest.js", "FastAPI", "REST APIs", "Microservices"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  Cloud & Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AWS (Lambda, Step Functions, S3, API Gateway, ECS/Fargate, Aurora PostgreSQL, SNS/SQS, CloudWatch)", "OpenShift", "Databricks", "Redshift"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  Streaming & MQ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Apache Kafka", "AWS SNS/SQS", "Event-driven architectures", "ETL-style ingestion pipelines"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "Aurora", "OracleDB", "MySQL", "Redis", "Schema design", "Complex SQL", "Performance tuning"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-red-500/10 text-red-600 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                  DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes/OpenShift", "AWS CDK", "GitHub Actions", "GitLab CI", "Jenkins", "Maven", "SonarCloud"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-500/10 text-indigo-600 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.7}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                  Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["System Design", "OOP", "Design Patterns", "TDD", "Code Review", "CI/CD", "Production Monitoring (Splunk, Grafana)", "Agile/Scrum"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full text-sm font-medium">
                      {skill}
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