var poo = "💩";
const dogs = [{ name: "Thor", age: 2 }, { name: "Loki", age: 8 }];

function makeMagenta() {
	const p = document.querySelector("p");
	p.style.color = "#FF00FF";
	p.style.fontSize = "30px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string", "💩");
console.log(`Hello I am a ${poo}`);

// Styled
console.log(
	"%c I am some great text",
	"font-size: 30px; background: #00ACC1; text-shadow: 5px 5px 0 #263238"
);

// warning!
console.warn("WARNING! WARNING! ⚠");

// Error :|
console.error("ERROR! ERROR! ❌");

// Info
console.info(
	"Crocodiles slam their jaws shut with 3,700 pounds per square inch (psi), or 16,460 newtons, of bite force ℹ"
);

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("poopoo"), "That is wrong! ⛔");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} in dog years`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count("Miri");
console.count("Miri");
console.count("Lama");
console.count("Miri");
console.count("Miri");
console.count("Lama");
console.count("Lama");
console.count("Miri");
console.count("Lama");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/m-lamarre")
	.then(data => data.json())
	.then(data => {
	console.timeEnd("fetching data");
	console.log(data);
});

// table
console.table(dogs);
