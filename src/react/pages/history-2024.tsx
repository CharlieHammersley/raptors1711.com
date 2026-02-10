import "./history-2024.scss";
import React from "react";
import historyPhoto from "../../assets/images/artemis-in-action.PNG";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History2024 extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history-2024">
                <PageHeading>2024 Season</PageHeading>
                <img src={historyPhoto} alt="Our 2024 bot, Artemis."/>
                <div className="game">
                    <h2>The Game - Reefscape</h2>
                    <p>This year’s game theme was music; Crescendo was a shooting game in which two alliances of three teams would compete to score the most points by 
                        completing various tasks. These included scoring rings, called Notes, into a tall goal, called the Speaker, as well as climbing onto a chain at 
                        the end of the game.
                        <a href="https://en.wikipedia.org/wiki/Crescendo_(FIRST)"> Learn more about Crescendo.</a>
                    </p>
                </div>
                <br />
                <div className="season">
                    <h2>Our Season - 2024</h2>
                    <p>
                        Coming into this season, there were seven seniors in leadership positions on the team, one junior, no sophomores, and numerous freshmen. This year focused on high 
                        level competition for the seniority, as well as education opportunities and first hand experience for many of the freshmen.
                    </p>
                    <p>
                        The 2024 season kicked off with lots of excitement about Crescendo, the game’s release inspired many mechanisms that allowed for high level play. Deciding to focus primarily on the speaker, 
                        we designed our bot to stay low to the ground, being able to traverse underneath the stage and avoid opposing defense. This choice also allowed us to design a robust ground intake system 
                        for the notes, in doing so our bot became very swift in its capabilities. As we were building our robot, a delay in production caused the steel pan of the robot to arrive two weeks later than anticipated, 
                        restricting our drive practice. Despite this, we trained rigorously in anticipation for our first competition.
                    </p>
                    <p>Lake City marked the beginning of our 2024 season, where we competed fiercely and secured second place. In doing so, 
                        the team was able to provide many members with their first experience in competition. The Traverse City district event, hosted in tandem by Traverse City teams, 
                        was a smashing success. Captaining the 3rd alliance, the RAPTORS pioneered their alliance through both finals brackets to the coveted blue banner. We competed alongside 
                        the Titans 3767 and BlitzCreek 3770.
                    </p>
                    <p>After a riveting season, the RAPTORS were awarded the opportunity to compete in the state championship. While it was the biggest challenge 
                        of the season, the team persevered through a difficult schedule and some technical failures to secure a high-note ending for the 2024 season.
                    </p>
                </div>
                <br />
                <div className="robot">
                    <h2>Our Robot - Artemis</h2>
                    <p>
                        Our 2024 bot, Artemis, is a low-to-the-ground bot intended to make quick cycles into the speaker. Artemis has a ground intake through a hole in the pan, 
                        directly feeding our shooting mechanism. Our shooter has a mode for scoring into the Amplifier, where notes are shot upward and are deflected back into the 
                        Amplifier by a Lexan sheet. The bot also has two “Raptor Claws” that can hook onto the chain for a quick climb. In a match, Artemis has such a low profile 
                        it’s able to traverse under the stage and avoid most defense.
                    </p>
                </div>
                <br />
                <div className="gallery"></div>
                
            </Page>
        );
        
    }
    
}
