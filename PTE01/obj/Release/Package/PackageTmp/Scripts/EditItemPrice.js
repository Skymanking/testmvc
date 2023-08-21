var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.editPrice').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var iditeme = btn.data('iditeme');
            var idvendore = btn.data('idvendore');
            var pricee = btn.data('pricee');
            $.ajax({
                url: "/ItemPrice/EditPrice",
                data: { iditeme: iditeme, idvendore: idvendore, pricee: pricee },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location = '/ItemPrice/';

        });
    }
}
item.init();