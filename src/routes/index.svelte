<script>
	let msg
	let authToken
	let url = 'https://'
	async function particleLogin() {
		const { token, text } = await (
			await fetch('/api/particle-login')
		).json()
		msg = text
		authToken = token
	}
	async function newReport() {
		const { text } = await (await fetch('/api/report')).json()
		msg = text
	}
	async function toggleActivity() {
		await fetch('/api/toggleMyStatus')
	}
</script>

<h1>Welcome to the Acton Health app development</h1>
<p>
	This is under active construction and is intended for testing and
	development purposes.
</p>
<button on:click={particleLogin}>Login</button>
<button on:click={newReport}>report</button>
<button on:click={toggleActivity}>Activity Complete</button>
<p>{msg}</p>
