var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btndelete').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/Question/Delete",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                }
            });
            window.location.reload();
        });
    }
}
item.init();