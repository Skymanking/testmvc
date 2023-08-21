var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('#xacnhan').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var pass = btn.data('pass');
            $.ajax({
                url: "/Login/ComparePassword",
                data: { pass: pass },
                dataType: "text",
                type: "POST",
                success: function (response) {
                console.log(response);
                if (response.status == true) {
                    alert("Hello! I am an alert box!!");
                }
                else {
                    console.log(response);
                    window.location = '/';
                }
            }
            });
        });
    }
}
item.init();