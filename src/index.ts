import Index from "./index.astro";
import PackageIndex from "./content/index.astro";
import SvelteContent from "./content/content.astro";
import Icon from "./components/Icon.svelte";
import { post as installMethodPost } from "./api/install";
import type { ExtensionContext } from "@underflow/core";
import { shared } from "./lib/shared";

export function activate(context: ExtensionContext) {
	context.addView({
		id: "/dock",
		component: Index,
		options: {
			title: "Documentation Downloader"
		}
	})
	context.addView({
		id: "/dock/[pkg]",
			component: PackageIndex,
			options: {
				title: "Documentation"
			}
	})
	context.addView({
		id: "/dock/[pkg]/[slug]",
			component: SvelteContent,
			options: {
				title: "Svelte Documentation"
			}
	})

	context.addRoute({
		id: "dock/install",
		handler: installMethodPost,
		method: "POST"
	})

	context.addLink({
		id: "/dock",
		icon: Icon
	})

	shared.context = context;
}
