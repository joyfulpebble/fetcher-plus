import { CommonT } from "../../types/common";

interface RequestConfigItemI {
	url: string;
	name: string;
	time: string;
	date: string;
	params: Object;
	method: CommonT.MainRequestMethods;
}
interface RequestConfigItemConstructorI extends Omit<RequestConfigItemI, "time" | "date"> {}

export class RequestConfig {
	private url: string;
	private name: string;
	private time: string;
	private date: string;
	private method: CommonT.MainRequestMethods;
	private params: Object;
	private unformatted_date: Date;

	constructor({ url, name, method, params }: RequestConfigItemConstructorI) {
		this.url = url;
		this.name = name;
		this.method = method;
		this.params = params;

		this.unformatted_date = new Date();
		this.date = this.getRequestDate();
		this.time = this.getRequestTime();
	}

	private getRequestDate() {
		return this.unformatted_date.toLocaleDateString();
	}
	private getRequestTime() {
		return this.unformatted_date.toLocaleTimeString();
	}

	public create() {
		const item: RequestConfigItemConstructorI = {
			url: this.url,
			name: this.name,
			// time: this.time,
			// date: this.date,
			params: this.params,
			method: this.method
		};
		localStorage.setItem("request_config", JSON.stringify(item));
	}
}
