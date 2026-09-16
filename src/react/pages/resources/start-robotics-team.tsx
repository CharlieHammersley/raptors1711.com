import "./start-robotics-team.scss";
import React from "react";
import { Page } from "../../elements/page-flow/page";
import heroImage from "../../../assets/images/page-heroes/frc-placeholder.jpg";
import { PageHeading } from "../../elements/page-items/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class StartRoboticsTeam extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    
        return (
            <Page name="start-robotics-team">
                <div className="page-hero-overlay-block">
                    <img src={heroImage} alt="" />
                    <div className="overlay"/>
                    <div className="overlay-text">
                        <PageHeading>How to Start a Robotics Team</PageHeading>
                        <p>Need help creating or joining a robotics team? You've come to the right place!</p>
                    </div>
                </div>
                <div className="content">
                    <h2>Where to Begin?</h2>
                    <p>
                        Before you register a team, make sure you've checked your local area for existing teams. From there, you can join a local
                        team or start your own! If you're looking to start a team, there are a few things you'll need to consider, including the cost,
                        time commitment, and resources available to you. For now, you can follow these steps to get your new team started.
                    </p>
                    
                    <section className="steps">
                        <div className="step">
                            <span className="step-number">01</span>
                            <h3>Choose a Program</h3>
                            <p>
                                Decide which FIRST robotics program is right for your team.
                            </p>
                        </div>

                        <div className="step">
                            <span className="step-number">02</span>
                            <h3>Build Your Team</h3>
                            <p>
                                Find students, coaches, mentors, and a place to meet.
                            </p>
                        </div>

                        <div className="step">
                            <span className="step-number">03</span>
                            <h3>Get Started</h3>
                            <p>
                                Register your team and start preparing for the season.
                            </p>
                        </div>
                    </section>
                </div>
            </Page>
        );
        
    }
    
}
