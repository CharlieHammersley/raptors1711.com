import "./history-2022.scss";
import React from "react";
import { Page } from "../../elements/page-flow/page";
import { PageHeading } from "../../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History2022 extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history-2022">
                <PageHeading>2022 Season</PageHeading>

            </Page>
        );
    }
}