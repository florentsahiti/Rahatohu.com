const btns=[
{
	id: 1,
	name: 'Servisues i telefonave'
},
{
	id: 2,
	name: 'Servisues i smart watches'
},
{
	id: 3,
	name: 'Cameraman'
},
{
	id: 4,
	name: 'Seviser i Laptopave'
},
{
	id: 5,
	name: 'Servisues i airpodsave'
},
]

const filters = [...new Set(btns.map((btn)=>
	{return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
	var {name, id} = btn;
	return(
		"<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
		)
}).join('');

const product = [
{
	id: 1,
	image: 'image/gg-1.jpg',
	title: 'Servisues i telefonave Samsung',
	price: 600,
	category: 'mobile'
},
{
	id: 5,
	image: 'image/hh-2.jpg',
	title: 'Servisues Air Pods Pro',
	price: 440,
	category: 'airpods'
},
{
	id: 3,
	image: 'image/ee-3.jpg',
	title: 'Servisues i kamerave profesionale',
	price:  330,
	category: 'cameras'
},
{
	id: 1,
	image: 'image/gg-2.jpg',
	title: 'Servisues i telefonave Huawei',
	price: 1020,
},
{
	id: 5,
	image: 'image/hh-3.jpg',
	title: 'Servisues i Airpods galaxy buds',
	price: 605,
	category: 'airpods'
},
{
	id: 3,
	image: 'image/ee-2.jpg',
	title: 'Servisues i DSLR Camerave',
	price: 250,
	category: 'cameras'
},
{
	id: 4,
	image: 'image/dd-2.jpg',
	title: ' Servisues i Laptopove Hp',
	price: 2200,
	category: 'Laptop'
},
{
	id: 1,
	image: 'image/gg-3.jpg',
	title: 'Servisues i telefonave Xiaomi',
	price: 1500,
},
{
	id: 3,
	image: 'image/ee-1.jpg',
	title: 'Servisues i kamerave canoon',
	price: 1300,
	category: 'cameras'
},
{
	id: 5,
	image: 'image/hh-1.jpg',
	title: 'Servisues i Air Pods',
	price: 850,
	category: 'airpods'
},
];

const categories = [...new Set(product.map((item)=>
	{return item}))]

const filterItems = (a)=>{
	const flterCategories = categories.filter(item);
	function item(value){
		if(value.id==a){
			return(
				value.id
				)
		}
	}
	displayItem(flterCategories)
}


const displayItem = (items) => {
	document.getElementById('root').innerHTML = items.map((item)=>
	{
		var {image, title, price} = item;
		return(
			`<div class='box'>
			<h3>${title}</h3>
			<div class='img-box'>
			<img class='images' src=${image}></img>
			</div>
			<div class='bottom'>
			<h2>Paga  ${price}.00 $</h2>
			<button>Reviews</button>
			</div>
			</div>`)
	}).join('');
}
displayItem(categories);