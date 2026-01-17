import "./social-media-icons.scss";
import FacebookIcon from "../../assets/images/icons/facebook.svg?react";
import GitHubIcon from "../../assets/images/icons/github.svg?react";
import InstagramIcon from "../../assets/images/icons/instagram.svg?react";
import TwitterIcon from "../../assets/images/icons/twitter.svg?react";
import TikTokIcon from "../../assets/images/icons/tiktok.svg?react";
//import { ReactComponent as SnapchatIcon } from "../../assets/images/icons/snapchat.svg";
import React from "react";


export type Props = Readonly<{
	orientation: "vertical" | "horizontal",
	icons?: {
		[name: string]: {
			link: string,
			component: React.ReactNode
		}
	}
}>;

export type State = Readonly<{}>;

export class SocialMediaIcons extends React.Component<Props, State> {
	
	public static defaultProps: Partial<Props> = {
		orientation: "horizontal",
		icons: {
			"Instagram": {
				link: "http://instagram.com/raptors1711",
				component: <InstagramIcon />
			},
			"Facebook": {
				link: "http://facebook.com/raptors1711",
				component: <FacebookIcon />
			},
			"Twitter": {
				link: "http://twitter.com/Team1711Raptors",
				component: <TwitterIcon />
			},
			"TikTok": {
				link: "https://www.tiktok.com/@theraptors1711",
				component: <TikTokIcon />
			},
			/*"Snapchat": {
				link: "https://www.snapchat.com/add/raptors_1711",
				component: <SnapchatIcon />
			},*/
			"GitHub": {
				link: "https://github.com/frc1711",
				component: <GitHubIcon />
			}
		}
	};
    
    public render(): React.ReactNode {
    	
    	let icons: React.ReactNode = Object.keys(this.props.icons ?? {}).map(
			(name: string): React.ReactNode => {
				
				let link: string = (this.props.icons ?? {})[name as keyof Props["icons"]].link;
				let component: React.ReactNode = (this.props.icons ?? {})[name as keyof Props["icons"]].component;
				
				return (
					<a href={link} className={`social-media-icon ${name}`} key={name}>
						{component}
					</a>
				);
				
			}
		);
    	
    	return (
    		<div className={`social-media-icons ${this.props.orientation}`}>
				{ icons }
			</div>
		);
		
	}
    
}
