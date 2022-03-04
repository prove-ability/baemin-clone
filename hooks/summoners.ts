import axios, { AxiosResponse } from "axios";
import { IRow } from "components/common/list/row";
// import { useQuery } from "react-query";

interface ISummoners extends IRow {
	id: number;
	name: string;
	position: string;
	tier: string;
	resent: string;
	rate: string;
	memo: string;
	createdAt: string;
}

const instance = axios.create({
	baseURL: "https://api.backend.com/summoners",
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Post = {
	getPosts: (): Promise<ISummoners[]> => requests.get(""),
	getAPost: (id: number): Promise<ISummoners> => requests.get(`/${id}`),
	createPost: (post: Omit<ISummoners, "id">): Promise<ISummoners> =>
		requests.post("", post),
	updatePost: (post: Partial<ISummoners>, id: number): Promise<ISummoners> =>
		requests.put(`/${id}`, post),
	deletePost: (id: number): Promise<void> => requests.delete(`summoners/${id}`),
};
