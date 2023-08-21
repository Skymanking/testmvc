var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('#addHandover').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var iddevs = btn.data('iddevs');
            var idpers = btn.data('idpers');
            var dates = btn.data('dates');
            var reasons = btn.data('reasons');
            var notes = btn.data('notes');

            $.ajax({
                url: "/Device/AddHandover",
                data: { iddevs: iddevs, idpers: idpers, dates: dates, reasons: reasons, notes: notes },
                dataType: "text",
                type: "POST",
                success: function (response) {


                }
            });
            window.location = '/Device/Index/' ;

        });
    }
}
item.init();