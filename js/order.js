// JavaScript Document


var current=0;
var index=2;
var nav_index=1;//nav id标识
var toggle_index=-1;//0和1和2切换时记录下
var items =new Array();
init();

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
            items[k][0]=(document.getElementById("buy-btn"));
        }
    }
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
        node.className="buy-btn buy-btn-focus";
    } else {
        node.className="buy-btn buy-btn-unfocus";
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

        window.location.href = 'index.html';
    }

    //左
    if(e && e.keyCode==keyMap.left){
        if(index==0){
            // if(current >0){
            //     current--;
            //     setSelected(current,index);
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

        }
    }

    //右
    if(e && e.keyCode==keyMap.right){
        if(index==0){
            // if(current<1){
            //     current++;
            //     setSelected(current,index);
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
        }

        if(index==2){

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
                setFocus3(0,false);
                index=1;
                current=0;
                setSelected(current,index);
            }

        }
    }
    //ok
    if(e && e.keyCode==13){
        switch(index){
            case 0:
                break;
            case 1:
                //navOk();
                break;
            case 2:
                if(current==0){
                    alert("尽情期待");
                }
                break;
        }
    }
}

