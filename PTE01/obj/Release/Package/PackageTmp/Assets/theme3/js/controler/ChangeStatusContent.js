var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-status').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('key');
            $.ajax({
                url: "/Admin/Content/ChangeStatus",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        btn.html("<span class='fa fa-check fa-2x'></span>");
                    }
                    else {
                        btn.html("<span class='fa fa-times fa-2x'></span>");
                    }
                }
            });
        });
    }
}
item.init();