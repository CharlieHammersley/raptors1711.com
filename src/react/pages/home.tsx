import "./home.scss";
//import teamKickoffPicture from "../../assets/images/full-team-picture-kickoff-2019.jpg";
import driveTeamPhoto from "../../assets/images/smes/dt-drive-team-group-photo.jpg";
import React from "react";
import { Page } from "../elements/page-flow/page";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Home extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="home">
				<img src={driveTeamPhoto}
					 alt="The Raptors at their 2019 kickoff event."
				     className="banner-image" />
				<p>
					FIRST Robotics Team 1711, the RAPTORS, are a nationally competitive FIRST robotics team based in
					Traverse City, Michigan. We pride ourselves on our relentless commitment to community outreach,
					tireless work ethic and inspiring initiatives. The RAPTORS, fundamentally, are about more than just
					robots; our team is built upon a unique atmosphere that goes beyond machining and programming. The
					RAPTORS are about encouraging innovation in all academic pursuits and fostering a culture that
					supports all learning endeavors.
				</p>
			</Page>
		);
		
	}
    
}
