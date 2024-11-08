import Joi from "joi";

export const postValidator = Joi.object({
title: Joi.string().pattern(/\w{3,}/).messages({
    "string.pattern.base":"you don`t match to pattern",
}),
    body: Joi.string().min(5).messages({
        "string.min":"password must be at least 5 char",
    }),
    userId: Joi.number().min(1).messages({
        "number.min":"id must be at least 1",

    })
})