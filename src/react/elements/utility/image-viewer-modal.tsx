/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:45 PM -- December 4th, 2021
 * Project: raptors1711.com
 */

import "./image-viewer-modal.scss";
import { ReactComponent as LeftChevron } from "../../assets/images/icons/chevron-left.svg";
import { ReactComponent as RightChevron } from "../../assets/images/icons/chevron-right.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/x.svg";
import React from "react";

export type Props = Readonly<{
	images: string[],
	startingIndex?: number,
	wrap: boolean
}>;

export type State = Readonly<{
	index: number
}>;

export class ImageViewerModal extends React.Component<Props, State> {
	
	public static defaultProps: Partial<Props> = {
		startingIndex: 0,
		wrap: true
	};
	
	public constructor(props: Props) {
		
		super(props);
		
		this.state = {
			index: this.props.startingIndex ?? 0
		};
		
		this.navigate = this.navigate.bind(this);
		this.close = this.close.bind(this);
		
	}
	
	public navigate(value: number, absolute: boolean = false): void {
		
		if (absolute) {
			
			if (this.props.wrap) value = value % this.props.images.length;
			else {
				
				if (value >= this.props.images.length) value = this.props.images.length - 1;
				else if (value < -this.props.images.length) value = -this.props.images.length;
				
			}
			
			if (value < 0) value = this.props.images.length + value;
			
		} else {
			
			value += this.state.index;
			
			if (this.props.wrap) {
				
				value = value % this.props.images.length;
				
				if (value < 0) value = this.props.images.length + value;
				
			} else {
				
				// If the new value is out-of-range, ignore it and return.
				if ((value < 0) || (value >= this.props.images.length)) return;
				
			}
			
		}
		
		this.setState({
			index: value
		});
		
	}
	
	public close(): void {
		
		console.log("Closing!");
		
	}
	
	public componentDidMount(): void {
		
		document.addEventListener("keyup", this.close);
		
	}
	
	public componentWillUnmount(): void {
		
		document.removeEventListener("keyup", this.close);
		
	}
	
	public render(): React.ReactNode {
		
		let slides: React.ReactNode = this.props.images.map((image: string): React.ReactNode => {
			
			return (
				<div key={image} className="image-viewer-slide">
					<img src={image} />
				</div>
			);
			
		});
		
		let offset: number = this.state.index * -100;
		
		return (
			<div className="image-viewer-modal">
				<div className="image-viewer-button-container left" onClick={() => this.navigate(-1)}>
					<LeftChevron />
				</div>
				<div className="image-viewer-slider" style={{ transform: `translateX(${offset}%)` }}>
					{slides}
				</div>
				<div className="image-viewer-button-container close" onClick={() => this.close()}>
					<CloseIcon />
				</div>
				<div className="image-viewer-button-container right" onClick={() => this.navigate(1)}>
					<RightChevron />
				</div>
			</div>
		);
		
	}
	
}
