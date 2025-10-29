import "./meet-the-leads-page.scss";
import leadImageGradyLuyt from "../../assets/images/leads/grady-luyt.jpg";
import leadImageSageBrown from "../../assets/images/leads/sage-brown.jpg";
import leadImageMilesLettinga from "../../assets/images/leads/miles-lettinga.jpg";
import leadImageIanElder from "../../assets/images/leads/ian-elder.jpg";
import leadImageGabrielSeaver from "../../assets/images/leads/gabriel-seaver.jpg";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { Props, State } from "./home";
import { PageHeading } from "../elements/page-heading";
import { TextImageBox } from "../elements/text-image-box";
import { sanitizeStringToID } from "../../util/sanitize-string-to-id";

type LeadProfile = {
	name: string,
	title: string,
	bio: React.ReactNode,
	image: string
};

export class MeetTheLeadsPage extends React.Component<Props, State> {
	
	public static readonly LEADS: LeadProfile[] = [
		{
			name: "Kayden Mcmillan",
			title: "Driver, Strategy SME, Build SME, & Design SME",
			bio: <p>Kayden has been a part of the RAPTORS for 4 years now after joining in 8th grade. Now on his 
				junior year, he’s become our primary driver as well as branching out to strategy and design.
				When he’s not in the build room, you’ll see Kayden gaming, 3d printing, or crying about CAD.
			</p>,
			image: leadImageGradyLuyt
		},
		{
			name: "Aviannah Stieve",
			title: "Human Player & Communications SME",
			bio: <p>This is Aviannah’s junior year after joining the team in 8th grade. Now on her 4th year with the 
				RAPTORS, Aviannah leads media, outreach, and communications on the team as well as being the human player. 
				Aviannah likes reading and practicing debate with her friend Sally. 
			</p>,
			image: leadImageSageBrown
		},
		{
			name: "Oscar Falcon",
			title: "Operator, Strategy SME, & Programming SME",
			bio: <p>This year will be Oscar’s third competition season on the team and he’s looking forward to the next game.
				Over his years on the team Oscar has become a programming and strategy SME as well as becoming the 
				operator driver. When he’s not programming or working on spreadsheets you can find Oscar gaming or doing his 
				AP Bio reading.
			</p>,
			image: leadImageMilesLettinga
		},
		{
			name: "Francesca Harbold",
			title: "Electrical SME",
			bio: <p>
				This is Frannie’s 7th year in FIRST and her 3rd as a RAPTOR. Frannie is a junior and she’s looking forward
				to the 2026 build season. During her time on the team she’s become the electrical SME and heavily involved
				in our social media and outreach. Outside of FRC, Frannie enjoys sailing, baking, debate, and traveling.
			</p>,
			image: leadImageIanElder
		},
		{
			name: "Milo Woodruff",
			title: "Drive Coach & Strategy SME",
			bio: <p>
				Joining his freshmen year, Milo has been on the team for 3 competition seasons. In that time he’s become our 
				drive coach and strategy SME but also helps with build and design. When he’s not scouting matches, Milo enjoys 
				playing tennis and taking food from the snack cabinet.

			</p>,
			image: leadImageGabrielSeaver
		},
		{
			name: "Charlie Hammersley",
			title: "Programming SME & Safety SME",
			bio: <p>
				This is Charlie's 3rd competition season with the RAPTORS after joining their freshmen year. In this time they've 
				become a programming and safety SME although they help communications, media, and is the second human player. If 
				they're not crying about AP Calc BC, Charlie can be found crocheting or writing.

			</p>,
			image: leadImageIanElder
		}
	];
	
	public render(): React.ReactNode {
		
		let leads: React.ReactNode[] = [];
		let reversed: boolean = false;
		
		for (let lead of MeetTheLeadsPage.LEADS) {
			
			leads.push(
				<TextImageBox image={lead.image}
							  imageAlt={lead.name}
							  reverse={reversed = !reversed}
							  className={sanitizeStringToID(lead.name)}>
					<div className="lead-header">
						<h4>{lead.name}</h4>
						<h6>{lead.title}</h6>
					</div>
					{lead.bio}
				</TextImageBox>
			);
			
		}
		
		return (
			<Page name="meet-the-leads">
				<PageHeading>Meet the Leads</PageHeading>
				{leads}
			</Page>
		);
	
	}
	
}
