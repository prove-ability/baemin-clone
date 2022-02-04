import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as styles from "./summerRegisterForm.css";
import ModalButtons from "components/common/modal/modalButtons";

enum Position {
	All = "ALL",
	Top = "TOP",
	Jungle = "JUNGLE",
	Mid = "MID",
	Adc = "ADC",
	Sup = "SUP",
}

enum Queue {
	RankedSolo = "RANKED_SOLO",
	RankedFlex = "RANKED_FLEX",
	Normal = "NORMAL",
	Aram = "ARAM",
}

const schema = z.object({
	name: z.string().nonempty({ message: "Required" }),
	mostPosition: z.nativeEnum(Position),
	queueType: z.nativeEnum(Queue),
	useMike: z.boolean({
		required_error: "useMike is required",
		invalid_type_error: "useMike must be a boolean",
	}),
	memo: z.string(),
	password: z
		.number({
			required_error: "password is required",
			invalid_type_error: "password must be a number",
		})
		.lte(5, { message: "this👏is👏too👏big" }),
});

type FormData = z.infer<typeof schema>;

function SummerRegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			mostPosition: Position.All,
		},
	});

	return (
		<div>
			<form onSubmit={handleSubmit((d) => console.log(d))}>
				{/* name */}
				<div className={styles.row}>
					<label className={styles.label} htmlFor="name">
						name
						<input {...register("name")} id="name" />
					</label>
				</div>
				<p className={styles.error}>{errors.name?.message}</p>
				{/* most position */}
				<div className={styles.row}>
					<p>주포지션</p>
					<label htmlFor="all">
						전채
						<input
							{...register("mostPosition")}
							type="radio"
							value={Position["All"]}
							id="all"
						/>
					</label>
					<label htmlFor="top">
						탑
						<input
							{...register("mostPosition")}
							type="radio"
							value={Position["Top"]}
							id="top"
						/>
					</label>
					<label htmlFor="jungle">
						정글
						<input
							{...register("mostPosition")}
							type="radio"
							value={Position["Jungle"]}
							id="jungle"
						/>
					</label>
					<label htmlFor="mid">
						미드
						<input
							{...register("mostPosition")}
							type="radio"
							value={Position["Mid"]}
							id="mid"
						/>
					</label>
					<label htmlFor="adc">
						원딜
						<input
							{...register("mostPosition")}
							type="radio"
							value={Position["Adc"]}
							id="adc"
						/>
					</label>
					<label htmlFor="sup">
						서포터
						<input
							{...register("mostPosition")}
							type="radio"
							value={Position["Sup"]}
							id="sup"
						/>
					</label>
				</div>
				<p className={styles.error}>{errors.mostPosition?.message}</p>
				{/* queue type */}
				<div className={styles.row}>
					<label className={styles.label}>
						queue type
						<input {...register("queueType")} />
					</label>
				</div>
				<p className={styles.error}>{errors.queueType?.message}</p>
				{/* use mike */}
				<div className={styles.row}>
					<label className={styles.label}>
						use mike
						<input {...register("useMike")} />
					</label>
				</div>
				<p className={styles.error}>{errors.useMike?.message}</p>
				{/* memo */}
				<div className={styles.row}>
					<label className={styles.label}>
						memo
						<input {...register("memo")} />
					</label>
				</div>
				<p className={styles.error}>{errors.memo?.message}</p>
				{/* password */}
				<div className={styles.row}>
					<label className={styles.label}>
						password
						<input {...register("password")} />
					</label>
				</div>
				<p className={styles.error}>{errors.password?.message}</p>
				{/*  */}
				<ModalButtons isSubmit={true} />
				{/* <button type="submit">SetValue</button> */}
			</form>
		</div>
	);
}

export default SummerRegisterForm;
