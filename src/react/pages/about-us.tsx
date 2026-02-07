import "./about-us.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class AboutUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="about-us">
                <p>
                    RAPTORS stands for Robots and People Transmitting Objective Radical Synergy. Team 1711 is heavily involved in our community, 
                    especially through connecting with younger students. Our biggest annual event is Super Science Saturday, which encourages elementary
                    school students to develop an interest in STEM through hands-on activities and guest speakers. The RAPTORS love to have fun in and
                    out of practice, but we have had many accomplishments throughout the years. We are excited to return to the field this year and 
                    hope you will follow our progress.
                </p>
            </Page>
        );
        
    }
    
}
