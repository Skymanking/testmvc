var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-addtool').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idper = btn.data('idper');
            var idite = btn.data('idite');
            var itemname = btn.data('itemname');
            var note = btn.data('note');
            var startdate = btn.data('startdate');
            var enddate = btn.data('enddate');
            var quantity = btn.data('quantity');

            $.ajax({
                url: "/Personal/AddTool",
                data: { idper: idper, idite: idite, itemname: itemname, note: note, startdate:startdate, enddate:enddate , quantity: quantity},
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
