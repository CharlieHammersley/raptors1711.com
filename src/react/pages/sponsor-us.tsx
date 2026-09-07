import "./sponsor-us.scss";
import headerPhoto from "../../assets/images/team-photos/ribbon-cutting.jpg";

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

import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

const sponsorTrack = [
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

export class SponsorUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="sponsor-us">
				<div className="hero">
					<img className="header-photo" src={headerPhoto} alt="RAPTORS team members at the Innovation and Manufacturing Center ribbon cutting ceremony."/>
					<div className="overlay"/>
					<div className="hero-heading">
						<PageHeading>Sponsor the RAPTORS</PageHeading>
					</div>
				</div>
				<div className="content">
					<p>
						As a nonprofit, student-led program, our success depends on the generous 
						support of businesses, organizations, and individuals who believe in the 
						power of STEM education. Your sponsorship helps provide students with 
						opportunities they will carry with them for a lifetime.
					</p>
					<p>
						Partnering with Team 1711 is an opportunity to make a lasting impact while 
						increasing your organization's visibility within the community.
					</p>
					<p>
						Sponsors receive recognition and benefits:
					</p>
					<ul>
						<li>Recognition on our competition robot, trailer, pit display, and team apparel (based on sponsorship level)</li>
						<li>Logo placement on our website, team shirts, and social media platforms</li>
						<li>Recognition at outreach events and community demonstrations</li>
						<li>Opportunities to attend team events, robot demonstrations, and competitions</li>
						<li>Connection with motivated students interested in STEM careers</li>
						<li>The satisfaction of supporting educational opportunities that prepare the future workforce</li>
					</ul>
					<br />
					<p>
						Your partnership demonstrates a commitment to innovation, education, and 
						community investment while helping students develop valuable technical and 
						professional skills.
					</p>
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSc9CT2cltBko3e_wUY_TqwMtU6mWkmDE7KQ2SNkt5T6jf5aSA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Become a Sponsor</a>
				</div>
				<section className="sponsor-gallery">
					<div className="sponsor-track sponsors-track">
						{[...sponsorTrack, ...sponsorTrack].map((logo, index) => (
							<div
								className="sponsor-logo"
								key={`sponsor-${index}`}
								aria-hidden={index >= sponsorTrack.length}
							>
								<img src={logo} alt={index < sponsorTrack.length ? "Sponsor" : ""} />
							</div>
						))}
                    </div>
				</section>
			</Page>
		);
		
	}
    
}
