import "./sponsor-us.scss";
import mitvcBlueBanner from "../../assets/images/mitvc-district-championship-banner.jpg";
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
				<img src={mitvcBlueBanner}
					 alt="RAPTORS team members showing off the blue banner that they received after winning their
					      Traverse City district competition." />
				<p>
					The upcoming season is a great time to support our work. 
					Your donation will help fund key programs and ensure 
					we can continue making a positive impact.
					The registration fees and travel expenses are
					significant, so any amount is greatly appreciated!
				</p>
				<p>
					<i>To sponsor/donate to our team, please contact us using the link below or by emailing raptors1711@gmail.com, and add <span className="team-name">
					RAPTORS Team 1711</span> in the program designation box or memo line if you are sending a check.</i>
				</p>
				<a href="mailto:raptors1711@gmail.com"
				   target="_blank"
				   rel="noreferrer">Click Here to Contact FRC Team 1711 - The RAPTORS</a>
			</Page>
		);
		
	}
    
}
