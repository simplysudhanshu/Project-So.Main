import { auth } from './firebaseTools'
import Home from '../base/Home.svelte'
import Landing from '../base/Landing.svelte'

let userStatus = false;

auth.onAuthStateChanged(function (user) {
	if (user) {
		userStatus = true;
		console.log("IN ROUTER: ", user)
	}
})

function isLoggedIn() {
	return userStatus
}
$: console.log("USERstatus : ", userStatus)

const routes = [
	{
		name: '/',
		component: Home
	},
	{
		name: 'landing',
		component: Landing,
		onlyIf: { guard: isLoggedIn, redirect: '/' }
	}
]

export { routes }