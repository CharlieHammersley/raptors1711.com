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
					Team 1711 The RAPTORS would like to extend our sincere gratitude to our sponsors for their continued support and 
					investment in our team. Their generosity makes it possible for us to design, build, compete, and inspire the next 
					generation of innovators. From competition expenses to outreach initiatives and educational opportunities, our sponsors 
					play a vital role in our success, and we are proud to represent their commitment to STEM education and our community.
				</p>
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSc9CT2cltBko3e_wUY_TqwMtU6mWkmDE7KQ2SNkt5T6jf5aSA/viewform?usp=dialog"
				   target="_blank"
				   rel="noopener noreferrer">Sponsor Our Team</a>
				<br />
				<img className="sponsor-photo" src={sponsorPhoto} alt="All of our gracious sponsors." />
			</Page>
		);
		
	}
    
}
