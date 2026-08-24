import "./history.scss";
import React from "react";
import historyImage from "../../assets/images/action-shots/eric+billy-working-on-klieo.JPG";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";
import bb1 from "../../assets/images/blue-banners/frc-bb-carson-winner-2015.png";
import bb2 from "../../assets/images/blue-banners/frc-bb-chairmans-2012.png";
import bb3 from "../../assets/images/blue-banners/frc-bb-chairmans-2014.png";
import bb4 from "../../assets/images/blue-banners/frc-bb-chairmans-2016.png";
import bb5 from "../../assets/images/blue-banners/frc-bb-chairmans-2021.png";
import bb6 from "../../assets/images/blue-banners/frc-bb-chairmans-2022.png";
import bb7 from "../../assets/images/blue-banners/frc-bb-fim-winner-2015.png";
import bb8 from "../../assets/images/blue-banners/frc-bb-tc-winner-2015.png";
import bb9 from "../../assets/images/blue-banners/frc-bb-tc-winner-2022.png";
import bb10 from "../../assets/images/blue-banners/frc-bb-tc-winner-2024.png";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history">
                <div className="cover-image-block">
                    <div className="overlay">
                        <PageHeading>Our History</PageHeading>
                        <div className="blue-banner-block">
                            <img src={bb1} alt="2015 Carson Award Winner"/>
                            <img src={bb2} alt="2012 Chairman's Award Winner"/>
                            <img src={bb3} alt="2014 Chairman's Award Winner"/>
                            <img src={bb4} alt="2016 Chairman's Award Winner"/>
                            <img src={bb5} alt="2021 Chairman's Award Winner"/>
                            <img src={bb6} alt="2022 Chairman's Award Winner"/>
                            <img src={bb7} alt="2015 FIM Winner"/>
                            <img src={bb8} alt="2015 TC Winner"/>
                            <img src={bb9} alt="2022 TC Winner"/>
                            <img src={bb10} alt="2024 TC Winner"/>
                        </div>
                    </div>
                    <img className="historyImage" src={historyImage} alt="Mentor and Students collaborating on robot repairs."/>
                    <div className="overlay-img"/>
                    
                </div>

                <div className="text-block">
                    <p>
                        Since its founding in 2006, Team 1711 The RAPTORS has grown from a small group of students 
                        interested in FIRST Robotics into one of Northern Michigan’s most accomplished robotics programs. 
                        Through years of innovation, teamwork, and community involvement, the RAPTORS have earned numerous 
                        awards, competed at the highest levels of FIRST, including an appearance on the Einstein Field, and 
                        inspired future generations through outreach, mentorship, and STEM education. While much has changed 
                        over the years, our commitment to learning, leadership, and giving back to our community remains 
                        stronger than ever.
                    </p>
                </div>
                
                <div className="season-block">
                    <h2>Our Past Seasons</h2>

                    <div className="history-grid">
                        <a href="/history-2026" className="season-card">
                            <span className="season-year">2026</span>
                            <span className="season-label">Season</span>
                            <span className="season-arrow">→</span>
                        </a>

                        <a href="/history-2025" className="season-card">
                            <span className="season-year">2025</span>
                            <span className="season-label">Season</span>
                            <span className="season-arrow">→</span>
                        </a>

                        <a href="/history-2024" className="season-card">
                            <span className="season-year">2024</span>
                            <span className="season-label">Season</span>
                            <span className="season-arrow">→</span>
                        </a>
                    </div>
                </div>
            </Page>
        );
        
    }
    
}
