
import Joi from "joi";

export const createUserSchema = Joi.object({
    full_name: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required(),

    email: Joi.string()
        .trim()
        .email()
        .max(255)
        .required(),

    password: Joi.string()
        .min(8)
        .required(),

    role: Joi.string()
        .valid("admin", "employee")
        .default("employee"),

    is_active: Joi.boolean()
        .default(true)
});