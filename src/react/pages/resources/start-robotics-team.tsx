import "./start-robotics-team.scss";
import React from "react";
import { Page } from "../../elements/page-flow/page";
import heroImage from "../../../assets/images/page-heroes/frc-placeholder.jpg";
import { PageHeading } from "../../elements/page-items/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class StartRoboticsTeam extends React.Component<Props, State> {
	public render(): React.ReactNode {
		return (
			<Page name="start-robotics-team">
				<div className="page-hero-overlay-block">
					<img src={heroImage} alt="" />
					<div className="overlay" />
					<div className="overlay-text">
						<PageHeading>How to Start a Robotics Team</PageHeading>
						<p>
							Need help creating or joining a robotics team? You've
							come to the right place!
						</p>
					</div>
				</div>

				<div className="content">
					<h3>Where to Begin?</h3>

					<p>
						Before you register a team, check your local area for
						existing FIRST teams. You may find that there is already
						a team at your school or in your community that you can
						join.
					</p>

					<p>
						If there isn't a team nearby, starting one can be a great
						way to bring robotics to your school or community. Starting
						an FRC team takes students, adult mentors, funding, space,
						and organization, but you don't have to figure everything
						out at once.
					</p>

					<section className="steps">
						<div className="step">
							<span className="step-number">01</span>

							<h3>Choose a Program</h3>

							<p>
								Decide which FIRST robotics program is the right
								fit for your students. FRC is designed for high
								school students and involves designing, building,
								programming, and competing with a large-scale
								robot.
							</p>

							<p>
								Before committing to FRC, learn about the season,
								team requirements, costs, and time commitment.
								Talk with an existing FIRST team if possible.
							</p>
						</div>

						<div className="step">
							<span className="step-number">02</span>

							<h3>Build Your Team</h3>

							<p>
								Find students who are interested in robotics and
								start building a group of adult mentors and
								volunteers to support them.
							</p>

							<p>
								You will also need a place to meet and work. A
								school classroom, shop, makerspace, or community
								facility can provide the space needed for meetings,
								building, and storage.
							</p>
						</div>

						<div className="step">
							<span className="step-number">03</span>

							<h3>Get Started</h3>

							<p>
								Once you have students, mentors, and a place to
								meet, begin the process of registering your team
								with FIRST and preparing for the season.
							</p>

							<p>
								Start fundraising early, establish team leadership,
								and begin learning the tools and skills your
								students will need throughout the season.
							</p>
						</div>
					</section>

					<section className="next-steps">
						<h3>What to Do From There</h3>

						<p>
							Once your team has the basics in place, there are a
							few important things to start working on before the
							season begins.
						</p>

						<h4>Find Funding</h4>

						<p>
							FRC teams have significant expenses, including
							registration, robot parts, tools, transportation,
							event fees, and team materials. Look for support from
							your school, local businesses, community organizations,
							and sponsors. Fundraising can also become an important
							part of your team's activities.
						</p>

						<h4>Register Your Team</h4>

						<p>
							Work through the registration process with FIRST and
							make sure your team has the required adult support and
							student information in place. Keep track of important
							dates and deadlines throughout the season.
						</p>

						<h4>Build Your Team Structure</h4>

						<p>
							Decide how students will work together. Many FRC teams
							have groups focused on areas such as mechanical
							engineering, CAD, programming, electrical, business,
							media, fundraising, and outreach. Students do not
							need to specialize immediately, and trying different
							areas is encouraged.
						</p>

						<h4>Get Tools and Workspace</h4>

						<p>
							Start with the tools and equipment you can reasonably
							access. You do not need a fully equipped shop on day
							one. Build your team's capabilities over time and
							always make student safety a priority.
						</p>

						<h4>Connect With Other Teams</h4>

						<p>
							One of the best resources for a new team is the FIRST
							community itself. Reach out to established teams,
							attend local events, and ask questions. Experienced
							teams can often help new teams understand the season,
							share resources, and avoid common mistakes.
						</p>

						<h4>Prepare for Build Season</h4>

						<p>
							Before the season starts, make sure your students
							understand basic shop safety, CAD, programming,
							electronics, fabrication, and teamwork. When the game
							is released, your team will be ready to learn the
							rules, develop a strategy, and begin designing your
							robot.
						</p>
					</section>

                    <section className="getting-help">
                        <h3>Don't Do It Alone</h3>

                        <p>
                            Starting an FRC team can seem overwhelming, especially if you've
                            never been involved with FIRST before. You do not need to know
                            everything before you begin.
                        </p>

                        <p>
                            Reach out to nearby FIRST teams, mentors, schools, and community
                            organizations. The FIRST community is built around collaboration,
                            and there are people who can help you figure out the next step.
                        </p>

                        <div className="robotics-buttons">
                            <a
                                className="outline-button-animated"
                                href="mailto:hello@RAPTORS1711.com"
                            >
                                Contact the RAPTORS
                            </a>

                            <a
                                className="outline-button-animated"
                                href="https://www.firstinspires.org/programs/frc/get-started"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Started with FIRST
                            </a>
                        </div>
                    </section>


				</div>
			</Page>
		);
	}
}