const zod = require('zod');


const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string()
});


const registerSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string()
});

module.exports = 
{
    loginSchema,
    registerSchema
}