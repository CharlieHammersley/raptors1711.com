import "./home.scss";
//import teamKickoffPicture from "../../assets/images/full-team-picture-kickoff-2019.jpg";
//import driveTeamPhoto from "../../assets/images/smes/dt-drive-team-group-photo.jpg";
import fullTeamPhoto from "../../assets/images/drone-shot.png";
import latestNews1 from "../../assets/images/newsletters/jan-news-1.png";
import latestNews2 from "../../assets/images/newsletters/jan-news-2.png";
import React from "react";
import { Page } from "../elements/page-flow/page";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Home extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="home">
				<div className="cursors"></div>
				<img src={fullTeamPhoto}
					alt="The Raptors at their 2019 kickoff event."
				    className="banner-image" />
				<br />
				<p>
					FIRST Robotics Team 1711, the RAPTORS, are a nationally competitive FIRST robotics team based in
					Traverse City, Michigan. We pride ourselves on our relentless commitment to community outreach,
					tireless work ethic, and inspiring initiatives. The RAPTORS, fundamentally, are about more than just
					robots; our team is built upon a unique atmosphere that goes beyond machining and programming. The
					RAPTORS are about encouraging innovation in all academic pursuits and fostering a culture that
					supports all learning endeavors.
				</p>
				<a className="about-us-button" href="https://raptors1711.com/about-us">Learn More</a>
				<a className="history-button" href="https://raptors1711.com/history">Team History</a>
				<div className="news">
					<h2>News</h2>
					<p>The RAPTORS finished off a successful 2025 season with REEFSCAPE and are now exited to move into FIRST AGE. We publish a monthly Newsletter, sign up <a target="_blank" className="news-button" rel="noopener noreferrer" href="https://forms.gle/QHoFpEftiZY6WB2M8">Here</a>.</p>

					<img className="newsletter1" src={latestNews1} alt="Our Latest Newsletter, Page 1." />
					<img className="newsletter2" src={latestNews2} alt="Our Latest Newsletter, Page 2." />
				</div>
				
			</Page>
		);
		
	}
    
}
