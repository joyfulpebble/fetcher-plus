import Statusbar from "../components/widgets/Statusbar/Statusbar";
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
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<LinkButton
					content={"Go to workspace"}
					redirectPath={"/workspace"}
					buttonStyle="secondary"
				/>
			</div>
			<Statusbar />
		</div>
	);
}

export default WelcomePage;
