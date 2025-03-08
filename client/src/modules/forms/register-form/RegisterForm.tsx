import { RedirectBlock } from "@/components/shared/redirect-block";
import { RegisterFields } from "@/constants";
import { checkDisabledSubmitButton } from "@components/helpers";
import { FormLayout } from "@components/layouts";
import { Button, ButtonVariants } from "@components/shared/button";
import { InputComponent } from "@components/shared/input-component";
import {
	RegisterFieldsList,
	RegisterFormValidateRules,
} from "@modules/forms/login-form/constants.ts";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export type RegisterFormFields = Record<RegisterFields, string>;

export const RegisterForm = () => {
	const passwordRef = useRef<HTMLInputElement>(null);

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors, dirtyFields },
	} = useForm<RegisterFormFields>({
		mode: "onChange",
		defaultValues: {
			[RegisterFields.EMAIL]: "",
			[RegisterFields.PASSWORD]: "",
			[RegisterFields.CONFIRM_PASSWORD]: "",
		},
	});

	const isDisabled =
		checkDisabledSubmitButton(RegisterFieldsList, dirtyFields) ||
		Object.keys(errors).length > 0;

	// const submitHandler = async (data: RegisterFormFields) => {
	// 	try {
	// 		const response = await fetch("api/v1/auth/register", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({ ...data, username: data.first_name + data.last_name }),
	// 		});
	//
	// 		// const loginResponse = await fetch('api/v1/auth/login', {
	// 		// 	method: 'POST',
	// 		// 	headers: {
	// 		// 		'Content-Type': 'application/json'
	// 		// 	},
	// 		// 	body: JSON.stringify({
	// 		// 		email: data.email,
	// 		// 		password: data.password,
	// 		// 	}),
	// 		// });
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

	return (
		<FormLayout submitHandler={handleSubmit(submitHandler)}>
			<InputComponent
				control={control}
				name={RegisterFields.EMAIL}
				type={"email"}
				rules={RegisterFormValidateRules[RegisterFields.EMAIL]}
				errors={errors}
				setValue={setValue}
				error
			/>
			<InputComponent
				control={control}
				name={RegisterFields.PASSWORD}
				ref={passwordRef}
				type={"password"}
				rules={RegisterFormValidateRules[RegisterFields.PASSWORD]}
				errors={errors}
				setValue={setValue}
				error
			/>
			<InputComponent
				control={control}
				name={RegisterFields.CONFIRM_PASSWORD}
				type={"password"}
				rules={{
					validate: {
						match: (value: string) => {
							if (value !== passwordRef.current?.value) {
								console.log(value, passwordRef);
								return "Пароли не совпадают";
							}

							return true;
						},
					},
				}}
				errors={errors}
				setValue={setValue}
				error
			/>
			<InputComponent
				control={control}
				name={RegisterFields.FIRST_NAME}
				rules={RegisterFormValidateRules[RegisterFields.FIRST_NAME]}
				errors={errors}
				setValue={setValue}
				error
			/>
			<InputComponent
				control={control}
				name={RegisterFields.LAST_NAME}
				rules={RegisterFormValidateRules[RegisterFields.LAST_NAME]}
				errors={errors}
				setValue={setValue}
				error
			/>
			<Button variant={ButtonVariants.PRIMARY} disabled={isDisabled}>
				Submit
			</Button>
			<RedirectBlock description="Have an account?" linkText="LogIn" href={"/login"} />
		</FormLayout>
	);
};
