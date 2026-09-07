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
import sponsor10 from "../../assets/images/sponsors/10.png";
import sponsor11 from "../../assets/images/sponsors/11.png";
import sponsor12 from "../../assets/images/sponsors/12.png";
import sponsor13 from "../../assets/images/sponsors/13.png";
import sponsor14 from "../../assets/images/sponsors/14.png";
import sponsor15 from "../../assets/images/sponsors/15.png";
import sponsor16 from "../../assets/images/sponsors/16.png";
import sponsor17 from "../../assets/images/sponsors/17.png";
import sponsor18 from "../../assets/images/sponsors/18.png";
import sponsor19 from "../../assets/images/sponsors/19.png";
import sponsor20 from "../../assets/images/sponsors/20.png";
import sponsor21 from "../../assets/images/sponsors/21.png";
import sponsor22 from "../../assets/images/sponsors/22.png";
import sponsor23 from "../../assets/images/sponsors/23.png";
import sponsor24 from "../../assets/images/sponsors/24.png";
import sponsor26 from "../../assets/images/sponsors/26.png";
import sponsor27 from "../../assets/images/sponsors/27.png";
import sponsor28 from "../../assets/images/sponsors/28.png";
import sponsor29 from "../../assets/images/sponsors/29.svg";
import sponsor30 from "../../assets/images/sponsors/30.png";
import sponsor31 from "../../assets/images/sponsors/31.png";
import sponsor32 from "../../assets/images/sponsors/32.png";
import sponsor33 from "../../assets/images/sponsors/33.png";
import sponsor34 from "../../assets/images/sponsors/34.png";
import sponsor35 from "../../assets/images/sponsors/35.png";
import sponsor36 from "../../assets/images/sponsors/36.png";
import sponsor39 from "../../assets/images/sponsors/39.png";
import sponsor40 from "../../assets/images/sponsors/40.png";

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
			name: "Farm Bureau Insurance",
			logo: sponsor5,
			link: "https://www.michfb.com/",
		},
		
		{
			name: "BRITTEN Inc.",
			logo: sponsor7,
			link: "https://britteninc.com/",
		},
		{
			name: "Lucky Marmot Aviation LLC",
			logo: sponsor9,
			link: "https://about:blank",
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
			name: "Cone Drive",
			logo: sponsor3,
			link: "https://conedrive.com/",
		},
		{
			name: "Strata Design",
			logo: sponsor1,
			link: "https://www.stratadesign.com/",
		},
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
		{
			name: "Thompson Surgical Instruments, Inc.",
			logo: sponsor18,
			link: "https://thompsonretractor.com/",
		},
	],

	silver: [
		{
			name: "Biggby Coffee",
			logo: sponsor19,
			link: "https://biggby.com/",
		},
		{
			name: "Action Water Sports",
			logo: sponsor20,
			link: "https://actionwater.com/traverse-city/",
		},
		{
			name: "RJG Inc.",
			logo: sponsor21,
			link: "https://rjginc.com/",
		},
		{
			name: "CRM Inc.",
			logo: sponsor22,
			link: "https://www.crminctc.com/",
		},
		{
			name: "DCL Inc.",
			logo: sponsor39,
			link: "https://dclinc.com/",
		},
		{
			name: "Big DH",
			logo: sponsor23,
			link: "https://about:blank",
		},
		{
			name: "Songer's Log Cabins",
			logo: sponsor24,
			link: "https://about:blank",
		},
		{
			name: "Northwestern Michigan College Aviation",
			logo: sponsor17,
			link: "https://www.nmc.edu/programs/academic-offices/aviation/",
		},
	],

	friend: [
		{
			name: "North Bay Energy",
			logo: sponsor26,
			link: "https://www.nbayenergy.com/",
		},
		{
			name: "Grand Traverse Children's Clinic",
			logo: sponsor27,
			link: "https://gtchildrens.com/",
		},
		{
			name: "Oryana",
			logo: sponsor28,
			link: "https://oryana.coop/",
		},
		{
			name: "Cherry Republic",
			logo: sponsor29,
			link: "https://www.cherryrepublic.com/",
		},
		{
			name: "Grand Traverse Pie Company",
			logo: sponsor40,
			link: "https://gtpie.com/",
		},
		{
			name: "Grand Traverse Resort & Spa",
			logo: sponsor30,
			link: "https://www.grandtraverseresort.com/",
		},
		{
			name: "Nealis Engineering",
			logo: sponsor31,
			link: "https://nealisengineering.com/",
		},
		{
			name: "Traverse Bay Area Credit Union",
			logo: sponsor32,
			link: "https://www.tbacu.com/",
		},
		{
			name: "MJ Cartwright",
			logo: sponsor33,
			link: "https://about:blank",
		},
		{
			name: "Detriot Wing Company",
			logo: sponsor34,
			link: "https://detroitwingco.com/locations/traverse-city/",
		},
		{
			name: "Qdoba",
			logo: sponsor35,
			link: "https://www.qdoba.com/",
		},
		{
			name: "Bay Bread Company",
			logo: sponsor36,
			link: "https://baybreadco.com/",
		},	
	],
};

const heroTrackOne = [
	sponsor21,
	sponsor22,
	sponsor23,
	sponsor24,
	sponsor26,
	sponsor27,
	sponsor28,
	sponsor29,
	sponsor30,
	sponsor31,
	sponsor32,
	sponsor33,
	sponsor34,
	sponsor35,
	sponsor36,
	sponsor39,
	sponsor40,
];

const heroTrackTwo = [
	sponsor1,
	sponsor2,
	sponsor3,
	sponsor4,
	sponsor5,
	sponsor6,
	sponsor7,
	sponsor8,
	sponsor9,
	sponsor10,
	sponsor11,
	sponsor12,
	sponsor13,
	sponsor14,
	sponsor15,
	sponsor16,
	sponsor17,
	sponsor18,
	sponsor19,
	sponsor20,
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