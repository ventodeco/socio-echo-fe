<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { marked } from "marked";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import Button from "$lib/components/ui/button/button.svelte";

	// Direct imports for Card components
	import Card from "$lib/components/ui/card/card.svelte";
	import CardHeader from "$lib/components/ui/card/card-header.svelte";
	import CardTitle from "$lib/components/ui/card/card-title.svelte";
	import CardDescription from "$lib/components/ui/card/card-description.svelte";
	import CardContent from "$lib/components/ui/card/card-content.svelte";
	import CardFooter from "$lib/components/ui/card/card-footer.svelte";

	let post = null;
	let htmlContent = "";
	let slug = "";

	$: slug = $page.params.slug;

	onMount(async () => {
		try {
			// Dynamically import the markdown file based on slug - fix path to look one directory up
			const mdModule = await import(`../${slug}.md?raw`);
			const raw = mdModule.default;
			// Extract frontmatter and content
			const match = raw.match(/^---([\s\S]*?)---([\s\S]*)$/);
			if (match) {
				const fm = match[1];
				const content = match[2];
				// Parse frontmatter
				post = {};
				// Parse tags as array if possible
				fm.split("\n").forEach((line) => {
					const kv = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
					if (kv) {
						let val = kv[2].trim();
						if (kv[1] === "tags" && val.startsWith("[")) {
							try { val = JSON.parse(val); } catch { val = []; }
						}
						post[kv[1]] = val;
					}
				});
				// Ensure post.tags is always an array
				if (!Array.isArray(post.tags)) post.tags = typeof post.tags === 'string' && post.tags.length ? [post.tags] : [];
				htmlContent = marked.parse(content);
			} else {
				htmlContent = marked.parse(raw);
			}
		} catch (e) {
			post = null;
			htmlContent = "<h2>Post not found</h2>";
		}
	});

	function goBack() {
		// Replace goto with window.location to ensure navigation works
		window.location.href = "/blog";
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
          <li><a href="/blog" class="text-primary font-medium">Blog</a></li>
          <li><a href="/dashboard" class="hover:text-primary-600 transition-colors">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<div class="container mx-auto py-8 max-w-4xl">
  {#if post}
    <div class="px-4 lg:px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Back Button - Adding both a button and a regular link for redundancy -->
        <div class="flex items-center gap-2 mb-6">
          <a href="/blog" class="text-sm text-muted-foreground">← Back to Blog</a>
        </div>

        <!-- Post Header -->
        <Card class="mb-6">
          <CardHeader>
            <div class="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <CardTitle class="text-3xl font-bold mb-4">
              {post.title}
            </CardTitle>
            <div class="flex flex-wrap gap-1">
              {#each post.tags as tag (tag)}
                <Badge variant="secondary">
                  {tag}
                </Badge>
              {/each}
            </div>
          </CardHeader>
        </Card>

        <!-- Post Content -->
        <Card>
          <CardContent class="prose max-w-none">
            {@html htmlContent}
          </CardContent>
        </Card>
      </div>
    </div>
  {:else}
    <!-- 404 or loading state -->
    <div class="px-4 lg:px-6">
      <div class="max-w-4xl mx-auto text-center">
        <Card>
          <CardHeader>
            <CardTitle class="text-2xl">Post Not Found</CardTitle>
            <CardDescription>
              The blog post you're looking for doesn't exist.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button on:click={goBack}>
              ← Back to Blog
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  {/if}
</div>

<style>
	:global(.prose h1) {
		font-size: 1.875rem; /* 30px */
		font-weight: 700;
		margin-bottom: 1rem;
	}

	:global(.prose h2) {
		font-size: 1.5rem; /* 24px */
		font-weight: 600;
		margin-bottom: 0.75rem;
		margin-top: 1.5rem;
	}

	:global(.prose h3) {
		font-size: 1.25rem; /* 20px */
		font-weight: 600;
		margin-bottom: 0.5rem;
		margin-top: 1rem;
	}

	:global(.prose p) {
		margin-bottom: 1rem;
	}

	:global(.prose ul) {
		list-style-type: disc;
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}

	:global(.prose li) {
		margin-bottom: 0.25rem;
	}

	:global(.prose code) {
		background-color: #f3f4f6;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		font-family: monospace;
	}

	:global(.prose pre) {
		background-color: #f3f4f6;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 1rem 0;
	}

	:global(.prose pre code) {
		background: transparent;
		padding: 0;
	}

	:global(.prose strong) {
		font-weight: 600;
	}

	:global(.prose em) {
		font-style: italic;
	}
</style>
