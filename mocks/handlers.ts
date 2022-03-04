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
		"https://api.backend.com/summoners",
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
	rest.get<CommonRequest, CommonResponse>(
		"https://api.backend.com/summoners",
		(req, res, ctx) => {
			return res(
				ctx.json([
					{
						name: "이름입니다",
						position: "jungle",
						tier: "실버",
						resent: "최근 챔피언",
						rate: "50",
						memo: "이겨주시면 돈드려요 편하게 친추 주세요",
						createdAt: "22.22.22",
					},
					{
						name: "이름입니다",
						position: "jungle",
						tier: "실버",
						resent: "최근 챔피언",
						rate: "50",
						memo: "이겨주시면 돈드려요 편하게 친추 주세요",
						createdAt: "22.22.22",
					},
					{
						name: "이름입니다",
						position: "jungle",
						tier: "실버",
						resent: "최근 챔피언",
						rate: "50",
						memo: "이겨주시면 돈드려요 편하게 친추 주세요",
						createdAt: "22.22.22",
					},
					{
						name: "이름입니다",
						position: "jungle",
						tier: "실버",
						resent: "최근 챔피언",
						rate: "50",
						memo: "이겨주시면 돈드려요 편하게 친추 주세요",
						createdAt: "22.22.22",
					},
				])
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
