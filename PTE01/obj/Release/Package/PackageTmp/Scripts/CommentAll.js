function AddComment() {
    let link = window.location.href;
    let comment = document.getElementById('commentText').value;
    if (comment == "") {
        alert("Chưa nhập comment");
        event.preventDefault();
    }
    else {
        $.ajax({
            url: "/CommentAll/AddComment",
            data: { commentText: comment, link: link },
            dataType: "text",
            type: "POST",
            success: function (response) {
                var item = JSON.parse(response);
                var body = '<div class="comment-react" id="CommentAll1_' + item.ID + '">';
                body += '<button onclick="Like(' + item.ID + ')">';
                body += '<i class="fa fa-heart" aria-hidden="false" id="Like_' + item.ID + '")><input id="CountLike_' + item.ID + '" value="0" style="background-color:transparent" readonly /></i>';
                body += '</button>';
                body += '<hr>';
                body += '</div>';
                body += '<div class="comment-container" id="CommentAll2_' + item.ID + '">';
                body += '<div class="row" style="padding:unset;">'
                body += '<div class="user">';
                body += '<div class="user-pic">';
                body += '<svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">';
                body += '<path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>';
                body += '<path stroke-width="2" fill="#707277" stroke="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>';
                body += '</svg>';
                body += '</div>';
                body += '<div class="user-info">';
                body += ' <span>' + item.userName + '</span>';
                body += ' <p>now</p>';
                body += ' </div>';
                body += '</div>';
                body += '<div style="padding-left:20px; width:70%">';
                body += '<p class="comment-content" id="Comment_' + item.ID + '">' + item.text + ' </p></div>';
                body += '<div style=" position: absolute; right: 30px;">';
                body += '<button class="fa fa-pencil" onclick="Edit(' + item.ID + ')"></button>';
                body += '<button class="fa fa-eye-slash" onclick="Hidden(' + item.ID + ')"></button></div></div></div>';
                $("#gvCustomers2").append(body);

            }
        });
        document.getElementById("commentText").value = "";
    }
}
function ReadMore(id) {
    $.ajax({
        url: "/CommentAll/ReadMore",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            var item1 = JSON.parse(response).status;
            var item = JSON.parse(item1);
            $.each(item, function (index, value) {
                var date = this.CreateDate.replace('/', '').replace('/', '').replace('Date(', '').replace(')', '');
                var like = "black";
                if (this.Like) {
                    like = "red";
                }
                var body = '<div class="comment-react" id="CommentAll1_' + this.ID + '">';
                body += '<button onclick="Like(' + this.ID + ')">';
                body += '<i class="fa fa-heart" aria-hidden="false" id="Like_' + this.ID + '" style="color:' + like + '")><input id="CountLike_' + this.ID + '" value="0" style="background-color:transparent" readonly /></i>';
                body += '</button>';
                body += '<hr>';
                body += '</div>';
                body += '<div class="comment-container" id="CommentAll2_' + this.ID + '">';
                body += '<div class="row" style="padding:unset;">'
                body += '<div class="user">';
                body += '<div class="user-pic">';
                body += '<svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">';
                body += '<path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>';
                body += '<path stroke-width="2" fill="#707277" stroke="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>';
                body += '</svg>';
                body += '</div>';
                body += '<div class="user-info">';
                body += ' <span>' + this.UserName + '</span>';
                body += ' <p>' + new Date(parseInt(date)).toLocaleDateString() + '</p>';
                body += ' </div>';
                body += '</div>';
                body += '<div style="padding-left:20px; width:70%">';
                body += '<p class="comment-content" id="Comment_' + this.ID + '">' + this.Text + ' </p></div>';
                body += '<div style=" position: absolute; right: 30px;">';
                body += '<button class="fa fa-pencil" onclick="Edit(' + this.ID + ')"></button>';
                body += '<button class="fa fa-eye-slash" onclick="Hidden(' + this.ID + ')"></button></div></div></div>';
                $("#gvCustomers2").prepend(body);
            });
        }
    });
}
function Like(id) {
    if (document.getElementById("Like_" + id).style.color == "red" || document.getElementById("Like_" + id).style.color == "rgb(255, 0, 0)") //Disslike
    {
        $("#Like_" + id).css('color', 'black');
        document.getElementById("CountLike_" + id).value = parseInt(document.getElementById("CountLike_" + id).value) - 1;
        $.ajax({
            url: "/CommentAll/Like",
            data: { id: id, type: 0 },
            dataType: "text",
            type: "POST",
            success: function (response) {
            }
        });
    }
    else {//Like
        $("#Like_" + id).css('color', 'red');
        document.getElementById("CountLike_" + id).value = parseInt(document.getElementById("CountLike_" + id).value) + 1;
        $.ajax({
            url: "/CommentAll/Like",
            data: { id: id, type: 1 },
            dataType: "text",
            type: "POST",
            success: function (response) {
            }
        });
    }
}
function Hidden(id) {
    $.ajax({
        url: "/CommentAll/Hidden",
        data: { id: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            document.getElementById("CommentAll2_" + id).remove();
            document.getElementById("CommentAll1_" + id).remove();
        }
    });
}
function Edit(id) {
    var value = document.getElementById("Comment_" + id).innerHTML;
    var text = prompt("Chỉnh sửa Comment", value);
    if (text != null || text != "") {
        $.ajax({
            url: "/CommentAll/Edit",
            data: { id: id, text: text },
            dataType: "text",
            type: "POST",
            success: function (response) {
            }
        });
        document.getElementById("Comment_" + id).innerHTML = text;
    }
    else {
        alert("Vui lòng điền nội dung");
    }

}

