import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as styles from "./summerRegisterForm.css";
import ModalButtons from "components/common/modal/modalButtons";
import Select from "components/common/select";
import Input from "components/common/input";
import Toggle from "components/common/toggle";
import Textarea from "components/common/textarea";

enum Position {
	All = "전체",
	Top = "탑",
	Jungle = "정글",
	Mid = "미드",
	Adc = "원딜",
	Sup = "서폿",
}

enum Queue {
	RankedSolo = "솔로랭크",
	RankedFlex = "자유랭크",
	Normal = "일반",
	Aram = "무작위총력전",
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
		.string({
			required_error: "password is required",
		})
		.length(4, { message: "4자리를 입력하세요" }),
});

type FormData = z.infer<typeof schema>;

function SummerRegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			mostPosition: Position.All,
			queueType: Queue.RankedSolo,
			useMike: false,
			password: "",
		},
		mode: "onBlur",
	});
	// 주포지션 옵션
	const positionOptions = Object.values(Position).map((value) => ({
		label: value,
		value,
	}));
	// 큐타입 옵션
	const queueOptions = Object.values(Queue).map((value) => ({
		label: value,
		value,
	}));
	return (
		<div>
			<form onSubmit={handleSubmit((d) => console.log(d))}>
				{/* name */}
				<div className={styles.row}>
					<label className={styles.label} htmlFor="name">
						소환사 이름
						<Input {...register("name")} id="name" />
					</label>
				</div>
				<p className={styles.error}>{errors.name?.message}</p>
				{/* most position */}
				<div className={styles.row}>
					<label className={styles.label} htmlFor="mostPosition">
						주포지션
						<Controller
							name="mostPosition"
							control={control}
							render={({ field }) => (
								<Select
									{...field}
									id="mostPosition"
									options={positionOptions}
								/>
							)}
						/>
					</label>
				</div>
				<p className={styles.error}>{errors.mostPosition?.message}</p>
				{/* queue type */}
				<div className={styles.row}>
					<label className={styles.label} htmlFor="queueType">
						큐 타입
						<Controller
							name="queueType"
							control={control}
							render={({ field }) => (
								<Select
									{...field}
									id="queueType"
									options={queueOptions}
								/>
							)}
						/>
					</label>
				</div>
				<p className={styles.error}>{errors.queueType?.message}</p>
				{/* use mike */}
				<div className={styles.row}>
					<label className={styles.label} htmlFor="useMike">
						마이크
						{/* // Toggle */}
						<Controller
							name="useMike"
							control={control}
							render={({ field }) => (
								<Toggle {...field} id="useMike" />
							)}
						/>
					</label>
				</div>
				<p className={styles.error}>{errors.useMike?.message}</p>
				{/* memo */}
				<div className={styles.row}>
					<label className={styles.label}>
						메모
						<Textarea {...register("memo")} />
					</label>
				</div>
				<p className={styles.error}>{errors.memo?.message}</p>
				{/* password */}
				<div className={styles.row}>
					<label className={styles.label} htmlFor="password">
						삭제 비밀번호
						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									id="password"
									maxLength={4}
									numbersOnly
								/>
							)}
						/>
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
