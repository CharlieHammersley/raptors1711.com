import "./meet-the-mentors-page.scss";
import mentorImageLeilaniSigsbey from "../../assets/images/mentors/leilani-sigsbey.jpg";
import mentorImageTrevorSears from "../../assets/images/mentors/trevor-sears.jpg";
import mentorImageJeremiahStieve from "../../assets/images/mentors/jeremiah-stieve.jpg";
import mentorImageRussRiker from "../../assets/images/mentors/russ-riker.jpg";
import mentorImageEricSmith from "../../assets/images/mentors/eric-smith.jpg";
import mentorImageDarrylGreathouse from "../../assets/images/mentors/darryl-greathouse.jpeg";
import mentorImageRyanTrombly from "../../assets/images/mentors/ryan-trombly.png";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { Props, State } from "./home";
import { PageHeading } from "../elements/page-items/page-heading";
import { TextImageBox } from "../elements/page-items/text-image-box";
import { sanitizeStringToID } from "../../util/sanitize-string-to-id";

type MentorProfile = {
	name: string,
	title: string,
	bio: React.ReactNode,
	image: string
};

export class MeetTheMentorsPage extends React.Component<Props, State> {
	
	public static readonly MENTORS: MentorProfile[] = [
		{
			name: "Leilani Sigsbey",
			title: "Non-Tech Mentor",
			bio: <p>
				Leilani has been a part of FIRST robotics for 5 years. She assists with the Non-Tech team, focusing on
				primarily Chairman's and outreach events. Leilani graduated from Central in 2021, majors in public
				relations at Ferris State, and enjoys volunteering within the community. She is excited to get back onto
				the FIRST Robotics scene.
			</p>,
			image: mentorImageLeilaniSigsbey
		},
		{
			name: "Trevor Sears",
			title: "Build & Programming Mentor",
			bio: <p>
				Graduated 2018, Trevor has participated in FIRST Robotics since 2014, specializing on the tech side now.
				Being very dedicated to the RAPTORS Robotics Team, Trevor is always open to teaching others about build
				and programming elements. Trevor anticipates going to Houston, Texas for Worlds as well as subsequently
				'winning back my Saturday mornings'.
			</p>,
			image: mentorImageTrevorSears
		},
		{
			name: "Jeremiah Stieve",
			title: "Build Mentor",
			bio: <p>
				This is Mr. Stieve’s fifth year on the team; he assists the Tech side of the team and is most excited
				for the new game. Furthermore, Mr. Stieve anticipates seeing new talent join the RAPTORS and enjoys
				outdoor sports in his free time.
			</p>,
			image: mentorImageJeremiahStieve
		},
		{
			name: "Eric Smith",
			title: "Build Mentor",
			bio: <p>
				Eric Smith has been a part of FIRST Robotics for 7 years. He assists the Strategy and Mechanical teams
				and looks forward to seeing what a full game looks like and how it plays out. Eric’s hobbies include
				watching and playing sports, specifically, basketball.
			</p>,
			image: mentorImageEricSmith
		},
		{
			name: "Russ Riker",
			title: "Programming & Electrical Mentor",
			bio: <p>
				This is Mr. Riker’s 13th season with the RAPTORS. He primarily assists the Electronics and Programming
				teams and is interested in seeing End Game and climbers in upcoming competitions. Mr. Riker’s hobbies
				include pinball and repairing old computers.
			</p>,
			image: mentorImageRussRiker
		},
		{
			name: "Darryl Greathouse",
			title: "Programming & Mechanical Mentor",
			bio: <p>
					A newer mentor on the RAPTORS, Darryl has spent over 10 years in FIRST Robotics between FRC and FTC and 
					has 30 years of engineering & software experience. He's a strong Java programmer, expirienced Onshape 
					designer, and teaches at Northwestern Michigan College. Outside of robotics, Darryl enjoys tending to his chickens and dogs as well as chopping firewood.
				</p>,
			image: mentorImageDarrylGreathouse
		},
		{
			name: "Ryan Trombly",
			title: "Programming & Mechanical Mentor",
			bio: <p>
					This is Ryan's 3rd season with the RAPTORS. He primarily assists with scouting/strategy and branding development, but is always willing to lend a hand in other areas as well. Ryan is currently a Senior at Michigan State studying hospitality management. In his free time, he enjoys spending time with friends and family as well as exploring new places.
				</p>,
			image: mentorImageRyanTrombly
		},
	];
	
	public render(): React.ReactNode {
		
		let mentors: React.ReactNode[] = [];
		let reversed: boolean = false;
		
		for (let mentor of MeetTheMentorsPage.MENTORS) {
			
			mentors.push(
				<TextImageBox image={mentor.image}
							  imageAlt={mentor.name}
							  reverse={reversed = !reversed}
				              className={sanitizeStringToID(mentor.name)}>
					<div className="mentor-header">
						<h4>{mentor.name}</h4>
						<h6>{mentor.title}</h6>
					</div>
					{mentor.bio}
				</TextImageBox>
			);
			
		}
		
		return (
			<Page name="meet-the-mentors">
				<PageHeading>Meet the Mentors</PageHeading>
				{mentors}
			</Page>
		);
	
	}
	
}
