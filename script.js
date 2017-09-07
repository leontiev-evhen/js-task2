class Cat {

	constructor(name, description, img) {
		this.name = name;
		this.description = description;
		this.img = img;
	}
	
	
	draw () {
		var divBlock = document.createElement('div');
		divBlock.setAttribute('class', 'col-md-4');
		divBlock.setAttribute('id', 'cat');
		
		var divName =  document.createElement('div');
		divName.innerHTML = this.name;
		
		var divDescription =  document.createElement('div');
		divDescription.innerHTML = this.description;
		
		divName.appendChild(divDescription);
		
		var divImg =  document.createElement('div');
		divImg.setAttribute('class', 'thumbnail');
		
		var img = document.createElement('img');
		img.setAttribute('src', this.img);
		img.setAttribute('style', 'width:100%');

		
		divImg.appendChild(img);
		

		divDescription.appendChild(divImg);
		
		divBlock.appendChild(divName);
		return divBlock;
	}

}

class Dog {
	
	constructor(name, description, img) {
		this.name = name;
		this.description = description;
		this.img = img;
	}

	draw () {
		var divBlock = document.createElement('div');
		divBlock.setAttribute('class', 'col-md-4');
		
		var divImg =  document.createElement('div');
		divImg.setAttribute('class', 'thumbnail');
		
		var img = document.createElement('img');
		img.setAttribute('src', this.img);
		img.setAttribute('style', 'width:100%');

		divImg.appendChild(img);
		
		var divName =  document.createElement('div');
		divName.innerHTML = this.name;
		
		var divDescription =  document.createElement('div');
		divDescription.innerHTML = this.description;
		

		divImg.appendChild(divName);
		
		divName.appendChild(divDescription);
		
		divBlock.appendChild(divImg);
		return divBlock;
	}
}

class Rabbit {

  	constructor(name, description, img) {
		this.name = name;
		this.description = description;
		this.img = img;
	}

	draw () {
		var divBlock = document.createElement('div');
		divBlock.setAttribute('class', 'col-md-4');
		divBlock.setAttribute('id', 'rabbit');
		
		var divImg =  document.createElement('div');
		divImg.setAttribute('class', 'thumbnail');
		
		var img = document.createElement('img');
		img.setAttribute('src', this.img);
		img.setAttribute('style', 'width:100%');

		divImg.appendChild(img);
		
		var divName =  document.createElement('div');
		divName.innerHTML = this.name;
		
		var divDescription =  document.createElement('div');
		divDescription.innerHTML = this.description;
		

		divImg.appendChild(divName);
		
		divName.appendChild(divDescription);
		
		divBlock.appendChild(divImg);
		return divBlock;
	}

}

class Fish {

  	constructor(name, description, img) {
		this.name = name;
		this.description = description;
		this.img = img;
	}

	draw () {
		var divBlock = document.createElement('div');
		divBlock.setAttribute('class', 'col-md-4');
		
		var divName =  document.createElement('div');
		divName.innerHTML = this.name;
		
		var divDescription =  document.createElement('div');
		divDescription.innerHTML = this.description;
		
		divName.appendChild(divDescription);
		
		var divImg =  document.createElement('div');
		divImg.setAttribute('class', 'thumbnail');
		
		var img = document.createElement('img');
		img.setAttribute('src', this.img);
		img.setAttribute('style', 'width:100%');

		
		divImg.appendChild(img);
		

		divDescription.appendChild(divImg);
		
		divBlock.appendChild(divName);
		return divBlock;
	}

}

var arr = [
{
	'type' : 'cat',
	'name' : 'Max',
	'description' : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
	'img' : 'https://i.pinimg.com/736x/c4/3e/b0/c43eb03b4a7031ec883664f1aba18024--norweigan-forest-cat-mainecoon-cat.jpg'
},
{
	'type' : 'dog',
	'name' : 'Bonny',
	'description' : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
	'img' : 'https://visualhunt.com/photos/s/7/pet-animal-animals-pets.jpg'
},
{
	'type' : 'rabbit',
	'name' : 'bunny',
	'description' : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
	'img' : 'http://begin-english.ru/img/word/rabbit.jpg'
},
{
	'type' : 'fish',
	'name' : 'gold fish',
	'description' : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
	'img' : 'https://i.pinimg.com/736x/d2/67/a1/d267a151c4394e5e95c9054fa55c2aac--salt-water-tanks-salt-water-fish.jpg'
},
];

for (var key in arr) {
	
	switch (arr[key].type) {
		case 'cat':
			var obj = new Cat(arr[key].name, arr[key].description, arr[key].img);
			var content = obj.draw(); 
			document.getElementById('content').appendChild(content);
			break;
		
		case 'dog':
			var obj = new Dog(arr[key].name, arr[key].description, arr[key].img);
			var content = obj.draw(); 
			document.getElementById('content').appendChild(content);
			break;
		
		case 'rabbit':
			var obj = new Rabbit(arr[key].name, arr[key].description, arr[key].img);
			var content = obj.draw(); 
			document.getElementById('content').appendChild(content);
			break;
		
		case 'fish':
			var obj = new Fish(arr[key].name, arr[key].description, arr[key].img);
			var content = obj.draw(); 
			document.getElementById('content').appendChild(content);
			break;
		
	}
}


// LOL move blocks
var cat = document.getElementById('cat');
var rabbit = document.getElementById('rabbit');

var catWidth = cat.offsetWidth;
var contentWidth = document.getElementById('content').offsetWidth;
var p = 0;

var t = setInterval(move, 10);

function move ()
{
	if (p >= contentWidth - catWidth) {
		clearInterval(t);
	} else {
		p += 1;
		cat.style.left = p + "px"; 
		rabbit.style.right = p + "px"; 
	}
}


