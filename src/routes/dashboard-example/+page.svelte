<script lang="ts">
	import data from "./data.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from "@/components/dashboard-example/app-sidebar.svelte";
	import SiteHeader from "$lib/components/dashboard-example/site-header.svelte";
	import SectionCards from "@/components/dashboard-example/section-cards.svelte";
	import ChartAreaInteractive from "$lib/components/dashboard-example/chart-area-interactive.svelte";
	import DataTable from "$lib/components/dashboard-example/data-table.svelte";
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
						<ChartAreaInteractive />
					</div>
					<DataTable {data} />
				</div>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
