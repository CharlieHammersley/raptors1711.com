import "./ftc-team.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import heroImage from "/src/assets/images/page-heroes/ftc-placeholder.jpg";
import { PageHeading } from "/src/react/elements/page-heading";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class FTCTeam extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    
        return (
            <Page name="ftc-team">
                <div className="hero">
                    <img src={heroImage} alt="" />
                    <div className="overlay"/>
                    <div className="hero-heading">
                        <PageHeading>How to Start an FTC Team</PageHeading>
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
