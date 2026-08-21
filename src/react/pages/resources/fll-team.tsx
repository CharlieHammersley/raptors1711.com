import "./fll-team.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import heroImage from "/src/assets/images/page-heroes/fll-placeholder.jpg";
import { PageHeading } from "/src/react/elements/page-heading";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class FLLTeam extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    
        return (
            <Page name="fll-team">
                <div className="hero">
                    <img src={heroImage} alt="" />
                    <div className="overlay"/>
                    <div className="hero-heading">
                        <PageHeading>How to Start an FLL Team</PageHeading>
                    </div>
                </div>
                <div className="content">
                    <p>
                    </p>
                </div>
            </Page>
        );
        
    }
    
}
