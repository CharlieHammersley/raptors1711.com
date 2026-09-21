import React from "react";

import "./education-opportunities.scss";
import { Page } from "../../elements/page-flow/page";
import { PageHeading } from "../../elements/page-items/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class EducationOpportunities extends React.Component<Props, State> {
	public render(): React.ReactNode {
		return (
			<Page name="education-opportunities">
				<PageHeading>Camps &amp; Workshops</PageHeading>

				<section className="basic-block education-intro">
					<h2>LEGO® SPIKE Camps</h2>

					<h3>Building Tomorrow's Problem Solvers</h3>

					<p className="basic-para">
						Team 1711 The RAPTORS is proud to host LEGO® SPIKE Camps,
						an engaging STEM experience designed for students in grades
						3–5. These camps provide a fun, hands-on environment where
						young learners explore engineering, coding, and robotics
						while developing critical thinking, creativity, and
						problem-solving skills.
					</p>

					<p className="basic-para">
						Using LEGO® Education SPIKE kits, campers work together to
						solve exciting engineering challenges throughout the week.
						Each activity encourages students to think creatively,
						collaborate with others, and build confidence as they
						design, program, test, and improve their solutions.
					</p>

					<h3>Creating Pathways into FIRST Robotics</h3>

					<p className="basic-para">
						LEGO® SPIKE Camps serve as an introduction to the world of
						FIRST Robotics, helping students build the skills and
						confidence needed to continue their STEM journey. Campers
						are introduced to concepts that prepare them for future
						opportunities in FIRST LEGO League (FLL), FIRST Tech
						Challenge (FTC), and ultimately the FIRST Robotics
						Competition (FRC).
					</p>

					<h3>Inspiring the Next Generation</h3>

					<p className="basic-para">
						Each summer, 120 students participate in our LEGO® SPIKE
						Camps across six sessions, with 20 campers in each session.
						Throughout the week, Team 1711 members mentor campers as
						they tackle engineering challenges, learn from mistakes,
						and celebrate their successes together.
					</p>

					<p className="basic-para">
						Our goal is to inspire young minds to embrace curiosity,
						think like engineers, and approach every challenge with
						confidence. Through LEGO® SPIKE Camps, we're fostering
						creativity, resilience, and a lifelong passion for
						innovation.
					</p>
				</section>

				<section className="basic-block education-section">
					<h2>Super STEM Saturday</h2>

					<p className="education-subheading">
						Formerly Super Science Saturday
					</p>

					<h3>Inspiring the Next Generation of Innovators</h3>

					<p className="basic-para">
						For more than a decade, Team 1711 The RAPTORS has proudly
						hosted Super STEM Saturday, formerly Super Science Saturday
						(SSS), one of Northern Michigan's premier STEM outreach
						events. This free, annual event welcomes hundreds of
						children ages 6–14 and their families for a day dedicated
						to exploration, discovery, and hands-on learning.
					</p>

					<h3>Hands-On STEM for Everyone</h3>

					<p className="basic-para">
						With more than 15 interactive science experiments and
						activities, Super STEM Saturday exposes students to a wide
						variety of STEM disciplines. From engineering and chemistry
						to physics, robotics, and technology, every station
						encourages participants to ask questions, solve problems,
						and discover how STEM shapes the world around them.
					</p>

					<p className="basic-para">
						One of the event's biggest highlights is the opportunity to
						drive a real FIRST® Robotics Competition robot. Guided by
						Team 1711 members, students experience firsthand the
						excitement of robotics while learning about the engineering,
						programming, and teamwork behind a competition robot.
					</p>

					<h3>A Community Tradition</h3>

					<p className="basic-para">
						Super STEM Saturday is made possible through the
						collaboration of local schools, businesses, universities,
						nonprofit organizations, and dedicated volunteers who share
						a passion for STEM education. Together, we create an
						inclusive event where students can meet professionals,
						explore new technologies, and discover educational
						opportunities throughout Northern Michigan.
					</p>

					<h3>Creating Lasting Impact</h3>

					<p className="basic-para">
						Each year, Super STEM Saturday reaches hundreds of young
						learners, creating meaningful experiences that extend well
						beyond a single day. Many students leave inspired to join
						robotics teams, participate in STEM programs, or continue
						exploring science and engineering in their classrooms and
						communities.
					</p>

					<p className="basic-para">
						At Team 1711 The RAPTORS, we believe investing in the next
						generation starts by making STEM exciting, accessible, and
						welcoming to everyone.
					</p>
				</section>
			</Page>
		);
	}
}