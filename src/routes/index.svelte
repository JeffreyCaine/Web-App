<script>
	let msg

	async function newReport() {
		const { text } = await (await fetch('/api/report')).json()
		msg = text
	}
</script>

<h1>Welcome to the Acton Health app development</h1>
<p>
	This is under active construction and is intended for testing and
	development purposes.
</p>
<button on:click={newReport}>New Report</button>
<p>{msg}</p>
