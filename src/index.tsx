import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./react/pages/home";
import { MeetTheTeam } from "./react/pages/meet-the-team";
import { NotFound } from "./react/pages/not-found";
import { ContactUs } from "./react/pages/contact-us";
import { MeetTheSMEsPage } from "./react/pages/meet-the-smes-page";
import { MeetTheMentorsPage } from "./react/pages/meet-the-mentors-page";
import { SponsorUs } from "./react/pages/sponsor-us";
import { Sponsors } from "./react/pages/sponsors";
import { AboutUs } from "./react/pages/about-us";
// History
import { History } from "./react/pages/history";
import { History2026 } from "./react/pages/history-pages/history-2026";
import { History2025 } from "./react/pages/history-pages/history-2025";
import { History2024 } from "./react/pages/history-pages/history-2024";
import { History2023 } from "./react/pages/history-pages/history-2023";
import { History2022 } from "./react/pages/history-pages/history-2022";
// Documentation
import { EngineeringNotebook2026 } from "./react/pages/documentation/engineering-notebook-2026";
import { Bones2026 } from "./react/pages/documentation/bones-2026";
// Resources
import { TeamCalendar } from "./react/pages/resources/team-calendar";
import { StartRoboticsTeam } from "./react/pages/resources/start-robotics-team";

// Community
import { Community } from "./react/pages/community/community";
import { JoinTheRaptors } from "./react/pages/community/join-the-raptors";
import { EducationOpportunities } from "./react/pages/community/education-opportunities";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/index" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
        {/* Meet the Team */}
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/meet-the-SMEs" element={<MeetTheSMEsPage />} />
        <Route path="/meet-the-mentors" element={<MeetTheMentorsPage />} />
        {/* Sponsorship */}
        <Route path="/sponsorship" element={<SponsorUs />} />
        <Route path="/sponsors" element={<Sponsors />} />
        {/* Misc */}
        <Route path="/contact-us" element={<ContactUs />} />
        {/* History */}
        <Route path="/history" element={<History />} />
        <Route path="/history-2026" element={<History2026 />} />
        <Route path="/history-2025" element={<History2025 />} />
        <Route path="/history-2024" element={<History2024 />} />
        <Route path="/history-2023" element={<History2023 />} />
        <Route path="/history-2022" element={<History2022 />} />
        {/* Documents */}
        <Route path="/engineering-notebook-2026" element={<EngineeringNotebook2026 />} />
        <Route path="/bones-2026" element={<Bones2026 />} />
        {/* Resources */}
        <Route path="/team-calendar" element={<TeamCalendar />} />
        <Route path="/start-robotics-team" element={<StartRoboticsTeam />} />
        {/* Community */}
        <Route path="/community" element={<Community />} />
        <Route path="/join-the-raptors" element={<JoinTheRaptors />} />
        <Route path="/education-opportunities" element={<EducationOpportunities />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);