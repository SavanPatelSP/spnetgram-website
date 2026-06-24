import { Briefcase, Users, Rocket, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const cultureValues = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible in communication technology, always looking for better ways to connect people.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "Great things happen when talented people work together. We foster an environment of openness, respect, and shared purpose.",
  },
  {
    icon: Heart,
    title: "User Obsession",
    description:
      "Every decision we make starts with the user experience. We build products that people love to use every day.",
  },
  {
    icon: Briefcase,
    title: "Remote-First Culture",
    description:
      "Work from anywhere in the world. We believe great talent exists everywhere, and we build our processes around this belief.",
  },
];

export function CareerSection() {
  return (
    <div className="space-y-24">
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Why SP NET GRAM
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Join us in building the future of communication. At SP NET GRAM, we are
          creating a platform that connects millions of people across the globe.
          We are looking for passionate individuals who want to make a lasting
          impact.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {cultureValues.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="p-6 border-border/50 hover:border-border transition-all duration-200">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold tracking-tight">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Open Positions
        </h2>
        <Card className="text-center py-16 border-border/50">
          <Briefcase className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-xl font-semibold tracking-tight mb-2">
            Currently No Open Positions
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            We are not actively hiring at the moment, but we are always
            interested in connecting with talented individuals. Reach out to us
            for future opportunities.
          </p>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Future Opportunities
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
          When we do open positions, they will appear here. We typically hire
          for engineering, design, product, and operations roles. Follow us on
          social media to stay informed about openings.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Software Engineering",
            "Product Design",
            "Infrastructure & DevOps",
          ].map((role) => (
            <Card key={role} className="p-6 border-border/50 hover:border-border transition-all duration-200">
              <h3 className="font-semibold tracking-tight">{role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Future opportunity
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
