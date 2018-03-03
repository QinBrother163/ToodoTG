// JavaScript Document
window.onload=function(){
	window.setInterval(show,3000);
}
var show_index=0;
var current=0;
var index=2;
var nav_index=1;//nav id标识
var items =new Array();
var key_items=new Array();//键盘
var pay_items=new Array();//支付方式
var tel_items=new Array();//手机提示框
var success_items=new Array();//支付成功
var fail_items=new Array();//支付失败
var numText;
var input_tel;
var oUl;
var aLi_u;
var num=1;
var tel="";
init();
function show(){
	if(oUl==null||aLi_u==null){
		oUl=document.getElementById('show-ul');
		aLi_u=oUl.getElementsByTagName('li');
	}
	if(show_index==aLi_u.length-1){
           show_index=0;
    }else{
           show_index++;
    }
	for(var i=0;i<aLi_u.length;i++){
         aLi_u[i].className='oli';
    }
        aLi_u[show_index].className='activity-li';
}



function init(){
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
			items[k][0]=(document.getElementById("lost-btn"));
			items[k][1]=(document.getElementById("add-btn"));
			items[k][2]=(document.getElementById("shop-btn"));
		}
	}
	for(var i=1;i<13;i++){
		key_items[i-1]=document.getElementById("key-div"+i);
	}
	for(var i=0;i<3;++i){
		pay_items[i]=document.getElementById("pay-btn"+i);
	}
	tel_items[0]=document.getElementById("iphone-text");
	tel_items[1]=document.getElementById("iphone-btn");
	success_items[0]=document.getElementById("back-btn");
	success_items[1]=document.getElementById("check-btn");
	fail_items[0]=document.getElementById("back-btn2");
	fail_items[1]=document.getElementById("repay-btn");
	setFocus3(current,true);
	toggleFocus(0);
}

function setSelected(current,index) {
		 for (var i = 0; i<items[index].length; ++i) {
			  //第一个参数是遍历的i,第二个参数是current==i判断，是的话true传过去，否则false传过去
			  if(index==0){
				  setFocus(i, current == i);
			  }
			  if(index==1){
				  setFocus2(i, current == i);
			  }
			  if(index==2){
				   setFocus3(i, current == i);
			  }
		 }
}

function setSelected2(current) {
	 for (var i = 0;i<key_items.length; ++i) {
		 setFocus4(i,current == i);
	 }
}
function setSelected3(current) {
	 for (var i = 0;i<pay_items.length; ++i) {
		 setFocus5(i,current == i);
	 }
}
function setSelected4(current) {
	 for (var i = 0;i<tel_items.length; ++i) {
		 setFocus6(i,current == i);
	 }
}

function setSelect5(current,code){
	if(code==0){
		 for (var i = 0;i<success_items.length; ++i) {
		 	setFocus7(i,current == i,code);
	 	 }
	}else if(code==1){
		for (var i = 0;i<fail_items.length; ++i) {
		 	setFocus7(i,current == i,code);
	 	 }
	}
	
}

function toggleFocus(toggle_index){
	 var node = items[1][current];
	 node.className="nav-toggle";
}

function setFocus (current, focus) {
		//window.alert(current+","+focus);
        //获取传来的menu-btn的控件dom对象
        var node = items[0][current];
        //以传来的focus判断是否是选中的menu-btn，如果是则class设为'menu-btn-focus'，否则设为'menu-btn'
        //node.className = focus ? 'menu-btn-focus' : 'menu-btn';
        //img的控件
        var img = node.querySelector('img');
		//window.alert(img);
        //切换图片
        if (focus) {
			//window.alert(current);
            img.src = 'images/icon/nav_' + current + '_1.png';
        } else {
            img.src = 'images/icon/nav_' + current + '_0.png';
        }
}

function setFocus2 (current, focus){
	 var node = items[1][current];
	 //window.alert(items[1][0]);
	 if(focus){
		 //window.alert(current);
		 node.className="nav-activity";
	 }else{
		 //window.alert(node);
		 node.className="nav-nofocus";
	 }
	 //node.className =focus?'nav-activity':'';
}

function setFocus3 (current, focus){
	//window.alert(current+","+focus);
	 var node = items[2][current];
	 //node.style.zIndex = focus ? 1 : 0;
        if (focus) {
			if(current==2){
				node.className="shop-btn shop-btn-focus";
			}else if(current==0||current==1){
				node.className="num-btn select-btn";
			}    
        } else {
           if(current==2){
				node.className="shop-btn shop-btn-unfocus";
			}else if(current==0||current==1){
				node.className="num-btn unselect-btn";
			}
        }
}

