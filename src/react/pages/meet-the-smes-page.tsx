import "./meet-the-smes-page.scss";
//import leadImageGradyLuyt from "../../assets/images/leads/grady-luyt.jpg";
import leadImageSageBrown from "../../assets/images/leads/sage-brown.jpg";
//import leadImageMilesLettinga from "../../assets/images/leads/miles-lettinga.jpg";
//import leadImageIanElder from "../../assets/images/leads/ian-elder.jpg";
//import leadImageGabrielSeaver from "../../assets/images/leads/gabriel-seaver.jpg";

//import dtGroupPhoto from "../../assets/images/smes/dt-drive-team-group-photo.jpg";
import smeImageAviannah from "../../assets/images/smes/dt-aviannah-headshot.png";
import smeImageOscar from "../../assets/images/smes/dt-oscar-headshot.png";
import smeImageFrannie from "../../assets/images/smes/dt-frannie-headshot.png";
import smeImageKayden from "../../assets/images/smes/dt-kayden-headshot.png";
import smeImageMilo from "../../assets/images/smes/dt-milo-headshot.png";

import React from "react";
import { Page } from "../elements/page-flow/page";
import { Props, State } from "./home";
import { PageHeading } from "../elements/page-heading";
import { TextImageBox } from "../elements/text-image-box";
import { sanitizeStringToID } from "../../util/sanitize-string-to-id";

type SMEProfile = {
	name: string,
	title: string,
	bio: React.ReactNode,
	image: string
};

export class MeetTheSMEsPage extends React.Component<Props, State> {
	
	public static readonly SMEs: SMEProfile[] = [
		{
			name: "Kayden Mcmillan",
			title: "Driver, Strategy SME, Build SME, & Design SME",
			bio: <p>Kayden has been a part of the RAPTORS for 4 years now after joining in 8th grade. Now in his junior year, 
				he’s become our primary driver as well as branching out to lead the strategy, build, and design teams. When he’s not in the 
				build room, you’ll find Kayden CADing, 3d printing, or socializing with his friends. He loves to play with his dogs, 
				RJ, and Sasha, as well as friends’ cats when he is able.
			</p>,
			image: smeImageKayden
		},
		{
			name: "Aviannah Stieve",
			title: "Human Player & Communications SME",
			bio: <p>This is Aviannah’s junior year after joining the team in 8th grade. Now in her 4th year with the RAPTORS, 
				Aviannah leads media, outreach, and communications on the team, as well as being the human player. Aviannah likes 
				reading, playing with her cat Silver Bell, and practicing with the debate team.
			</p>,
			image: smeImageAviannah
		},
		{
			name: "Oscar Falcon",
			title: "Operator, Strategy SME, & Programming SME",
			bio: <p>This year will be Oscar’s third competition season on the team, and he’s looking forward to the next game. 
				Over his years on the team, Oscar has become the programming SME and strategy SME, as well as the 
				operator driver. When he’s not programming or working on spreadsheets, you can find Oscar gaming or 
				spending time with his family of seven.
			</p>,
			image: smeImageOscar
		},
		{
			name: "Francesca Harbold",
			title: "Electrical SME & Technician",
			bio: <p>This is Frannie’s 7th year in FIRST and her 3rd as a RAPTOR. Frannie is a junior, and she’s looking forward to 
				the 2026 build season. During her time on the team, she’s become the electrical SME as well as being heavily 
				involved in our social media and outreach. Outside of FRC, Frannie enjoys sailing, baking, debating, and 
				playing with her dog, Leia.
			</p>,
			image: smeImageFrannie
		},
		{
			name: "Milo Woodruff",
			title: "Drive Coach & Strategy SME",
			bio: <p>Joining his freshman year, Milo has been on the team for 3 competition seasons. In that time, he’s become our 
				drive coach and strategy SME, but also helps with build and design aspects. In his spare time, Milo enjoys 
				scouting matches and playing tennis.
				
			</p>,
			image: smeImageMilo
		},
		{
			name: "Charlie Hammersley",
			title: "Programming SME & Safety SME",
			bio: <p>This is Charlie's 3rd competition season with the RAPTORS after joining their freshman year. In this season, they've 
				become a programming SME, safety SME, and secondary human player, although they occasionally help media. If 
				they're not crying about Calculus, Charlie can be found crocheting or writing.

			</p>,
			image: leadImageSageBrown
		}
	];
	
	public render(): React.ReactNode {
		
		let SMEs: React.ReactNode[] = [];
		let reversed: boolean = false;
		
		for (let SME of MeetTheSMEsPage.SMEs) {
			
			SMEs.push(
				<TextImageBox image={SME.image}
							  imageAlt={SME.name}
							  reverse={reversed = !reversed}
							  className={sanitizeStringToID(SME.name)}>
					<div className="SME-header">
						<h4>{SME.name}</h4>
						<h6>{SME.title}</h6>
					</div>
					{SME.bio}
				</TextImageBox>
			);
			
		}
		
		return (
			<Page name="meet-the-SMEs">
				<PageHeading>Meet the SMEs</PageHeading>
				{SMEs}
			</Page>
		);
	
	}
	
}
