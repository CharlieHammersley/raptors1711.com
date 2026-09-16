import "./home.scss";
import fullTeamPhoto from "../../assets/images/team-photos/states-26-award.png";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { Logo } from "../elements/logo/logo";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Home extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="home">
				<div className="page-hero-overlay-block">
					<img src={fullTeamPhoto} alt="The Raptors after winning the judges award durring their 2026 FIM State Championship" 
						className="banner-image"
						fetchPriority="high"
					/>
					<div className="overlay"/>
					<div className="overlay-text"> 
						<div className="logo-heading"><Logo >The RAPTORS</Logo></div>
						<h2>FRC Team 1711</h2>
						<p>
							Team 1711, the RAPTORS, are a nationally competitive FIRST Robotics team based in
							Traverse City, Michigan.
						</p>
						<a className="basic-button-animated" href="/meet-the-team">Meet the Team</a>
						<a className="basic-button-animated" href="/history">Team History</a>
					</div>
				</div>
				<div className="basic-block">
					<h2>About Us</h2>
					<p>
						We pride ourselves on our relentless commitment to community outreach,
						tireless work ethic, and inspiring initiatives. The RAPTORS, fundamentally, are about more than just
						robots; our team is built upon a unique atmosphere that goes beyond machining and programming. The
						RAPTORS are about encouraging innovation in all academic pursuits and fostering a culture that
						supports all learning endeavors.
					</p>
					<a className="clean-button-animated" href="/about-us">Learn More</a>
				</div>
				<div className="basic-block">
					<h2>What is FRC?</h2>
					<p>
						FRC, or FIRST Robotics Competition, is an international robotics contest for middle to highschoolers.
						Each year, teams from around the world work to build a robot to complete various tasks to earn points at events. 
						Durring competition, teams are placed on alliances of three robots, where they compete to finish tasks faster and 
						earn more points than the opposing alliance. Each season, beginning on January 10th 12:00 PM EST, a new game is 
						released. Watch the video below to learn about this year's game, REBUILT.
					</p>
					<section className="small-video">
						<iframe
							src="https://www.youtube.com/embed/_fybREErgyM"
							title="REBUILT 2026 FRC Game Animation"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					</section>
				</div>
				<div className="basic-block">
					<h2>Outreach</h2>
					<p>
						The RAPTORS are committed to supporting our community through numerous outreach events. We organise many STEM based 
						eductation events each year, such as Super Science Saturday and SPIKE Lego camps. Moreover, our members contribute an 
						average of 25 hours of voulenteer service per year, and host a local event in tandem with our sister team, 3767.
					</p>
					<a className="clean-button-animated" href="/outreach">Learn More</a>
				</div>
			</Page>
		);
		
	}
    
}
