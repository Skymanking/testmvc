var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-cancel').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var itemid = btn.data('itemid');
            var itemname = btn.data('itemname');
            var quantity = btn.data('quantity');
            var unit1 = btn.data('unit1');
            var unit2 = btn.data('unit2');

            $.ajax({
                url: "/ItemPacking/CreatePacking",
                data: { itemid: itemid, itemname: itemname, quantity: quantity, unit1: unit1, unit2: unit2},
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
