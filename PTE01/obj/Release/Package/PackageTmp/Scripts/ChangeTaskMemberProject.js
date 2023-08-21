var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-changeU').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idpro = btn.data('idpro');
            var user1 = btn.data('user1');
            $.ajax({
                url: "/Project/ChangeTaskMember",
                data: { idpro: idpro, user1: user1, user2: user2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    
                }
            });
            window.location = '/Project/Edit/' + idpro;
        });
    }
}
item.init();