import "./logo-horizontal-rule.scss";
import logo from "../../assets/images/team-gear-logo-white.png";
import React from "react";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class FRCLogoHorizontalRule extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
		
		return (
			<div className="logo-horizontal-rule">
				<hr />
				<img src={logo} alt="RAPTORS 1711 Logo" />
				<hr />
			</div>
		);
		
	}
    
}
