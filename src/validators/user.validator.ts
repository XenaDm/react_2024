import Joi from "joi";

export const userValidator = Joi.object({
// username: Joi.string()
//     // .required()
//     .pattern(new RegExp(/^[a-z A-Z0-9]{3,30}$/)),

    password: Joi.string()
        .min(3)
        .max(6)
        .messages({
            "string.min":"password must be at least 3 char",
            "string.max":"password can`t be greater then 6 char"
        }),
    age: Joi.number()
        .min(1)
        .max(121)
        .messages({
            "number.min":"age must be at least 1",
            "number.max":"age cant be greater than 121"
        }),
});