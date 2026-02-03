import "./team-history.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class TeamHistory extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="team-history">
                <PageHeading>Our History</PageHeading>
                <p>Placeholder</p>
            </Page>
        );
        
    }
    
}
