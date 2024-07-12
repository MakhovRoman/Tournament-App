import type { InputMessageProps } from "@components/shared/input-message/input-message.tsx";
import type { InputProps } from "@components/shared/input/input.tsx";
import type { Control, SetFieldValue } from "react-hook-form";

export interface InputComponentType extends InputProps {
	control: Control;
	setValue: SetFieldValue<any>;
	name: string;
	rules: Record<string, unknown>;
	error?: Pick<InputMessageProps, "error">;
}
