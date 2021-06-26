<script>
	import { auth } from "./firebase";
	import { authState } from "rxfire/auth";
	var username, password;
	let user;

	function login_click() {
		console.log("USERNAME: ", username);
		console.log("PASSWORD: ", password);

		auth.signInWithEmailAndPassword(username, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				console.log("SIGNED in : ", user.uid)
				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log("FAIL : ", errorCode, errorMessage)
			});

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

	<button type="submit" on:click={login_click}>Log in 🔒</button>
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
