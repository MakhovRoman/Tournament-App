import { LoginFields, RegisterFields } from "@/constants";
import { RegEx } from "@/utils/regex";

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
		required: {
			value: true,
			message: "Поле обязательно для заполнения",
		},
		pattern: {
			value: RegEx.EMAIL,
			message: "значение должно соответствовать формату example@example.ru",
		},
	},
	[RegisterFields.PASSWORD]: {
		...LoginFormValidateRules[LoginFields.PASSWORD],
	},
	[RegisterFields.CONFIRM_PASSWORD]: {
		...LoginFormValidateRules[LoginFields.PASSWORD],
	},
};

export const LoginFieldsList = [LoginFields.EMAIL, LoginFields.PASSWORD];
