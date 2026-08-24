import "./frc-team.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import heroImage from "/src/assets/images/page-heroes/start-frc-team.JPG";
import { PageHeading } from "/src/react/elements/page-heading";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class FRCTeam extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    
        return (
            <Page name="frc-team">
                <div className="hero">
                    <img src={heroImage} alt="" />
                    <div className="overlay"/>
                    <div className="hero-heading">
                        <PageHeading>How to Start an FRC Team</PageHeading>
                    </div>
                </div>
                <div className="content">
                    <p>
                        Starting a FIRST Robotics Competition (FRC) team is an exciting opportunity to inspire students through hands-on STEM 
                        education, teamwork, and real-world engineering. Whether you're a teacher, parent, mentor, or community leader, FIRST 
                        provides the resources, guidance, and tools needed to launch a successful team, from registration and fundraising to 
                        robot construction and competition preparation. For official information and step-by-step resources, visit 
                        the <a href="https://www.firstinspires.org/programs/frc/get-started" target="_blank" rel="noopener noreferrer">FIRST Robotics Competition Get Started Guide</a>.
                    </p>
                    <p>
                        As a team that has been competing since 2006, Team 1711 The RAPTORS is passionate about helping new teams succeed. If 
                        you're interested in starting an FRC team in your school or community, we'd be happy to share our experience, answer 
                        questions, and provide guidance throughout the process. Don't hesitate to reach out, we're always excited to help grow 
                        the FIRST community. Feel free to reach out at raptors1711@gmail.com.
                    </p>
                </div>
            </Page>
        );
        
    }
    
}
