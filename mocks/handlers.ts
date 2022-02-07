import { PathParams, rest } from "msw";

interface CommonRequest {
	username: string;
}
interface CommonResponse extends PathParams {
	ok: "true" | "false";
	message: string;
}

export const handlers = [
	rest.post<CommonRequest, CommonResponse>(
		"https://api.backend.com/summoner",
		(req, res, ctx) => {
			return res(
				ctx.json({
					// 1.
					// error: "",
					ok: true,
					message: "",
					data: {
						d: "ds",
					},
				})
			);
		}
	),
	// rest.post<LoginBody, LoginResponse>("/login", (req, res, ctx) => {
	// 	const { username } = req.body;
	// 	return res(
	// 		ctx.json({
	// 			username,
	// 			firstName: "John",
	// 		})
	// 	);
	// }),
];
