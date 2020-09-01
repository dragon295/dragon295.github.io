<script>
        $(function () {
            getUsersAPI(renderContent);
        })

        function renderContent(users) {
            let htmlContent = '';

            for (let i = 0; i < users.length; i++) {
                htmlContent += '<tr>';
                htmlContent += '<td>' + users[i].name + '</td>';
                htmlContent += '<td>' + (users[i].birthYear || 'Chưa biết') + '</td>';
                htmlContent += '<td>' + users[i].email + '</td>';
                htmlContent += '<td>' + users[i].phone + '</td>';
                htmlContent += '<td>' +
                    '<a href="/edit.html?id=' + users[i].id + '" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a> | ' +
                    '<a href="javascript:void(0)" class="text-danger" onclick="deleteUser(' + users[i].id + ', this)"><i class="fa fa-trash-alt"></i> Xóa</a>' +
                    '</td>';
                htmlContent += '</tr>';
            }

            $('table tbody').html(htmlContent);
        }

        function deleteUser(id, aElement) {
            const result = confirm('Bạn có chắc chắn muốn xóa học viên này?');
            if (result) {
                deleteUserAPI(id, function () {
                    const tdElement = $(aElement).parent();
                    const trElement = tdElement.parent();
                    trElement.remove();
                })
            }
        }
    </script>