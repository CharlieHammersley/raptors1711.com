import "./logo.scss";
import React from "react";

export type Props = Readonly<{
	
	level: 1 | 2 | 3 | 4 | 5 | 6,

	children?: React.ReactNode;
	
}>;

export type State = Readonly<{}>;

export class Logo extends React.Component<Props, State> {
	
	public static defaultProps: Partial<Props> = {
		
		level: 1
		
	};
	
	public render(): React.ReactNode {
		
		let classes: string[] = [
			"logo"
		];
		
		switch (this.props.level) {
			
			case 1:
				return <h1 className={classes.join(" ")}>{this.props?.children}</h1>;
			
			case 2:
				return <h2 className={classes.join(" ")}>{this.props?.children}</h2>;
			
			case 3:
				return <h3 className={classes.join(" ")}>{this.props?.children}</h3>;
			
			case 4:
				return <h4 className={classes.join(" ")}>{this.props?.children}</h4>;
			
			case 5:
				return <h5 className={classes.join(" ")}>{this.props?.children}</h5>;
			
			case 6:
				return <h6 className={classes.join(" ")}>{this.props?.children}</h6>;
			
		}
		
	}
	
}