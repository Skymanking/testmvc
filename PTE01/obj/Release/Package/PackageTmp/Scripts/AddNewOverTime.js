var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-createP').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var keyreason = btn.data('keyreason');
            var keytime = btn.data('keytime');
            $.ajax({
                url: "/OverTime/Create",
                data: { keyreason: keyreason, keytime: keytime },
                dataType: "text",
                type: "POST",
                success: function (response) {

                    responseA = jQuery.parseJSON(response);
                    window.location = '/OverTime/Edit/' + responseA.status;
                }
            });
            

        });
    }
}
item.init();