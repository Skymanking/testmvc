var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-change').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var pro = btn.data('pro');
            var use = btn.data('use');
            $.ajax({
                url: "/Project/ChangeStatusMember",
                data: { pro: pro, use: use },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        btn.html("<span class='fa fa-edit'></span>");
                    }
                    else {
                        btn.html("<span class='fa fa-eye'></span>");
                    }
                }
            });
        });
    }
}
item.init();