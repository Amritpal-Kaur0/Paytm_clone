const zod =require('zod')


const signupBody = zod.object({
    username: zod.string(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

const signinBody = zod.object({
    username: zod.string(),
	password: zod.string()
})
const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})
const transferBody = zod.object({
	to:zod.string(),
	amount:zod.number()
})
module.exports={signupBody,updateBody,signinBody,transferBody};