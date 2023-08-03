import { useRef } from "react";

interface UseFormParamsI<Values> {
	initialValues: Values;
}

export const useForm = <Values extends Object>({ initialValues }: UseFormParamsI<Values>) => {
	const values = useRef(initialValues);

	const saveFuildValue = <K extends keyof Values>(fuild: K, value: Pick<Values, K>[K]): void => {
		values.current = { ...values.current, [fuild]: value };
	};

	return { values, saveFuildValue };
};
