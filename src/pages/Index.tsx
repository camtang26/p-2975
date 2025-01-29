import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">Modern App</span>
            </a>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80" href="/docs">
              Documentation
            </a>
            <a className="transition-colors hover:text-foreground/80" href="/components">
              Components
            </a>
            <a className="transition-colors hover:text-foreground/80" href="/examples">
              Examples
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="grid gap-6 pb-8 pt-6 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Build beautiful applications
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              A modern tech stack with React, TypeScript, and Tailwind CSS. Build fast, accessible, and beautiful applications.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                GitHub
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm p-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Sign In</h2>
                  <p className="text-sm text-muted-foreground">
                    Enter your email below to sign in to your account
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                    />
                  </div>
                  <Button className="w-full">
                    Sign In with Email
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        <section className="space-y-8 pb-8 pt-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Features</h2>
            <p className="text-muted-foreground">
              Explore the features that make this application great.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        <section className="space-y-8 pb-8 pt-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Latest Updates</h2>
            <p className="text-muted-foreground">
              Stay up to date with the latest news and updates.
            </p>
          </div>
          <ScrollArea className="h-[300px] rounded-md border">
            <div className="p-4">
              {updates.map((update, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">{update.title}</h3>
                  <p className="text-sm text-muted-foreground">{update.date}</p>
                  <p className="mt-1 text-sm">{update.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:justify-between">
          <div>
            <h2 className="font-bold">Modern App</h2>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
          <div className="flex gap-8">
            <div className="space-y-2">
              <h3 className="font-bold">Links</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a className="text-muted-foreground hover:text-foreground" href="/docs">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-foreground" href="/components">
                    Components
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-foreground" href="/examples">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Community</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a className="text-muted-foreground hover:text-foreground" href="/github">
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-foreground" href="/discord">
                    Discord
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-foreground" href="/twitter">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    title: "Type Safe",
    description: "Built with TypeScript for better developer experience and fewer bugs."
  },
  {
    title: "Fast Development",
    description: "Powered by Vite for lightning-fast development and hot module replacement."
  },
  {
    title: "Beautiful UI",
    description: "Styled with Tailwind CSS and shadcn/ui for a modern and consistent look."
  },
  {
    title: "Accessible",
    description: "Built with accessibility in mind, following WCAG guidelines."
  },
  {
    title: "Responsive",
    description: "Looks great on all devices, from mobile to desktop."
  },
  {
    title: "Modern Stack",
    description: "Uses the latest web technologies and best practices."
  }
];

const updates = [
  {
    title: "New Component Library Released",
    date: "March 15, 2024",
    content: "We've just released our new component library with over 50 components."
  },
  {
    title: "Performance Improvements",
    date: "March 10, 2024",
    content: "Major performance improvements across the entire application."
  },
  {
    title: "Documentation Update",
    date: "March 5, 2024",
    content: "Complete overhaul of our documentation with new examples and guides."
  },
  {
    title: "Mobile Optimization",
    date: "March 1, 2024",
    content: "Enhanced mobile experience with better touch interactions and responsive design."
  }
];

export default Index;