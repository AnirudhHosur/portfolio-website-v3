import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Relevant Experience
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                Professional journey and key accomplishments
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="space-y-8">
          <AnimatedSection delay={0.1}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl md:text-2xl">Software Developer</CardTitle>
                  <CardDescription className="text-base font-medium">
                    IBM Canada <span className="text-muted-foreground font-normal">(Permanent Full-time)</span>
                  </CardDescription>
                </div>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span>Amazon Web Services (AWS) · Node.js · NestJS · Data Engineering · PostgreSQL · kafka-tools · Splunk · Redis · Terraform</span>
                  <span className="font-medium">Oct 2024 --- Present (1 yr 4 mos) | Calgary, Alberta, Canada · On-site</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-2">Project Overview - Advanced Geofencing System</h3>
                  <p className="text-muted-foreground mb-3">
                    This project is designed to implement an advanced geofencing system by retrieving GPS signals from Wi-Fi routers. 
                    Its primary goal is to monitor and detect customers who move their Wi-Fi routers outside of their approved addresses, 
                    thereby violating geofence rules.
                  </p>
                  <p className="text-muted-foreground italic mb-4">
                    The system is divided into four key phases: Customer Data Collection, Violation Detection, Violation Treatment, 
                    and Enforcement and Resolution.
                  </p>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span>Developed a data ingestion service that acts like a Kafka consumer to retrieve message records from a databricks job that performs ETL on AWS Redshift data. Utilized Node.js Nest.js backend infrastructure with TypeORM capabilities, Kafka offsets, and message validations to pull the data and store it into 4 nested Postgresql Aurora database tables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span>Developed the AWS infrastructure on DEV and UAT environments to treat customers who violated their geofence. Implemented several AWS step function workflows that are integrated with AWS Lambda functions to put customers under surveillance and monitoring.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                    <span>Communicated and provided support to the UAT test team, E2E test team, Performance team, external APIs team, and client team to gather requirements and build the geofence project. Developed efficient Python scripts to manage the cache and database during performance support.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    <span>Supported in post-production monitoring for the treatment service by generating reports from Splunk queries and AWS CloudWatch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                    <span>Configured environment variables in Conduktor to develop and test features in DEV and UAT with Grafana Dashboards and Splunk logs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                    <span>Configured Terraform scripts to deploy AWS changes into DEV, UAT environments.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl md:text-2xl">Lead Developer</CardTitle>
                  <CardDescription className="text-base font-medium">
                    Credwise Financial Inc. <span className="text-muted-foreground font-normal">(Freelance)</span>
                  </CardDescription>
                </div>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span>Mean Stack · Google Cloud Platform (GCP) · Retrieval-Augmented Generation (RAG) · Software Infrastructure · Leading Development Teams · Infrastructure · DevOps</span>
                  <span className="font-medium">Aug 2024 --- Oct 2024 (3 mos) | Alberta, Canada · Remote</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span>Led a development team of 5 interns to build an internal credit card entry tool to capture MCC Codes and find insights with businesses that sell goods and services. Utilized Angular for the frontend, GCP Firebase firestore for backend & database.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span>Configured a CI/CD pipeline to build and deploy web-apps using GitHub Actions onto GCP Firebase for deployment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                    <span>Drafted project issues and monitored team's ticket progress on Clickup.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    <span>Supported other team leads in their initiatives to build ML solutions and RAG-based chatbots to retrieve insights and generate credit card recommendations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                    <span>Supported the development team across time zones to build and deploy Node.js backend endpoints on GCP Cloud using Cloud Run, Artifact Registry, & Cloud Build.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl md:text-2xl">Computer Programming Instructor</CardTitle>
                  <CardDescription className="text-base font-medium">
                    Red Deer Polytechnic <span className="text-muted-foreground font-normal">(Permanent Full-time)</span>
                  </CardDescription>
                </div>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span>Coding Standards · Java · React.js · Artificial Intelligence (AI) · JavaScript · Project Management · Cloud Computing</span>
                  <span className="font-medium">Jan 2024 --- Oct 2024 (10 mos) | Red Deer, Alberta, Canada · On-site</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span>Developed course content and assignments for Cloud computing, Introduction to ML and Data Science, Programming Java EE (Spring boot), and Software Design and Development for students.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span>Conducted lab sessions on core software engineering topics such as Git, Full-stack development, Java, CI/CD, Agile methodologies, testing, Cloud Computing, OOPS, Python, and clean coding practices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                    <span>Spearheaded student development projects as a Product Owner, conducted weekly code reviews, & guided them into developing full-stack applications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    <span>Nurturing students into future practical software engineers.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}