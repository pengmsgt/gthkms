$(function () {
    $.ajax({
        url: 'https://www.gov.cn/pushinfo/v150203/pushinfo.jsonp',
        dataType: "jsonp",
        scriptCharset: 'UTF-8',
        jsonp: "pushInfoJsonpCallBack",
        jsonpCallback: "pushInfoJsonpCallBack",
        success: function (data) {
            $.each(data, function (i, json) {
                if (i >= 7) { return false; }
                    $(".gwyxxlist").append("<li class='otows'><span class='newsDate'>"+json.pubDate+"</span><a  target='_blank' title='" + json.title + "' href='" + json.link + "'>" + json.title + "</a></li>")
            });
        },
        error: function () {
            //alert("错误");
            ;
        },
    });

    $.ajax({
        url: 'http://www.changdu.gov.cn/xwzx_406/zwyw/jsonp.json',
        type: "get",
        dataType: 'jsonp',
        jsonp: 'pushInfoJsonpCallBackXZ',
        jsonpCallback: 'pushInfoJsonpCallBackXZ',
        success: function (data) {
            $.each(data, function (i, json) {
                if (i >= 7) { return false; }
                    $(".zzqxxlist").append("<li class='otows'><span class='newsDate'>"+json.pubDate+"</span><a  target='_blank' title='" + json.title + "' href='" + json.link + "'>" + json.title + "</a></li>")
            });
        },
        error: function () {
            console.log('错误')
        }

    });
    // 详情地址要变，
    var ipUrl = "http://cms.changdu.gov.cn:8010",                    //ip地址
        departmentId = "45ca549edf69424c92e3a01e05be22c1";      //传的ID
    //新建列表接口
    function mailList(index, size, id) {
        var folder = "/zgx/c100476/",                                            //文件夹名称
            strUrl = folder + "hd_xjxq.shtml",                       //详情页   上传到CMS时把html改成shtml
            url = ipUrl + "/communication/api-mailbox/frontMail/mailList";
        var href = strUrl;
        var data = {
            "pageNum": index,
            "pageSize": size,
            "sortMap": {
                "createTime": "desc"
            },
            "params": {
                "phone": "",
                "searchCode": "",
                "deptId": id
            }
        };
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            dataType: "json",
            type: "post",
            contentType: "application/json",
            success: function (data) {
                if (data.status == 'success') {
                    var datas = data.data,
                        rows = datas.rows,
                        html = '',
                        length = rows.length;
                    var times = '';
                    //console.log(datas);


                    // 生成
                    if (length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            times = rows[i].createTime;
                            times = times.split(' ')[0];
                            html += '<li class="otows">'
                                + '<a href="' + href + "?id=" + rows[i].id + '">' + rows[i].title + '</a>'
                                + '</li>';

                        }
                    };

                    $('#xjbox').html(html);
                }
            },
            error: function (data) {
                console.log('error:' + JSON.stringify(data));
            }
        });
    };

    //mailList(1,4,departmentId);

    function xjlb(index, size) {

        //参数
        var ipUrl = "http://12345.changdu.gov.cn:9060";
        var xjListUrl = ipUrl + "/cf-web/servlet/orderQuery?action=queryPubAppealJsonp";
        var listData = { pageNum: index, pageSize: size, requestTopic: "" },
            listData = { data: JSON.stringify(listData) };

        $.ajax({
            url: xjListUrl,
            data: listData,
            dataType: "jsonp",
            type: "post",
            success: function (data) {

                if (data.code == "0010") {

                    var arr = data.data;
                    var length = arr.length;
                    var html = '';
                    //清除
                    $("#xjbox").empty();

                    // 生成
                    if (length > 0) {
                        for (var i = 0; i < length; i++) {
                            html += '<li class="otows">'
                                + '<a href="' + ipUrl + '/cf-web/pages/order/order-detail.jsp?type=public&instId=' + arr[i].instId + '" target="_blank">' + arr[i].requestTopic + '</a>'
                                + '</li>';
                        };
                    };

                    $('#xjbox').append(html);
                }

            },
            error: function (data) {
                console.log('error:' + JSON.stringify(data));
            }
        })

    };

    xjlb("1", "4");

})