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

const notesSchema = z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    category: z.string().optional(),
});

const blogCollection = defineCollection({
    type: "content",
    schema: blogSchema,
});

const aboutCollection = defineCollection({
    type: "content",
    schema: aboutSchema,
});

const notesCollection = defineCollection({
    type: "content",
    schema: notesSchema,
});

export type BlogType = z.infer<typeof blogSchema>;
export type AboutType = z.infer<typeof aboutSchema>;
export type NotesType = z.infer<typeof notesSchema>;
export const collection = {
    blog: blogCollection,
    about: aboutCollection,
    notes: notesCollection,
};
