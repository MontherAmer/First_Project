
	var cellId=[];
	var checkClick=0; 
	var correctNum=[];
	var randomNum=function(){return Math.floor(Math.random() * Math.floor(10));
	}


	var startGame=function(){
		$('#start').hide();
		$('#reset').show();
		$('#show').show();
		setTimeout(function(){
			for(var i=0;i<cells.length;i++){
			cells[i].addEventListener('click',showCell,false);
			}
		},3000)

		var no1=arrRandom();
		var no2=arrRandom();
		for(var i=1 ; i<=19 ; i++){
			$('#'+i).html(no1[i-1]);
			$('#'+(i+10)).html(no2[i-1]);
		}

	
		allNumberArray=no1.concat(no2);
	
	setTimeout(function(){ 
		$('td').html('');
	 }, 3000);

	console.log(allNumberArray)
	}

	
	var arrRandom=function(){
		var arrRand=[];        
		while(arrRand.length!=10){
		var randomN=randomNum();
		if(!arrRand.includes(randomN))
		arrRand.push(randomN);
		}
		return arrRand;
	}

	var allNumberArray=[];

	var showCell=function(s){
		console.log("correctNum is : "+correctNum)
		checkClick++;
		cId=s.target.id;
		// console.log('s '+s);
		 console.log('cId='+cId)
		cellId.push(cId);
		//cells.removeEventListener(cId);
		cells[cId-1].removeEventListener('click',showCell);

		if(cellId.length===1){
		
		$('#'+cellId[0]).html(allNumberArray[cId-1])
		
		}else if(cellId.length===2){
			for(var i=0;i<cells.length;i++){
			cells[i].removeEventListener('click',showCell);
			}
		$('#'+cellId[1]).html(allNumberArray[cId-1])
		console.log('cellId '+cellId);
			console.log('cid '+cId)
		checkEquality();
		// cellId=[];

		}
		console.log(checkClick);
	}


	var checkEquality=function(){
			
		if(checkClick%2===0){
			
			if(allNumberArray[cellId[0]-1]!==allNumberArray[cellId[1]-1]){
				console.log(allNumberArray[cellId[0]-1]);
				console.log(allNumberArray[cellId[1]-1])
				setTimeout(function(){
				// cells[cellId[0]-1].addEventListener('click',showCell,false);
				// cells[cellId[1]-1].addEventListener('click',showCell,false);
				for(var i=0;i<cells.length;i++){
					if(!correctNum.includes((i+1).toString())){
						cells[i].addEventListener('click',showCell,false);
					}
			//cells[i].addEventListener('click',showCell,false);
			}
				$('#'+cellId[0]).html('');
		        $('#'+cellId[1]).html('');
		         cellId=[];
					},1000)
		       
			}else{

				console.log('cells '+cells[cellId[0]-1].id)
				console.log('cells '+cells[cellId[1]-1].id)



			 cells[cellId[0]-1].removeEventListener('click',showCell);
			 cells[cellId[1]-1].removeEventListener('click',showCell);
			 console.log('cellid of0 '+cellId[0]);
			 console.log('cellid of1 '+cellId[1]);
			 correctNum.push(cellId[0],cellId[1]);
			 console.log("correctNum is : "+correctNum)
			 console.log('the length of'+correctNum.length);
			 // 	for(var i=0;i<cells.length;i++){
				// 	if(!correctNum.includes(i.toString())){
				// 		cells[i].addEventListener('click',showCell,false);
				// 	}
				// }
				for(var i=1 ; i<=20 ; i++){
					if(!correctNum.includes(i.toString())){
						cells[i-1].addEventListener('click',showCell,false);
					}
				}

				if(correctNum.length ===20){
					$('#table').slideUp(1000);
					$('#won').html('raed w8taaaa3 you take: '+checkClick+' try');
					$('#won').slideDown(1000);

				}

			 cellId=[];
		}
		}
	}









