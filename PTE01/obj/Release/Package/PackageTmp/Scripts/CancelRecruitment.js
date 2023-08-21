var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-cancel').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var lydo = btn.data('lydo');
            $.ajax({
                url: "/ProposalRecruitment/SendMessage",
                data: { id: id, lydo: lydo },
                dataType: "text",
                type: "POST",
                success: function (response) {

                    console.log(response);
                    window.location = '/ProposalRecruitment';
                }
            });
        });
    }
}
item.init();