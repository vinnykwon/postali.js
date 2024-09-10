# postali.js
Web-API for [postali.app](https://postali.app) an website to retrieve postal code information about Mexican addresses

## Example
```JavaScript
async function main() {
	const { Postali } = require("./postali.js");
	const postAli = new Postali()
	const searchResult = await postAli.search("")
	console.log(searchResult)
}

main()
```
