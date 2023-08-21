﻿var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-createU').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var nguoimoi = btn.data('nguoimoi');
            $.ajax({
                url: "/Project/AddMember",
                data: { id: id, nguoimoi: nguoimoi },
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