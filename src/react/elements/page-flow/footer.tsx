import "./footer.scss";
import React from "react";
import { FRCLogoHorizontalRule } from "../logo-horizontal-rule";
import { SocialMediaIcons } from "../social-media-icons";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Footer extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
		
		return (
			<footer>
				<FRCLogoHorizontalRule />
				<div className="footer-content">
					<div className="row">
						<SocialMediaIcons />
						<p className="team-info-ln1">The RAPTORS - FIRST Robotics Competition Team 1711 - raptors1711@gmail.com - TC Central High School - 1150 Milliken Drive - Traverse City - MI 49686</p>
						<p className="team-info-ln2"></p>
						<p className="repo-link">View this site on <a target="_blank" rel="noreferrer" href="https://github.com/frc1711/raptors1711.com">GitHub</a></p>
					</div>
				</div>
			</footer>
		);
		
	}
    
}
