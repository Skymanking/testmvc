var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-createP').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var keyname = btn.data('keyname');
            var keystart = btn.data('keystart');
            var keyend = btn.data('keyend');
            $.ajax({
                url: "/Project/AddKey",
                data: { id: id, keyname: keyname, keystart: keystart, keyend: keyend },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location = '/Project/Edit2/' + id;

        });
    }
}
item.init();