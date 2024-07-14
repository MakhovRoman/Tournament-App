import type { LoginFields, RegisterFields } from "@/constants";

export const transformFieldName = (field: RegisterFields | LoginFields) => {
	if (field.includes("_")) {
		return field.split("_").join(" ");
	}

	return field;
};
