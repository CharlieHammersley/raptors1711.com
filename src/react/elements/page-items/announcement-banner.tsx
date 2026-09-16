/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 12:45 PM -- December 4th, 2021
 * Project: raptors1711.com
 */

import "./announcement-banner.scss";
import React from "react";

export type Props = Readonly<{
	children?: React.ReactNode;
}>;
export type State = Readonly<{}>;

export class AnnouncementBanner extends React.Component<Props, State> {
	
	public render(): React.ReactNode {
		
		return (
			<div className="announcement-banner">
				<p>{this.props?.children}</p>
			</div>
		);
		
	}
	
}
