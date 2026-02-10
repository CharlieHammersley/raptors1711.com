import "./sponsor-us.scss";
import headerPhoto from "../../assets/images/ribbon-cutting.jpg";
import sponsorPhoto from "../../assets/images/2026-Sponsor-Logos.png";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class SponsorUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="sponsor-us">
				<PageHeading>Sponsorship Opportunities</PageHeading>
				<img className="header-photo" src={headerPhoto}
					alt="RAPTORS team members at the Innovation and Manufacturing Center ribbon cutting ceremony."/>
				<p>
					TC Central's RAPTORS Robotics Team 1711 is heading into the 2026 season with a new robot.
					The registration fees and travel expenses are significant, so any amount is greatly appreciated!
				</p>
				<p>
					<i>To donate to our team, please visit the link below, and add <span className="team-name">
					RAPTORS Team 1711</span> in the program designation box or memo line if you are sending a check.</i>
				</p>
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSc9CT2cltBko3e_wUY_TqwMtU6mWkmDE7KQ2SNkt5T6jf5aSA/viewform?usp=dialog"
				   target="_blank"
				   rel="noopener noreferrer">Click Here to Sponsor FRC Team 1711 - The RAPTORS</a>
				<br />
				<p>Thank you to all of our generous sponsors! Because of your support we are able to compete at a high 
					level and make large impacts within our community. We are incredibly thankful for your contribution.
				</p>
				<img className="sponsor-photo" src={sponsorPhoto} alt="All of our gracious sponsors." />
			</Page>
		);
		
	}
    
}
