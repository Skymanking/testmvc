var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
    $('.ravao').on('click', function (e) {
        e.preventDefault();        
            var btn = $(this);
            var id = btn.data('id');
            var type = btn.data('type');
            var note = btn.data('note');
            $.ajax({
                url: "/PInOut/CreateDetail",
                data: { id: id, type: type, note: note},
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {                       
                        setTimeout(function () {
                            btn.html("thành công");
                        }, 2000); //delay is in milliseconds 
                        setTimeout(function () {
                            window.location = '/Pinout/Checkin/';
                        }, 4000); //delay is in milliseconds 
                    }
                    else {
                        var info = response.thongbao;
                        setTimeout(function () {
                            alert("Cảnh báo\n Thao tác thất bại" );
                        }, 2000); //delay is in milliseconds           

                    }

                }
            });
        });
    }
}
item.init();
