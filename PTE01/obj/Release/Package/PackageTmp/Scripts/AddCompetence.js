var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.addcompetence').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idpers = btn.data('idpers');
            var idcoms = btn.data('idcoms');
            var levelss = btn.data('levelss');
            var completedates = btn.data('completedates');

            $.ajax({
                url: "/Personal/AddCompetence",
                data: { idpers: idpers, idcoms: idcoms, levelss: levelss, completedates: completedates },
                dataType: "text",
                type: "POST",
                success: function (response) {


                }
            });
            window.location = '/Personal/Edit/' + idpers;

        });
    }
}
item.init();