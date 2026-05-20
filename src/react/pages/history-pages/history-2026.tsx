import "./history-2026.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import { PageHeading } from "/src/react/elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History2026 extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history-2026">
                <PageHeading>2026 Season</PageHeading>

            </Page>
        );
    }
}