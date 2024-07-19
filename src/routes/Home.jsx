import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import WelcomeSection from "../components/Welcome/Welcome";
import MissionSection from "../components/Mission/MissionSection";
import ServicesSection from "../components/Services/ServicesSection";
import ConsultationSection from "../components/Consultation/ConsultationSection";
import JoinOurTeamSection from "../components/JoinOurTeam/JoinOurTeamSection";

const Home = () => {
  return (
    <div>
      {/* Banner Start */}
      <Carousel />
      {/* Banner End */}

      <WelcomeSection />
      <MissionSection />
      <ServicesSection />
      <ConsultationSection />
      {/* <JoinOurTeamSection /> */}
      {/* Footer Start */}

      {/* Footer End */}
    </div>
  );
};

export default Home;
