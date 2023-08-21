var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-imported').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var no = btn.data('no');
            $.ajax({
                url: "/ProposalToBuy/ChangeStatusImport",
                data: { id: id, no: no },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        btn.html("<span class='fa fa-check fa-2x'></span>");
                    }
                    else {
                        btn.html("<span class='fa fa-times fa-2x'></span>");
                    }
                }
            });
        });
    }
}
item.init();