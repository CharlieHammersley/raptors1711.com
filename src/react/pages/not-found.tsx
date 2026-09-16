import "./not-found.scss";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { Link } from "react-router-dom";
import { PageHeading } from "../elements/page-items/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class NotFound extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="not-found">
				<PageHeading>404 Not Found!</PageHeading>
				<div className="sockets">
					<p className="aside">Much like our 10mm sockets...</p>
					<h1 className="cant-find">We can't find what you're looking for!</h1>
				</div>
				<Link to="/home">go home?</Link>
			</Page>
		);
		
	}
    
}
