var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-status').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/DeviceHandover/ChangeStatus",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        btn.html("<span class='fa fa-check-circle-o fa-2x'style='color: #0cb583;font-size: 30px;'></span>");
                    }
                    else {
                        btn.html("<span class='fa fa-times-circle-o fa-2x' style='color: #f90d0d;font-size: 30px;'></span>");
                    }
                }
            });
        });
    }
}
item.init();