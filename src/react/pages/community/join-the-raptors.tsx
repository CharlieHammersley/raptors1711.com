import React from "react";
import "./join-the-raptors.scss";

import { Page } from "../../elements/page-flow/page";
import { PageHeading } from "../../elements/page-items/page-heading";
import HeroImage from "../../../assets/images/page-heroes/join-the-raptors.png";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class JoinTheRaptors extends React.Component<Props, State> {
	public render(): React.ReactNode {
		return (
			<Page name="join-the-raptors">
				<div className="page-hero-overlay-block">
					<img src={HeroImage} />
					<div className="overlay" />
					<div className="overlay-text">
						<PageHeading>Join the RAPTORS</PageHeading>
						<p>
							Build, learn, compete, and grow with Team 1711.
						</p>
					</div>
				</div>

				<section className="basic-block join-intro">
					<h2>Join the Team</h2>

					<p className="basic-para">
						Becoming a member of Team 1711 The RAPTORS means becoming part
						of something larger than a club. Since 2006, we've given students
						opportunities to explore engineering, programming, design,
						marketing, leadership, and teamwork through FIRST® Robotics
						Competition.
					</p>

					<p className="basic-para">
						Whether you're interested in building robots, programming,
						creating graphics, organizing events, or telling our team's
						story, there's a place for you on Team 1711.
					</p>
				</section>

				<section className="basic-block join-info">
					<h2>Everyone Has a Place</h2>

					<p className="basic-para">
						No prior robotics experience is required. Our students and
						mentors help new members learn, develop confidence, and discover
						their interests in a supportive environment.
					</p>

					<p className="basic-para">
						Our members gain experience in:
					</p>

					<ul className="join-skills">
						<li>Engineering and fabrication</li>
						<li>CAD and product design</li>
						<li>Programming and electrical systems</li>
						<li>Marketing and communications</li>
						<li>Business, fundraising, and sponsorship</li>
						<li>Public speaking and leadership</li>
						<li>Community outreach and STEM advocacy</li>
					</ul>
				</section>

				<section className="basic-block join-contact">
					<h2>How Can I Join?</h2>

					<p className="basic-para">
						We're always excited to welcome new students. Contact us to ask
						questions, schedule a visit, or learn more about becoming a
						RAPTOR.
					</p>

					<a
						className="outline-button-animated"
						href="mailto:hello@RAPTORS1711.com"
					>
						Contact Us
					</a>
				</section>
			</Page>
		);
	}
}