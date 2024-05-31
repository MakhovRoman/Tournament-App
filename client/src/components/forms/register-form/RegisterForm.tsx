import { setPlaceholder } from "@/components/helpers";
import { FormLayout } from "@/components/layouts";
import { FormFieldLayout } from "@/components/layouts/form-field";
import { Input } from "@/components/shared/input";
import { InputMessage } from "@/components/shared/input-message";
import { RegisterFields } from "@/constants";
import { Controller, useForm } from "react-hook-form";
import { RegisterFormValidateRules } from "../login-form/constants";

type RegisterFormFields = {
	[RegisterFields.EMAIL]: string;
};

export const RegisterForm = () => {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors, dirtyFields },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			[RegisterFields.EMAIL]: "",
		},
	});

	const submitHandler = (data: RegisterFormFields) => {
		console.log(data);
	};

	return (
		<FormLayout submitHandler={handleSubmit(submitHandler)}>
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
								field.onChange();
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
		</FormLayout>
	);
};
