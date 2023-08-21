var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.editPrice').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var itemid = btn.data('itemid');
            var quantity = btn.data('quantity');
            var unit2 = btn.data('unit2');
            $.ajax({
                url: "/ItemPacking/EditPacking",
                data: { itemid: itemid, quantity: quantity, unit2: unit2 },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location = '/ItemPacking/';

        });
    }
}
item.init();