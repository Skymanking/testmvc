var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.updatecompetence').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idper = btn.data('idper');
            var idcom = btn.data('idcom');
            var levels = btn.data('levels');
            var completedate = btn.data('completedate');

            $.ajax({
                url: "/Personal/UpdateCompetence",
                data: { idper: idper, idcom: idcom, levels: levels, completedate: completedate },
                dataType: "text",
                type: "POST",
                success: function (response) {


                }
            });
            window.location = '/Personal/Edit/' + idper;

        });
    }
}
item.init();