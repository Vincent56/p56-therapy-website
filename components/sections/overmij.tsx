import React from "react";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface OvermijProps {
  name: string;
  title?: string;
  bio: string;
  image?: string;
  specialties?: string[];
}

const Overmij = ({
  name,
  title = "Licensed Therapist",
  bio,
  image,
  specialties = [],
}: OvermijProps) => {
  return (
    <section id="over-mij" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
      <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <h2 className="text-3xl font-medium md:text-5xl">
              Over mij
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              necessitatibus, culpa at vitae molestias tenetur explicabo.
              Voluptatum amet architecto suscipit pariatur eligendi repellendus
              mollitia dolore unde sint?
            </p>
          </div>
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
          <div className="overflow-hidden">
            <CardContent className="p-0 shadow-xl">
              {image ? (
                <Image
                  src={image}
                  alt={`Photo of ${name}`}
                  width={600}
                  height={600}
                  className="w-96 object-cover rounded-xl"
                />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center bg-muted">
                  <User className="h-24 w-24 text-muted-foreground" />
                </div>
              )}
            </CardContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Overmij }; 