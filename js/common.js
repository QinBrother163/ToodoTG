// JavaScript Document
var filename = window.location.href;
filename = filename.substr(filename.lastIndexOf("/") + 1);
var current = 0;
var index = 1;
var items = new Array();
var nav_index = 1;//nav id标识
var image_index = 1;//image id 标识
var toggle_index = -1;//0和1切换时记录下标
function init() {
    //根据页面设置current初始值
    switch (filename) {
        case 'index.html':
            current = 0;
            break;
        case 'members.html':
            current = 1;
            break;
        case 'food.html':
            current = 2;
            break;
        // case 'recreation.html':
        //     current = 3;
        //     break;
        case 'attractions.html':
            current = 3;
            break;
        // case 'children.html':
        //     current = 5;
        //     break;
        // case 'girl.html':
        //     current = 6;
        //     break;
        // case 'sports.html':
        //     current = 7;
        //     break;
        case 'edu.html':
            current = 4;
            break;
        case 'shop.html':
            current = 5;
            break;
        case 'ticket.html':
            current = 6;
            break;
        case 'charmGD.html':
            current = 7;
            break;
        case 'more.html':
            current = 8;
            break;
    }
}


function setSelected(current, index) {
    for (var i = 0; i < items[index].length; ++i) {
        //第一个参数是遍历的i,第二个参数是current==i判断，是的话true传过去，否则false传过去
        if (index == 0) {
            setFocus(i, current == i);
        }
        if (index == 1) {
            setFocus2(i, current == i);
        }
        if (index == 2) {
            setFocus3(i, current == i);
        }
    }
}

function setFocus(current, focus) {//修改
    //window.alert(current+","+focus);
    //获取传来的menu-btn的控件dom对象
    var node = items[0][current];
    //以传来的focus判断是否是选中的menu-btn，如果是则class设为'menu-btn-focus'，否则设为'menu-btn'
    //node.className = focus ? 'menu-btn-focus' : 'menu-btn';
    //img的控件
    var img = node.querySelector('img');
    var p = node.querySelector('p');
    //window.alert(img);
    //切换图片
    if (focus) {
        //window.alert(current);
        img.src = 'images/icon/nav_' + current + '_1.png';
        p.style.fontWeight = 'bold';
    } else {
        img.src = 'images/icon/nav_' + current + '_0.png';
        p.style.fontWeight = 'normal';
    }
}

function setFocus2(current, focus) {
    var node = items[1][current];
    if (focus) {
        node.className = "nav-activity";
    } else {
        node.className = "nav-nofocus";
    }
}

function setFocus3(current, focus) {
    //window.alert(current+","+focus);
    var node = items[2][current];
    //node.style.zIndex = focus ? 1 : 0;
    var size = itemSize[current];
    var img = node.querySelector('img');
    if (focus) {
        node.style.display = 'block';
        img.style.width = size[0] * 1.05 + 'px';
        img.style.height = size[1] * 1.05 + 'px';
        img.style.left = -size[0] * 0.03 + 'px';
        img.style.top = -size[1] * 0.03 + 'px';
        img.className = "img-focus";
    } else {
        //node.style.display = 'none';
        img.style.width = size[0] + 'px';
        img.style.height = size[1] + 'px';
        img.style.left = 0 + 'px';
        img.style.top = 0 + 'px';
        img.className = "";
    }
}

function toggleFocus(toggle_index) {
    var node = items[1][current];
    node.className = "nav-toggle";
}

function navOk() {//修改
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