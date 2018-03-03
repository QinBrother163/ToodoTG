// JavaScript Document
var iphonePanel=document.getElementById("iphone-panel");//手机弹框
var payPanel=document.getElementById("pay-panel");
var mask;//遮罩层
var weiPanel=document.getElementById("wei-panel");
var zhiPanel=document.getElementById("zhi-panel");;
var bill_panel=document.getElementById("bill-panel");//账单
var keyboardPanel=document.getElementById("keyboard-panel");//键盘弹框
var successPanel=document.getElementById("success-panel");//成功支付
var failPanel=document.getElementById("fail-panel");//失败支付
//手机号码提示弹框
function iphoneDiv(flag){
	if(flag){
		iphonePanel.style.display="block";
	}else{
		iphonePanel.style.display="none";
	}
	
}
//遮罩层
function maskDiv(flag) { 
	if(mask==null){
		 mask=document.getElementById("mask");
	}
	if(flag){
		mask.style.display="block";
	}else{
		mask.style.display="none";
	}
	
}
//键盘
function keyboardDiv(flag){
	if(flag){
		current=0;
		keyboardPanel.style.display="block";
		setSelected2(current);
	}else{
		keyboardPanel.style.display="none";
	}
}
//账单
function billDiv(flag) { 
	if(flag){
		document.getElementById("num").innerHTML=num;
		document.getElementById("add").innerHTML=num*110;
		document.getElementById("money").innerHTML=num*110+"元";
		bill_panel.style.display="block";
	}else{
		bill_panel.style.display="none";
	}
	
}
//支付方式
function payDiv(flag){
	if(flag){
		document.getElementById("payMoney").innerHTML=num*110+"元";
		payPanel.style.display="block";
	}else{
		payPanel.style.display="none";
	}
}

//微信
function weiDiv(flag){
	if(flag){
		weiPanel.style.display="block";
	}else{
		weiPanel.style.display="none";
	}
}

//支付宝
function zhiDiv(flag){
	if(flag){
		zhiPanel.style.display="block";
	}else{
		zhiPanel.style.display="none";
	}
}
//支付成功
function successDiv(flag){
	if(flag){
		document.getElementById("pay-money1").innerHTML=num*110+"元";
		successPanel.style.display="block";
	}else{
		successPanel.style.display="none";
	}
}
//支付失败
function failDiv(flag){
	if(flag){
		document.getElementById("pay-money2").innerHTML=num*110+"元";
		failPanel.style.display="block";
	}else{
		failPanel.style.display="none";
	}
}
//手机提示框展示
function showTel(){
	if(input_tel==null){
		input_tel=document.getElementById("num-key");
	}
	
	input_tel.value=tel;
}
//手机提示框删除
function telremove(){
	tel=tel.substring(0,tel.length-1);
}