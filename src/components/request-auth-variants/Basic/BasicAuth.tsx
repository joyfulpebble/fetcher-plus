import { useForm } from "../../../hooks/useForm";
import Input from "../../ui/Input/Input";

interface BasicAuthForm {
	key: string;
	value: string;
}

function BasicAuth() {
	const { values, saveFuildValue } = useForm<BasicAuthForm>({
		initialValues: {
			key: "",
			value: ""
		}
	});

	return (
		<>
			<section
				style={{
					marginTop: "5px",
					height: "74px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between"
				}}
			>
				<Input
					placeholder="Key"
					defaultValue={values.current.key}
					onChange={(event) => saveFuildValue("key", event.target.value)}
				/>
				<Input
					placeholder="Value"
					defaultValue={values.current.value}
					onChange={(event) => saveFuildValue("value", event.target.value)}
				/>
			</section>
		</>
	);
}

export default BasicAuth;
