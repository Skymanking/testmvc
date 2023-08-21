var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('#notnghi').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/ProposalLeave/LeaveNOT",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        window.location = '/ProposalLeave/Index/';
                    }
                    else {

                    }
                }
            });
        });
    }
}
item.init();