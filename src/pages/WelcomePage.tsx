import Statusbar from "../components/widgets/Statusbar/Statusbar";
import LinkButton from "../components/UI/Buttons/RedirectButton";
import Modal from "../components/UI/Modal/Modal";
import Input from "../components/UI/Input/Input";
import { useState } from "react";
import Button from "../components/UI/Buttons/Button";

function WelcomePage(): JSX.Element {
	const [showExampleModal, setShowExampleModal] = useState(false);
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
				<Button
					buttonStyle="danger"
					content="Open modal"
					onClick={() => {
						setShowExampleModal(!showExampleModal);
					}}
				/>
				<Modal
					title="Title"
					visibility={showExampleModal}
					setVisibility={setShowExampleModal}
				>
					<div>
						<span>Some label</span>
						<Input />
					</div>
				</Modal>
			</div>
			<Statusbar />
		</div>
	);
}

export default WelcomePage;