$(function () {
    var availableTags = [];
    $.ajax({
        url: "/CommentAll/GetListUser",
        data: {},
        dataType: "text",
        type: "POST",
        success: function (response) {
            var item = JSON.parse(response).model;
            $.each(item, function (index, value) {
                availableTags.push(this.Name);
            });
        }
    });
    function split(val) {
        return val.split(/,\s*/);
    }
    function extractLast(term) {
        return split(term).pop();
    }
    function getWord(string, index) {
        string = string + '';
        let start = -1;
        let end = string.length;
        for (let i = index; i >= 0; i--) {
            if (string[i] == "@") {
                start = i;
                break;
            }
            else if (string[i] == " ") {
                break;
            }
        }
        if (start != -1) {
            for (let j = start; j <= string.length; j++) {
                if (string[j] == " ") {
                    end == j;
                    break;
                }
            }
            return string.slice(start, end);
        }
        else {
            return "";
        }
    }
    //autocomplete
    $("#commentText").on("keyup", function (event) {
        var el1 = document.getElementById('commentText');
        let string1 = el1.value;
        let index1 = string1.slice(0, el1.selectionStart).length;
        let currentword = getWord(string1, index1);
        if (currentword[0] == "@" && currentword.length > 1) {
            $("#commentText").autocomplete({
                minLength: 1,
                source: function (request, response) {
                    // delegate back to autocomplete, but extract the last term
                    response($.ui.autocomplete.filter(
                        availableTags, extractLast(getWord(request.term, index1).replace("@", ""))));
                },
                focus: function () {
                    // prevent value inserted on focus
                    return false;
                },
                select: function (event, ui) {
                    var terms = this.value;
                    // add placeholder to get the comma-and-space at the end
                    this.value = terms.replace(currentword, "@(" + ui.item.value + ")  ").slice(0, -1);
                    return false;
                }
            });
        }
        else {
            $("#commentText").autocomplete({
                minLength: string1.length + 1,
                source: function (request, response) {
                    // delegate back to autocomplete, but extract the last term
                    response($.ui.autocomplete.filter(
                        "", extractLast(getWord(request.term, index1).replace("@", ""))));
                },
            });
        }
    })
});
