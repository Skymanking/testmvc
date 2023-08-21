﻿var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
$('.btn-saveitem').off('click').on('click', function (e) {
    e.preventDefault();
    var btn = $(this);
    var planid = btn.data('planid');
    var itemid = btn.data('itemid');
    var lineid = btn.data('lineid');
    var stepname = btn.data('stepname');
    var slok = btn.data('slok');
    var tagid = btn.data('tagid');
    var tagidold = btn.data('tagidold');
    var slng = btn.data('slng');

    $.ajax({
        url: "/RecordProduction/CreateRecordOuXi",
        data: { planid: planid, itemid: itemid, lineid: lineid, stepname: stepname, slok: slok, slng: slng, tagid: tagid, tagidold: tagidold },
        dataType: "json",
        type: "POST",
        success: function (response) {
            console.log(response);
            if (response.status == true) {
                setTimeout(function () {
                    btn.html("<i class='fa fa-save'></i> Lưu thông tin");
                    btn.show();
                }, 4000); //delay is in milliseconds 
                setTimeout(function () {
                    btn.html("<span class='fa fa-check fa-2x'></span>thành công");
                    btn.show();
                    alert("Thông báo\n Đã lưu dữ liệu thành công");
                    btn.attr("data-slok", '');
                }, 4000); //delay is in milliseconds 

                btn.hide();
                window.location.href = '../RecordProduction/Index2OuXi';
            }
            else {
                setTimeout(function () {
                    btn.html("<i class='fa fa-save'></i> Lưu thông tin");
                    btn.show();
                    window.location.href = '../RecordProduction/Index2OuXi';
                }, 8000); //delay is in milliseconds 
                setTimeout(function () {
                    btn.html("<span class='fa fa-times fa-2x'></span>thất bại");
                    btn.show();
                }, 4000); //delay is in milliseconds 

                btn.hide();
                

            }

        }
    });
    var planid = null;
    var itemid = null;
    var lineid = null;
    var stepname = null;
    var slok = null;
    var tagid = null;
    var ngayep = null;

});
    }
}
item.init();