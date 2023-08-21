var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-approval').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var link = btn.data('link');
            $.ajax({
                url: "/Notification/Readed",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {


                }
                
            });
            window.location = link;
           
        });
    }
}
item.init();