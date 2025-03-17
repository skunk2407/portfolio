import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="h-screen flex items-center justify-center text-4xl font-bold text-white bg-gray-900">
      Détails du projet : {id}
    </div>
  );
};

export default ProjectDetail;
