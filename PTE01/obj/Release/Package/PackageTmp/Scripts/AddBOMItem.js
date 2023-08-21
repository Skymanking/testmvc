var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.addNVL').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var iditem = btn.data('iditem');
            var quantity = btn.data('quantity');
            var type = btn.data('type');
            $.ajax({
                url: "/Product/AddBOMItem",
                data: { id: id, iditem: iditem, quantity: quantity, type: type},
                dataType: "text",
                type: "POST",
                success: function (response) {


                }
            });
            window.location = '/Product/View/' + id;

        });
    }
}
item.init();