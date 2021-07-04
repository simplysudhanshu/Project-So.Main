<script>
	import { auth, fire_login } from "../tools/firebaseTools";
	var username = null,
		password = null;
	let loginStatus = "";

	function log_in() {
		if (username !== null && password != null) {
			fire_login(username, password).then(
				(value) => (loginStatus = value)
			);
		}
	}

	function log_out() {
		auth.signOut();
		loginStatus = "You have successfully logged OUT !";
	}
</script>

<div class="Form">
	<h1>👤</h1>

	<label
		>Email
		<input
			name="email"
			placeholder="name@example.com"
			bind:value={username}
		/>
	</label>

	<label
		>Password
		<input
			name="password"
			type="password"
			placeholder="password"
			bind:value={password}
		/>
	</label>

	<button type="submit" on:click={log_in}>Log in</button>
	<button type="submit" on:click={log_out}>Log out</button>
	<p>{loginStatus}</p>
</div>

<style>
	.Form {
		background: #fff;
		padding: 50px;
		width: 250px;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 20px 14px 8px rgba(0, 0, 0, 0.58);
	}
	label {
		margin: 10px 0;
		align-self: flex-start;
		font-weight: 500;
	}
	input {
		border: none;
		border-bottom: 1px solid #ccc;
		margin-bottom: 20px;
		transition: all 300ms ease-in-out;
		width: 100%;
	}
	input:focus {
		outline: 0;
		border-bottom: 1px solid #666;
	}
	button {
		margin-top: 20px;
		background: black;
		color: white;
		padding: 10px 0;
		width: 200px;
		border-radius: 25px;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		transition: all 300ms ease-in-out;
	}
	button:hover {
		transform: translateY(-2.5px);
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.58);
	}
	h1 {
		margin: 10px 20px 30px 20px;
		font-size: 40px;
	}
</style>
