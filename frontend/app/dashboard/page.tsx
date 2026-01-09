import { Navbar } from "@/components/navbar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg text-muted-foreground">Welcome to your personalized dashboard! ❤️</p>
        </div>
      </main>
    </div>
  );
}