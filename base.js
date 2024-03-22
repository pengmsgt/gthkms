//就绪
$(function(){
	//友情链接切换
	setSt(".dropdown",".dropdown-menu");
	//首页新闻中心导航切换
	setNav(".newsNav li","active",".newsList");
})
/*友情链接切换
 *btnval 点击按钮的父元素
 * menuval 弹出菜单
 * */
function setSt(btnval,menuval) {
	$(btnval).children("a").click(function(event) {
		$(this).siblings(menuval).slideToggle();
		$(this).parent(btnval).siblings(btnval).children("ul").slideUp();
		event.stopPropagation()
	})
}

/*导航切换
 *btnVal 按钮
 *claVal 触发态样式 
 *listVal 对应的新闻盒子
 * */
function setNav(btnVal,claVal,listVal){
	$(btnVal).mousemove(function(event){
		var id=$(this).index();
		$(this).addClass(claVal).not(".gd").siblings("li").removeClass(claVal);
		$(this).parents(".repoit").find(listVal).eq(id).addClass("show").siblings(listVal).removeClass("show");
		$(this).siblings(".gd").children("a").eq(id).addClass("show").siblings().removeClass("show")
		event.stopPropagation();
	})
}
