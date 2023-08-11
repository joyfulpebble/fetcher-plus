import Statusbar from "../components/widgets/Statusbar/Statusbar";
import LinkButton from "../components/UI/Buttons/RedirectButton";
import Modal from "../components/UI/Modal/Modal";
import Input from "../components/UI/Input/Input";
import Divider from "../components/UI/Divider/Divider";

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
				<Modal>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
					<div>
						<span>Some label</span>
						<Input />
					</div>
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
