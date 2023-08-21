var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-removeU').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var nguoimoi = btn.data('nguoimoi');
            $.ajax({
                url: "/Training/RemoveUser",
                data: { id: id, nguoimoi: nguoimoi },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location = '/Training/Edit/' + id;

        });
    }
}
item.init();