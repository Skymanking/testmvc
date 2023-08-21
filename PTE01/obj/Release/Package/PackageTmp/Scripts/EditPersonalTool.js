var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnedittool').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var manv = btn.data('manv');
            var hethsd = btn.data('hethsd');
            var ghichu = btn.data('ghichu');

            $.ajax({
                url: "/Personal/EditTool",
                data: { id: id, manv: manv, hethsd: hethsd, ghichu: ghichu},
                dataType: "text",
                type: "POST",
                success: function (response) {


                }
            });
            window.location.reload();

        });
    }
}
item.init();
