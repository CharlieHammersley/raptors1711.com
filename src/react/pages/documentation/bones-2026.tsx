import "./bones-2026.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import pdf from "/src/assets/documents/BONES-doc-2026.pdf";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Bones2026 extends React.Component<Props, State> {
    public render(): React.ReactNode {
        return (
            <Page name="bones-2026">
                <iframe
                    src={pdf}
                    title="2026 BONES Document"
                />
            </Page>
        );
    }
}