class Postali {
	constructor() {
		this.api = "https://postali-astro-6cme.vercel.app/api"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async search(query) {
		const response = await fetch(
			`${this.api}/search?q=${query}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Postali}
