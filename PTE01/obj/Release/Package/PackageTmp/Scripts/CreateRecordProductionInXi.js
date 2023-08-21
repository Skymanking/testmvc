//var item = {
//    init: function () {
//        item.registerEvents();
//    },
//    registerEvents: function () {
//$('.btn-saveitem').off('click').on('click', function (e) {
    $('.btn-saveitem').on('click', function (e) {
        //e.preventDefault();
        
            var btn = $(this);
            var planid = btn.data('planid');
            var itemid = btn.data('itemid');
            var lineid = btn.data('lineid');
            var slok = btn.data('slok');
            var tagid = btn.data('tagid');
            var ngayep = btn.data('ngayep');

            $.ajax({
                url: "/RecordProduction/CreateRecordInXi",
                data: { planid: planid, itemid: itemid, lineid: lineid, slok: slok, ngayep: ngayep, tagid: tagid },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        setTimeout(function () {
                            btn.html("<i class='fa fa-save'></i> Lưu thông tin");
                            btn.show();
                            location.reload();
                        }, 4000); //delay is in milliseconds 
                        setTimeout(function () {
                            btn.html("<span class='fa fa-check fa-2x'></span>thành công");
                            alert("Thông báo\n đã lưu thông tin thành công" );
                            btn.show();
                            btn.attr("data-slok", '');
                        }, 2000); //delay is in milliseconds 

                        btn.hide();
                        //$('#tagid_'+planid).val('');
                       
                    }
                    else {
                        var info = response.thongbao;
                        setTimeout(function () {
                            btn.html("<i class='fa fa-save'></i> Lưu thông tin");
                            btn.show();
                        }, 8000); //delay is in milliseconds 
                        setTimeout(function () {
                          
                            btn.html("<span class='fa fa-times fa-2x'></span>thất bại");
                            alert("Cảnh báo\n" + info);
                            btn.show();
                        }, 2000); //delay is in milliseconds 

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
//    }
//}
//item.init();
