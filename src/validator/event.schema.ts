import {z} from 'zod'

export const EventSchema=z.object({
    name:z
        .string({invalid_type_error:"name Should be string",required_error:"Name is required"})
        .trim()
        .min(3,{message:"name should be of 3 min characters "})
        .max(20,{message:"name should be less than 20 chars"}),

    description:z
                .string({invalid_type_error:"description should be string",required_error:"Description is required"})
                .trim()
                .min(3,{message:"description should be of 3 min characters "})
                .max(1000,{message:"description should be less than 1000 chars"}),

    venue:z
        .string({invalid_type_error:"venue should be string",required_error:"venue is required"})
        .trim()
        .min(3,{message:"venue should be of 3 min characters "})
        .max(1000,{message:"venue should be less than 1000 chars"}),

    fees:z
        .number({invalid_type_error:"fees should be number",required_error:"fees is required"})
        .min(0,{message:"Value should be greater than 0"})
        .max(10000,{message:"Value should be less than 10000"})

    
})

export type EventsSchemaType=z.infer<typeof EventSchema>