function setFocus4 (current, focus){
	 var node = key_items[current];
	 if (focus) {
		 node.className="key-div key-focus";
	 }else{
		 node.className="key-div";
	 }
}

function setFocus5 (current, focus){
	 var node = pay_items[current];
	 var img = node.querySelector('img');
	 var p=node.querySelector('p');
	 if (focus) {
			node.style.display = 'block';
            img.style.width = 140 * 1.1 + 'px';
            img.style.height = 140 * 1.1 + 'px';
            img.style.left = -140 * 0.05 + 'px';
            img.style.top = -140 * 0.05 + 'px';
			p.style.fontWeight='bold';
	 }else{
		 	img.style.width = 140 + 'px';
            img.style.height = 140 + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
			p.style.fontWeight='normal';
	 }
}

function setFocus6(current, focus){
	 var node = tel_items[current];
	 if (focus) {
		 if(current==0){
			 node.style.border="2px solid #FFC600 "
		 }else if(current==1){
			 node.className="shop-btn-focus";
		 }
	 }else{
		  if(current==0){
			 node.style.border="1px solid #000"
		 }else if(current==1){
			 node.className="shop-btn-unfocus";
		 }
	 }
}

function setFocus7(current, focus,code){
	if(code==0){
		 var node = success_items[current];
	}else if(code==1){
		var node = fail_items[current];
	}
	if(focus){
		node.className="success-btn success-btn-focus";
	}else{
		node.className="success-btn";
	}
}

function navOk(){
    switch (current) {
        case 0:
            window.location.href = 'index.html';
            break;
        case 1:
            window.location.href = 'members.html';
            break;
        case 2:
            window.location.href = 'food.html';
            break;
        // case 3:
        //     window.location.href = 'recreation.html';
        //     break;
        case 3:
            window.location.href = 'attractions.html';
            break;
        // case 5:
        //     window.location.href = 'children.html';
        //     break;
        // case 6:
        //     window.location.href = 'girl.html';
        //     break;
        // case 7:
        //     window.location.href = 'sports.html';
        //     break;
        case 4:
            window.location.href = 'edu.html';
            break;
        case 5:
            window.location.href = 'shop.html';
            break;
        case 6:
            window.location.href = 'ticket.html';
            break;
        case 7:
            window.location.href = 'charmGD.html';
            break;
        case 8:
            window.location.href = 'more.html';
            break;
    }
}

