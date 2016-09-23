function getNearBus(di, si, callback) {
	var url = "/webapp.php/line/nearbus.html";
	$.post(url, {
		i : 21,
		di : di,
		si : si,
		msi : '1',
		t : 'aoba',
		r: 2			}, callback);
}
var timer;
$(".btn1").click( function() {
    $(".car-station").hide(100);
    var msgview = $(this).next(".car-station");
    var sender = $(this);
    msgview.html("<p>數據查詢中...</p>");
    msgview.show(400);
    window.clearTimeout(timer);
    var request = function() {
      getNearBus(sender.attr("di"), sender.attr("si"), function(data, status) {
      	if (status == "success"){
      		msgview.html(data);
      	} else
      		msgview.html("&nbsp;");
      })
    };
    request();
    timer = window.setInterval(request,10*1000);
});
