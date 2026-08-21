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
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

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
					<div className="sponsor-track">
						<div className="sponsor-logo">
							<img src={sponsor1} alt="Sponsor 1" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor2} alt="Sponsor 2" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor3} alt="Sponsor 3" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor4} alt="Sponsor 4" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor5} alt="Sponsor 5" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor6} alt="Sponsor 6" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor7} alt="Sponsor 7" />
						</div>
						<div className="sponsor-logo">
							<img src={sponsor8} alt="Sponsor 8" />
						</div>
						<div className="sponsor-logo">
							<img src={sponsor9} alt="Sponsor 9" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor1} alt="Sponsor 1" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor2} alt="Sponsor 2" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor3} alt="Sponsor 3" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor4} alt="Sponsor 4" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor5} alt="Sponsor 5" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor6} alt="Sponsor 6" />
						</div>

						<div className="sponsor-logo">
							<img src={sponsor7} alt="Sponsor 7" />
						</div>
						<div className="sponsor-logo">
							<img src={sponsor8} alt="Sponsor 8" />
						</div>
						<div className="sponsor-logo">
							<img src={sponsor9} alt="Sponsor 9" />
						</div>
					</div>
				</section>
			</Page>
		);
		
	}
    
}
