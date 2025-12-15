import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo";

export type NavigationLinks = {
	
	[name: string]: string | {
		
		[name: string]: string
		
	};
	
}

export type Props = Readonly<{
	
	links: NavigationLinks
	
}>;

export type State = Readonly<{}>;

export class Header extends React.Component<Props, State> {
	
	public static defaultProps: Props = {
		
		links: Header.getDefaultNavigationLinks()
		
	};
	
	public static getDefaultNavigationLinks(): NavigationLinks {
		
		return {
			"Home": "/home",
			"Meet the Team": {
				"Meet the Team": "/meet-the-team",
				"Meet the SMEs": "/meet-the-SMEs",
				"Meet the Mentors": "/meet-the-mentors",
			},
			"Sponsor/Donate": "/sponsorship",
			"Contact Us": "/contact-us"
		};
		
	}
    
    public render(): React.ReactNode {
		
		let navigationContent: React.ReactNode = Object.entries(this.props.links).map(
			(entry: [string, string | { [name: string]: string }]): React.ReactNode => {
				
				let navTitle: string = entry[0];
				
				// For a plain link.
				if (typeof entry[1] === "string") {
					
					let link: string = entry[1];
					
					return (
						<div className="nav-item">
							<Link className="nav-item-primary-link" to={link} key={navTitle}>{navTitle}</Link>
						</div>
					);
					
				// For a link with a submenu.
				} else {
					
					let primaryLink: string | undefined = entry[1][navTitle];
					
					let dropdownContent: React.ReactNode = Object.entries(entry[1])
						.filter((entry2: [string, string]): boolean => entry2[0] !== navTitle)
						.map((entry2: [string, string]): React.ReactNode => {
							
							let entryTitle: string = entry2[0];
							let entryLink: string = entry2[1];
							
							return <Link className="nav-item-dropdown-entry"
										 to={entryLink} key={entryTitle}>{entryTitle}</Link>;
							
						}
					);
					
					return (
						<div className="nav-item">
							<Link className="nav-item-primary-link" to={primaryLink} key={navTitle}>{navTitle}</Link>
							<div className="nav-item-dropdown">
								{dropdownContent}
							</div>
						</div>
					);
					
				}
				
			}
		);
		
		return (
			<header>
				<div className="header-content">
					<Logo>RAPTOR<br/>Robotics</Logo>
					<nav>
						{ navigationContent }
					</nav>
				</div>
				<hr />
			</header>
		);
		
	}
    
}
