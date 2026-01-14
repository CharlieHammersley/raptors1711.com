import "./contact-us.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class ContactUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="contact-us">
				<PageHeading>Contact Us!</PageHeading>
				<p>We'd love to hear from you! You can reach out to our team in a number of ways, including:</p>
				<ul>
					<li>Email us at <a href="mailto:raptors1711@gmail.com">raptors1711@gmail.com</a>.</li>
					<li>Find us on Instagram at <a href="https://instagram.com/raptors1711">@raptors1711</a></li>
					<li>Follow us on TikTok at <a href="https://www.tiktok.com/@theraptors1711">@raptors1711</a></li>
					<li>Friend us on Facebook at <a href="https://facebook.com/raptors1711">raptors1711</a></li>
					<li>Follow us on Twitter at <a href="https://twitter.com/Team1711Raptors">Team1711Raptors</a></li>
					<li>Check out our code on GitHub at <a href="https://github.com/frc1711">frc1711</a></li>
				</ul>
			</Page>
		);
		
	}
    
}
