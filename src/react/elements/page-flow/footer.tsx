import "./footer.scss";
import React from "react";
import { FRCLogoHorizontalRule } from "../logo-horizontal-rule";
import { SocialMediaIcons } from "../social-media-icons";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Footer extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
		return (
			<footer >
				<br />
				<hr/>
				<div className="columns">
					<div className="sponsor">
						<h3>Sponsor Us</h3>
						<p>Interested in supporting the team? Write a check made out to “TCAPS” including “The RAPTORS” in the memo line, or</p>
						<a rel="noopener noreferrer" 
						href="https://docs.google.com/forms/d/e/1FAIpQLSc9CT2cltBko3e_wUY_TqwMtU6mWkmDE7KQ2SNkt5T6jf5aSA/viewform?usp=dialog">
						Become a Sponsor Today!</a>
						
					
					</div>
					<hr />
    				<div className="navigate">
						<h3>Navigate</h3>
						<a href="https://raptors1711.com/">Home&gt;</a> <br />
						<a href="https://raptors1711.com/meet-the-SMEs">Meet the SMEs&gt;</a><br />
						<a href="https://raptors1711.com/meet-the-mentors">Meet the Mentors&gt;</a><br />
						<a href="https://raptors1711.com/sponsorship">Sponsorship Opportunities&gt;</a><br />
						<a href="https://raptors1711.com/contact-us">Contact Us&gt;</a>
					</div>
					<hr />
    				<div className="stay-connected">
						<h3>Stay Connected</h3>
						<p>Contact Us: <u>raptors1711@gmail.com</u></p>
						<p>The RAPTORS send out a monthly newsletter.</p>
						<a href="https://forms.gle/QHoFpEftiZY6WB2M8" className="news-button" target="_blank"
				   		rel="noopener noreferrer">Sign up for our newsletter!</a>
						<SocialMediaIcons/>
					</div>
				</div>
				<FRCLogoHorizontalRule/>
				<div className="bottom-row">
						<p className="team-info">The RAPTORS - FIRST Robotics Competition Team 1711 - TC Central High School - 1150 Milliken Drive - Traverse City - MI 49686</p>
						<a className="repo-link" rel="noopener noreferrer" href="https://github.com/frc1711/raptors1711.com">Find this site on GitHub</a>
					</div>
  			</footer>
		);
		
	}
    
}
