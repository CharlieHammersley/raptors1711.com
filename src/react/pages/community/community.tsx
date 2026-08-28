import React from "react";

import { Page } from "../../elements/page-flow/page";
import { PageHeading } from "../../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Community extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="community">
                <PageHeading>Community</PageHeading>
            </Page>
        );
    }
}