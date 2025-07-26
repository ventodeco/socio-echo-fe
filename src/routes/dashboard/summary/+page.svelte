<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { fetchSummaryData, type SummaryResponse } from "$lib/utils";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import AppSidebar from "@/components/dashboard/sidebar/app-sidebar.svelte";
	import SiteHeader from "$lib/components/dashboard/site-header.svelte";
	import SectionCards from "@/components/dashboard/section-cards.svelte";
	import ChartAreaInteractive from "$lib/components/dashboard/chart-area-interactive.svelte";
	import DataTable from "$lib/components/dashboard/data-table.svelte";
	import data from "./data.js";

	let summaryData: SummaryResponse | null = null;
	let loading = true;
	let error = "";
	let keyword = "Jakarta";
	let fromDate = "2025-03-01";
	let toDate = "2025-03-31";

	// Convert API data to chart-friendly format
	let chartData: { date: Date; events: number }[] = [];

	// Process the data for the events over time chart
	function processEventsData(data: SummaryResponse) {
		return Object.entries(data.events_over_time.distribution).map(([date, count]) => ({
			date: new Date(date),
			events: count
		})).sort((a, b) => a.date.getTime() - b.date.getTime());
	}

	// Load data on mount
	onMount(async () => {
		try {
			await loadData();
		} catch (e) {
			const err = e as Error;
			if (err.message === "NO_TOKEN" || err.message === "TOKEN_EXPIRED") {
				goto("/login");
				return;
			}
			error = err.message;
			loading = false;
		}
	});

	async function loadData() {
		loading = true;
		error = "";

		try {
			summaryData = await fetchSummaryData(keyword, fromDate, toDate);

			if (summaryData) {
				chartData = processEventsData(summaryData);
			}
		} catch (e) {
			const err = e as Error;
			if (err.message === "NO_TOKEN" || err.message === "TOKEN_EXPIRED") {
				goto("/login");
				return;
			}
			error = err.message;
		} finally {
			loading = false;
		}
	}

	async function handleSearch() {
		await loadData();
	}
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

					<!-- Search Form -->
					<div class="px-4 lg:px-6">
						<Card.Root>
							<Card.Header>
								<Card.Title>Filter Summary Data</Card.Title>
							</Card.Header>
							<Card.Content>
								<div class="flex flex-col sm:flex-row gap-4">
									<div class="flex-1">
										<label for="keyword" class="block text-sm font-medium mb-1">Keyword</label>
										<input type="text" id="keyword" bind:value={keyword} class="w-full p-2 border rounded-md" />
									</div>
									<div class="flex-1">
										<label for="fromDate" class="block text-sm font-medium mb-1">From Date</label>
										<input type="date" id="fromDate" bind:value={fromDate} class="w-full p-2 border rounded-md" />
									</div>
									<div class="flex-1">
										<label for="toDate" class="block text-sm font-medium mb-1">To Date</label>
										<input type="date" id="toDate" bind:value={toDate} class="w-full p-2 border rounded-md" />
									</div>
									<div class="flex items-end">
										<button on:click={handleSearch} class="p-2 bg-primary text-white rounded-md">Search</button>
									</div>
								</div>
							</Card.Content>
						</Card.Root>
					</div>

					<!-- Summary Dashboard -->
					<div class="px-4 lg:px-6">
						{#if loading}
							<div class="flex justify-center items-center py-8">
								<p>Loading summary data...</p>
							</div>
						{:else if error}
							<p class="text-red-500 py-4">{error}</p>
						{:else if summaryData}
							<!-- Events Over Time Chart -->
							<Card.Root class="mb-6">
								<Card.Header>
									<Card.Title>Events Over Time - {keyword}</Card.Title>
									<Card.Description>
										Total: {summaryData.events_over_time.total} events
									</Card.Description>
								</Card.Header>
								<Card.Content>
									<div class="h-[350px]">
										<!-- Use a simple bar chart representation for events over time -->
										<div class="flex h-full">
											{#each chartData as item}
												<div class="flex flex-col items-center justify-end h-full flex-1">
													<div class="bg-primary hover:bg-primary/80 w-full max-w-[30px] mx-auto rounded-t-sm" style="height: {(item.events / Math.max(...chartData.map(d => d.events)) * 70)}%">
														<div class="h-full relative" title="{item.date.toLocaleDateString()}: {item.events} events">
															<span class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100">
																{item.events}
															</span>
														</div>
													</div>
													<div class="text-xs mt-2 rotate-45 origin-top-left h-6 overflow-hidden">
														{item.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
													</div>
												</div>
											{/each}
										</div>
									</div>
								</Card.Content>
							</Card.Root>

							<!-- Sentiment Analysis -->
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<Card.Root>
									<Card.Header>
										<Card.Title>Sentiment Analysis</Card.Title>
										<Card.Description>
											Total: {summaryData.sentiment.total} events
										</Card.Description>
									</Card.Header>
									<Card.Content>
										<div class="flex flex-col space-y-4">
											<div class="flex items-center justify-between">
												<span>Positive</span>
												<div class="flex items-center">
													<div class="h-2 bg-green-500 rounded-full mr-2" style="width: {(summaryData.sentiment.positive / summaryData.sentiment.total) * 200}px"></div>
													<span>{summaryData.sentiment.positive} ({Math.round((summaryData.sentiment.positive / summaryData.sentiment.total) * 100)}%)</span>
												</div>
											</div>
											<div class="flex items-center justify-between">
												<span>Neutral</span>
												<div class="flex items-center">
													<div class="h-2 bg-gray-400 rounded-full mr-2" style="width: {(summaryData.sentiment.neutral / summaryData.sentiment.total) * 200}px"></div>
													<span>{summaryData.sentiment.neutral} ({Math.round((summaryData.sentiment.neutral / summaryData.sentiment.total) * 100)}%)</span>
												</div>
											</div>
											<div class="flex items-center justify-between">
												<span>Negative</span>
												<div class="flex items-center">
													<div class="h-2 bg-red-500 rounded-full mr-2" style="width: {(summaryData.sentiment.negative / summaryData.sentiment.total) * 200}px"></div>
													<span>{summaryData.sentiment.negative} ({Math.round((summaryData.sentiment.negative / summaryData.sentiment.total) * 100)}%)</span>
												</div>
											</div>
										</div>
									</Card.Content>
								</Card.Root>

								<!-- Spoke Persons -->
								<Card.Root>
									<Card.Header>
										<Card.Title>Top Spoke Persons</Card.Title>
										<Card.Description>
											Total: {summaryData.spoke_persons.total} mentions
										</Card.Description>
									</Card.Header>
									<Card.Content>
										<div class="max-h-[300px] overflow-y-auto">
											<table class="w-full">
												<thead>
													<tr>
														<th class="text-left pb-2">Person</th>
														<th class="text-right pb-2">Mentions</th>
													</tr>
												</thead>
												<tbody>
													{#each Object.entries(summaryData.spoke_persons.persons).sort((a, b) => b[1] - a[1]) as [person, count]}
														<tr class="border-t">
															<td class="py-2">{person}</td>
															<td class="py-2 text-right">{count}</td>
														</tr>
													{/each}
													<tr class="border-t">
														<td class="py-2 font-medium">Other</td>
														<td class="py-2 text-right">{summaryData.spoke_persons.other}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</Card.Content>
								</Card.Root>
							</div>
						{:else}
							<p>No data available. Please search for a keyword.</p>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
