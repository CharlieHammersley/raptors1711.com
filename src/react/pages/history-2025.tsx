import "./history-2025.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";
import historyPhoto from "../../assets/images/scylla-standard.jpg";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History2025 extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history-2025">
                <PageHeading>2025 Season</PageHeading>
                <img src={historyPhoto} alt="Our 2025 bot, Scylla."/>
                <div className="game">
                    <h2>The Game - Reefscape</h2>
                    <p>Included in FIRST DIVE, this year’s game was water and coral reef inspired; Reefscape was pick and place game, 
                        involving two alliances of three teams that would compete to score the most points by completing various tasks. These 
                        included scoring PVC pipe sections, called Coral, into a tall goal, called the Reef, as well as large dodgeballs, called Algae, 
                        onto one of two goals. At the end of the game, teams could climb on a metal cage to gain additional points.
                        <a href="https://en.wikipedia.org/wiki/Reefscape"> Learn more about Reefscape.</a>
                    </p>
                </div>
                <br />
                <div className="season">
                    <h2>Our Season - 2025</h2>
                    <p>After the 2024 season, we lost much of our team as graduating seniors. Due to this, there was a vacuum of experience as the team consisted of only one senior and 
                        many sophomores. Despite this, we trained hard throughout the offseason and kept our expectations high for the competition season.
                    </p>
                    <p>Once Reefscape was kicked-off, the team got straight to work. Building many prototypes and thorough ranking, we decided to build a deep hang and coral robot. Because of our 
                        senior loss from 2024, we lacked some expertise in our design process. Despite this, the team persevered, turning the situation into a learning experience. Although we focused 
                        primarily on coral, we didn’t put off the idea of an algae manipulator, but near the end of build season, as we couldn’t find room for it on the current design.
                    </p>
                    <p>Our first district competition was the Mt. Pleasant Week 2 Event, where we experienced some technical failures but ended up on the sixth alliance. At this competition we won the 
                        Team Spirit Award. After Mt. Pleasant, we hosted this year's Traverse City District Week 3 Event. Fixing the issues we encountered during the previous competition, we competed well 
                        and placed high after qualification matches. We were the first pick onto the second alliance, where we competed with Rockefeller Robotics and the Ludington O-Bots. We placed high in the 
                        event and won the Autonomous Award, as well as a Dean's List Finalist, Francesca Harbold. 
                    </p>
                    <p>After ranking high in both other competitions, we entered to compete in the FIRST in Michigan State Championship in the DTE Energy Foundation Division. After placing well the first day of the 
                        competition, an unlucky schedule and mechanical complications knocked us down the rankings. We finished the competition with the Team Imagery Award in honor of Jack Kamen.
                    </p>
                    <p>
                        Once the competition season officially ended, we perfected our climber and shooting mechanisms in preparation for offseason competitions. We competed in the Kettering All-Stars Invitational 
                        Competition, teaming up with The TC Titans (3767) and The Gladiators (4398) as the Cherry Bomb Alliance. Because of our cooperation and preparation before the event, we found great success 
                        in our matches, reaching our highest scores of the season. We also competed in the Ferris State Roboday competition, where we placed high in the playoff rankings.
                    </p>
                    <p>
                        The 2025 season was a great success for our team despite losing almost all of our leadership. Through the hard work and perseverance of our students and mentors, we took what was predicted 
                        to be a bad season and made it a good one, gearing us up for an even better 2026. Thank you to all of our sponsors, mentors, and contributors! Your help is greatly appreciated!
                    </p>
                </div>
                <br />
                <div className="robot">
                    <h2>Our Robot - Scylla</h2>
                    <p>
                        Pronounced Sill-uh, our bot was medium-sized, designed to quickly score coral at all levels of the Reef. Scylla uses a tiered elevator system to lift the coral up and score using a 
                        compliance star mechanism. Our design was heavily inspired by this season’s theme, including many aspects reflecting our beach town home. 
                    </p>
                </div>
                <br />
                <div className="gallery"></div>
                
            </Page>
        );
        
    }
    
}
