/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 7:53 PM -- December 6th, 2021
 * Project: raptors1711.com
 */
/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:45 PM -- December 4th, 2021
 * Project: raptors1711.com
 */

import "./page-heading.scss";
import React from "react";

export type Props = Readonly<{
	children?: React.ReactNode;
}>;
export type State = Readonly<{}>;

export class PageHeading extends React.Component<Props, State> {
	
	public render(): React.ReactNode {
		
		return (
			<h1 className="page-heading">{this.props?.children}</h1>
		);
		
	}
	
}
