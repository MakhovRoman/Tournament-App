import { LoginFields } from "@/constants";
import { useForm } from "react-hook-form";

import { checkDisabledSubmitButton } from "@components/helpers";
import { FormLayout } from "@components/layouts/form";
import { Button, ButtonVariants } from "@components/shared/button";
import { InputComponent } from "@components/shared/input-component";
import { RedirectBlock } from "@components/shared/redirect-block";
import styles from "./LoginForm.module.scss";
import { LoginFieldsList, LoginFormValidateRules } from "./constants.ts";

export type LoginFormFields = Record<LoginFields, string>;

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

	const isDisabled =
		checkDisabledSubmitButton(LoginFieldsList, dirtyFields) ||
		Object.keys(errors).length > 0;

	return (
		<FormLayout submitHandler={handleSubmit(submitHandler)} className={styles.form}>
			<InputComponent
				control={control}
				type={"email"}
				setValue={setValue}
				name={LoginFields.EMAIL}
				rules={LoginFormValidateRules[LoginFields.EMAIL]}
				errors={errors}
			/>
			<InputComponent
				control={control}
				type={"password"}
				setValue={setValue}
				name={LoginFields.PASSWORD}
				rules={LoginFormValidateRules[LoginFields.PASSWORD]}
				errors={errors}
			/>
			<Button
				className={styles.form__button}
				variant={ButtonVariants.PRIMARY}
				disabled={isDisabled}
			>
				Submit
			</Button>
			<RedirectBlock
				description="Don't have an account?"
				linkText="Sign Up!"
				href={"/registration"}
			/>
		</FormLayout>
	);
};
