import { useForm } from "../../../hooks/useForm";
import Input from "../../ui/Input/Input";

interface ApiKeyAuthForm {
	key: string;
	value: string;
}

function ApiKeyAuth() {
	const { values, saveFuildValue } = useForm<ApiKeyAuthForm>({
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

export default ApiKeyAuth;
