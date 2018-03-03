// JavaScript Document
const retail = {
    gxgd: '96335',
    hnyx: '96266',
    gdgd: '96956',
    none: '1000'
};
var retailId=getRetailId();
var keyMap=getKeyCodes(retailId);
function getRetailId() {
    try {//广西广电
        if (guangxi && iPanel) {
            return retail.gxgd;
        }
    } catch (e) {
    }
    try {//河南有线
        var System = window.System;
        if (System && System.stbID) {
            return retail.hnyx;
        }
    } catch (e) {
    }
    try {//广东广电
        if (CA && StorageService && FileSystem) {
            return retail.gdgd;
        }
        //var storageList = StorageService.getStorageInfos();
        //if (storageList && storageList != 'undefined') {
        //    var partitionPathList = storageList[0].getPartitionsInfo()[0];
        //    var partitionPath = partitionPathList.path;
        //    var dir = FileSystem.getDirectory(partitionPath);
        //    var flist = dir.fileList;
        //
        //    for (var i in flist) {
        //        if (flist[i].name.substring(0, 6) == "cacard") {
        //            var cardNo = "96956" + flist[i].name.substring(6, 12);
        //        }
        //    }
        //}
    } catch (e) {
    }
    return retail.none;
}

function getKeyCodes(retailId) {
    if (retailId == retail.gxgd) {
        keyMap = { // 广西广电
            up: 38,        // 上
            down: 40,      // 下
            left: 37,      // 左
            right: 39,     // 右
            ok: 13,        // 确定
            f1: 400,       // f1 //红
            f2: 401,       // f2 //蓝
            f3: 403,       // f3 //黄
            f4: 402,       // f4 //绿
            num1: 49,      // 数字1
            num2: 50,      // 数字2
            num3: 51,      // 数字3
            num4: 52,      // 数字4
            num5: 53,      // 数字5
            num6: 54,      // 数字6
            num7: 55,      // 数字7
            num8: 56,      // 数字8
            num9: 57,      // 数字9
            num0: 48,      // 数字0
            mute: 518,      // 静音
            back: 399,      // 返回
            track: 406,     // 声道？ //声道键
            volUp: 517,    // 增大音量
            volDown: 516,  // 减小音量
            fav: 404,       // 喜欢
            playBack: 521,  // 回放  //点播键
            pageUp: 33,    // 上一页
            pageDown: 34,  // 下一页
            menu: 515,       // 菜单
            esc: 514,        //退出
            home: 520
        };

    } else if (retailId == retail.hnyx) {
        //keyMap = { // 河南有线 linux
        //    up: 65362,
        //    down: 65364,
        //    left: 65361,
        //    right: 65363,
        //    ok: 65293,
        //    f1: 32,
        //    f2: 33,
        //    f3: 34,
        //    f4: 35,
        //    num1: 49,
        //    num2: 50,
        //    num3: 51,
        //    num4: 52,
        //    num5: 53,
        //    num6: 54,
        //    num7: 55,
        //    num8: 56,
        //    num9: 57,
        //    num0: 48,
        //    mute: 63563,
        //    back: 65367,
        //    track: 65307,
        //    volUp: 63561,
        //    volDown: 63562,
        //    fav: 36,
        //    playBack: 72,
        //    pageUp: 25,
        //    pageDown: 26,
        //    menu: 65360,
        //    esc: 27,
        //    home: 65360
        //};
        keyMap = { // 河南有线 android
            up: 38,        // 上
            down: 40,      // 下
            left: 37,      // 左
            right: 39,     // 右
            ok: 13,        // 确定
            f1: 112,       // f1
            f2: 113,       // f2
            f3: 114,       // f3
            f4: 115,       // f4
            num1: 49,      // 数字1
            num2: 50,      // 数字2
            num3: 51,      // 数字3
            num4: 52,      // 数字4
            num5: 53,      // 数字5
            num6: 54,      // 数字6
            num7: 55,      // 数字7
            num8: 56,      // 数字8
            num9: 57,      // 数字9
            num0: 48,      // 数字0 //数字0 返回
            mute: 77,      // 静音
            back: 8,      // 返回
            track: 82,     // 声道？
            volUp: 190,    // 增大音量
            volDown: 188,  // 减小音量
            fav: 84,       // 喜欢
            playBack: 80,  // 回放
            pageUp: 33,    // 上一页
            pageDown: 34,  // 下一页
            menu: 72,       // 菜单
            esc: 27,
            home: 72
        };

    } else if (retailId == retail.gdgd) {
        keyMap = { // 广东广电
            up: 87,        // 上 W键
            down: 83,      // 下 S键
            left: 65,      // 左 A键
            right: 68,     // 右 D键
            ok: 13,        // 确定
            f1: 400,       // f1 //红
            f2: 401,       // f2 //蓝
            f3: 402,       // f3 //黄
            f4: 403,       // f4 //绿
            num1: 49,      // 数字1
            num2: 50,      // 数字2
            num3: 51,      // 数字3
            num4: 52,      // 数字4
            num5: 53,      // 数字5
            num6: 54,      // 数字6
            num7: 55,      // 数字7
            num8: 56,      // 数字8
            num9: 57,      // 数字9
            num0: 48,      // 数字0
            mute: 67,      // 静音
            back: 8,      // 返回
            track: 86,     // 声道？ //声道键
            volUp: 61,    // 增大音量
            volDown: 45,  // 减小音量
            fav: 76,       // 喜欢
            playBack: 521,  // 回放  //点播键
            pageUp: 306,    // 上一页
            pageDown: 307,  // 下一页
            menu: 72,       // 菜单
            esc: 27,
            home: 72
        };

    } else { // windows 键码
        keyMap = {
            up: 38,        // 上
            down: 40,      // 下
            left: 37,      // 左
            right: 39,     // 右
            ok: 13,        // 确定
            f1: 112,       // f1
            f2: 113,       // f2
            f3: 114,       // f3
            f4: 115,       // f4
            num1: 49,      // 数字1
            num2: 50,      // 数字2
            num3: 51,      // 数字3
            num4: 52,      // 数字4
            num5: 53,      // 数字5
            num6: 54,      // 数字6
            num7: 55,      // 数字7
            num8: 56,      // 数字8
            num9: 57,      // 数字9
            num0: 48,      // 数字0 //数字0 返回
            mute: 77,      // 静音
            back: 8,      // 返回
            track: 82,     // 声道？
            volUp: 190,    // 增大音量
            volDown: 188,  // 减小音量
            fav: 84,       // 喜欢
            playBack: 80,  // 回放
            pageUp: 33,    // 上一页
            pageDown: 34,  // 下一页
            menu: 72,       // 菜单
            esc: 27,
            home: 72
        };
    }
    return keyMap;
}