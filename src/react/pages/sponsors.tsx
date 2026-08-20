import "./sponsors.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Sponsors extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="sponsors">
                <PageHeading>Our Sponsors</PageHeading>
                <p>
                    Team 1711 The RAPTORS would like to extend our sincere gratitude to our sponsors for their 
                    continued support and investment in our team. Their generosity makes it possible for us to 
                    design, build, compete, and inspire the next generation of innovators. From competition 
                    expenses to outreach initiatives and educational opportunities, our sponsors play a vital 
                    role in our success, and we are proud to represent their commitment to STEM education and our community.
                </p>
                
            </Page>
        );
        
    }
    
}
