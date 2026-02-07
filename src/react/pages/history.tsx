import "./history.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class History extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
        
        return (
            <Page name="history">
                <p>
                    PlaceHolder
                </p>
            </Page>
        );
        
    }
    
}
