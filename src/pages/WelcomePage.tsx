import Statusbar from "../components/layouts/Statusbar";
import LinkButton from "../components/UI/Buttons/RedirectButton";

function WelcomePage(): JSX.Element {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				height: "100vh"
			}}
		>
			<h1>WelcomePage</h1>
			<div>
				<LinkButton
					content={"workspace"}
					path={"/workspace"}
				/>
			</div>
			<Statusbar />
		</div>
	);
}

export default WelcomePage;