document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];

    if(e && e.keyCode==keyMap.esc){

        window.location.href = 'buy.html';
    }

	//左
	if(e && e.keyCode==keyMap.left){
		if(successPanel.style.display=="block"){
			if(current==1){
				current--;
				setSelect5(current,0);
			}
			return;
		}
		if(failPanel.style.display=="block"){
			if(current==1){
				current--;
				setSelect5(current,1);
			}
			return;
		}
		if(bill_panel.style.display=="block"){
			return;	
		}
		if(iphonePanel.style.display=="block"){
			if(current>1){
				current=0;
			}
			if(current==0){
				
			}else if(current==1){
				current--;
				setSelected4(current);
			}
			return;
		}
		if(payPanel.style.display=="block"){
			switch(current){
				case 0:
				break;
				case 1:
					current=0;
					setSelected3(current);
				break;
				case 2:
					current=1;
					setSelected3(current);
				break;
			}
			return;
		}
		if(keyboardPanel.style.display=="block"){
			switch(current){
				case 0:
				break;
				case 1:
					current--;
					setSelected2(current);
				break;
				case 2:
					current--;
					setSelected2(current);
				break;
				case 3:
				break;
				case 4:
					current--;
					setSelected2(current);
				break;
				case 5:
					current--;
					setSelected2(current);
				break;
				case 6:
				break;
				case 7:
					current--;
					setSelected2(current);
				break;
				case 8:
					current--;
					setSelected2(current);
				break;
				case 9:
				break;
				case 10:
					current--;
					setSelected2(current);
				break;
				case 11:
					current--;
					setSelected2(current);
				break;
			}
			return;
		}
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
						current--;
						setSelected(current,index);
					break;
					case 2:
						current--;
						setSelected(current,index);
					break;
				}
			}
	}
	
	//右	
	if(e && e.keyCode==keyMap.right){
		if(successPanel.style.display=="block"){
			if(current==0){
				current++;
				setSelect5(current,0);
			}
			return;
		}
		if(failPanel.style.display=="block"){
			if(current==0){
				current++;
				setSelect5(current,1);
			}
			return;
		}
		if(bill_panel.style.display=="block"){
			return;	
		}
		if(iphonePanel.style.display=="block"){
			if(current>1){
				current=0;
			}
			if(current==0){
				current++;
				setSelected4(current);
			}else if(current==1){
				
			}
			return;
		}
		if(payPanel.style.display=="block"){
			switch(current){
				case 0:
					current=1;
					setSelected3(current);
				break;
				case 1:
					current=2;
					setSelected3(current);
				break;
				case 2:
				break;
			}
			return;
		}
		if(keyboardPanel.style.display=="block"){
			switch(current){
				case 0:
					current++;
					setSelected2(current);
				break;
				case 1:
					current++;
					setSelected2(current);
				break;
				case 2:
				break;
				case 3:
					current++;
					setSelected2(current);
				break;
				case 4:
					current++;
					setSelected2(current);
				break;
				case 5:
				break;
				case 6:
					current++;
					setSelected2(current);
				break;
				case 7:
					current++;
					setSelected2(current);
				break;
				case 8:
				break;
				case 9:
					current++;
					setSelected2(current);
				break;
				case 10:
					current++;
					setSelected2(current);
				break;
				case 11:
				break;
			}
			return;
		}
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
						current++;
						setSelected(current,index);
					break;
					case 1:
						current++;
						setSelected(current,index);
					break;
					case 2:
					break;	
				}
			}
		
	}
	
	
	
	//下
	if(e && e.keyCode==keyMap.down){
			if(bill_panel.style.display=="block"){
				return;	
			}
			if(keyboardPanel.style.display=="block"){
			switch(current){
				case 0:
					current=3;
					setSelected2(current);
				break;
				case 1:
					current=4;
					setSelected2(current);
				break;
				case 2:
					current=5;
					setSelected2(current);
				break;
				case 3:
					current=6;
					setSelected2(current);
				break;
				case 4:
					current=7;
					setSelected2(current);
				break;
				case 5:
					current=8;
					setSelected2(current);
				break;
				case 6:
					current=9;
					setSelected2(current);
				break;
				case 7:
					current=10;
					setSelected2(current);
				break;
				case 8:
					current=11;
					setSelected2(current);
				break;
				case 9:
				break;
				case 10:
					current--;
					setSelected2(current);
				break;
				case 11:
					current--;
					setSelected2(current);
				break;
			}
			return;
		}
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
			}
			
			if(index==2){
			}
	}
	//上
	if(e && e.keyCode==keyMap.up){
		if(bill_panel.style.display=="block"){
			return;	
		}
		if(keyboardPanel.style.display=="block"){
			switch(current){
				case 0:
				break;
				case 1:
				break;
				case 2:
				break;
				case 3:
					current=0;
					setSelected2(current);
				break;
				case 4:
					current=1;
					setSelected2(current);
				break;
				case 5:
					current=2;
					setSelected2(current);
				break;
				case 6:
					current=3;
					setSelected2(current);
				break;
				case 7:
					current=4;
					setSelected2(current);
				break;
				case 8:
					current=5;
					setSelected2(current);
				break;
				case 9:
					current=6;
					setSelected2(current);
				break;
				case 10:
					current=7;
					setSelected2(current);
				break;
				case 11:
					current=8;
					setSelected2(current);
				break;
			}
			return;
		}
		if(index>0){
			if(index==1){
				index=0;
				if(current!=-1){
					toggle_index=current;
				}
				current=0;
				toggleFocus(toggle_index);
				setSelected(current,index);
			}
			
			if(index==2){
				if(current==0||current==1||current==2){
					switch(current){
						case 0:
							setFocus3(0,false);
							index=1;
							current=0;
							setSelected(current,index);
						break;
						case 1:
							setFocus3(1,false);
							index=1;
							current=0;
							setSelected(current,index);
						break;
						case 2:
							setFocus3(2,false);
							index=1;
							current=0;
							setSelected(current,index);
						break;
					}
				}
			}
			
		}
	}
	//ok
	if(e && e.keyCode==keyMap.ok){
		if(successPanel.style.display=="block"){
			if(current==0){
				 successDiv(false);
				 failDiv(false);
				 maskDiv(false);
				 index=2;
				 current=2;
				 setSelected(current,index);
			}else if(current==1){
				 
			}
			return;
		}
		
		if(failPanel.style.display=="block"){
			if(current==0){
				 successDiv(false);
				 failDiv(false);
				 maskDiv(false);
				 index=2;
				 current=2;
				 setSelected(current,index);
			}else if(current==1){
				 failDiv(false);
				 payDiv(true);
				 maskDiv(true);
				 current=0;
			}
			return;
		}
		if(iphonePanel.style.display=="block"){
			if(current>1){
				current=0;
			}
			if(current==0){
				okBtn(3);
			}else if(current==1){
				okBtn(4);
			}
			return;
		}
		
		if(bill_panel.style.display=="block"&&document.getElementById("bill-btn").className=="bill-btn shop-btn-focus"){
				maskDiv(true);
				billDiv(false);
				payDiv(true);
				current=0;
				setSelected3(current);
				return;
		}
		
		if(payPanel.style.display=="block"){
				switch(current){
					case 0:
						maskDiv(true);
						payDiv(false);
						weiDiv(true);
					break;
					case 1:
						maskDiv(true);
						payDiv(false);
						zhiDiv(true);
					break;
					case 2:
						
					break;	
				}
			return;
		}
		if(keyboardPanel.style.display=="block"){
			switch(current){
				case 0:
					tel=tel+"1";
					showTel();
				break;
				case 1:
					tel=tel+"2";
					showTel();
				break;
				case 2:
					tel=tel+"3";
					showTel();
				break;
				case 3:
					tel=tel+"4";
					showTel();
				break;
				case 4:
					tel=tel+"5";
					showTel();	
				break;
				case 5:
					tel=tel+"6";
					showTel();
				break;
				case 6:
					tel=tel+"7";
					showTel();
				break;
				case 7:
					tel=tel+"8";
					showTel();
				break;
				case 8:
					tel=tel+"9";
					showTel();
				break;
				case 9:
					current=1;
					setSelected4(current);
					document.getElementById("iphone-text").value=tel;
					keyboardDiv(false);
					iphoneDiv(true);
				break;
				case 10:
					tel=tel+"0";
					showTel();
				break;
				case 11:
					telremove();
					showTel();
				break;
			}
			return;
		}
		
		if(weiPanel.style.display=="block"||zhiPanel.style.display=="block"){
			current=0;
			setSelect5(current,0);
			successDiv(true);
			maskDiv(true);
			weiDiv(false);
			zhiDiv(false);
			return;
		}
		switch(index){
			case 0:
			break;
			case 1:
			break;
			case 2:
				switch(current){
					case 0:
						okBtn(0);
					break;
					case 1:
						okBtn(1);
					break;
					case 2:
						okBtn(2);
					break;
				}
			break;
		}
	}
	//返回
	if(e && e.keyCode==keyMap.esc){
		if(iphonePanel.style.display=="block"){
			index=2;
			current=2;
			setFocus3(current,true);
			iphoneDiv(false);
			maskDiv(false);
			return;
		}
		if(keyboardPanel.style.display=="block"){
			index=2;
			current=2;
			setFocus3(current,true);
			keyboardDiv(false);
			maskDiv(false);
			return;
		}
		if(bill_panel.style.display=="block"){
			index=2;
			current=2;
			document.getElementById("bill-btn").className="bill-btn shop-btn-unfocus";
			setFocus3(current,true);
			billDiv(false);
			maskDiv(false);
			return;
		}
		if(payPanel.style.display=="block"){
			index=2;
			current=2;
			setFocus3(current,true);
			payDiv(false);
			maskDiv(false);
			return;
		}
		if(weiPanel.style.display=="block"||zhiPanel.style.display=="block"){
			current=1;
			setSelect5(current,1);
			zhiDiv(false);
			weiDiv(false);
			maskDiv(true);
			failDiv(true);
			return;
		}
		if(successPanel.style.display=="block"||failPanel.style.display=="block"){
			 successDiv(false);
			 failDiv(false);
			 maskDiv(false);
			 index=2;
			 current=2;
			 setSelected(current,index);
			 return;
		}
	}
}




function okBtn(current){
	if(numText==null){
		 numText=document.getElementById("num-text");
	}
	switch(current){
		case 0:
			if(numText.innerHTML>0){
				num=--numText.innerHTML;
				numText.innerHTML=num;
			}
		break;
		case 1:
				num=++numText.innerHTML;
				numText.innerHTML=num;
		break;
		case 2:
			setSelected(-1,index);
			current=0;
			setSelected4(current);
			maskDiv(true);
			iphoneDiv(true);
		break;
		case 3:
			maskDiv(true);
			iphoneDiv(false);//隐藏手机号码提示弹框
			keyboardDiv(true)//弹出键盘
		break;
		case 4:
			maskDiv(true);
			iphoneDiv(false);//隐藏手机号码提示弹框
			 billDiv(true);//弹出账单
			 document.getElementById("bill-btn").className="bill-btn shop-btn-focus";
		break;		
	}	
}




