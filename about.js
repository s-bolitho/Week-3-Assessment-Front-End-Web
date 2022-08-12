console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted!');
}

document.getElementById('image').addEventListener('mouseover', function() {
	alert(`You're a great teacher!`)
})

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);