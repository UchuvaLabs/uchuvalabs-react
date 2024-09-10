import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "Alta Velocidad",
    description:
      "La blockchain de Avalanche está diseñada para transacciones ultrarrápidas con tarifas increíblemente bajas. Ya sea que estés enviando pagos, ejecutando contratos inteligentes o creando dApps, te beneficiarás de una mínima demora y un alto rendimiento, lo que la hace ideal para traders de alta frecuencia y desarrolladores por igual.",
    icon: faRocket,
  },
  {
    title: "Escalabilidad",
    description:
      "A diferencia de muchas otras blockchains, Avalanche está construida para escalar a millones de usuarios sin comprometer el rendimiento. Su mecanismo de consenso único le permite mantener baja latencia y alta seguridad incluso a medida que crece su red, apoyando el futuro de las finanzas descentralizadas y las aplicaciones.",
    icon: faGlobe,
  },
  {
    title: "Seguridad",
    description:
      "Basada en uno de los protocolos más seguros de la industria, Avalanche garantiza la seguridad e integridad de tus datos. Su arquitectura descentralizada y sus sólidos mecanismos criptográficos aseguran que todas las transacciones sean confiables y a prueba de manipulaciones, proporcionando tranquilidad y confianza.",
    icon: faLock,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 text-white bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título Principal */}
        <h2 className="text-5xl font-bold text-center mb-4 tracking-widest text-accent">
          ¿Por qué Avalanche?
        </h2>
        {/* Subtítulo */}
        <p className="text-center text-lg max-w-4xl mx-auto mb-12 text-gray-300">
          Descubra las características principales que hacen de Avalanche una de
          las plataformas de blockchain más innovadoras disponibles en la
          actualidad. Velocidad, escalabilidad y seguridad, todo en una potente
          red.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-md shadow-md hover:shadow-3xl transition-shadow duration-200 mx-auto"
              data-aos="fade-up"
            >
              {/* Icono */}
              <div className="text-6xl mb-6 text-white">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-3xl text-accent font-semibold mb-4">
                {feature.title}
              </h3>
              {/* Descripción de la característica */}
              <p className="text-base text-gray-200 text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
