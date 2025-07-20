<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { fetchSummaryData } from "$lib/utils";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from "@/components/dashboard/sidebar/app-sidebar.svelte";
	import SiteHeader from "$lib/components/dashboard/site-header.svelte";
	import SectionCards from "@/components/dashboard/section-cards.svelte";
	import ChartAreaInteractive from "$lib/components/dashboard/chart-area-interactive.svelte";
	import DataTable from "$lib/components/dashboard/data-table.svelte";
	import data from "./data.js";

	let summaryData: Record<string, number> | null = null;
	let loading = true;
	let error = "";

	onMount(async () => {
		try {
			summaryData = await fetchSummaryData();
		} catch (e) {
			const err = e as Error;
			if (err.message === "NO_TOKEN" || err.message === "TOKEN_EXPIRED") {
				goto("/login");
				return;
			}
			error = err.message;
		}
		loading = false;
	});
</script>

<Sidebar.Provider
	style="--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);"
>
	<AppSidebar variant="inset" />
	<Sidebar.Inset>
		<SiteHeader />
		<div class="flex flex-1 flex-col">
			<div class="@container/main flex flex-1 flex-col gap-2">
				<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
					<SectionCards />
					<div class="px-4 lg:px-6">
						{#if loading}
							<p>Loading summary...</p>
						{:else if error}
							<p class="text-red-500">{error}</p>
						{:else}
							<ChartAreaInteractive summaryData={summaryData} />
						{/if}
					</div>
					<DataTable data={data} />
				</div>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
