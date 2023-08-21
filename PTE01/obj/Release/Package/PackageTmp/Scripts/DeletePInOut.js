var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-delete').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/PInOut/Delete",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                   
                    window.location = window.location.href;
                }
            });
        });
    }
}
item.init();