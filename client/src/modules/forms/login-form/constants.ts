import { LoginFields, RegisterFields } from "@/constants";
import { RegEx } from "@utils/regex.ts";

export const LoginFormValidateRules = {
	[LoginFields.EMAIL]: {
		required: {
			value: true,
			message: "Поле обязательно для заполнения",
		},
		pattern: {
			value: RegEx.EMAIL,
			message: "значение должно соответствовать формату example@example.ru",
		},
	},
	[LoginFields.PASSWORD]: {
		required: {
			value: true,
			message: "Поле обязательно для заполнения",
		},
		pattern: {
			value: RegEx.PASSWORD,
			message:
				"значение должно соответствовать формату 8-16 символов, содержащих цифры, буквы (заглавные и строчные) и специальные символы",
		},
	},
};

export const RegisterFormValidateRules = {
	[RegisterFields.EMAIL]: {
		...LoginFormValidateRules[LoginFields.EMAIL],
	},
	[RegisterFields.PASSWORD]: {
		...LoginFormValidateRules[LoginFields.PASSWORD],
	},
	[RegisterFields.FIRST_NAME]: {
		required: {
			value: true,
			message: "Поле обязательно для заполнения",
		},
	},
	[RegisterFields.LAST_NAME]: {
		required: {
			value: true,
			message: "Поле обязательно для заполнения",
		},
	},
};

export const LoginFieldsList = [LoginFields.EMAIL, LoginFields.PASSWORD];
export const RegisterFieldsList = [
	RegisterFields.CONFIRM_PASSWORD,
	RegisterFields.EMAIL,
	RegisterFields.FIRST_NAME,
	RegisterFields.LAST_NAME,
	RegisterFields.PASSWORD,
	// RegisterFields.PHONE_NUMBER,
];
