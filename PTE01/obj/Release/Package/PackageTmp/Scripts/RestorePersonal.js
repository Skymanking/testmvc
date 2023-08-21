var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-restore').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/Personal/Restore",
                data: { id: id},
                dataType: "text",
                type: "POST",
                success: function (response) {
                    
                    console.log(response);
                    window.location = '/Personal';
                }
            });
        });
    }
}
item.init();