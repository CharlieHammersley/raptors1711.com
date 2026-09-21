import React from "react";
import "./home.scss";
import heroVideo from "../../assets/videos/hero-montage-small.mp4";
import teamPhoto from "../../assets/images/team-photos/tc26-cheering.jpg";
import outreachPhoto from "../../assets/images/page-heroes/parade-team.jpg";
import { Page } from "../elements/page-flow/page";
import { Logo } from "../elements/logo/logo";

export type Props = Readonly<{}>;
export type State = Readonly<{ videoLoaded: boolean }>;

export class Home extends React.Component<Props, State> {
	private videoRef = React.createRef<HTMLVideoElement>();

	constructor(props: Props) {
		super(props);
		this.state = { videoLoaded: false };
	}

	componentDidMount(): void {
		if (this.videoRef.current) this.setState({ videoLoaded: true });
	}

	handleVideoLoaded = (): void => {
		this.setState({ videoLoaded: true });
	};

	public render(): React.ReactNode {
		return (
			<Page name="home">
				<section className="home-hero">
					<video
						ref={this.videoRef}
						autoPlay
						muted
						loop
						playsInline
						onLoadedData={this.handleVideoLoaded}
						className={this.state.videoLoaded ? "loaded" : ""}
					>
						<source src={heroVideo} type="video/mp4" />
					</video>
					<div className="overlay" />
					<div className="hero-content">
						<div className="logo-heading"><Logo>The RAPTORS</Logo></div>
						<p>
							Team 1711, the RAPTORS, are a nationally competitive FIRST
							Robotics team based in Traverse City, Michigan.
						</p>
						<div>
							<a className="outline-button-animated" href="/meet-the-team">Meet the Team</a>
							<a className="outline-button-animated" href="/history">Team History</a>
						</div>
					</div>
				</section>

				<section className="home-intro">
					<div className="home-width">
						<h2>ABOUT US</h2>
						<p>
							We pride ourselves on our relentless commitment to community
							outreach, tireless work ethic, and inspiring initiatives. The
							RAPTORS, fundamentally, are about more than just robots; our team
							is built upon a unique atmosphere that goes beyond machining and
							programming. The RAPTORS are about encouraging innovation in all
							academic pursuits and fostering a culture that supports all
							learning endeavors.
						</p>
						<a className="clean-button-animated" href="/about-us">Learn More</a>
					</div>
				</section>

				<section className="home-season">
					<div className="home-width">
						<div className="season-heading">
							<div>
								<span className="display-label">2026 Season</span>
								<h2>REBUILT</h2>
							</div>
							<a
								className="clean-button-animated"
								href="https://www.thebluealliance.com/team/1711/2026"
								target="_blank"
								rel="noreferrer"
							>
								View Season
							</a>
						</div>

						<div className="season-content">
							<div className="small-video">
								<iframe
									src="https://www.youtube.com/embed/_fybREErgyM"
									title="REBUILT 2026 FRC Game Animation"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								/>
							</div>

							<div className="card-grid-3 season-cards">
								<a className="text-card" href="/engineering-notebook-2026">
									<span className="card-label">Documentation</span>
									<span className="card-subtext">Engineering Notebook</span>
									<span className="card-arrow">→</span>
								</a>
								<a className="text-card" href="/bones-2026">
									<span className="card-label">Documentation</span>
									<span className="card-subtext">BONES Document</span>
									<span className="card-arrow">→</span>
								</a>
								<a
									className="text-card"
									href="/history-2026"
									target="_blank"
									rel="noreferrer"
								>
									<span className="card-label">Competition</span>
									<span className="card-subtext">The Blue Alliance</span>
									<span className="card-arrow">→</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="home-team">
					<div className="home-width">
						<h2>MEET THE TEAM</h2>
						<div className="team-image">
							<img src={teamPhoto} alt="Raptors cheering at the 2026 FIM TC Event." />
						</div>

						<div className="card-grid-3 team-cards">
							<a className="text-card" href="/meet-the-team">
								<span className="card-label">Students</span>
								<span className="card-subtext">The Team</span>
								<span className="card-arrow">→</span>
							</a>
							<a className="text-card" href="/meet-the-SMEs">
								<span className="card-label">Students</span>
								<span className="card-subtext">SMEs</span>
								<span className="card-arrow">→</span>
							</a>
							<a className="text-card" href="/meet-the-mentors">
								<span className="card-label">Support</span>
								<span className="card-subtext">Mentors</span>
								<span className="card-arrow">→</span>
							</a>
						</div>
					</div>
				</section>

				<section className="home-community">
					<div className="home-width community-layout">
						<div className="community-image">
							<img src={outreachPhoto} alt="RAPTORS participating in a community parade." />
						</div>
						<div className="community-copy">
							<h2>OUTREACH</h2>
							<p>
								The RAPTORS are committed to supporting our community through
								numerous outreach events. We organise many STEM based education
								events each year, such as Super Science Saturday and SPIKE Lego
								camps.
							</p>
							<p>
								Our members contribute an average of 25 hours of volunteer
								service per year and host a local event in tandem with our
								sister team, 3767.
							</p>
							<a className="outline-button-animated" href="/education-opportunities">
								Camps & Workshops
							</a>
						</div>
					</div>
				</section>

				<section className="home-sponsors">
					<div className="home-width">
						<h2>GET INVOLVED</h2>
						<p>
							Support the team, become a member, explore our community work,
							or get in touch with us.
						</p>

						<div className="card-grid-4 involvement-cards">
							<a className="text-card" href="/sponsor-us">
								<span className="card-label">Support</span>
								<span className="card-subtext">Sponsor Us</span>
								<span className="card-arrow">→</span>
							</a>
							<a className="text-card" href="/join-the-raptors">
								<span className="card-label">Students</span>
								<span className="card-subtext">Join Us</span>
								<span className="card-arrow">→</span>
							</a>
							<a className="text-card" href="/community">
								<span className="card-label">Outreach</span>
								<span className="card-subtext">Community</span>
								<span className="card-arrow">→</span>
							</a>
							<a className="text-card" href="/contact-us">
								<span className="card-label">Questions?</span>
								<span className="card-subtext">Contact Us</span>
								<span className="card-arrow">→</span>
							</a>
						</div>

						<a className="outline-button-animated" href="/sponsor-us">
							Support the RAPTORS
						</a>
					</div>
				</section>
			</Page>
		);
	}
}