import { LoginFields } from "@/constants";
import { Input } from "@components/shared/input";
import { Controller, useForm } from "react-hook-form";

import { checkDisabledSubmitButton, setPlaceholder } from "../helpers";
import { Button } from "../shared/button";
import { ButtonVariants } from "../shared/button";
import { InputMessage } from "../shared/input-message";
import styles from "./LoginForm.module.scss";
import { LoginFieldsList, LoginFormValidateRules } from "./constants";

type LoginFormFields = {
	[LoginFields.EMAIL]: string;
	[LoginFields.PASSWORD]: string;
};

export const LoginForm = () => {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors, dirtyFields },
	} = useForm<LoginFormFields>({
		mode: "onChange",
		defaultValues: {
			[LoginFields.EMAIL]: "",
			[LoginFields.PASSWORD]: "",
		},
	});

	const submitHandler = (data: LoginFormFields) => {
		console.log(data);
	};

	console.log(errors);

	const isDisabled =
		checkDisabledSubmitButton(LoginFieldsList, dirtyFields) || Object.keys(errors).length > 0;

	return (
		<form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
			<div className={styles["form__field-wrapper"]}>
				<Controller
					control={control}
					name={LoginFields.EMAIL}
					rules={LoginFormValidateRules[LoginFields.EMAIL]}
					render={({ field }) => (
						<Input
							type={field.name}
							inputMode="email"
							labelText={LoginFields.EMAIL}
							placeholder={setPlaceholder(field.name)}
							onChange={(e) => {
								setValue(LoginFields.EMAIL, e.target.value);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<>
					{errors[LoginFields.EMAIL] && (
						<InputMessage error>{errors[LoginFields.EMAIL].message}</InputMessage>
					)}
				</>
			</div>
			<div className={styles["form__field-wrapper"]}>
				<Controller
					control={control}
					name={LoginFields.PASSWORD}
					rules={LoginFormValidateRules[LoginFields.PASSWORD]}
					render={({ field }) => (
						<Input
							type={field.name}
							placeholder={setPlaceholder(field.name)}
							labelText={LoginFields.PASSWORD}
							onChange={(e) => {
								setValue(LoginFields.PASSWORD, e.target.value);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<>
					{errors[LoginFields.PASSWORD] && (
						<InputMessage error>{errors[LoginFields.PASSWORD].message}</InputMessage>
					)}
				</>
			</div>
			<Button
				className={styles.form__button}
				variant={ButtonVariants.PRIMARY}
				disabled={isDisabled}
			>
				Submit
			</Button>
		</form>
	);
};
