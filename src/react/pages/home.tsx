import "./home.scss";
//import teamKickoffPicture from "../../assets/images/full-team-picture-kickoff-2019.jpg";
//import driveTeamPhoto from "../../assets/images/smes/dt-drive-team-group-photo.jpg";
import fullTeamPhoto from "../../assets/images/states-26-award.png";
import headerVideo from "../../assets/images/tc-auton-26.mp4"
import React from "react";
import { Page } from "../elements/page-flow/page";
import { Logo } from "../elements/logo";
import { TextImageBox } from "../elements/text-image-box";
import { sanitizeStringToID } from "../../util/sanitize-string-to-id";
import { LogoHorizontalRule } from "/src/react/elements/logo-horizontal-rule";


export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Home extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="home">
				<div className="front-image-block">
					<img src={fullTeamPhoto} alt="The Raptors after winning the judges award durring their 2026 FIM State Championship" className="banner-image" />
					<div className="overlay"/>
					<div className="overlay-text"> 
						<Logo>The RAPTORS</Logo>
						<h2>FRC Team 1711</h2>
						<p>
							Team 1711, the RAPTORS, are a nationally competitive FIRST Robotics team based in
							Traverse City, Michigan.
						</p>
						<a className="meet-the-team-button" href="/meet-the-team">Meet the Team</a>
						<a className="history-button" href="/history">Team History</a>
					</div>
				</div>
				<div className="about-us-block">
					<h2>About Us</h2>
					<p>
						We pride ourselves on our relentless commitment to community outreach,
						tireless work ethic, and inspiring initiatives. The RAPTORS, fundamentally, are about more than just
						robots; our team is built upon a unique atmosphere that goes beyond machining and programming. The
						RAPTORS are about encouraging innovation in all academic pursuits and fostering a culture that
						supports all learning endeavors.
					</p>
					<a className="about-us-button" href="/about-us">Learn More</a>
				</div>
				<div className="first-block">
					<h2>What is FRC?</h2>
					<p>
						FRC, or FIRST Robotics Competition, is an international robotics contest for middle to highschoolers.
						Each year, teams from around the world work to build a robot to complete various tasks to earn points at events. 
						Durring competition, teams are placed on alliances of three robots, where they compete to finish tasks faster and 
						earn more points than the opposing alliance. Each season, beginning on January 10th 12:00 PM EST, a new game is 
						released. Watch the video below to learn about this year's game, REBUILT.
					</p>
				</div>
				<div className="outreach-block">
					<h2>Outreach</h2>
					<p>
						The RAPTORS are committed to supporting our community through numerous outreach events. We organise many STEM based 
						eductation events each year, such as Super Science Saturday and SPIKE Lego camps. Moreover, our members contribute an 
						average of [NUMBER] hours of voulenteer service per year, and host a local event in tandem with our sister team, 3767.
					</p>
					<a className="outreach-button" href="/outreach">Learn More</a>
				</div>
				<div className="sponsor-block">

				</div>
			</Page>
		);
		
	}
    
}
