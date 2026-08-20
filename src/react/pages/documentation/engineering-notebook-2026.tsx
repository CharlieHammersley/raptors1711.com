import "./engineering-notebook-2026.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";
import pdf from "/src/assets/documents/EI-doc-2026.pdf";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class EngineeringNotebook2026 extends React.Component<Props, State> {
	public render(): React.ReactNode {
		return (
			<Page name="engineering-notebook-2026">
				<iframe
					src={pdf}
					title="2026 Engineering Notebook"
				/>
			</Page>
		);
	}
}