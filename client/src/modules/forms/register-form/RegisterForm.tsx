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
			/>
			<FormFieldLayout>
				<Controller
					control={control}
					name={RegisterFields.EMAIL}
					rules={RegisterFormValidateRules[RegisterFields.EMAIL]}
					render={({ field }) => (
						<Input
							type={field.name}
							inputMode="email"
							labelText={RegisterFields.EMAIL}
							placeholder={setPlaceholder(field.name)}
							onChange={(e) => {
								setValue(RegisterFields.EMAIL, e.target.value);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<>
					{errors[RegisterFields.EMAIL] && (
						<InputMessage error>{errors[RegisterFields.EMAIL].message}</InputMessage>
					)}
				</>
			</FormFieldLayout>
			<FormFieldLayout>
				<Controller
					control={control}
					name={RegisterFields.PASSWORD}
					rules={RegisterFormValidateRules[RegisterFields.PASSWORD]}
					render={({ field }) => (
						<Input
							type={field.name}
							labelText={RegisterFields.PASSWORD}
							placeholder={setPlaceholder(field.name)}
							ref={passwordRef}
							onChange={(e) => {
								setValue(RegisterFields.PASSWORD, e.target.value);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<>
					{errors[RegisterFields.PASSWORD] && (
						<InputMessage error>{errors[RegisterFields.PASSWORD].message}</InputMessage>
					)}
				</>
			</FormFieldLayout>
			<FormFieldLayout>
				<Controller
					control={control}
					name={RegisterFields.CONFIRM_PASSWORD}
					rules={{
						validate: {
							match: (value) => {
								if (value !== passwordRef.current?.value) {
									return "Пароли не совпадают";
								}

								return true;
							},
						},
					}}
					render={({ field }) => (
						<Input
							type={RegisterFields.PASSWORD}
							labelText={transformFieldName(RegisterFields.CONFIRM_PASSWORD)}
							placeholder={setPlaceholder(
								transformFieldName(RegisterFields.CONFIRM_PASSWORD),
							)}
							onChange={(e) => {
								setValue(RegisterFields.CONFIRM_PASSWORD, e.target.value);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<>
					{errors[RegisterFields.CONFIRM_PASSWORD] && (
						<InputMessage error>
							{errors[RegisterFields.CONFIRM_PASSWORD].message}
						</InputMessage>
					)}
				</>
			</FormFieldLayout>
			<FormFieldLayout>
				<Controller
					control={control}
					name={RegisterFields.FIRST_NAME}
					rules={RegisterFormValidateRules[RegisterFields.FIRST_NAME]}
					render={({ field }) => (
						<Input
							type={"text"}
							labelText={transformFieldName(RegisterFields.FIRST_NAME)}
							placeholder={setPlaceholder(transformFieldName(RegisterFields.FIRST_NAME))}
							onChange={(e) => {
								setValue(RegisterFields.FIRST_NAME, e.target.value);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<>
					{errors[RegisterFields.FIRST_NAME] && (
						<InputMessage error>{errors[RegisterFields.FIRST_NAME].message}</InputMessage>
					)}
				</>
			</FormFieldLayout>
			<FormFieldLayout>
				<Controller
					control={control}
					name={RegisterFields.LAST_NAME}
					rules={RegisterFormValidateRules[RegisterFields.LAST_NAME]}
					render={({ field }) => (
						<Input
							type={"text"}
							labelText={transformFieldName(RegisterFields.LAST_NAME)}
							placeholder={setPlaceholder(transformFieldName(RegisterFields.LAST_NAME))}
							onChange={(e) => {
								setValue(RegisterFields.LAST_NAME, e.target.value);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<>
					{errors[RegisterFields.LAST_NAME] && (
						<InputMessage error>{errors[RegisterFields.LAST_NAME].message}</InputMessage>
					)}
				</>
			</FormFieldLayout>
			<Button variant={ButtonVariants.PRIMARY} disabled={isDisabled}>
				Submit
			</Button>
		</FormLayout>
	);
};
