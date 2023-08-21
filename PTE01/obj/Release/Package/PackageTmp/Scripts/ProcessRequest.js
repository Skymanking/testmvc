var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindItem').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#NameItem').val();
            $.ajax({
                url: "/Item/FindName",
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response)
                    var lankanListArray = JSON.parse(response.status);
                    $("#Item").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#Item").append($("<option></option>").val(this.ItemId).html(this.ItemId + ":" + this.ItemName));
                    });


                }
            });
        });
    }
}
item.init();
function ItemChange() {
    let item1 = document.getElementById("Item")
    document.getElementById("ItemName").value = item1.options[item1.selectedIndex].text.split(":")[1];
}
function CusChange() {
    let item1 = document.getElementById("CustomerID")
    document.getElementById("CustomerName").value = item1.options[item1.selectedIndex].text.split(":")[1];
}
function deputyChange() {
    let item1 = document.getElementById("deputyID")
    document.getElementById("deputy").value = item1.options[item1.selectedIndex].text.split(":")[0];
}
//Check Create & Edit
function CheckCreate(ID) {
    let CheckDate = document.getElementById("date" + ID).value;
    let CheckMachine = "0";
    try {
        CheckMachine = document.getElementById("Machine" + ID).value;
    }
    catch {

    }
    if (CheckDate == "") {
        alert("Chưa nhập ngày");
        event.preventDefault();
    }
    else if (CheckMachine == "") {
        alert("Chưa chọn Máy ép");
        event.preventDefault();
    }
    else {
        $("form").submit();
    }
}
function CheckCreateLine(ID) {
    let CheckDate = document.getElementById("date" + ID).value;
    let CheckLine = "0";
    try {
        CheckLine = document.getElementById("Line" + ID).value;
    }
    catch {
    }

    if (CheckDate == "") {
        alert("Chưa nhập ngày");
        event.preventDefault();
    }
    else if (CheckLine == "") {
        alert("Chưa chọn Line");
        event.preventDefault();
    }
    else {
        $("form").submit();
    }
}
