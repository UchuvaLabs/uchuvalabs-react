import { useNavigate } from "react-router-dom";

import maizDorado from "../../assets/images/crop-projects/maiz-dorado.jpg";
import cafe from "../../assets/images/crop-projects/cafe.jpg";
import aguacate from "../../assets/images/crop-projects/aguacate.jpg";

const MostPopularProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      img: maizDorado,
      nombreCultivo: "Maíz Dorado",
      tipoCultivo: "Cereal",
      descripcion:
        "Un cultivo altamente productivo, ideal para zonas de baja humedad.",
      ubicacion: "Valle del Cauca, Colombia",
      rendimientoEstimado: 10000,
      inversionNecesaria: 50000,
    },
    {
      img: cafe,
      nombreCultivo: "Café Arabica",
      tipoCultivo: "Café",
      descripcion: "Café de alta calidad, cultivado en tierras volcánicas.",
      ubicacion: "Antioquia, Colombia",
      rendimientoEstimado: 2500,
      inversionNecesaria: 20000,
    },
    {
      img: aguacate,
      nombreCultivo: "Aguacate Hass",
      tipoCultivo: "Fruta",
      descripcion:
        "Cultivo de aguacate de exportación con alto valor en el mercado internacional.",
      ubicacion: "Quindío, Colombia",
      rendimientoEstimado: 7000,
      inversionNecesaria: 40000,
    },
  ];

  return (
    <section id="projects" className="scroll-mt-5 py-16 bg-primary">
      <div className="container mx-auto text-center px-4 max-w-screen-lg">
        <h2 className="text-4xl font-bold text-white mb-10">
          Most popular projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
          {projects.map((project, index) => {
            const isCenterCard = index === Math.floor(projects.length / 2);

            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg border border-transparent shadow-lg shadow-black/70
              ${
                isCenterCard
                  ? "scale-105 shadow-2xl shadow-black/90"
                  : "hover:scale-105 hover:shadow-2xl hover:shadow-black/90"
              }
              transform transition-all duration-300`}
              >
                <img
                  src={project.img}
                  alt={`Project ${project.nombreCultivo}`}
                  className="w-full h-48 object-cover rounded-t-lg transition-transform transform"
                  loading="lazy"
                />
                <div className="mt-4 text-left">
                  <h3 className="text-2xl font-semibold text-primary">
                    {project.nombreCultivo}
                  </h3>
                  <p className="text-gray-500 text-lg mb-2">
                    {project.tipoCultivo} - {project.ubicacion}
                  </p>
                  <p className="text-gray-600 mb-4">{project.descripcion}</p>
                  <p className="text-gray-600 mb-1">
                    <strong>Estimated Yield:</strong>{" "}
                    {project.rendimientoEstimado} kg
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Investment Required:</strong> $
                    {project.inversionNecesaria.toLocaleString()}
                  </p>

                  <div className="flex justify-center">
                    <button className="bg-accent text-text py-2 px-8 w-3/4 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                      Invest
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <button
            className="bg-accent text-text py-4 px-8 md:px-10 rounded-lg shadow-lg hover:bg-accent-dark hover:shadow-xl transition-transform duration-500 transform hover:scale-105"
            onClick={() => navigate("/projects")}
          >
            Explore More Crops
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostPopularProjects;
