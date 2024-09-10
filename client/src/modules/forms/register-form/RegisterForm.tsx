import { RedirectBlock } from "@/components/shared/redirect-block";
import { RegisterFields } from "@/constants";
import { checkDisabledSubmitButton, setPlaceholder } from "@components/helpers";
import { FormLayout } from "@components/layouts";
import { FormFieldLayout } from "@components/layouts/form-field";
import { Button, ButtonVariants } from "@components/shared/button";
import { Input } from "@components/shared/input";
import { InputComponent } from "@components/shared/input-component";
import { InputMessage } from "@components/shared/input-message";
import {
	RegisterFieldsList,
	RegisterFormValidateRules,
} from "@modules/forms/login-form/constants.ts";
import { transformFieldName } from "@utils/transformFieldName.ts";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";

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

	const submitHandler = (data: RegisterFormFields) => {
		console.log(data);
	};

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
