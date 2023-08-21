var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-createU').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var nguoimoi = btn.data('nguoimoi');
            var time1 = btn.data('time1');
            var time2 = btn.data('time2');
            var note = btn.data('note');
            $.ajax({
                url: "/OverTime/AddUser",
                data: { id: id, nguoimoi: nguoimoi, time1: time1, time2: time2, note: note },
                dataType: "text",
                type: "POST",
                success: function (response) {
                }
            });
            window.location = '/OverTime/Edit/' + id;

        });
    }
}
item.init();