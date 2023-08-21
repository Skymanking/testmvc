var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-createP').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var deadline = btn.data('deadline');
            var lydo = btn.data('lydo');
            $.ajax({
                url: "/Task/UpdateDeadline",
                data: { id: id, deadline: deadline, lydo: lydo },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location = '/Task/Edit/' + id;

        });
    }
}
item.init();