import "./Divider.scss";

interface DividerProps {
	marginTop?: number;
	marginBottom?: number;
}

function Divider({ marginBottom, marginTop }: DividerProps) {
	return (
		<div
			className="divider"
			style={{ marginTop: marginBottom, marginBottom: marginTop }}
		/>
	);
}

export default Divider;
