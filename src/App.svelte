<script>
	import {} from "node:os";
  import { auth } from "./tools/firebaseTools";
	import LoginForm from "./base/login.svelte";
	
  let currentUser;

  $: console.log("CURRENT USER : ", currentUser);
  auth.signOut()

  auth.onAuthStateChanged(function (user) {
		if (user) {
			console.log("USER SIGNED in")
		}
		else{
			console.log("USER SIGNED out")
		}
		currentUser = auth.currentUser;
	});
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
  