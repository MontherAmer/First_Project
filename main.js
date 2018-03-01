	var id=0;
	var cellId=[];
	var checkClick=0; 
	var correctNum=[];	
	var allNumberArray=[];
	function user(id,name , pass , numberOfWoningGame,highScore){
		return{
			id:id,
			name: name,
			pass: pass,
			numberOfWoningGame: numberOfWoningGame,
			highScore: highScore
		};
	}
	var user1 =user(1,'monther','m123',0,[]);
	var user2 =user(2,'raed','r123',0,[]);
	var users =[user1,user2];
	
	

	var startGame=function(){
		$('#table').slideDown(1000);
		$('#won').hide();
		$('#start').hide();
		$('#reset').show();
		$('#logOut').show();
		//we will use for loop to make all the cells clickable by useing addEventListener
		//the cells shoud be clickable after the number disapper
		setTimeout(function(){
			for(var i=0;i<cells.length;i++){
				//when we click on any cell will call the function showCell 
			cells[i].addEventListener('click',showCell,false);
			}
		},3000)
		// we have 2 array eachOne will contain 10 random numbers from 0 -9 without repet
		var no1=arrRandom();
		var no2=arrRandom();
		// we will give each cells one number from the arrays
		for(var i=1 ; i<=19 ; i++){
			$('#'+i).html(no1[i-1]);
			$('#'+(i+10)).html(no2[i-1]);
		}

		//store all the number in one array
		allNumberArray=no1.concat(no2);
	//hide numbers inside the cells
	setTimeout(function(){ 
		$('.cell').html('');
	 }, 3000);

	//console.log(allNumberArray)
	}
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


	var showCell=function(s){
		//checkClick well be  used to tell the page how many cells apper
		checkClick++;
		//save the id of the clicked cell 
		cId=s.target.id;
			
		//save the cId in array witch well be used to see if the numbers are equal
		cellId.push(cId);
		//remve the listener from the clicked cell 
		cells[cId-1].removeEventListener('click',showCell);
		//check if we have one or tow cells apper 
		if(cellId.length===1){
		$('#show').hide();
		$('#'+cellId[0]).html(allNumberArray[cId-1])
		
		}else if(cellId.length===2){
			$('#show').show();
			for(var i=0;i<cells.length;i++){
			cells[i].removeEventListener('click',showCell);
			}
		$('#'+cellId[1]).html(allNumberArray[cId-1])
		//call the checkEquality() if 2 cells apper
		checkEquality();
		

		}
		
	}


	var checkEquality=function(){
			
		if(checkClick%2===0){
			
			if(allNumberArray[cellId[0]-1]!==allNumberArray[cellId[1]-1]){
				console.log(allNumberArray[cellId[0]-1]);
				console.log(allNumberArray[cellId[1]-1])
				setTimeout(function(){
				
				for(var i=0;i<cells.length;i++){
					if(!correctNum.includes((i+1).toString())){
						cells[i].addEventListener('click',showCell,false);
					}
			
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
			 
				for(var i=1 ; i<=20 ; i++){
					if(!correctNum.includes(i.toString())){
						cells[i-1].addEventListener('click',showCell,false);
					}
				}

				if(correctNum.length ===20){
					users[id-1].numberOfWoningGame=users[id-1].numberOfWoningGame +1;
					var $topS=users[id-1].highScore;
					
					$topS.push(checkClick)
					

					$('#table').slideUp(1000);
					$('#won').html('you take: '+checkClick/2+' try');
					$('#won').slideDown(1000);

				}

			 cellId=[];
		}
		}
	}









