import "./history-25.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History25 extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history-25">
                <PageHeading>About Us</PageHeading>
                <p>Placeholder</p>
            </Page>
        );
        
    }
    
}
