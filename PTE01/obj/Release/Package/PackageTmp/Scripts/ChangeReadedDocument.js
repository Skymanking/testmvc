var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.change-status').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/Document/ChangeStatusRead",
                data: { id: id},
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        btn.html("<img src='/Assets/theme3/dist/img/icon-Faccept.png' />");
                    }
                    else {
                        btn.html("<img src='/Assets/theme3/dist/img/icon-Fwarning.png' />");
                    }
                }
            });
        });
    }
}
item.init();