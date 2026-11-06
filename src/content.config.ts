import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sections = defineCollection({
	loader: glob({ base: "./src/content/sections", pattern: "**/*.json" }),
	schema: z.object({
		title: z.string(),
		order: z.number(),
		links: z.array(
			z.object({
				title: z.string(),
				url: z.string().url(),
				icon: z.string(),
				description: z.string().optional(),
			}),
		),
	}),
});

export const collections = { sections };
