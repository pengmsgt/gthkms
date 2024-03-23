$(function(){
    function placeholder(target){

        $(target).val($(target).attr("datavalue")).addClass("inp");
        $(target).focus(function() {
            if($(this).val() == $(this).attr("datavalue")) {
                $(this).val("").removeClass("inp");
            }

        });
        $(target).blur(function(){
            if($(this).val() == "" || $(this).val() == $(this).attr("datavalue")) {
                $(this).val($(target).attr("datavalue")).addClass("inp");
            }
        })
    }
    placeholder(".ipt")
$("[placeholder]")
    .focus(function() {
        var input = $(this);
        if (input.val() == input.attr("placeholder")) {
            input.val("");
            input.removeClass("placeholder");
        }
    })
    .blur(function() {
        var input = $(this);
        if (input.val() == "" || input.val() == input.attr("placeholder")) {
            input.addClass("placeholder");
            input.val(input.attr("placeholder"));
        }
    })
    .blur()
    .parents("form")
    .submit(function() {
        $(this).find("[placeholder]").each(function() {
            var input = $(this);
            if (input.val() == input.attr("placeholder")) {
                input.val("");
            }
        });
    });
});
//公共样式
$(function () {
    //一级页面导航nav添加active
    function func5(arg){
        var lmcode = $('meta[name="ColumnName').attr('content');
		
        $(arg).each(function() {
            var lmmc = $(this).text().replace(/[\r\n]/g,"").replace(/[ ]/g,"");
			
            if(lmcode == lmmc) {
                  $(arg).removeClass('activer_li');
					$(this).addClass('activer_li');
				//$(this).siblings('li').removeClass('activer');
            }else{
				//$(".water_channel_li ul li").eq(0).addClass("activer");
			}
        });
    }
    func5('.channel_div li');

	function func6(arg,arg1){
		var lmcode = $(arg1).text().replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "").replace(/\s+/g, "");
		$(arg).each(function() {
			var lmmc = $(this).text().replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "").replace(/\s+/g, "");
			if(lmcode.indexOf(lmmc)!=-1) {
			  $(arg).removeClass('activer_li');
            $(this).addClass('activer_li');
			}
		});
	}
	func6('.channel_div li','.crumbs');
});

$('.tbody_right_one ul li').mousemove(function () {
    $(this).addClass('new_activer').siblings('li').removeClass('new_activer');  // 删除其他兄弟元素的样式
    $(".yaowen_list").hide().eq($(this).index()).show();
    $(".more_hide2").hide().eq($(this).index()).show();
});
$('.head_channel_ul ul li').mousemove(function () {
    $(this).addClass('channel_activer').siblings('li').removeClass('channel_activer');  // 删除其他兄弟元素的样式
});

$('.tab_channel ul li').mousemove(function () {
    $(this).addClass('tab_activer').siblings('li').removeClass('tab_activer');  // 删除其他兄弟元素的样式
    $(".container_body3").hide().eq($(this).index()).show();
    // $(".more_hide2").hide().eq($(this).index()).show();
});

$('.zwgk_new_top ul li').mousemove(function () {
    $(this).addClass('new_top_activer').siblings('li').removeClass('new_top_activer');  // 删除其他兄弟元素的样式
    $(".zwgk_new_body").hide().eq($(this).index()).show();
    // $(".more_hide2").hide().eq($(this).index()).show();
});
$(function () {
	for (var i = 0; i < document.links.length; i++) {
		var url = document.links[i].href.toLowerCase();
		if (url.indexOf("http://localhost") == -1 && url.indexOf("http://172.31.0.11:8888") == -1&& url.indexOf("ftp://58.16.65.217:90/") == -1&& url.indexOf("http://cms.changdu.gov.cn:8004") == -1&& url.indexOf("http://bianba.changdu.gov.cn/") == -1&& url.indexOf("192.168.3.33") == -1&& url.indexOf("javascript:") == -1 && url != "#" && !document.links[i].onclick) {
			document.links[i].onclick = function () {
				return confirm("您将离开昌都市边坝县人民政府，请您注意网络安全，保护隐私！")
			};
		}
	}

        $(document).ready(function(){

           $("img").each(function(){
               var src = $(this).attr("src");
               if(src.indexOf("cdrmzf") != -1){
                   if(src.indexOf("http://www.changdu.gov.cn") != -1){
                       $(this).attr("src",src);
                   }else{
                       $(this).attr("src","http://www.changdu.gov.cn" + src);
                   };
               }else{
                   $(this).attr("src",src);
               };
           });

        });
});

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