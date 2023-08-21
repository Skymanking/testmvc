function Revoke(IDPer, UserName) {
    $.ajax({
        url: "/ChangePermission/Revoke",
        data: { IDPer: IDPer, UserName: UserName },
        dataType: "json",
        type: "POST",
        success: function (response) {
            location.reload();
        }
    });
}