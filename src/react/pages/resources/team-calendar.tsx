import "./team-calendar.scss";
import React from "react";
import { Page } from "/src/react/elements/page-flow/page";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class TeamCalendar extends React.Component<Props, State> {
    public render(): React.ReactNode {
        return (
            <Page name="team-calendar">
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=c_d233dda228b58d5ebb786b18c69c582f59a73e07812f466ea7623f59b3cdafd5%40group.calendar.google.com&ctz=America%2FDetroit"
                    title="Team Calendar"
                    width="800"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                />
            </Page>
        );
    }
}