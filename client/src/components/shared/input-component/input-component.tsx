import { setPlaceholder } from "@components/helpers";
import { FormFieldLayout } from "@components/layouts/form-field";
import { Input } from "@components/shared/input";
import type { InputComponentType } from "@components/shared/input-component/types.ts";
import { Controller } from "react-hook-form";

export const InputComponent = ({
	control,
	name,
	rules,
	error,
	type,
	placeholder,
	labelText,
	className,
	onChange,
	setValue,
}: InputComponentType) => {
	return (
		<FormFieldLayout>
			<Controller
				control={control}
				name={name}
				rules={rules}
				render={({ field }) => (
					<Input
						type={field.name}
						inputMode={type}
						labelText={name}
						placeholder={setPlaceholder(field.name)}
						onChange={(e) => {}}
					/>
				)}
			/>
		</FormFieldLayout>
	);
};
