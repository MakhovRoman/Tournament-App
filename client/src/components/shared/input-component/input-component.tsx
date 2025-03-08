import { setPlaceholder } from "@components/helpers";
import { FormFieldLayout } from "@components/layouts/form-field";
import { Input } from "@components/shared/input";
import type { InputComponentType } from "@components/shared/input-component/types.ts";
import { InputMessage } from "@components/shared/input-message";
import { transformFieldName } from "@utils/transformFieldName.ts";
import { Controller, type FieldPath, type FieldValues } from "react-hook-form";

export const InputComponent = <T extends FieldValues>({
	control,
	name,
	rules,
	error,
	type,
	ref,
	setValue,
	inputMode,
	errors,
}: InputComponentType<T>) => {
	return (
		<FormFieldLayout>
			<Controller
				control={control}
				name={name as FieldPath<T>}
				rules={rules}
				render={({ field }) => (
					<Input
						ref={ref}
						type={type}
						inputMode={inputMode}
						labelText={transformFieldName(name)}
						placeholder={setPlaceholder(transformFieldName(name))}
						onChange={(e) => {
							setValue(name, e.target.value);
							field.onChange(e);
						}}
					/>
				)}
			/>
			{errors[name]?.message && (
				<InputMessage error={error}>{errors[name]?.message as string}</InputMessage>
			)}
		</FormFieldLayout>
	);
};
