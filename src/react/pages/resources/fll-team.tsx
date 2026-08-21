import "./fll-team.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import heroImage from "/src/assets/images/page-heroes/fll-placeholder.jpg";
import { PageHeading } from "/src/react/elements/page-heading";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class FLLTeam extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    
        return (
            <Page name="fll-team">
                <div className="hero">
                    <img src={heroImage} alt="" />
                    <div className="overlay"/>
                    <div className="hero-heading">
                        <PageHeading>How to Start an FLL Team</PageHeading>
                    </div>
                </div>
                <div className="content">
                    <p>
                        FIRST® LEGO® League (FLL) introduces students in grades K-8 to the exciting 
                        world of STEM through hands-on robotics, coding, research, and teamwork. 
                        Using LEGO® Education technology, students develop creative solutions to 
                        real-world challenges while building confidence, critical thinking, and 
                        problem-solving skills. FIRST provides step-by-step guidance, registration 
                        resources, coach materials, and season information to help new teams get 
                        started. Learn more by visiting the official FIRST LEGO League Get Started 
                        page: <a href="https://www.firstinspires.org/programs/fll/get-started" target="_blank" rel="noopener noreferrer">FIRST Lego League Team Get Started Guide</a>.
                    </p>
                    <p>
                        Team 1711 The RAPTORS is committed to growing the FIRST community. If you're interested 
                        in starting a FIRST LEGO League team in your school or community, we'd be happy to share 
                        our experience, answer your questions, and provide guidance to help your team get off the 
                        ground. Together, we can inspire the next generation of innovators and problem-solvers. 
                        Feel free to reach out at raptors1711@gmail.com.
                    </p>
                </div>
            </Page>
        );
        
    }
    
}
