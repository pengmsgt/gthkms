$(function(){

	//非一级页面导航nav添加on
	function func6(arg,arg1){
		var lmcode = $.trim($(arg1).text());
		$(arg).each(function() {
			var lmmc = $.trim($(this).find("a").text());
			if(lmcode.indexOf(lmmc) != -1) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
	}
	func6('.navF li','.crumbs');
	//func6('.czzj_left .cr_main ul li','.crumbs');

	function func5(arg){
		var lmcode = $('meta[name="ColumnName"]').attr('content');
		$(arg).each(function() {
			var lmmc = $.trim($(this).find("a").text());
			if(lmcode == lmmc) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		})
	}
	func5('.navF li');

	//非一级页面导航nav添加on
	function func4(arg,arg1){
		var lmcode = $.trim($(arg1).text());
		$(arg).each(function() {
			var lmmc = $.trim($(this).text());
			if(lmcode.indexOf(lmmc) != -1) {
				$(this).addClass('dis').siblings().removeClass('dis');
			}
		});
	}
	func4('.navbar li','.crumbs');

	// 友情链接切换		
		
	for (var i = 0; i < document.links.length; i++) {
		var url = document.links[i].href.toLowerCase();
		if (url.indexOf("http://localhost") == -1 &&  url.indexOf("http://172.31.0.11") == -1&&   url.indexOf("javascript:") == -1 && url.indexOf("http://cms.changdu.gov.cn:8004") == -1 && url.indexOf("http://zuogong.changdu.gov.cn/") == -1 && url.indexOf("http://www.zuogong.gov.cn/") == -1 && url != "#" && !document.links[i].onclick) {
			document.links[i].onclick = function () {
				return confirm("您将离开昌都市左贡县人民政府网，确定继续吗？")
			};
		}
	}
        

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
 
    $(document).ready(function(){

           $("img").each(function(){
               var src = $(this).attr("src");
               if(src.indexOf("cdrmzf") != -1){
                   $(this).attr("src","http://www.changdu.gov.cn" + src);
               }else{
                   $(this).attr("src",src);
               };
           });

        });
});
