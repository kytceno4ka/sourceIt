(function(){
    function bubbleSort(data) {
        var arr = data.slice()
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

	var listHolder = document.getElementById("list");
	
	function recursiveList (data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]

		var list = document.createElement("ul");
		var ul = null;
		var listItem = null;
		
		for(var i = 0; i < data.length; i++){
			listItem = document.createElement("li");
		
			if(data[i] instanceof Array){
				listItem.appendChild(recursiveList(data[i]));
			}
			
			else{
				listItem.innerHTML = data[i];
			}
			
			list.appendChild(listItem);
		}
		return list;
	}
	
    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
		
		var form = document.getElementById(form);
		var inputs = form.getElementsByTagName("input");

		form.addEventListener("submit", function(ev){
			ev.preventDefault();
			
			var error = false;
			
			for(var i = 0; i < inputs.length; i++){
				if(inputs[i].value){
					console.log("input val: " +inputs[i].value);
					inputs[i].removeAttribute("style");
				}
				
				else{
					inputs[i].style.border = "1px solid red";
				}
			}
		})
    }
	
	//вызывать функции здесь!
	listHolder.appendChild(recursiveList([1,2,[3,4,[6,7,8],9],10,11]));
	simpleValidation("form");
    sortHandler();
})();