var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-importedDate').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var no = btn.data('no');
            var ngaynhap = btn.data('ngaynhap');
            $.ajax({
                url: "/ProposalToBuy/AddImportDate",
                data: { id: id, no: no, ngaynhap: ngaynhap },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        btn.html("Thành Công");
                        location.reload();
                    }
                    else {
                        btn.html("Thất Bại");
                        location.reload();
                    }
                }
            });
        });
    }
}
item.init();