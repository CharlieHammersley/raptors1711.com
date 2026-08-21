import "./sponsors.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

import sponsor1 from "../../assets/images/sponsors/1.png";
import sponsor2 from "../../assets/images/sponsors/2.png";
import sponsor3 from "../../assets/images/sponsors/3.png";
import sponsor4 from "../../assets/images/sponsors/4.png";
import sponsor5 from "../../assets/images/sponsors/5.png";
import sponsor6 from "../../assets/images/sponsors/6.png";
import sponsor7 from "../../assets/images/sponsors/7.png";
import sponsor8 from "../../assets/images/sponsors/8.png";
import sponsor9 from "../../assets/images/sponsors/9.png";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

const sponsors = {
	trojan: [
		{
			name: "Gordon J Hammersley Foundation",
			logo: sponsor8,
			link: "https://about:blank",
		},
		{
			name: "Cone Drive",
			logo: sponsor3,
			link: "https://conedrive.com/",
		},
		{
			name: "BRITTEN Inc.",
			logo: sponsor7,
			link: "https://britteninc.com/",
		},
	],

	platinum: [
		{
			name: "Cox Machine LLC",
			logo: sponsor2,
			link: "https://www.coxmach.com/",
		},
	],

	gold: [
		{
			name: "Strata Design",
			logo: sponsor1,
			link: "https://www.stratadesign.com/",
		},
	],

	silver: [
		{
			name: "American Solutions for Business",
			logo: sponsor4,
			link: "https://explore.americanbus.com/",
		},
		{
			name: "Jimmy Johns",
			logo: sponsor6,
			link: "https://www.jimmyjohns.com/",
		},
	],

	friend: [
		{
			name: "Farm Bureau Insurance",
			logo: sponsor5,
			link: "https://www.michfb.com/",
		},
		{
			name: "Lucky Marmot Aviation",
			logo: sponsor9,
			link: "https://about:blank",
		},
	],
};

const heroTrackOne = [
	sponsor1,
	sponsor4,
	sponsor8,
	sponsor2,
	sponsor6,
	sponsor3,
	sponsor9,
	sponsor5,
	sponsor7,
];

const heroTrackTwo = [
	sponsor7,
	sponsor2,
	sponsor5,
	sponsor9,
	sponsor3,
	sponsor8,
	sponsor1,
	sponsor6,
	sponsor4,
];

export class Sponsors extends React.Component<Props, State> {
	public render(): React.ReactNode {
		return (
			<Page name="sponsors">

				<div className="sponsor-hero">

                    <div className="sponsor-hero-track track-one">
                        {heroTrackOne.map((logo, index) => (
                            <div className="sponsor-logo" key={`one-${index}`}>
                                <img src={logo} alt="Sponsor" />
                            </div>
                        ))}

                        {heroTrackOne.map((logo, index) => (
                            <div className="sponsor-logo" key={`one-copy-${index}`}>
                                <img src={logo} alt="" />
                            </div>
                        ))}
                    </div>

                    <div className="sponsor-hero-track track-two">
                        {heroTrackTwo.map((logo, index) => (
                            <div className="sponsor-logo" key={`two-${index}`}>
                                <img src={logo} alt="Sponsor" />
                            </div>
                        ))}

                        {heroTrackTwo.map((logo, index) => (
                            <div className="sponsor-logo" key={`two-copy-${index}`}>
                                <img src={logo} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="sponsor-hero-overlay" />
                    <div className="sponsor-hero-heading">
                        <PageHeading>Our Sponsors</PageHeading>
                    </div>
            </div>
            <div className="intro">
				<p >
					Team 1711 The RAPTORS would like to extend our sincere gratitude
					to our sponsors for their continued support and investment in our
					team. Their generosity makes it possible for us to design, build,
					compete, and inspire the next generation of innovators. From
					competition expenses to outreach initiatives and educational
					opportunities, our sponsors play a vital role in our success,
					and we are proud to represent their commitment to STEM education
					and our community.
				</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9CT2cltBko3e_wUY_TqwMtU6mWkmDE7KQ2SNkt5T6jf5aSA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Become a Sponsor Today</a>
            </div>
				<section className="sponsor-tier">
					<h2>Trojan Sponsors</h2>

					<div className="sponsor-grid">
						{sponsors.trojan.map((sponsor) => (
							<a
								className="sponsor-card"
								href={sponsor.link}
								target="_blank"
								rel="noopener noreferrer"
								key={sponsor.name}
							>
								<div className="sponsor-logo">
									<img src={sponsor.logo} alt={sponsor.name} />
								</div>

								<span>{sponsor.name}</span>
							</a>
						))}
					</div>
				</section>

				<section className="sponsor-tier">
					<h2>Platinum Sponsors</h2>

					<div className="sponsor-grid">
						{sponsors.platinum.map((sponsor) => (
							<a
								className="sponsor-card"
								href={sponsor.link}
								target="_blank"
								rel="noopener noreferrer"
								key={sponsor.name}
							>
								<div className="sponsor-logo">
									<img src={sponsor.logo} alt={sponsor.name} />
								</div>

								<span>{sponsor.name}</span>
							</a>
						))}
					</div>
				</section>

				<section className="sponsor-tier">
					<h2>Gold Sponsors</h2>

					<div className="sponsor-grid">
						{sponsors.gold.map((sponsor) => (
							<a
								className="sponsor-card"
								href={sponsor.link}
								target="_blank"
								rel="noopener noreferrer"
								key={sponsor.name}
							>
								<div className="sponsor-logo">
									<img src={sponsor.logo} alt={sponsor.name} />
								</div>

								<span>{sponsor.name}</span>
							</a>
						))}
					</div>
				</section>

				<section className="sponsor-tier">
					<h2>Silver Sponsors</h2>

					<div className="sponsor-grid">
						{sponsors.silver.map((sponsor) => (
							<a
								className="sponsor-card"
								href={sponsor.link}
								target="_blank"
								rel="noopener noreferrer"
								key={sponsor.name}
							>
								<div className="sponsor-logo">
									<img src={sponsor.logo} alt={sponsor.name} />
								</div>

								<span>{sponsor.name}</span>
							</a>
						))}
					</div>
				</section>

				<section className="sponsor-tier">
					<h2>Friend Sponsors</h2>

					<div className="sponsor-grid">
						{sponsors.friend.map((sponsor) => (
							<a
								className="sponsor-card"
								href={sponsor.link}
								target="_blank"
								rel="noopener noreferrer"
								key={sponsor.name}
							>
								<div className="sponsor-logo">
									<img src={sponsor.logo} alt={sponsor.name} />
								</div>

								<span>{sponsor.name}</span>
							</a>
						))}
					</div>
				</section>

			</Page>
		);
	}
}