module.exports = function makeGenerateJwtToken({
    Joi,
    jwt,
    JWT_SECRET,
}) {
    return async function generateJwtToken({
        email,
        password,
    }) {
        console.info(`generateJwtToken usecase called`, {
            email,
        });

        // validatin userInput
        validateInput({
            email,
            password,
        });

        // generate token for user.
        const token = jwt.sign(
            { email, password},
            JWT_SECRET,
            { expiresIn: '30d' } // 1 month validity
        );
        return token;
    }

    function validateInput({
        email,
        password,
    }) {
        const schema = Joi.object({
            email: Joi.string().trim().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).required(),
            password: Joi.string().trim().min(8).required(),
        });
        const {error} = schema.validate({
            email,
            password,
        });
        if (error) {
            throw new Error(error.message);
        }
    }
}