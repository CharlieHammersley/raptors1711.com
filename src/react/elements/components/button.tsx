import React from "react";
import "./button.scss";

type ButtonProps = {
	children: React.ReactNode;
	href?: string;
	variant?: "basic" | "clean";
	animated?: boolean;
};

export function Button({
	children,
	href,
	variant = "basic",
	animated = false,
}: ButtonProps): React.ReactNode {

	const className = [
		`${variant}-button`,
		animated ? `${variant}-button-animated` : "",
	].join(" ");

	if (href) {
		return (
			<a className={className} href={href}>
				{children}
			</a>
		);
	}

	return (
		<button className={className}>
			{children}
		</button>
	);
}