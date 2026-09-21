import React from "react";
import "./community.scss";

import { Page } from "../../elements/page-flow/page";
import { PageHeading } from "../../elements/page-items/page-heading";
import HeroImage from "../../../assets/images/page-heroes/super-science-saturday.png";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class Community extends React.Component<Props, State> {
	public render(): React.ReactNode {
		return (
			<Page name="community">
				<div className="page-hero-overlay-block">
					<img src={HeroImage} />
					<div className="overlay" />
					<div className="overlay-text">
						<PageHeading>Community</PageHeading>
						<p>
							Team 1711 builds STEM opportunities for the next generation
							across Northern Michigan.
						</p>
					</div>
				</div>

				<section className="basic-block community-intro">
					<h2>Making an Impact Beyond Competition</h2>

					<p className="basic-para">
						At Team 1711 The RAPTORS, we think our work extends past the
						competition field. Since our founding, we've made it a priority
						to give back to our community, introduce younger students to
						STEM, and share what we've learned along the way.
					</p>

					<p className="basic-para">
						From science events and robotics camps to school visits and
						volunteer work, our students spend their time helping people
						throughout Northern Michigan get a hands-on look at what
						robotics and engineering can be.
					</p>
				</section>

				<section className="basic-block outreach-block">
					<div className="outreach-heading">
						<h2>How We Get Involved</h2>

						<p>
							We create opportunities for students and community members
							to discover STEM through hands-on experiences, outreach,
							and service.
						</p>
					</div>

					<div className="outreach-list">
						<div className="outreach-section">
							<h3>Super Stem Saturday</h3>

							<p>
								Formerly Super Science Saturday, this free community STEM event allows hundreds of children
								to explore science through hands-on experiments, activities, guest speakers, and robot-driving.
							</p>
						</div>

						<div className="outreach-section">
							<h3>LEGO® SPIKE Camps</h3>

							<p>
								Students in grades 3–5 explore robotics, coding,
								engineering, and problem-solving through hands-on
								LEGO® SPIKE projects.
							</p>
						</div>

						<div className="outreach-section">
							<h3>National Cherry Festival</h3>

							<p>
								We bring our competition robot to the National Cherry
								Festival, giving local residents and visitors a chance
								to experience robotics firsthand.
							</p>
						</div>

						<div className="outreach-section">
							<h3>School &amp; STEM Outreach</h3>

							<p>
								RAPTORS members visit schools and community organizations
								to share their experiences through presentations,
								demonstrations, and hands-on STEM activities.
							</p>
						</div>

						<div className="outreach-section">
							<h3>Community Service</h3>

							<p>
								Our students volunteer at community events, festivals,
								races, and local initiatives throughout Northern Michigan.
							</p>
						</div>
					</div>
				</section>

				<section className="basic-block get-involved-block">
					<div className="get-involved-section">
						<h2>Growing STEM Together</h2>

						<p className="basic-para">
							Our outreach is made possible by the schools, businesses,
							mentors, volunteers, families, and community members who
							support Team 1711. Together, we create opportunities for
							young people to explore STEM, build confidence, and discover
							what they can accomplish.
						</p>
					</div>

					<div className="get-involved-section">
						<h2>Work With the RAPTORS</h2>

						<p className="basic-para">
							Whether you're a student, educator, business, organization,
							volunteer, or community member, there are many ways to
							support the RAPTORS.
						</p>

						<a
							className="clean-button-animated"
							href="mailto:hello@RAPTORS1711.com"
						>
							hello@RAPTORS1711.com
						</a>
					</div>
				</section>
			</Page>
		);
	}
}