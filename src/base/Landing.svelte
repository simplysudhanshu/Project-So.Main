<script>
    import { auth, dbRead, dbWrite } from "../tools/firebaseTools";
    import MemberCard from "../MemberBase/memberCard.svelte";

    let dbContents = "";
    let dbWriteStatus = false;
    let showAll = false;
    let memberList = [];
    let loginStatus = false;

    /**
     * BASE function to fetch from FireBase BB
     */
    function fetch_db() {
        dbRead("MemberBase").then((value) => (dbContents = value.Name));
    }

    /**
     * BASE function to write to FireBase BB
     */
    function throw_into_db() {
        dbWrite("MemberBase/A9", { Name: dbContents }).then(
            (value) => (dbWriteStatus = value)
        );
        console.log("DB Write Status : ", dbWriteStatus);
    }

    /**
     * BASE function logout from FireBase Auth
     */
    function log_out() {
        auth.signOut();
        loginStatus = "You have successfully logged OUT !";
        {window.location = '/'}
    }

    function show_all() {
        fetch_db()
        
        showAll = true;
    }
</script>

<div>
    <label for="baseText">Name:</label>
    <textarea id="baseText" bind:value={dbContents} />
    <br />
    <button on:click={fetch_db}>Fetch</button>
    <button on:click={throw_into_db}>Throw</button> <br />
    <button type="submit" on:click={log_out}>Log out</button>
    <button type="submit" on:click={show_all}>Show All</button>
</div>

{#if showAll}
    {#each memberList as member}
        <MemberCard
            name="member.Name"
            email="member.Email"
            phone="member.Phone"
        />
    {/each}
{/if}

<style>
</style>
