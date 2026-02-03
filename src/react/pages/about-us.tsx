import "./about-us.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class AboutUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="about-us">
                <PageHeading>About Us</PageHeading>
                <p>Placeholder</p>
            </Page>
        );
        
    }
    
}
