let select = document.getElementById('days');
let month = document.getElementById('month'); 
let months = ['Jan','Feb' ,'Mar' , 'Apr' , 'May' , 'June' , 'July' , 'Aug' ,'Sep' ,'Oct' , 'Nov', 'Dec' ];

let year = document.getElementById('year');

for(let i = 1; i<= 30; i++){
	var create = document.createElement('option');
	var text = document.createTextNode(i);
	create.value = i;
	create.appendChild(text);
	select.appendChild(create);

}

for(let i = 0; i<= months.length - 1; i++){
	var create = document.createElement('option');
	var text = document.createTextNode(months[i]);
	create.value = months[i];
	create.appendChild(text);
	month.appendChild(create);

};

for(let i = 1905; i<= 2019; i++){
	var create = document.createElement('option');
	var text = document.createTextNode(i);
	create.value = i;
	create.appendChild(text);
	year.appendChild(create);

}