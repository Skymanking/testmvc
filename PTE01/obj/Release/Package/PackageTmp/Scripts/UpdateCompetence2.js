var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.updatecompetence').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var name = btn.data('name');
            var type = btn.data('type');
            var action = btn.data('action');

            $.ajax({
                url: "/Competence/Update",
                data: { id: id, name: name, type: type, action: action },
                dataType: "text",
                type: "POST",
                success: function (response) {


                }
            });
            window.location = '/Competence/';

        });
    }
}
item.init();