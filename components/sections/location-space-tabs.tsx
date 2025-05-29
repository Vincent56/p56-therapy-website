import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface TabContentData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface LocationSpaceTabsProps {
  location?: TabContentData;
  space?: TabContentData;
}

const LocationSpaceTabs = ({
  location = {
    title: "Prime Location",
    description: "Our therapy office is conveniently located in the heart of the city, easily accessible by public transportation and with ample parking available. The peaceful neighborhood provides a serene environment that begins your healing journey the moment you arrive.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Modern office building exterior"
  },
  space = {
    title: "Healing Environment",
    description: "Step into our thoughtfully designed therapy space, where comfort meets professionalism. The warm, welcoming atmosphere features natural lighting, comfortable seating, and calming decor that helps you feel at ease from the moment you enter.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Comfortable therapy office interior"
  }
}: LocationSpaceTabsProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Practice
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our welcoming location and thoughtfully designed therapeutic space.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="location" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="location" className="text-base">
                Location
              </TabsTrigger>
              <TabsTrigger value="space" className="text-base">
                Space
              </TabsTrigger>
            </TabsList>

            <TabsContent value="location" className="mt-0">
              <Card>
                <CardContent className="p-0">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4 p-6 lg:p-8">
                      <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                        {location.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {location.description}
                      </p>
                    </div>
                    <div className="overflow-hidden">
                      <Image
                        src={location.image}
                        alt={location.imageAlt}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="space" className="mt-0">
              <Card>
                <CardContent className="p-0">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="overflow-hidden lg:order-2">
                      <Image
                        src={space.image}
                        alt={space.imageAlt}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4 p-6 lg:p-8 lg:order-1">
                      <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                        {space.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {space.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { LocationSpaceTabs }; 