let box = document.getElementById('box')
console.log(box)


//1.innerHTML property

console.log(box.innerHTML)

box.innerHTML = "<h1>Hello World</h1>";
console.log(box.innerHTML);

//2. textContent property- sets or return the the text content of an element EXCLUDING any HTML tags

console.log(box.textContent)
box.textContent = "Dias Ge Nangi"
console.log(box.textContent)


let image = document.getElementById('img')
console.log(image);


image.style.width = "500px";
image.style.height = "300px";


//3. setAttribute sets the value of an attribute

image.setAttribute('src', '/assets/1.webp')


//4.class List

console.log(box.classList)
box.classList.add('aaa','bbb','ccc')

console.log(box.classList);

box.classList.remove('ccc')


box.classList.replace("aaa","mmm")

console.log(box.classList);
//append and append child


let parentDiv = document.createElement('div')
box.append(parentDiv)

parentDiv.textContent="mata"

let childDiv = document.createElement('div')
childDiv.setAttribute('attribute', 'new')
childDiv.appendChild(childDiv)


//7. Remove and removeChild


// parentDiv.removeChild(childDiv)
// parentDiv.remove()