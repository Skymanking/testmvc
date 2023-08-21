var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-changeOM').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var user = btn.data('user');
            $.ajax({
                url: "/User/ChangeOffMail",
                data: { user: user },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                       
                        btn.html("<span style='background: red;padding: 10px;border-radius: 25px;font-weight: bold;color: white;'>Tắt nhận Mail <i class='fa fa-envelope' style='font-size: 20px;color: white;'></i></span>");
                    }
                    else {
                        btn.html("<span style='background: #28a745; padding: 10px; border-radius: 25px; font-weight: bold; color: white;'>Bật nhận Mail <i class='fa fa-envelope' style='font-size: 20px;color: white;'></i></span>");
                    }
                }
            });
        });
    }
}
item.init();