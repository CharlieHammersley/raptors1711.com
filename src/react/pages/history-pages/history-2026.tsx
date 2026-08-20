import "./history-2026.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import { PageHeading } from "/src/react/elements/page-heading";
import historyPhoto from "/src/assets/images/page-heroes/klieo-robot.JPG";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History2026 extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history-2026">
                <div className="history-hero">
                    <img src={historyPhoto} alt="Our 2026 bot, Klieo."/>
                    <div className="overlay"/>
                    <div className="history-hero-heading">
                        <PageHeading>2026 Season</PageHeading>
                    </div>
                </div>
                <div className="content">
                    <div className="game">
                        <h2>The Game - Rebuilt</h2>
                        <p>
                            Included in FIRST AGE, this year’s game was archaeology and restoration-inspired; 
                            REBUILT was a high-speed scoring game involving two alliances of three teams that 
                            competed to score the most points by completing various tasks. These included collecting 
                            and scoring yellow foam balls, called Fuel, into a central goal called the Hub, while 
                            navigating field obstacles and adapting to alternating scoring opportunities throughout 
                            the match. At the end of the game, teams could climb a multi-level Tower to earn additional 
                            points and ranking bonuses. Learn more about <a href="https://en.wikipedia.org/wiki/Rebuilt_(FIRST)">REBUILT</a>.
                        </p>
                    </div>
                    <br />
                    <div className="season">
                        <h2>Our Season - 2025</h2>
                        <p>
                            Included in FIRST AGE, this year’s game was archaeology and restoration-inspired; REBUILT challenged 
                            teams to collect and score Fuel while adapting to dynamic scoring opportunities and endgame climbs. 
                            Team 1711 RAPTORS built a competitive robot that steadily improved throughout the season, earning the 
                            District Engineering Inspiration Award at the Mt. Pleasant District Event, the Team Sustainability Award 
                            at their home Traverse City District Event, and the Judges’ Award at the FIRST in Michigan State 
                            Championship. The team accumulated <b>121 district points</b>, including 26 points at Mt. Pleasant, 47 
                            points at Traverse City, and 48 points at the Michigan State Championship, finishing <b>111th out of 
                            619 teams</b> in the FIRST in Michigan District and qualifying for the State Championship.
                        </p>
                        <p>
                            The RAPTORS also celebrated two outstanding Dean’s List nominees: Charlie H., a junior who served as the 
                            team’s Safety Subject Matter Expert (SME), and Aviannah S., a junior who served as the team’s Non-Technical 
                            SME. Charlie’s leadership in fostering a strong culture of safety was further recognized at the Michigan State 
                            Championship, where they were selected as the <b>Safety All Star</b>, an honor awarded to students who demonstrate 
                            exceptional commitment to safety and inspire those around them. Together, Charlie and Aviannah exemplified the values 
                            of FIRST through their leadership, dedication, and service to the team and community. Their contributions helped make 
                            the 2026 season a success, showcasing technical achievement, impactful outreach, a strong commitment to safety, and 
                            the continued development of future STEM leaders.
                        </p>
                    </div>
                </div>
            </Page>
        );
    }
}