var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-cancel1').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var itemid = btn.data('itemid');
            var vendorid = btn.data('vendorid');
            var price = btn.data('price');
            var itemname = btn.data('itemname');

            $.ajax({
                url: "/ItemPrice/CreatePrice",
                data: { itemid: itemid, vendorid: vendorid, price: price, itemname: itemname},
                dataType: "text",
                type: "POST",
                success: function (response) {


                }
            });
            window.location = window.location.href;

        });
    }
}
item.init();
