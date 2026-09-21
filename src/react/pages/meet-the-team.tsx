import "./meet-the-team.scss";

import fullTeamPhoto from "../../assets/images/team-photos/states-26-award.png";
import aboutUsImg1 from "../../assets/images/action-shots/billy-build-26.JPG";
import aboutUsImg2 from "../../assets/images/action-shots/23-electrical.jpg";
import aboutUsImg3 from "../../assets/images/action-shots/design_tess.webp";
import aboutUsImg4 from "../../assets/images/action-shots/about-us-3.jpg";
import aboutUsImg5 from "../../assets/images/action-shots/design_trevor.webp";
import aboutUsImg6 from "../../assets/images/leads/sage-brown.jpg";
import aboutUsImg7 from "../../assets/images/action-shots/strategy-states-26.png";
import driveTeam from "../../assets/images/team-photos/dt-group-2026.jpg";

import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-items/page-heading";
import { TextImageBox } from "../elements/page-items/text-image-box";
import { sanitizeStringToID } from "../../util/sanitize-string-to-id";

type TeamSection = {
	title: string;
	content: React.ReactNode;
	image: string;
	imageAlt: string;
};

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class MeetTheTeam extends React.Component<Props, State> {

	public static readonly SECTIONS: TeamSection[] = [
		{
			title: "Build",
			content: (
				<p>
					The Build Subteam turns designs into working mechanisms through fabrication,
					assembly, testing, and maintenance. Working closely with Design, Build constructs
					the robot and field elements while leading hands-on prototyping throughout the
					season. Their attention to detail ensures every mechanism is built to a high
					standard of quality and reliability. At competitions, Build leads mechanical
					maintenance and rapid repairs to keep the robot performing at its best.
				</p>
			),
			image: aboutUsImg1,
			imageAlt: "RAPTORS team members working on a robot mechanism."
		},
		{
			title: "Electrical",
			content: (
				<p>
					The Electrical Subteam powers everything we create. Responsible for wiring and
					maintaining the robot, Electrical manages motors, sensors, and critical electrical
					systems while ensuring safe and reliable operation. The team designs and assembles
					the robot's electrical board and uses the CAN network to connect the RoboRIO with
					major robot components. Practice electrical boards are built early in the season
					to support prototyping, testing, and member training. At competitions, Electrical
					plays a critical role in troubleshooting and keeping the robot match-ready.
				</p>
			),
			image: aboutUsImg2,
			imageAlt: "RAPTORS team members working with the robot's electrical systems."
		},
		{
			title: "Programming",
			content: (
				<p>
					The Programming Subteam brings the robot to life through software and automation.
					From drive systems and autonomous routines to complex subsystems, Programming
					develops the software that allows the robot to perform reliably during competition.
					The team also supports prototyping by enabling advanced motors and control systems
					during testing and development. Beyond the competition robot, Programming maintains
					offseason robots and develops the software behind the RAPTORS website.
				</p>
			),
			image: aboutUsImg3,
			imageAlt: "RAPTORS team members working together at a community outreach event."
		},
		{
			title: "Communications",
			content: (
				<p>
					The Communications Subteam drives the storytelling, outreach, and operations that
					make Team 1711 successful both on and off the field. Members work on social media,
					photography, sponsorship development, award submissions, communications, and
					community engagement. They create content that showcases the team's work, prepare
					award materials and presentations, and help teammates communicate effectively with
					judges and community members. Communications also manages sponsor relationships,
					fundraising, and outreach initiatives that connect the RAPTORS with schools,
					businesses, and organizations throughout the community.
				</p>
			),
			image: aboutUsImg4,
			imageAlt: "RAPTORS team members presenting at a community outreach event."
		},
		{
			title: "Design",
			content: (
				<p>
					The Design Subteam transforms ideas into detailed plans through Computer-Aided
					Design (CAD). Using tools such as Onshape and Fusion 360, members collaborate
					with every subteam to create, refine, and improve the robot throughout the build
					season. Design develops complete robot models, adapts designs based on prototype
					feedback, and prepares files for manufacturing and fabrication. The team also
					takes on creative projects and produces custom parts that help bring new ideas
					to life.
				</p>
			),
			image: aboutUsImg5,
			imageAlt: "RAPTORS students working on a computer-aided design."
		},
		{
			title: "Safety",
			content: (
				<p>
					The Safety Subteam creates an environment where innovation and responsibility go
					hand in hand. Members promote safe practices in the build room, pits, and
					competition environment while helping the team maintain safety standards. Their
					responsibilities include maintaining Safety Data Sheets, managing documentation,
					tracking incidents, and educating team members through presentations and training.
					Safety helps create a culture where every RAPTOR can learn, build, and compete
					with confidence.
				</p>
			),
			image: aboutUsImg6,
			imageAlt: "RAPTORS team member helping lead team safety efforts."
		},
		{
			title: "Strategy",
			content: (
				<p>
					The Strategy Subteam turns competition data into informed decisions. Throughout
					the season and offseason, members scout matches, analyze performance trends, and
					collect statistics on teams and gameplay. Strategy uses this information to
					develop match plans, collaborate with alliance partners, and support decision-making
					during alliance selection and competition. Their preparation and analysis help the
					team understand the game and make the most of every match.
				</p>
			),
			image: aboutUsImg7,
			imageAlt: "RAPTORS team members scouting and analyzing a competition match."
		},
		{
			title: "Drive Team",
			content: (
				<p>
					While not a traditional subteam, the Drive Team represents Team 1711 when
					preparation meets performance. The group consists of the Driver, Operator, Drive
					Coach, Human Player, and Technician, who work together to operate, adapt, and
					maintain the robot during competition. Every match depends on communication,
					quick decision-making, and trust between each role. Through extensive practice
					and collaboration, the Drive Team turns months of design and development into
					action on the field and represents the RAPTORS in competition.
				</p>
			),
			image: driveTeam,
			imageAlt: "The 2026 RAPTORS Drive Team together at a competition."
		}
	];

	public render(): React.ReactNode {

		let sections: React.ReactNode[] = [];
		let reversed = false;

		for (const [index, section] of MeetTheTeam.SECTIONS.entries()) {

			sections.push(
				<TextImageBox
					key={section.title}
					image={section.image}
					imageAlt={section.imageAlt}
					reverse={(reversed = !reversed)}
					className={`${sanitizeStringToID(section.title)} team-section`}
				>
					<div className="section-title">
						<h3 className="basic-h3">{section.title}</h3>
					</div>

					{section.content}
				</TextImageBox>
			);
		}

		return (
			<Page name="meet-the-team">

				<div className="page-hero-heading-block">
					<img
						src={fullTeamPhoto}
						alt="The RAPTORS team posing together at a competition."
					/>
					<div className="overlay" />

					<div className="hero-heading">
						<div>
							<PageHeading>Meet the Team</PageHeading>

							<div className="hero-subteams">
								<h2>Subteams</h2>
								<p>
									Team 1711 is organized into specialized Subteams that work together
									to design, build, program, and compete while supporting the team
									throughout the year.
								</p>

								<a className="outline-button-animated" href="/meet-the-SMEs"> Meet the SMEs</a>
								<a className="outline-button-animated" href="/meet-the-mentors"> Meet the Mentors</a>
							</div>
						</div>
					</div>
				</div>
				<h2 className="basic-h2">Our Subteams</h2>
				<div className="team-sections">
					{sections}
				</div>
			</Page>
		);
	}
}
