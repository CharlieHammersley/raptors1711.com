import "./meet-the-team.scss";
import aboutUsImg1 from "../../assets/images/about-us-1.jpg";
import aboutUsImg2 from "../../assets/images/about-us-2.jpg";
import aboutUsImg3 from "../../assets/images/about-us-3.jpg";
import aboutUsImg4 from "../../assets/images/about-us-4.jpg";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";
import { TextImageBox } from "../elements/text-image-box";

type AboutUsSection = {
	content: React.ReactNode,
	image: string,
	imageAlt: string
};

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class MeetTheTeam extends React.Component<Props, State> {
	
	public static readonly SECTIONS: AboutUsSection[] = [
		{
			content: (
				<p>
					Team 1711 The RAPTORS was formed in 2006 initially by Mr. John Failor and a small group of students eager
					to learn about FIRST Robotics. Our team meets multiple times per week year round, ramping up practices into 
					the build season.
				</p>
			),
			image: aboutUsImg1,
			imageAlt: "Three RAPTORS team members wearing dinosaur costumes."
		},
		{
			content: <p>
				RAPTORS stands for Robots and People Transmitting Objective Radical Synergy.
			</p>,
			image: aboutUsImg2,
			imageAlt: "The RAPTORS' mascot being waved during a competition."
		},
		{
			content: <p>
				Team 1711 is heavily involved in our community, especially through connecting with younger students.
				Our biggest annual event is Super Science Saturday, which encourages elementary school students to
				develop an interest in STEM through hands-on activities and guest speakers.
			</p>,
			image: aboutUsImg3,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			content: <p>
				The RAPTORS love to have fun in and out of practice, but we have had many accomplishments 
				throughout the years, most recently winning three awards total, one at each event, in the 
				2025 competition season. We are excited to return to the field this year and hope you will 
				follow our progress.
			</p>,
			image: aboutUsImg4,
			imageAlt: "A number of RAPTORS team members cheering from the stands during an FRC competition."
		}
	]
    
    public render(): React.ReactNode {
		
		let sections: React.ReactNode[] = [];
		let reversed: boolean = true;
		
		for (let section of MeetTheTeam.SECTIONS) {
			
			sections.push(
				<TextImageBox image={section.image}
							  imageAlt={section.imageAlt}
				              reverse={reversed = !reversed}>
					{section.content}
				</TextImageBox>
			);
			
		}
    	
    	return (
			<Page name="meet-the-team">
				<PageHeading>Meet the Team</PageHeading>
				{sections}
			</Page>
		);
		
	}
    
}
