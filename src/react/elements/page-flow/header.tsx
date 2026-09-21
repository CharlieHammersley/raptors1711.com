import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo/logo";
import logoImage from "/src/assets/images/icons/team-gear-logo-white.png";

export type NavigationLinks = {
	[name: string]: string | { [name: string]: string };
};

export type Props = Readonly<{ links: NavigationLinks }>;

export type State = Readonly<{
	menuOpen: boolean;
	hiddenLinks: string[];
}>;

export class Header extends React.Component<Props, State> {
	public static defaultProps: Props = {
		links: Header.getDefaultNavigationLinks(),
	};

	private navRef = React.createRef<HTMLElement>();
	private measureRef = React.createRef<HTMLElement>();

	constructor(props: Props) {
		super(props);
		this.state = { menuOpen: false, hiddenLinks: [] };
	}

	public static getDefaultNavigationLinks(): NavigationLinks {
		return {
			"About Us": "/about-us",
			"Meet the Team": {
				"Meet the Team": "/meet-the-team",
				"Meet the SMEs": "/meet-the-SMEs",
				"Meet the Mentors": "/meet-the-mentors",
			},
			History: {
				History: "/history",
				"2026 Season": "/history-2026",
				"2025 Season": "/history-2025",
				"2024 Season": "/history-2024",
			},
			Sponsors: {
				"Sponsor Us": "/sponsor-us",
				"Our Sponsors": "/sponsors",
			},
			Documentation: {
				"2026 Engineering Notebook": "/engineering-notebook-2026",
				"2026 BONES Document": "/bones-2026",
			},
			Community: {
				Community: "/community",
				"Join the Raptors": "/join-the-raptors",
				"Camps & Workshops": "/education-opportunities",
			},
			Resources: {
				"Team Calendar": "/team-calendar",
				"How to Start a Robotics Team": "/start-robotics-team",
			},
			"Contact Us": "/contact-us",
		};
	}

	public componentDidMount(): void {
		window.addEventListener("resize", this.updateNavigation);
		this.updateNavigation();
	}

	public componentDidUpdate(prevProps: Props, prevState: State): void {
		if (
			prevProps.links !== this.props.links &&
			prevState.hiddenLinks !== this.state.hiddenLinks
		) {
			this.updateNavigation();
		}
	}

	public componentWillUnmount(): void {
		window.removeEventListener("resize", this.updateNavigation);
	}

	private updateNavigation = (): void => {
		const nav = this.navRef.current;
		const measure = this.measureRef.current;
		if (!nav || !measure) return;

		const availableWidth = nav.clientWidth;
		let usedWidth = 0;

		const hiddenLinks = Array.from(
			measure.querySelectorAll<HTMLElement>(".nav-item")
		)
			.filter((item) => {
				const fits = usedWidth + item.offsetWidth <= availableWidth - 40;
				if (fits) usedWidth += item.offsetWidth;
				return !fits;
			})
			.map((item) => item.dataset.navTitle ?? "");

		if (
			hiddenLinks.length !== this.state.hiddenLinks.length ||
			hiddenLinks.some((link, i) => link !== this.state.hiddenLinks[i])
		) {
			this.setState({
				hiddenLinks,
				menuOpen: hiddenLinks.length
					? this.state.menuOpen
					: false,
			});
		}
	};

	private renderNavigationItem(
		[navTitle, value]: [string, string | { [name: string]: string }],
		hidden: boolean
	): React.ReactNode {
		if (this.state.hiddenLinks.includes(navTitle) !== hidden) return null;

		const link = typeof value === "string" ? value : value[navTitle];
		const dropdown =
			typeof value === "string"
				? null
				: Object.entries(value)
						.filter(([name]) => name !== navTitle)
						.map(([title, path]) => (
							<Link
								className="nav-item-dropdown-entry"
								to={path}
								key={title}
							>
								{title}
							</Link>
						));

		return (
			<div className="nav-item" key={navTitle} data-nav-title={navTitle}>
				<Link className="nav-item-primary-link" to={link}>
					{navTitle}
				</Link>
				{dropdown && (
					<div className="nav-item-dropdown">{dropdown}</div>
				)}
			</div>
		);
	}

	public render(): React.ReactNode {
		const entries = Object.entries(this.props.links);

		return (
			<header>
				<div className="header-content">
					<Link to="/home" className="header-home-link">
						<Logo>
							Raptors
							<br />
							Team 1711
						</Logo>
						<img
							src={logoImage}
							alt="RAPTORS Logo"
							className="logoImage"
						/>
					</Link>

					<nav ref={this.navRef} className="desktop-nav">
						{entries.map((entry) =>
							this.renderNavigationItem(entry, false)
						)}
					</nav>

					{this.state.hiddenLinks.length > 0 && (
						<button
							className="mobile-menu-button"
							onClick={() =>
								this.setState(({ menuOpen }) => ({
									menuOpen: !menuOpen,
								}))
							}
							aria-label="Open navigation menu"
							aria-expanded={this.state.menuOpen}
						>
							☰
						</button>
					)}

					{this.state.menuOpen && this.state.hiddenLinks.length > 0 && (
						<nav className="mobile-nav">
							{entries.map((entry) =>
								this.renderNavigationItem(entry, true)
							)}
						</nav>
					)}

					<nav ref={this.measureRef} className="navigation-measure">
						{entries.map(([title]) => (
							<div
								className="nav-item"
								key={title}
								data-nav-title={title}
							>
								<Link className="nav-item-primary-link" to="#">
									{title}
								</Link>
							</div>
						))}
					</nav>
				</div>
			</header>
		);
	}
}
