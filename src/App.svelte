<script>
	import {} from "node:os";
	import { text } from "svelte/internal";
	import LoginForm from "./login.svelte";
	
</script>

<style>
	section {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #f3ebf5, #88707e);	
  }	
</style>

<section>
	<LoginForm />
</section>
  