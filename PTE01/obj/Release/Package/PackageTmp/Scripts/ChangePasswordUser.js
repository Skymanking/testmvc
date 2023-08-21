var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-cancel').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var pass = btn.data('pass');
            $.ajax({
                url: "/Login/ChangePassword",
                data: { pass: pass },
                dataType: "text",
                type: "POST",
                success: function (response) {

                    console.log(response);
                    window.location = '/';
                }
            });
        });
    }
}
item.init();