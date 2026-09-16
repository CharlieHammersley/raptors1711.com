import React from "react";

import { Page } from "../../elements/page-flow/page";
import { PageHeading } from "../../elements/page-items/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class JoinTheRaptors extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="join-the-raptors">
                <PageHeading>Join the Raptors</PageHeading>
                <p>
                    Becoming a member of Team 1711 The RAPTORS means becoming part of something larger 
                    than a club. Since 2006, we've empowered students to explore engineering, programming,0
                     design, marketing, leadership, and teamwork through the exciting challenges of the 
                     FIRST® Robotics Competition. Whether you're interested in building robots, creating 
                     graphics, programming autonomous routines, leading outreach events, or telling our 
                     team's story, there's a place for you on Team 1711.
                </p>
                <p>
                    At the RAPTORS, we believe every student has something valuable to contribute. No prior 
                    experience is required, just a willingness to learn, collaborate, and challenge yourself. 
                    Our experienced students and mentors are committed to helping new members develop new 
                    skills, build confidence, and discover their passions in a supportive and welcoming 
                    environment.
                </p>
                <p>
                    Being a RAPTOR means being part of a family that celebrates successes, learns from 
                    challenges, and grows together. Throughout the season, you'll work alongside teammates 
                    to solve real-world problems, compete against some of the best teams in the world, 
                    serve our community through outreach events, and create lifelong friendships along 
                    the way.
                </p>
                <p>
                    Our members gain experience in:
                </p>
                <ul>
                    <li>Engineering and fabrication</li>
                    <li>CAD and product design</li>
                    <li>Programming and electrical systems</li>
                    <li>Marketing and communications</li>
                    <li>Business, fundraising, and sponsorship</li>
                    <li>Public speaking and leadership</li>
                    <li>Community outreach and STEM advocacy</li>
                </ul>
                <p>
                    No matter your interests or future career goals, Team 1711 offers opportunities to 
                    learn skills that extend far beyond the robotics field.
                </p>

                <h2>How Can I Join?</h2>

                <p>
                    We're always excited to welcome new students to Team 1711! Whether you're entering 
                    high school with no robotics experience or looking to expand your technical and 
                    leadership skills, there's a place for you on our team. Click the button below or (email
                    hello@RAPTORS1711.com) to contact us, ask questions, schedule a visit, or learn more about 
                    becoming a RAPTOR. We can't wait to meet you and help you discover everything FIRST 
                    Robotics has to offer.
                </p>
                <p>
                    <a href="mailto:hello@RAPTORS1711.com" target="_blank" rel="noopener noreferrer">
                        Contact Us Here!
                    </a>
                </p>
            </Page>
        );
    }
}