var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.xoaUser').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idmeet = btn.data('idmeet');
            var user = btn.data('user');
            $.ajax({
                url: "/Meeting/DeleteUserMeeting",
                data: { idmeet: idmeet, user: user },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $('#' + user).closest('tr').hide();
                        //$('#' + user).hide();
                    }
                   
                }
            });
        });
    }
}
item.init();