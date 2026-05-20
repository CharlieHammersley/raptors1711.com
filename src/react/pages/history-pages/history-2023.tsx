import "./history-2023.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import { PageHeading } from "/src/react/elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History2023 extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history-2023">
                <PageHeading>2023 Season</PageHeading>

            </Page>
        );
    }
}