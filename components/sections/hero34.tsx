const Hero34 = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 bg-muted-2 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl text-white text-shadow-md">
              Welkom bij Praktijk 26
            </h1>
            <p className="mb-8 max-w-xl text-white lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>

          </div>
          {/* <img
            src="/img/hero3.png"
            alt="placeholder hero"
            className="h-full w-full object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
};

export { Hero34 };
