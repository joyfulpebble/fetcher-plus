import Statusbar from "../components/layouts/Statusbar";
import LinkButton from "../components/UI/Buttons/RedirectButton";

function WelcomePage(): JSX.Element {
	return (
		<div>
			WelcomePage
			<br />
			<br />
			<LinkButton
				content={"workspace"}
				path={"/workspace"}
			/>
			<Statusbar />
		</div>
	);
}

export default WelcomePage;
