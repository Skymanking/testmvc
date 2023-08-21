var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-readall').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/Notification/ReadAll",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                }                
            });
            location.reload();           
        });
    }
}
item.init();