<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	const id = $props.id();

	let email = $state("");
	let password = $state("");
	let loading = $state(false);
	let errorMsg = $state("");

	onMount(() => {
		const token = sessionStorage.getItem("auth_token");
		if (token) {
			// Optionally, validate token with a ping or just redirect
			goto("/dashboard/summary");
		}
	});

	async function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		errorMsg = "";
		try {
			const BASE_URL = import.meta.env.VITE_BACKEND_URL;
			console.log("uhuy: " + BASE_URL);
			const res = await fetch(`${BASE_URL}/v1/login`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ email, password })
			});
			const data = await res.json();
			if (data.success && data.data?.token) {
				sessionStorage.setItem("auth_token", data.data.token);
				goto("/dashboard/summary");
			} else {
				const code = data.errors?.[0]?.code;
				if (code === "1001" || code === 1001) {
					errorMsg = "Email/Password Salah!!!";
				} else {
					errorMsg = data.errors?.[0]?.cause || "Invalid email or password";
				}
				console.log("errorMsg set to:", errorMsg); // Debug
			}
		} catch (err) {
			errorMsg = "Network error";
			console.log("errorMsg set to:", errorMsg); // Debug
		} finally {
			loading = false;
		}
	}
</script>

<Card.Root class="mx-auto w-full max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Login</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form class="grid gap-4" onsubmit={handleSubmit} autocomplete="on">
			<div class="grid gap-2">
				<Label for="email-{id}">Email</Label>
				<Input id="email-{id}" type="email" placeholder="m@example.com" required bind:value={email} />
			</div>
			<div class="grid gap-2">
				<div class="flex items-center">
					<Label for="password-{id}">Password</Label>
					<a href="##" class="ml-auto inline-block text-sm underline">
						Forgot your password?
					</a>
				</div>
				<Input id="password-{id}" type="password" required bind:value={password} />
			</div>
			{#if errorMsg}
				<div style="color: red; z-index: 9999;">{errorMsg}</div>
			{/if}
			<Button type="submit" class="w-full" disabled={loading}>{loading ? "Logging in..." : "Login"}</Button>
			<Button variant="outline" class="w-full" type="button" disabled={loading}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
						fill="currentColor"
					/>
				</svg>
				Login with Google
			</Button>
		</form>
		<div class="mt-4 text-center text-sm">
			Don't have an account?
			<a href="##" class="underline"> Sign up </a>
		</div>
	</Card.Content>
</Card.Root>
