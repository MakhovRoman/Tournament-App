import type { LoginFields, RegisterFields } from "@/constants";

export const transformFieldName = (field: RegisterFields | LoginFields) => {
	return field.split("_").join(" ");
};
