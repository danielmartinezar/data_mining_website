import React, { useState } from "react";
import MemberCard from "./memberCard";
import MemberDetails from "./memberDetails";
export default function AboutSection() {
  const [selectedMember, setSelectedMember] = useState();

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseDetails = () => {
    setSelectedMember(null);
  };
  const membersData = [
    {
      id: 1,
      name: "Daniel Martinez",
      biography:
        "I'm a passionate Full Stack Developer with experience in Node.js, Express, SQL, Mongo, and React, specializing in backend development for scalable web applications. I'm also enthusiastic about mobile development, recognizing its transformative impact. My commitment to innovation and adaptability drives me to tackle new challenges and quickly adjust to industry changes.",
      image: "./images/photoDaniel-Martinez.jpg",
    },
    {
      id: 2,
      name: "José Rueda",
      biography:
        "I am a ninth-semester systems engineering student at the University of the North. I have experience programming in languages such as Javascript, Java, Python, Dart, Frontend web programming with React, HTML, and CSS. I also have experience with MySQL databases. I am enthusiastic and enjoy learning new programming and software design skills. I consider myself an eloquent person with great communication and group interaction skills.",
      image: "./images/jose-rueda.jpg",
    },
    {
      id: 3,
      name: "Laura Benavides",
      biography:
        "My name is Laura Andrea Benavides Celis, a tenth-semester student of Systems Engineering. I am 21 years old and was born in Barranquilla. I enjoy front-end web development and am constantly learning and improving in this field.",
      image: "./images/laura-benavides.jpg",
    },
    {
      id: 4,
      name: "Alvaro Alvarado",
      biography:
        "I was born in Magangué, Bolívar. I am a ninth-semester student with a passion for software development, AI, Machine Learning and a drive to be a good professional.",
      image: "./images/alvaro-alvarado.jpg",
    },
    {
      id: 5,
      name: "Sofia Gallas",
      biography:
        "I am a German international student studying Global Business Management in the last semester. I was born in Munich, in the south of Germany, and my main interests are Marketing and Strategic Management.",
      image: "./images/sofia-gallas.jpg",
    },
  ];
  return (
    <div id="about-us">
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
