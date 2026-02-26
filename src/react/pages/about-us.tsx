import "./about-us.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import aboutUsPhoto from "../../assets/images/imc-frannie-speech.jpg";
import { PageHeading } from "../elements/page-heading";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class AboutUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="about-us">
                <PageHeading>About Us</PageHeading>
                <img src={aboutUsPhoto} alt="Our 2025 bot, Scylla."/>
                <p>
                    Team 1711 The RAPTORS was formed in 2006 initially by Mr. John Failor and a small group of students eager to learn about FIRST Robotics. 
                    Our team meets multiple times per week year round, ramping up practices into the build season.
                    RAPTORS stands for Robots and People Transmitting Objective Radical Synergy. Team 1711 is heavily involved in our community, 
                    especially through connecting with younger students. Our biggest annual event is Super Science Saturday, which encourages elementary
                    school students to develop an interest in STEM through hands-on activities and guest speakers. The RAPTORS love to have fun in and
                    out of practice, but we have had many accomplishments throughout the years. We are excited to return to the field this year and 
                    hope you will follow our progress.
                </p>
                <h2>Accomplishments</h2>
                <p>The RAPTORS have won many awards throughout our history, becoming 3rd nationally for the imagery award. Since our first competition 
                    season in 2007, we have achieved:
                </p>
                <ul>
                    <li>48 Awards</li>
                    <li>11 Imagery Awards</li>
                    <li>5 Impact Awards</li>
                    <li>11 Event Finalists</li>
                    <li>5 Competition Wins</li>
                    <li>10 States Appearances</li>
                    <li>3 Worlds Appearances</li>
                    <li>1 Einsteins Appearance</li>
                </ul>
                <br />
                <h2>Our Event</h2>
                <p>
                    Since 2009 The RAPTORS hosted the first Traverse City district competition at Traverse City Central High School. Since that first competition 
                    back in 2009, the RAPTORS have accumulated many allies and an abundance of experience through hosting this event. The RAPTORS, in the spirit of 
                    cooperation, continue to collaborate with and aid the newer, less established teams in the area through our event. 15 years later, the tradition 
                    continues strong as ever, each year bringing its own triumphs and trifles. 
                </p>
                <h2>Our Impact</h2>
                <p>Since the beginning, our practices have been deeply rooted in collaboration, innovation, and sincerity in the hopes of forging a better 
                    tomorrow for the young tinkerers and leaders to come. In order to achieve this dream, we started hosting an event to cater to the 
                    hungry minds of kids. Going under the name of Super Science Saturday (SSS), this all-day event provides ample resources necessary to 
                    allow the youth to ask “Why?” instead of “What?” for the first time. With multiple courses of varying complexity, the event is able to 
                    keep nearly all ages attentive and engaged throughout the event.
                </p>
                <p>
                    As the RAPTORS, our biggest goal throughout the years has remained a constant: the desire to give back to our school so others will be 
                    given the chance to experience things that may not have been an option to them beforehand. To give them the most opportunities possible, 
                    we make frequent visits to elementary and middle schools to educate them about robotics. We present at many STEM classes to help foster 
                    innovation and critical thinking in the next generation.
                </p>
                <p>Events in Traverse City require a lot of hands to function, and the RAPTORS are more than happy to help. From the National Cherry Festival 
                    to the annual ICEMAN race, the RAPTORS have been there to provide assistance wherever needed. We believe wholeheartedly in supporting our 
                    community through volunteer service.
                </p>
            </Page>
        );
        
    }
    
}
