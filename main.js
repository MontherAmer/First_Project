
	var cellId=[];
	var checkClick=0;

	var randomNum=function(){return Math.floor(Math.random() * Math.floor(10));
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
		checkClick++;
		cId=s.target.id;
		// console.log('s '+s);
		// console.log('cId='+cId)
		cellId.push(cId);

		if(cellId.length===1){
		
		$('#'+cellId[0]).html(allNumberArray[cId-1])
		
		}else if(cellId.length===2){
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
				$('#'+cellId[0]).html('');
		        $('#'+cellId[1]).html('');
		        cellId=[];
			}else{
				console.log(cells[cellId[0]-1])
			 cells[cellId[0]-1].removeEventListener('click',showCell);
			 cells[cellId[1]-1].removeEventListener('click',showCell);
			cellId=[];
		}
		}
	}









