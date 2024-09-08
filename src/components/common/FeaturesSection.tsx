import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "High Speed",
    description:
      "Avalanche's blockchain is designed for lightning-fast transactions with incredibly low fees. Whether you're sending payments, executing smart contracts, or building dApps, you'll benefit from minimal delay and high throughput, making it ideal for high-frequency traders and developers alike.",
    icon: faRocket,
  },
  {
    title: "Scalability",
    description:
      "Unlike many other blockchains, Avalanche is built to scale to millions of users without compromising on performance. Its unique consensus mechanism allows it to maintain low latency and high security even as its network grows, supporting the future of decentralized finance and apps.",
    icon: faGlobe,
  },
  {
    title: "Security",
    description:
      "Based on one of the most secure protocols in the industry, Avalanche guarantees the security and integrity of your data. Its decentralized architecture and strong cryptographic mechanisms ensure that all transactions are reliable and tamper-proof, providing peace of mind and trust.",
    icon: faLock,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 text-white bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título Principal */}
        <h2 className="text-5xl font-bold text-center mb-4 tracking-widest text-accent">
          Why Choose Avalanche?
        </h2>
        {/* Subtítulo */}
        <p className="text-center text-lg max-w-4xl mx-auto mb-12 text-gray-300">
          Discover the core features that make Avalanche one of the most
          innovative blockchain platforms available today. Speed, scalability,
          and security, all in one powerful network.
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
