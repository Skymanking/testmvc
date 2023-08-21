var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-cancel').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var reason = btn.data('reason');
            var enddate = btn.data('enddate');
            $.ajax({
                url: "/Personal/ChangeStatus",
                data: { id: id, reason: reason, enddate: enddate },
                dataType: "text",
                type: "POST",
                success: function (response) {


                }
            });
            window.location = '/Personal/Edit2/' + id;

        });
    }
}
item.init();