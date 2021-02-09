let $ = function (elem) {
	return document.querySelector(elem);
}

window.addEventListener("DOMContentLoaded", () => {
const quote_el = $("#quote");
const quote_author = $("#quoteAuthor");
const btn = $("#btn");


async function load_Quote(){
	const resp = await fetch(`https://api.quotable.io/random`);
	const data = await resp.json(); 
    // console.log(data);
	if (resp.ok) {
		show_Quote(data.content, data.author);
	} else {
		show_Quote("something went wrong ", "an error occured")
	}
}

show_Quote = (quote, author) => {
	quote_el.textContent = quote;
	quote_author.textContent = author;
}

btn.addEventListener("click", () => {
	load_Quote();
})

load_Quote();
})