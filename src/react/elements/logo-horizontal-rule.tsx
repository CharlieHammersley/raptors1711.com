import "./logo-horizontal-rule.scss";
import frcLogo from "../../assets/images/team-gear-logo.png";
import React from "react";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class FRCLogoHorizontalRule extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
		
		return (
			<div className="logo-horizontal-rule">
				<hr />
				<img src={frcLogo} alt="RAPTORS 1711 Logo" />
				<hr />
			</div>
		);
		
	}
    
}
