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
				// Optional: the "game" variant draws its own wheel icon.
				icon: z.string().optional(),
				variant: z.enum(["featured", "card", "game", "row"]).default("row"),
				// Small pill shown next to/above the title (e.g. "preferred", "1.7k").
				badge: z.string().optional(),
				description: z.string().optional(),
			}),
		),
	}),
});

export const collections = { sections };
