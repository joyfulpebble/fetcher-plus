import { AxiosInstance } from "axios";
import type { APIT } from "../../types/api";

export default function getResponseTime(axios_instance: AxiosInstance) {
	axios_instance.interceptors.request.use(
		(config: APIT.InterceptorI) => {
			config.metadata = { startTime: +new Date() };

			return config;
		},
		(error) => Promise.reject(error)
	);

	axios_instance.interceptors.response.use(
		(response: APIT.InterceptorResponseI) => {
			response.config.metadata!.endTime = +new Date();
			response.config.metadata!.duration =
				response.config.metadata!.endTime - response.config.metadata!.startTime!;

			return response;
		},
		(error) => {
			error.config.metadata.endTime = +new Date();
			error.duration = error.config.metadata.endTime - error.config.metadata.startTime;

			return Promise.reject(error);
		}
	);
}
