import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface TherapistBioProps {
  name: string;
  title?: string;
  bio: string;
  image?: string;
  specialties?: string[];
}

const TherapistBio = ({
  name,
  title = "Licensed Therapist",
  bio,
  image,
  specialties = [],
}: TherapistBioProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn more about my approach to therapy and how I can help you on your journey.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">{name}</h3>
              <p className="text-muted-foreground">{title}</p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">{bio}</p>
              {specialties.length > 0 && (
                <div>
                  <h4 className="font-medium">Specialties</h4>
                  <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {specialties.map((specialty, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {image ? (
                <Image
                  src={image}
                  alt={`Photo of ${name}`}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover"
                />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center bg-muted">
                  <User className="h-24 w-24 text-muted-foreground" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { TherapistBio }; 