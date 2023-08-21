var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('#huydon').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/PurchaseOrder/Cancel",
                data: { id: id },
                dataType: "text",
                type: "POST",
                success: function (response) {

                    console.log(response);
                    window.location = '/PurchaseOrder';
                }
            });
        });
    }
}
item.init();