import type { LoginFields, RegisterFields } from "@/constants";
import type { InputProps } from "@components/shared/input/input.tsx";
import type { Control, FieldErrors, FieldValues, SetFieldValue } from "react-hook-form";

export interface InputComponentType<T extends FieldValues> extends InputProps {
	control: Control<T>;
	setValue: SetFieldValue<any>;
	name: RegisterFields | LoginFields;
	rules: Record<string, unknown>;
	error?: boolean;
	errors: FieldErrors;
}
