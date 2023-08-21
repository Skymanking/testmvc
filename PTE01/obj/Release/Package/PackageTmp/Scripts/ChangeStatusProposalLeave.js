var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-changestatus').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/ProposalLeave/ChangeStatus",
                data: { id: id},
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    location.reload();
                }
            });
        });
    }
}
item.init();