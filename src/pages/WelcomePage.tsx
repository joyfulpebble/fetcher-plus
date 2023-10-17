import RedirectButton from "../components/ui/Buttons/RedirectButton";
import Statusbar from "../widgets/statusbar-widgets/Statusbar";

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
				<RedirectButton
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
