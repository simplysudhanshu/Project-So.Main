<script>
	import {} from "node:os";
  import { Router } from 'svelte-router-spa'
  import { routes } from './tools/route'
</script>

<style>
	main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #f3ebf5, #88707e);	
  }	
</style>

<main>
  <Router {routes} />
</main>