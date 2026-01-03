import Joi from "joi";

const formValidation = (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string()
      .min(3)
      .max(50)
      .required(),

      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
          "string.email" : "Please provide a valid email"
        }),

      phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
          "string.pattern.base": "Phone number must be exactly 10 digits",
        }),
      message: Joi.string().optional().allow("", null),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export default formValidation;
