import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        NexusDev Solutions
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Conectando Ideas, Creando Futuro
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Innovamos y desarrollamos soluciones de software personalizadas que
        impulsan tu negocio hacia el éxito.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Empezar
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Cotizar
        </a>
      </div>
      <div className="flex mt-10 gap-x-8 justify-center">
        <div className="flex flex-col w-1/2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-8 flex flex-col">
            <h3 className="text-4xl text-center tracking-wide">
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                Misión
              </span>
            </h3>
            <p className="mt-4 text-lg text-center text-neutral-500 max-w-4xl">
              Ofrecer soluciones de software personalizadas y de alta calidad
              que garanticen la eficiencia y crecimiento de nuestros clientes.
              Nos dedicamos a este objetivo mediante un enfoque centrado en las
              necesidades únicas de cada cliente y una colaboración estrecha y
              continua. Nos esforzamos por entender completamente los desafíos y
              metas de nuestros clientes para proporcionarles soluciones que no
              solo satisfagan sus necesidades actuales, sino que también los
              preparen para el futuro.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-8 flex flex-col">
            <h3 className="text-4xl text-center tracking-wide">
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                Visión
              </span>
            </h3>
            <p className="mt-4 text-lg text-center text-neutral-500 max-w-4xl">
              Establecernos como líderes destacados en el desarrollo de software
              personalizado, distinguiéndonos por nuestra capacidad para superar
              continuamente las expectativas de nuestros clientes en cada
              proyecto. Queremos construir relaciones sólidas y duraderas
              basadas en la confianza y el éxito compartido.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl">
            5+
          </span>
          <span className="text-lg text-neutral-500">Años de experiencia</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl">
            50+
          </span>
          <span className="text-lg text-neutral-500">Proyectos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl">
            25+
          </span>
          <span className="text-lg text-neutral-500">Clientes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl">
            50+
          </span>
          <span className="text-lg text-neutral-500">Diseños</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
