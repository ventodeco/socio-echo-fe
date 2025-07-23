<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { fetchSummaryData } from "$lib/utils";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from "@/components/dashboard/sidebar/app-sidebar.svelte";
	import SiteHeader from "$lib/components/dashboard/site-header.svelte";
	import SectionCards from "@/components/dashboard/section-cards.svelte";
	import DataTable from "$lib/components/dashboard/data-table.svelte";
	import data from "./data.js";
	import TrendingDownIcon from "@tabler/icons-svelte/icons/trending-down";
	import TrendingUpIcon from "@tabler/icons-svelte/icons/trending-up";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import * as Card from "$lib/components/ui/card/index.js";

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
					<div class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t lg:px-6"
					>
						<Card.Root class="@container/card">
							<Card.Header>
								<Card.Description>Total Revenue</Card.Description>
								<Card.Title class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
									$1,250.00
								</Card.Title>
								<Card.Action>
									<Badge variant="outline">
										<TrendingUpIcon />
										+12.5%
									</Badge>
								</Card.Action>
							</Card.Header>
							<Card.Footer class="flex-col items-start gap-1.5 text-sm">
								<div class="line-clamp-1 flex gap-2 font-medium">
									Trending up this month <TrendingUpIcon class="size-4" />
								</div>
								<div class="text-muted-foreground">Visitors for the last 6 months</div>
							</Card.Footer>
						</Card.Root>
						<Card.Root class="@container/card">
							<Card.Header>
								<Card.Description>New Customers</Card.Description>
								<Card.Title class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
									1,234
								</Card.Title>
								<Card.Action>
									<Badge variant="outline">
										<TrendingDownIcon />
										-20%
									</Badge>
								</Card.Action>
							</Card.Header>
							<Card.Footer class="flex-col items-start gap-1.5 text-sm">
								<div class="line-clamp-1 flex gap-2 font-medium">
									Down 20% this period <TrendingDownIcon class="size-4" />
								</div>
								<div class="text-muted-foreground">Acquisition needs attention</div>
							</Card.Footer>
						</Card.Root>
						<Card.Root class="@container/card">
							<Card.Header>
								<Card.Description>Active Accounts</Card.Description>
								<Card.Title class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
									45,678
								</Card.Title>
								<Card.Action>
									<Badge variant="outline">
										<TrendingUpIcon />
										+12.5%
									</Badge>
								</Card.Action>
							</Card.Header>
							<Card.Footer class="flex-col items-start gap-1.5 text-sm">
								<div class="line-clamp-1 flex gap-2 font-medium">
									Strong user retention <TrendingUpIcon class="size-4" />
								</div>
								<div class="text-muted-foreground">Engagement exceed targets</div>
							</Card.Footer>
						</Card.Root>
						<Card.Root class="@container/card">
							<Card.Header>
								<Card.Description>Growth Rate</Card.Description>
								<Card.Title class="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
									4.5%
								</Card.Title>
								<Card.Action>
									<Badge variant="outline">
										<TrendingUpIcon />
										+4.5%
									</Badge>
								</Card.Action>
							</Card.Header>
							<Card.Footer class="flex-col items-start gap-1.5 text-sm">
								<div class="line-clamp-1 flex gap-2 font-medium">
									Steady performance increase <TrendingUpIcon class="size-4" />
								</div>
								<div class="text-muted-foreground">Meets growth projections</div>
							</Card.Footer>
						</Card.Root>
					</div>
					<!-- <div class="px-4 lg:px-6">
						{#if loading}
							<p>Loading summary...</p>
						{:else if error}
							<p class="text-red-500">{error}</p>
						{:else}
							<ChartAreaInteractive summaryData={summaryData} />
						{/if}
					</div> -->
					<DataTable data={data} />
				</div>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
