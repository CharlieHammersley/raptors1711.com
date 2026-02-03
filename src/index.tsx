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
import { AboutUs } from "./react/pages/about-us";
import { TeamHistory } from "./react/pages/team-history";
import { History25 } from "./react/pages/history-25";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/index" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/meet-the-SMEs" element={<MeetTheSMEsPage />} />
        <Route path="/meet-the-mentors" element={<MeetTheMentorsPage />} />
        <Route path="/sponsorship" element={<SponsorUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team-history" element={<TeamHistory />} />
        <Route path="/history-25" element={<History25 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);