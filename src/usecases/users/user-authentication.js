module.exports = function makeUserAuthentication({
    Joi,
    usersDb,
    generateJwtToken,
}) {
    return async function userAuthentication({
        email,
        password,
    }) {
        console.info(`userAuthentication usecase called`, {
            email,
        });

        // validatin userInput
        validateInput({
            email,
            password,
        });

        // check if user has exist or not. if not throw error.
        const isUserExist = await usersDb.getUserDetailsByEmail({
            email,
            password,
            columnsToGet: ['id', 'token', 'password', 'email'],
        });

        if (!isUserExist) return 'User do not exist.';

        if (isUserExist) {
            if (!(isUserExist.email === email && isUserExist.password === password)) {
                return 'Incorrect email or password, try again!';
            }
        }

        return 'Login successful.';
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