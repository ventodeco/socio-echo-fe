<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { Badge } from "$lib/components/ui/badge/index.js";

	// Direct imports for Card components
	import Card from "$lib/components/ui/card/card.svelte";
	import CardHeader from "$lib/components/ui/card/card-header.svelte";
	import CardTitle from "$lib/components/ui/card/card-title.svelte";
	import CardDescription from "$lib/components/ui/card/card-description.svelte";
	import CardContent from "$lib/components/ui/card/card-content.svelte";
	import CardFooter from "$lib/components/ui/card/card-footer.svelte";

	// Blog posts data
	const blogPosts = [
		{
			slug: "2025-08-31-isu-dpr",
			title: "Aksi Demonstrasi Besar Rakyat Indonesia pada Agustus-September 2025",
			excerpt: "Pada tanggal 10 Agustus 2025 terjadi demonstrasi besar di wilayah Pati yang disebabkan oleh kenaikan pajak yang drastis. Beberapa waktu kemudian, isu gaji DPR yang sangat tinggi berkembang, disusul dengan isu kebijakan pajak yang terus dinaikkan. Pada tanggal 25-29 Agustus berturut-turut terjadi demonstrasi besar-besaran di wilayah Senayan, Jakarta (DPR RI). Aksi tersebut menimbulkan tragedi terbunuhnya **Affan Kurniawan** yang dilindas oleh kendaraan taktis milik Brimob Polda Metro Jaya. Pada malam hari 28 Agustus 2025, massa yang dipukul mundur oleh Brimob masih melakukan perlawanan di Jalan Penjernihan I, Bendungan Hilir, Jakarta Pusat, tepatnya di depan Gereja Kristen Protestan Angkola Penjernihan di kawasan Pejompongan. Insiden itu seketika menyulut emosi masa hingga demonstrasi pecah di berbagai daerah di Indonesia. Socio Echo berusaha membedah data yang beredar pada media dan menyuguhkannya dalam bentuk yang mudah dipahami terkait bagaimana kondisi Aksi Demonstrasi Besar Tuntutan Rakyat Indonesia Kepada DPR RI.",
			date: "2025-09-05",
			author: "Zazal Ghiffari, Vento Deco",
			tags: ["Demo", "DPR"]
		}
	];

	function navigateToPost(slug: string) {
		goto(`/blog/posts/${slug}`);
	}

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<header class="bg-white border-b py-4 mb-6">
  <div class="container mx-auto px-4 lg:px-6">
    <div class="flex justify-between items-center">
      <div>
        <a href="/" class="text-2xl font-bold text-primary">Socio Echo</a>
      </div>
      <nav>
        <ul class="flex gap-6">
          <li><a href="/" class="hover:text-primary-600 transition-colors">Home</a></li>
          <li><a href="/blog" class="text-primary font-medium border-b-2 border-primary">Blog</a></li>
          <li><a href="/dashboard" class="hover:text-primary-600 transition-colors">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<div class="container mx-auto py-8">
	<div class="px-4 lg:px-6">
		<div class="flex flex-col gap-2 mb-6">
			<h1 class="text-3xl font-bold tracking-tight">Blog Posts</h1>
			<p class="text-muted-foreground">
				Thoughts, tutorials, and insights about modern web development
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each blogPosts as post}
				<div
					class="cursor-pointer transition-all hover:shadow-md hover:scale-[1.02]"
					on:click={() => navigateToPost(post.slug)}
					on:keydown={(e) => e.key === 'Enter' && navigateToPost(post.slug)}
					role="button"
					tabindex="0"
				>
					<Card>
						<CardHeader>
							<div class="flex items-center gap-2 text-sm text-muted-foreground">
								<span>{post.author}</span>
								<span>•</span>
								<span>{formatDate(post.date)}</span>
							</div>
							<CardTitle class="line-clamp-2">{post.title}</CardTitle>
							<CardDescription class="line-clamp-3">
								{post.excerpt}
							</CardDescription>
						</CardHeader>
						<CardFooter>
							<div class="flex flex-wrap gap-1">
								{#each post.tags as tag}
									<Badge variant="secondary" class="text-xs">
										{tag}
									</Badge>
								{/each}
							</div>
						</CardFooter>
					</Card>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
