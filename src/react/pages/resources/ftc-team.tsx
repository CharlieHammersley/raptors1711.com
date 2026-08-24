import "./ftc-team.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import heroImage from "/src/assets/images/page-heroes/ftc-placeholder.jpg";
import { PageHeading } from "/src/react/elements/page-heading";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class FTCTeam extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    
        return (
            <Page name="ftc-team">
                <div className="hero">
                    <img src={heroImage} alt="" />
                    <div className="overlay"/>
                    <div className="hero-heading">
                        <PageHeading>How to Start an FTC Team</PageHeading>
                    </div>
                </div>
                <div className="content">
                    <p>
                        Starting a FIRST® Tech Challenge (FTC) team is a great way to introduce students in grades 7–12 
                        to robotics, engineering, programming, and teamwork through a fun, hands-on learning experience. 
                        FIRST provides everything you need to get started, including registration guidance, mentor 
                        resources, robot kits, fundraising information, and season materials to help new teams succeed. 
                        To learn more about starting an FTC team, visit the 
                        official <a href="https://www.firstinspires.org/programs/ftc/get-started" target="_blank" rel="noopener noreferrer">FIRST Tech Challenge Get Started Guide</a>.
                    </p>
                    <p>
                        Team 1711 The RAPTORS is proud to support the growth of the FIRST community. If you're interested 
                        in starting an FTC team in your school or community, we'd be happy to share our experience, answer 
                        your questions, and provide guidance throughout the process. Feel free to reach out at raptors1711@gmail.com.
                    </p>
                </div>
            </Page>
        );
        
    }
    
}
