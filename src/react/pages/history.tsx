import "./history.scss";
import React from "react";
import mitvcBlueBanner from "../../assets/images/mitvc-district-championship-banner.jpg";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history">
                <PageHeading>Our History</PageHeading>
                <img src={mitvcBlueBanner}
                alt="RAPTORS team members showing off the blue banner that they received after winning their Traverse City district competition."/>
                <p>
                    Team 1711 The RAPTORS was formed in 2006 initially by a teacher and a small group of students 
                    eager to learn about FIRST Robotics. That teacher, Mr. John Failor, continues to support the 
                    team, even 20 years later. This support from our founding teacher continues to 
                    play an integral role in the well being of team 1711.
                </p>
                <ul>
                    <li><a href="https://raptors1711.com/history-2025">2025 Season</a></li>
                    <li><a href="https://raptors1711.com/history-2024">2024 Season</a></li>
                </ul>
            </Page>
        );
        
    }
    
}
