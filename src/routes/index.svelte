<script>
	let msg
	async function newReport() {
		const { text } = await (await fetch('/api/report')).json()
		msg = text
	}
	async function toggleStatus(arg) {
		const { text } = await (
			await fetch('/api/myStatus', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({ arg: arg }),
			})
		).json()
		msg = text
	}
	function myStatusComplete() {
		toggleStatus('complete')
	}
	function myStatusReset() {
		toggleStatus('reset')
	}
</script>

<h1>Welcome to the Acton Health app development</h1>
<p>
	This is under active construction and is intended for testing and
	development purposes.
</p>
<button on:click={newReport}>report</button>
<button on:click={myStatusComplete}>Complete</button>
<button on:click={myStatusReset}>Reset</button>
<p>{msg}</p>
