import React from "react";

import { Page } from "../../elements/page-flow/page";
import { PageHeading } from "../../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class EducationOpportunities extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="education-opportunities">
                <PageHeading>Education Opportunities</PageHeading>
            </Page>
        );
    }
}