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
						<p className="repo-link">find this site on <a target="_blank" rel="noreferrer" href="https://github.com/frc1711/raptors1711.com">GitHub</a></p>
						<SocialMediaIcons />
						<p className="made-with-love">made with ❤️ by <a target="_blank" rel="noreferrer" href="https://github.com/T99">Trevor Sears</a></p>
					</div>
				</div>
			</footer>
		);
		
	}
    
}
