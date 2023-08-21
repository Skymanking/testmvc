let checked = 0;
function address1() {
    let Address = document.getElementById("Addr1").value +"@@@";
    Address = Address + document.getElementById("Addr2").value + "@@@";
    Address = Address + document.getElementById("Addr3").value + "@@@"
    Address = Address + document.getElementById("Addr4").value + "@@@";
    Address = Address + document.getElementById("City").value + "@@@";
    Address = Address + document.getElementById("County").value + "@@@";
    document.getElementById("Address").value = Address;
}
function checkNCC() {
    let name = document.getElementById("VendorName").value;
    $.ajax({
        url: "/Vendor/CheckNameNCC",
        data: { name: name},
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response == 1) {
                alert("Mã NCC đã tồn tại");
                checked = 1;
            }
            else {
                checked = 0;
            }
        }
    });
}
function checkItemCode() {
    let name = document.getElementById("ItemCode").value;
    $.ajax({
        url: "/Item/checkItemCode",
        data: { name: name },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response == 1) {
                alert("Mã Item đã tồn tại");
                checked = 1;
            }
            else {
                checked = 0;
            }
        }
    });
}
function checkItemName() {
    let name = document.getElementById("NameItem").value;
    $.ajax({
        url: "/Item/checkItemName",
        data: { name: name },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response == 1) {
                alert("Tên Item đã tồn tại");
                checked = 1;
            }
            else {
                checked = 0;
            }
        }
    });
}
function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByClassName(chkboxName);
    var checkboxesChecked = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].id);
        }
    }
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}
// Call as
function checkallVendor() {
    var checkedBoxes = getCheckedBoxes("abc");
    console.log(typeof checkedBoxes)
    $.ajax({
        url: "/vendaddr_mst/UpdateVendor",
        data: { listVendor: checkedBoxes },
        dataType: "json",
        traditional: true,
        type: "POST",
        success: function (response) {
            if (response == 0) {
                alert("Cập thành công");
                location.reload();
            }
            else {
                alert("Cập không thành công");
            }
        }
    });
};
function checkallItem() {
    var checkedBoxes = getCheckedBoxes("abc");
    console.log(typeof checkedBoxes)
    $.ajax({
        url: "/item_mst/UpdateItem",
        data: { listItem: checkedBoxes },
        dataType: "json",
        traditional: true,
        type: "POST",
        success: function (response) {
            if (response == 0) {
                alert("Cập thành công");
                location.reload();
            }
            else {
                alert("Cập không thành công");
            }
        }
    });
};
function toggle(source) {
    checkboxes = document.getElementsByClassName('abc');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
function CheckCreate() {
    address1();
    if (checked == 1) {
        alert("Tên hoặc mã đã tồn tại");
        event.preventDefault();
    }
    else if (document.getElementById("BankCode").value == "0") {
        alert("Chưa chọn ngân hàng");
        event.preventDefault();
    }
    else if (document.getElementById("Category").value == "0") {
        alert("Chưa chọn loại nhà cung cấp");
        event.preventDefault();
    }
    else if (document.getElementById("Address").value == "@@@@@@@@@@@@@@@@@@") {
        alert("Chưa điền địa chỉ");
        event.preventDefault();
    }
    else if (document.getElementById("VendorName").value == "") {
        alert("Chưa điền tên NCC");
        event.preventDefault();
    }
    else {
        $("form").submit();
    }
}
function CheckCreateItem() {
    if (checked == 1) {
        alert("Tên hoặc mã đã tồn tại");
        event.preventDefault();
    }
    else if (document.getElementById("ItemCode").value == "") {
        alert("Chưa điền nã Item");
        event.preventDefault();
    }
    else if (document.getElementById("Name").value == "") {
        alert("Chưa nhập tên Item");
        event.preventDefault();
    }
    else if (document.getElementById("ProductCode").value == 0) {
        alert("Chưa chọn Product Code");
        event.preventDefault();
    }
    else {
        $("form").submit();
    }
}
