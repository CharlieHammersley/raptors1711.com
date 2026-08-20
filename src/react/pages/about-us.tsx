import "./about-us.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import aboutUsPhoto from "../../assets/images/page-heroes/frannie-judges.JPG";
import { PageHeading } from "../elements/page-heading";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class AboutUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    
        return (
            <Page name="about-us">
                <div className="about-hero">
                    <img src={aboutUsPhoto} alt="Frannie H. talking to the judges at the FIM Championship." />
                    <div className="overlay"/>
                    <div className="about-hero-heading">
                        <PageHeading>About Us</PageHeading>
                    </div>
                </div>
                <div className="content">
                    <p>
                        Founded in 2006, a small group of students inspired to explore the world of FIRST Robotics, 
                        Team 1711 The RAPTORS has grown into a year-round program dedicated to innovation, leadership, 
                        and community impact. RAPTORS (*Robots and People Transmitting Objective Radical Synergy)* 
                        reflects the values that define our team: collaboration, creativity, and the belief that 
                    incredible things happen when people work together toward a common goal.
                    <br />
                    <p/>
                        Our team meets multiple times each week throughout the year, increasing practice and build 
                        sessions during competition season as students dedicate themselves to designing, engineering, 
                        programming, and refining robots capable of competing at the highest level. Throughout our 
                        history, that commitment has led to remarkable accomplishments including 48 awards, 11 
                        Imagery Awards, 5 Impact Awards, 11 Event Finalist finishes, 5 competition wins, 10 State 
                        Championship appearances, 3 World Championship appearances, 
                        earning the opportunity to compete on the Einstein Field.
                        <br />
                    <p/>
                        Reaching the Einstein Field represents more than competitive success; it symbolizes years of 
                        perseverance, teamwork, and the pursuit of excellence. As one of the top-performing teams at 
                        the FIRST Championship, Team 1711 stood among the world’s best and demonstrated what can happen 
                        when passion, preparation, and determination come together. That experience continues to inspire 
                        current and future RAPTORS to dream bigger, work harder, and aim higher.
                        <br />
                    <p/>
                        Beyond competition, our impact reaches throughout the Traverse City community. Since 2009, 
                        Team 1711 has proudly hosted the Traverse City district competition at Traverse City Central 
                        High School, creating opportunities for teams across the region to compete, connect, and grow. 
                        Through years of hosting, mentoring, and collaboration, we continue to support developing teams 
                        and strengthen the robotics community around us.
                        <br />
                    <p/>
                        Community outreach remains at the heart of everything we do. Through our annual Super Science 
                        Saturday event, we invite elementary students to explore STEM through hands-on activities, 
                        interactive learning, and inspiring experiences that encourage curiosity and discovery. We 
                        also visit local elementary and middle schools, present in STEM classrooms, and volunteer 
                        throughout the community at events such as the National Cherry Festival and ICEMAN race. Our 
                        goal has always remained the same: to give back, expand opportunities for others, and inspire 
                        the next generation of innovators and leaders.
                        <br />
                        At Team 1711 The RAPTORS, we are building confidence, creating opportunities, and shaping the future.
                    </p>
                </div>
            </Page>
        );
        
    }
    
}
