// JavaScript Document
var itemSize = [
    [213, 143],
    [213, 143],
	[213, 143],
	[213, 143],
	[213, 143],
	[213, 143],
    [213, 143],
	[213, 143],
	[213, 143],
	[213, 143],
	[213, 143],
    [213, 143],
	[213, 143],
	[213, 143],
	[213, 143]
];
init();
initItem();
function initItem(){
	//控件放入数组
	for(var k=0;k<3;++k){
		items[k]=new Array();
		if(k==0){
			for(var i=0;i<1;++i){
				items[k][i]=(document.getElementById('menu-btn'+i));
			}
		}
		if(k==1){
			for(var i=0;i<9;++i){
				if(nav_index<10){
					items[k][i]=(document.getElementById('nav-0'+nav_index));
				}else{
					items[k][i]=(document.getElementById('nav-'+nav_index));
				}
				
				nav_index++;
			}
		}
		if(k==2){
			for(var i=0;i<document.getElementById('contain-div').getElementsByTagName('div').length;++i){
					if(image_index<10){
						items[k][i]=(document.getElementById('contain-120'+image_index));
					}else{
						items[k][i]=(document.getElementById('contain-12'+image_index));
					}
					image_index++;
			}
		}
	}	
}
document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	//左
	if(e && e.keyCode==keyMap.left){
		if(index==0){
			// if(current >0){
			// 	current--;
			// 	setSelected(current,index);
			// }
		}
		if(index==1){
			if(current>0){
				current--;
				setSelected(current,index);
				navOk();
			}
		}
		if(index==2){
			switch(current){
				case 0:
				break;
				case 1:
					current=0;
					setSelected(current,index);
				break;
				case 2:
					current=1;
					setSelected(current,index);
				break;
				case 3:
					current=2;
					setSelected(current,index);
				break;
				case 4:
					current=3;
					setSelected(current,index);
				break;
				case 5:
				break;
				case 6:
					current=5;
					setSelected(current,index);
				break;
				case 7:
					current=6;
					setSelected(current,index);
				break;
				case 8:
					current=7;
					setSelected(current,index);
				break;
				case 9:
					current=8;
					setSelected(current,index);
				break;
				case 10:
				break;
				case 11:
					current=10;
					setSelected(current,index);
				break;
				case 12:
					current=11;
					setSelected(current,index);
				break;
				case 13:
					current=12;
					setSelected(current,index);
				break;
				case 14:
					current=13;
					setSelected(current,index);
				break;
			}
		}
	}
	
	//右	
	if(e && e.keyCode==keyMap.right){
		if(index==0){
			// if(current<1){
			// 	current++;
			// 	setSelected(current,index);
			// }
		}
		if(index==1){
			if(current<8){
				current++;
				setSelected(current,index);
				navOk();
			}
		}
		if(index==2){
			switch(current){
				case 0:
					current=1;
					setSelected(current,index);
				break;
				case 1:
					current=2;
					setSelected(current,index);
				break;
				case 2:
					current=3;
					setSelected(current,index);
				break;
				case 3:
					current=4;
					setSelected(current,index);
				break;
				case 4:
				break;
				case 5:
					current=6;
					setSelected(current,index);
				break;
				case 6:
					current=7;
					setSelected(current,index);
				break;
				case 7:
					current=8;
					setSelected(current,index);
				break;
				case 8:
					current=9;
					setSelected(current,index);
				break;
				case 9:
				break;
				case 10:
					current=11;
					setSelected(current,index);
				break;
				case 11:
					current=12;
					setSelected(current,index);
				break;
				case 12:
					current=13;
					setSelected(current,index);
				break;
				case 13:
					current=14;
					setSelected(current,index);
				break;
				case 14:
				break;
			}
		}
	}
	
	
	
	//下
	if(e && e.keyCode==keyMap.down){
			if(index==0){
				for(var i=0;i<1;++i){
					setFocus(i,false);
				}
				index=1;
				current=toggle_index;
				setSelected(current,index);
				return;
			}
			
			if(index==1){
				index=2;
				toggle_index=current;
				toggleFocus(toggle_index);
				current=0;
				setSelected(current,index);
				return;
			}
			
			if(index==2){
				switch(current){
					case 0:
						current=5;
						setSelected(current,index);
					break;
					case 1:
						current=6;
					setSelected(current,index);
					break;
					case 2:
						current=7;
						setSelected(current,index);
					break;
					case 3:
						current=8;
						setSelected(current,index);
					break;
					case 4:
						current=9;
						setSelected(current,index);
					break;
					case 5:
						current=10;
						setSelected(current,index);
					break;
					case 6:
						current=11;
						setSelected(current,index);
					break;
					case 7:
						current=12;
						setSelected(current,index);
					break;
					case 8:
						current=13;
						setSelected(current,index);
					break;
					case 9:
						current=14;
						setSelected(current,index);
					break;
					case 10:
					break;
					case 11:
					break;
					case 12:
					break;
					case 13:
					break;
					case 14:
					break;
				}
			}
	}
	//上
	if(e && e.keyCode==keyMap.up){
		if(index>0){
			if(index==1){
				index=0;
				if(current!=-1){
					toggle_index=current;
				}
				toggleFocus(toggle_index);
				current=0;
				setSelected(current,index);
			}
			
			if(index==2){
				switch(current){
					case 0:
						setFocus3(current,false);
						index=1;
						current=toggle_index;
						setSelected(current,index);
					break;
					case 1:
						setFocus3(current,false);
						index=1;
						current=toggle_index;
						setSelected(current,index);
					break;
					case 2:
						setFocus3(current,false);
						index=1;
						current=toggle_index;
						setSelected(current,index);
					break;
					case 3:
						setFocus3(current,false);
						index=1;
						current=toggle_index;
						setSelected(current,index);
					break;
					case 4:
						setFocus3(current,false);
						index=1;
						current=toggle_index;
						setSelected(current,index);
					break;
					case 5:
						current=0;
						setSelected(current,index);
					break;
					case 6:
						current=1;
						setSelected(current,index);
					break;
					case 7:
						current=2;
						setSelected(current,index);
					break;
					case 8:
						current=3;
						setSelected(current,index);
					break;
					case 9:
						current=4;
						setSelected(current,index);
					break;
					case 10:
						current=5;
						setSelected(current,index);
					break;
					case 11:
						current=6;
						setSelected(current,index);
					break;
					case 12:
						current=7;
						setSelected(current,index);
					break;
					case 13:
						current=8;
						setSelected(current,index);
					break;
					case 14:
						current=9;
						setSelected(current,index);
					break;
				}
			}
			
		}
	}
	//ok
	if(e && e.keyCode==keyMap.ok){
		switch(index){
			case 0:
                if(current==1){
                    window.location.href = 'order.html';
                }
			break;
			case 1:
				//navOk();
			break;
			case 2:
			break;
		}
	}
}

