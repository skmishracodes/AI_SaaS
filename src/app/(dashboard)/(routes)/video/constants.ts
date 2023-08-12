import * as Z from 'zod'


export const formSchema = Z.object({
    prompt:Z.string().min(1,{
        message:"Prompt is required."
    })
})