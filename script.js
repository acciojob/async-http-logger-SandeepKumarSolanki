//your JS code here. If required.

async function  fetchData(){
	try {
		let response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("Error in fetching data :- ",error.message);
	}
}
fetchData();