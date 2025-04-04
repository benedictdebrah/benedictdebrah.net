import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    layout: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z
        .object({
            url: z.string().url(),
            alt: z.string(),
        })
        .optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean(),
});

const aboutSchema = z.object({
    title: z.string(),
    date: z.coerce.date(),
});

const blogCollection = defineCollection({
    type: "content",
    schema: blogSchema,
});

const aboutCollection = defineCollection({
    type: "content",
    schema: aboutSchema,
});

export type BlogType = z.infer<typeof blogSchema>;
export type AboutType = z.infer<typeof aboutSchema>;
export const collection = {
    blog: blogCollection,
    about: aboutCollection,
};
