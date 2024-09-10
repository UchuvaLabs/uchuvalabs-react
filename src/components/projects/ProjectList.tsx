import { useState } from "react";
import TransferAVAX from "../transactions/TransferAvax";

import maizDorado from "../../assets/images/crop-projects/maiz-dorado.jpg";
import cafe from "../../assets/images/crop-projects/cafe.jpg";
import aguacate from "../../assets/images/crop-projects/aguacate.jpg";
import papa from "../../assets/images/crop-projects/papa.jpg";
import banano from "../../assets/images/crop-projects/banano.jpg";
import cacao from "../../assets/images/crop-projects/cacao.jpg";

const ProjectList = () => {
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
    {
      img: papa,
      nombreCultivo: "Papa Pastusa",
      tipoCultivo: "Tubérculo",
      descripcion:
        "Papa tradicional de alta demanda en el mercado local y regional.",
      ubicacion: "Boyacá, Colombia",
      rendimientoEstimado: 12000,
      inversionNecesaria: 30000,
    },
    {
      img: banano,
      nombreCultivo: "Banano Cavendish",
      tipoCultivo: "Fruta",
      descripcion:
        "Banano de exportación, resistente y de alta productividad en climas cálidos.",
      ubicacion: "Magdalena, Colombia",
      rendimientoEstimado: 15000,
      inversionNecesaria: 60000,
    },
    {
      img: cacao,
      nombreCultivo: "Cacao Criollo",
      tipoCultivo: "Cacao",
      descripcion:
        "Cacao fino de aroma, utilizado en la elaboración de chocolates de alta calidad.",
      ubicacion: "Huila, Colombia",
      rendimientoEstimado: 5000,
      inversionNecesaria: 35000,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div
      id="project-list"
      className="bg-gradient-to-b from-black to-primary min-h-screen mt-20 pt-20"
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-xl duration-300"
            style={{ minHeight: "450px" }}
          >
            <img
              src={project.img}
              alt={`Project ${project.nombreCultivo}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-text mb-2">
                {project.nombreCultivo}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {project.tipoCultivo}
              </p>
              <p className="text-gray-700 text-sm mb-4">
                {project.descripcion}
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-text">Ubicación:</strong>{" "}
                {project.ubicacion}
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-text">Rendimiento estimado:</strong>{" "}
                {project.rendimientoEstimado} kg
              </p>
              <p className="text-gray-500 text-sm mb-4">
                <strong className="text-text">Inversión necesaria:</strong> $
                {project.inversionNecesaria}
              </p>
            </div>
            <div className="p-2">
              <button className="bg-primary text-white py-2 px-4 w-full rounded-lg hover:bg-text transition-colors duration-300">
                <TransferAVAX />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-2 px-4 py-2 rounded ${
              i + 1 === currentPage
                ? "bg-primary text-white"
                : "bg-gray-300 text-gray-700"
            } hover:bg-primary hover:text-white transition-colors duration-300`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
