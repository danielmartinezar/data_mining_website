import React, { useEffect, useState } from "react";
import MemberCard from "./memberCard";
import MemberDetails from "./memberDetails";
export default function AboutSection() {
  const [selectedMember, setSelectedMember] = useState({});

  useEffect(() => {
    console.log("Selected member cambio", selectedMember);
  }, [selectedMember]);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseDetails = () => {
    setSelectedMember(null);
  };
  const membersData = [
    {
      id: 1,
      name: "Eduardo Martinez",
      biography:
        "Soy un apasionado full stack developer. Nací en la ciudad de sincelejo, tengo 23 años y me encuentro en mi ultimo semestre de ingenieria de sistemas Soy un apasionado full stack developer. Nací en la ciudad de sincelejo, tengo 23 años y me encuentro en mi ultimo semestre de ingenieria de sistemas.",
      image: "./images/photoDaniel.png",
    },
    {
      id: 2,
      name: "Daniel Eduardo Martinez",
      biography:
        "Soy un apasionado full stack developer. Nací en la ciudad de sincelejo, tengo 23 años y me encuentro en mi ultimo semestre de ingenieria de sistemas Soy un apasionado full stack developer. Nací en la ciudad de sincelejo, tengo 23 años y me encuentro en mi ultimo semestre de ingenieria de sistemas.",
      image: "./images/photoDaniel.png",
    },
    {
      id: 3,
      name: "Daniel Eduardo Martinez",
      biography:
        "Soy un apasionado full stack developer. Nací en la ciudad de sincelejo, tengo 23 años y me encuentro en mi ultimo semestre de ingenieria de sistemas Soy un apasionado full stack developer. Nací en la ciudad de sincelejo, tengo 23 años y me encuentro en mi ultimo semestre de ingenieria de sistemas.",
      image: "./images/photoDaniel.png",
    },
    {
      id: 4,
      name: "Daniel Eduardo Martinez",
      biography:
        "Especializado en desarrollo backend con Python, mi experiencia abarca desde Django hasta FastAPI, ofreciendo soluciones robustas y escalables en sectores como seguros, bienes raíces en EE. UU., y marketing digital con Shopify. Trabajo efectivamente en entornos remotos, colaborando con equipos nacionales e internacionales, lo que me ha permitido perfeccionar mis habilidades de comunicación y adaptabilidad. Comprometido con la excelencia en el desarrollo de software, aplico las mejores prácticas y busco continuamente nuevas tecnologías para impulsar la innovación. Mi pasión por resolver problemas complejos y optimizar procesos me motiva a crear aplicaciones que no solo satisfacen los requisitos técnicos sino que también generan valor tangible para los usuarios finales y el negocio.",
      image: "./images/photoDaniel.png",
    },
    {
      id: 5,
      name: "Daniel Eduardo Martinez",
      biography:
        "Soy un apasionado full stack developer. Nací en la ciudad de sincelejo, tengo 23 años y me encuentro en mi ultimo semestre de ingenieria de sistemas Soy un apasionado full stack developer. Nací en la ciudad de sincelejo, tengo 23 años y me encuentro en mi ultimo semestre de ingenieria de sistemas.",
      image: "./images/photoDaniel.png",
    },
  ];
  return (
    <div>
      <h2 className="text-center text-6xl font-bold text-[#0050ff] mt-10 lg:mt-52 mb-8 md:mb-12">
        About Us
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {membersData.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            biography={member.biography}
            imgURL={member.image}
            handleCardClick={() => handleCardClick(member)}
          />
        ))}
      </div>
      {selectedMember && (
        <MemberDetails {...selectedMember} onClose={handleCloseDetails} />
      )}
    </div>
  );
}
