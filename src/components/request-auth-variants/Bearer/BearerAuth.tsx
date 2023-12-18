import { useForm } from "../../../hooks/useForm";
import Input from "../../ui/Input/Input";

interface BearerAuthForm {
	token: string;
}

function BearerAuth() {
	const { values, saveFuildValue } = useForm<BearerAuthForm>({
		initialValues: {
			token: ""
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
					placeholder="Token"
					defaultValue={values.current.token}
					onChange={(event) => saveFuildValue("token", event.target.value)}
				/>
			</section>
		</>
	);
}

export default BearerAuth;
