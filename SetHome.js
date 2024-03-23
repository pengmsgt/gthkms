//GetRequest方法
function GetRequest() {
  var url = window.location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

//收藏
function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle)
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}
// 设置为主页
function SetHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl);
    }
    catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        } else {
            alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
        }
    }
}
//底部相关链接
$(function () {
    $('#navs dt').click(function(){
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#menu ul').removeClass('active');
        }else{
            $(this).addClass('active').siblings().removeClass('active');
            var index = $('#navs dt').index(this);
            $('#menu ul').removeClass('active').eq(index).addClass('active');
        }
    })
	
});
