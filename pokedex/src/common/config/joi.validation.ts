import Joi from "joi";

export const JoiValidationSchema =
    Joi
        .object({

            PORT: Joi
                .number()
                .positive()
                .default(3000)
                .messages({
                    'number.base': 'El valor de PORT debe ser un número',
                    'number.positive': 'El valor de PORT debe ser un número positivo',
                }),

            MONGODB: Joi
                .string()
                .required()
                .messages({
                    'string.base': 'El valor de MONGODB debe ser una cadena de texto',
                    'string.empty': 'El valor de MONGODB no puede estar vacío',
                    'any.required': 'El valor de MONGODB es obligatorio',
                }),

            DEFAULT_LIMIT: Joi
                .number()
                .positive()
                .default(10)
                .messages({
                    'number.base': 'El valor de DEFAULT_LIMIT debe ser un número',
                    'number.positive': 'El valor de DEFAULT_LIMIT debe ser un número positivo',
                }),

            DEFAULT_INSERT_LIMIT: Joi
                .number()
                .positive()
                .default(100)
                .messages({
                    'number.base': 'El valor de DEFAULT_INSERT_LIMIT debe ser un número',
                    'number.positive': 'El valor de DEFAULT_INSERT_LIMIT debe ser un número positivo',
                })

        })