# postali.js
Web-API for [postali.app](https://postali.app) an website to retrieve postal code information about Mexican addresses

## Example
```JavaScript
async function main() {
	const { Postali } = require("./postali.js");
	const postAli = new Postali()
	const search_result = await postAli.search("")
	console.log(search_result)
}

main()
```
