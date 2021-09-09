<script type="ts">
    import { text } from "svelte/internal";
    import { auth } from "../tools/firebaseTools";

    export let name: string;
    export let email: string;
    export let phone: string;

    /**
     * BASE function logout from FireBase Auth
     */
    function log_out() {
        auth.signOut();
    }
</script>


<style>
    .BaseMemberCard {
        background: #fff;
        padding: 50px;
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
</style>


<div class="BaseMemberCard">
    <label for="nameField">Name:</label>
    <input id="nameField" type="text" value={name} />
    <br>
    <label for="emailField">Email:</label>
    <input id="emailField" type="text" value={email} />
    <br>
    <label for="phoneField">Phone:</label>
    <input id="phoneField" type="text" value={phone} />
    <br>
    <button type="submit" on:click={log_out}>Log out</button>
</div>
