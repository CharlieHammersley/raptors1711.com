import "./meet-the-team.scss";
import aboutUsImg1 from "../../assets/images/billy-build-26.JPG";
import aboutUsImg2 from "../../assets/images/23-electrical.jpg";
import aboutUsImg4 from "../../assets/images/about-us-3.jpg";
import aboutUsImg3 from "../../assets/images/design_tess.webp";
import aboutUsImg5 from "../../assets/images/design_trevor.webp";
import aboutUsImg6 from "../../assets/images/leads/sage-brown.jpg";
import aboutUsImg7 from "../../assets/images/strategy-states-26.png";

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
					The Build Subteam serves as the foundation of our robot’s mechanical development, transforming ideas into 
					reality through fabrication, assembly, and testing. Working closely with Design, Build constructs the robot 
					and field elements while leading hands-on prototyping throughout the season. Their attention to detail ensures 
					every mechanism is built to a high standard of quality and reliability. During competitions, Build takes the 
					lead on mechanical maintenance and rapid repairs to keep the robot performing at its best.
				</p>
			),
			image: aboutUsImg1,
			imageAlt: "Three RAPTORS team members wearing dinosaur costumes."
		},
		{
			title: "Electrical",
			content: 
				<p>
					The Electrical Subteam powers everything we create. Responsible for wiring and maintaining the robot, this 
					team manages motors, sensors, and critical electrical systems while ensuring safe and efficient operation 
					throughout the season. Electrical designs and assembles the robot’s electrical board and uses the CAN network 
					to establish communication between the RoboRIO and all major robot components. Early in the season, they create 
					practice electrical boards to support prototyping, test new devices, and train incoming members. At competitions, 
					Electrical plays a key role in troubleshooting and keeping the robot match-ready.
				</p>,
			image: aboutUsImg2,
			imageAlt: "The RAPTORS' mascot being waved during a competition."
		},
		{
			title: "Programming",
			content: 
				<p>
					The Programming Subteam brings the robot to life through software and automation. From developing drive systems 
					and autonomous routines to programming complex subsystems, they ensure the robot performs reliably and efficiently 
					during competition. Programming supports prototyping by enabling the use of advanced motors and control systems during 
					testing and development. Beyond the competition robot, the team also manages offseason robots and maintains our website, 
					combining technical innovation with long-term team development.
				</p>,
			image: aboutUsImg3,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Non-tech",
			content: 
				<p>
					The Communciations Subteam drives the storytelling, outreach, and operations that make Team 1711 successful both on 
					and off the field. This team oversees social media, photography, sponsorship development, award submissions, communications, 
					and community engagement. Members create content that showcases team experiences, prepare award materials and presentations, 
					educate teammates on speaking with judges, and lead the development of our Impact Award submission. Non-Tech also manages 
					sponsor relationships and fundraising efforts while organizing outreach initiatives that connect with schools, businesses, 
					and organizations across the community. Their work ensures the RAPTORS’ impact extends far beyond robotics.
				</p>,
			image: aboutUsImg4,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Design",
			content: 
				<p>
					The Design Subteam transforms concepts into detailed plans through Computer-Aided Design (CAD). Using programs such as 
					Onshape and Fusion 360, members collaborate with every subteam to create, refine, and improve the robot throughout the build season. 
					Design develops full robot models, adapts designs based on prototype feedback, and prepares files for manufacturing and 
					fabrication. In addition to creating competition components, the team supports creative projects and produces custom parts 
					that help bring ideas to life.
				</p>,
			image: aboutUsImg5,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Safety",
			content: 
				<p>
					The Safety Subteam is dedicated to creating an environment where innovation and responsibility go hand in hand. They promote 
					safe practices in the build room, pits, and competition field while ensuring compliance with safety standards across the team. 
					Their responsibilities include maintaining Safety Data Sheets, managing documentation, tracking incidents, and educating members 
					through presentations and training. Safety helps create a culture where every team member can learn, build, and compete with 
					confidence.
				</p>,
			image: aboutUsImg6,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Strategy",
			content: 
				<p>
					The Strategy Subteam turns data into competitive advantage. Throughout the season and offseason, members scout matches, analyze 
					performance trends, and collect meaningful statistics on teams and gameplay. Using this information, Strategy develops match plans, 
					collaborates with alliance partners, and supports informed decision-making during alliance selection and competition. Their preparation 
					and analysis help maximize performance and create opportunities for success on the field.
				</p>,
			image: aboutUsImg7,
			imageAlt: "A number of RAPTORS team members running a booth at the Super Science Saturday event."
		},
		{
			title: "Drive Team",
			content: 
				<p>
					While not a traditional subteam, the Drive Team represents Team 1711 where preparation meets performance. Consisting of the Driver, 
					Operator, Drive Coach, Human Player, and Technician, this group works together to operate, adapt, and maintain the robot during competition. 
					Every match relies on communication, quick decision-making, and trust between each role. Through countless hours of practice and collaboration, 
					the Drive Team turns months of design and development into action on the field and proudly represents the RAPTORS in competition.
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
					<h2>Team Operations</h2>
					<p>
						Team 1711 is organized into specialized Subteams that work together to design, build, 
						and compete while also supporting the operations that keep the team running year-round. 
						These Subteams include Build, Design, Strategy, Communications, Programming, Electrical, 
						and Safety, each playing a critical role in the team’s success.
					</p>
					<p>
						Leading each area are Subject Matter Experts (SMEs), students who have demonstrated advanced knowledge, leadership, 
						and dedication within their specialty. SMEs serve as mentors and resources for their peers and earn their role by 
						meeting rigorous standards and showing a strong commitment to both technical excellence and team collaboration.
					</p>
					<a className="smes-button" href="/meet-the-SMEs">Meet the SMEs</a>
				</div>
				{sections}
			</Page>
		);
		
	}
    
}
