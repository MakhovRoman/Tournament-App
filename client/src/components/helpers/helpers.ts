import type { FormStateProxy } from "react-hook-form";

export const setPlaceholder = (fieldName: string) => {
	return `Enter your ${fieldName}`;
};

export const checkDisabledSubmitButton = <T extends PropertyKey>(
	fields: T[],
	dirtyFields: FormStateProxy["dirtyFields"],
) => {
	let result = false;

	for (const prop of fields) {
		if (!Object.hasOwn(dirtyFields, prop)) {
			result = true;
			break;
		}
	}

	return result;
};
