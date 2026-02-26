import "./meet-the-team.scss";
import aboutUsImg1 from "../../assets/images/23-working-on-bot.jpeg";
import aboutUsImg2 from "../../assets/images/23-electrical.jpg";
import aboutUsImg4 from "../../assets/images/about-us-3.jpg";
import aboutUsImg3 from "../../assets/images/design_tess.webp";
import aboutUsImg5 from "../../assets/images/design_trevor.webp";
import aboutUsImg6 from "../../assets/images/leads/sage-brown.jpg";
import aboutUsImg7 from "../../assets/images/23-strategy.jpeg";

import driveTeam from "../../assets/images/dt-group-2026.jpg";

import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";
import { TextImageBox } from "../elements/text-image-box";
import { sanitizeStringToID } from "../../util/sanitize-string-to-id";

type AboutUsSection = {
	title: string,
	content: React.ReactNode,
	image: string,
	imageAlt: string
};

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class MeetTheTeam extends React.Component<Props, State> {
	
	public static readonly SECTIONS: AboutUsSection[] = [
		{
			title: "Build",
			content: (
				<p>
					The Build Subteam is the foremost mechanical Subteam, directly constructing the robot, building field elements, 
					and directing early prototyping. Working closely with the design team, Build ensures the robot is constructed to 
					professional standards. In competition, Build is responsible for most of the mechanical fixes the robot must undergo.
				</p>
			),
			image: aboutUsImg1,
			imageAlt: "Three RAPTORS team members wearing dinosaur costumes."
		},
		{
			title: "Electrical",
			content: 
				<p>
					The Electrical subteam wires the robot throughout the season, ensuring that it is properly connected and maintained. 
					Moreover, they manage the robot’s devices, including the motors, sensors, etc. They also build the electrical board each 
					season. Vital to robot function, Electrical uses a CAN network to establish communication between the RoboRio and the 
					robot’s main components. In early prototyping, electrical makes a practice e-board to test components, educate new electrical 
					members, and  all the use of devices in prototypingAt our major events, they take on the task of troubleshooting the robot.
				</p>,
			image: aboutUsImg2,
			imageAlt: "The RAPTORS' mascot being waved during a competition."
		},
		{
			title: "Programming",
			content: 
				<p>
					Our programming subteam writes the functional code for the robot each season, enabling the use of prototyping devices, 
					as well as managing our online website and offseason robots. They make sure the robot is functional, coding our 
					swerve drive and many technical subsystems, preparing numerous autonomous modes for compeittion. Programming is 
					also involved in the early proptotyping, allowing our team to use high power motors rather than drills when first 
					testing designs. Lastly, they manage our website and program our offseason learning and defense bots. 
				</p>,
			image: aboutUsImg3,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Non-tech",
			content: 
				<p>
					One of our most expansive subteams is non-tech, being responsible for our team's socials, photography, award 
					preparation, essay writing, sponsorship, and community outreach. Non-tech takes the photos for the team, making 
					educational and relatable content on our social media platforms. They also are solely responsible for our team's 
					award preparation, teaching our members about talking to judges as well as writing, managing, and presenting our 
					team's impact award submission. Non-tech also operates our team's buisness aspect, contacting our sponsors and 
					going out on the street to reach out and collect funding for the season. Finally, the subteam organizes our 
					community outreach events with local buisnesses and organizations, ensuring our team makes a lasting 
					impact on those around us.
				</p>,
			image: aboutUsImg4,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Design",
			content: 
				<p>
					The design subteam is another important mechanical subteam, using Computer-Aided Design programs such as 
					fusion-360 to model our robot and it's components. Each season they create a full design of the robot in 
					collaberation with each other subteam, refining and editing the model as prototyping continues. Design 
					also creates and prints necessary robot parts, such as brackets, as well as other projects, like 
					competition fidget spinners.
				</p>,
			image: aboutUsImg5,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Safety",
			content: 
				<p>
					While small, the safety subteam is quite important, being responsible for upholding safe practices in the build room, 
					the pits, or the field. They ensure that all people in these areas are complying with safety regulations; 
					update and provide access to the Safety Data Sheets; upkeep the documentation; log and manage the injury 
					report; and create helpful presentations throughout the season to educate the team. 
				</p>,
			image: aboutUsImg6,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Strategy",
			content: 
				<p>
					Strategy is an important competition subteam, scouting matches of other teams, compiling data, and working 
					with other teams to devise match stategy. Throughout the season and offseason they scout matches, getting relevent 
					information and statistics on other teams we will compete against. Stategy organizes this information, using it 
					to make informed descisions when picking alliance partners and making match strategy.
				</p>,
			image: aboutUsImg7,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Drive Team",
			content: 
				<p>
					The drive team, while not a traditional subteam, includes the members who operate the robot and keep it functioning on the 
					field. Our driver, operator, drive coach, human player, and technician all work together in competitions to deliver success 
					in our matches.
					<br></br>
					This year, our drive team consists of five junior students: (left to right) Kayden McMillan, Driver; Francesca Harbold, Technician; 
					Oscar Falcon, Operator; Aviannah Stieve, Human Player; and Milo Woodruff, Drive Coach. Our drive team has seen great success in 
					previous years and is excited to compete in the 2026 competition season with FIRST Rebuilt.
				</p>,
			image: driveTeam,
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
				              reverse={reversed = !reversed}
							  className={sanitizeStringToID(section.title)}>
					<div className="section-title">
						<h2>{section.title}</h2>
					</div>
					{section.content}
				</TextImageBox>
			);
			
		}
    	
    	return (
			<Page name="meet-the-team">
				<PageHeading>Meet the Team</PageHeading>
				<div className="subteams">
					<h2>Subteams</h2>
					<p>Our team is split into multiple different Subteams that collaborate to build the robot and manage the team's activities. 
						These Subteams include Build, Design, Strategy, Communications, Programming, Electrical, and Safety. Subject Matter 
						Experts, or SMEs, are leaders in their specific Subteams. They’re the most knowledgeable in their specialty and must 
						meet many requirements to become one.
					</p>
					<a className="smes-button" href="https://raptors1711.com/meet-the-SMEs">Meet the SMEs</a>
				</div>
				{sections}
			</Page>
		);
		
	}
    
}
