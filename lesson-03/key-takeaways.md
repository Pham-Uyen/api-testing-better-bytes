# Lesson 03: Authentication / Authorization
- Với 1 hệ thống, sẽ có nhiều người dùng với nhiều quyền hạn khác nhau. Trong đó: 
    - Authentication: Xác thực (trả lời câu hỏi bạn có quyền truy cập vào hệ thống hay không?)
    - Authorization: Uỷ quyền (người dùng có quyền hạn gì trong hệ thống?)

## Terms
- Username, Password: một cặp dùng để xác thực người dùng
- Session, cookie: Session-Cookie là một phương pháp xác thực dựa trên trạng thái (stateful authentication), trong đó server duy trì trạng thái đăng nhập của người dùng bằng session, còn client lưu session ID dưới dạng cookie
    - Session: lưu ở trên server
    - Cookie: lưu ở dưới máy tính của client
    - Khi người dùng đăng nhập lần đầu tiên, server tạo ra 1 session và lưu nó ở server, sau đó mã hoá và gửi cho client để lưu ở trong cookie. Từ đó, mỗi lên client gửi request lên server sẽ được xác thực/uỷ quyền bằng cookie
- Base64 encode/decode: mã hoá/giải mã sử dụng thuật toán base 64
- Token: Một chuỗi ký tự ngẫu nhiên dùng để xác thực người dùng hoặc ứng dụng
    - Được tạo ra sau khi người dùng đăng nhập thành công
    - Thường có thời gian sử dụng ngắn hạn
    - Có thể chứa thông tin về user, quyền hạn, thời gian hết hạn
    - Các dạng token phổ biến: 
        - Session Token (dùng trong session-cookie authentication).
        - Bearer Token (thường dùng trong OAuth 2.0) (sử dụng base 64 để mã hoá)
        - JWT (JSON Web Token): Bearer token theo format (mã hoá base64 theo format header.body.signature)
    - Refresh Token là một loại token dùng để cấp mới Access Token khi Access Token hết hạn, giúp người dùng không phải đăng nhập lại.
- API key: một chuỗi ký tự duy nhất được cấp cho ứng dụng hoặc người dùng để truy cập API:
    - Hiểu đơn giản thì như 1 thẻ khách trong 1 toà nhà, không có account người dùng 
- Phân biệt Token + API key: Token thuộc về người dùng, còn API key chỉ là 1 thẻ truy cập tạm thời
- API key không giống OTP

## Authentication methods
- Session - Cookie Auth: 
    - Khi người dùng đăng nhập lần đầu tiên, server tạo ra 1 session và lưu nó ở server, sau đó mã hoá và gửi cho client để lưu ở trong cookie. Từ đó, mỗi lên client gửi request lên server sẽ được xác thực/uỷ quyền bằng cookie
    - Sau khi đăng xuất: Server xoá session 
- Basic authentication: thông tin đăng nhập (username + password) được mã hoã bằng base64 và gửi trong mỗi request  
    - Format: Authorization: Basic Base64(username:password) (nằm trong header của API)
- API key: Thực hành: tạo 1 issue trên Github

## Javascript
### Câu điều kiện
- Dùng để kiểm soát luồng chương trình, thực hiện các hành động khác nhau dựa trên cácvđiều kiện cụ thể
- If: 
```javascript
    // if: thực thi câu lệnh chỉ khi điều kiện đúng
    if (điều kiện) {
        //code
    };

    // if ..... else: Nếu điều kiện `true`,thực hiện khối lệnh trong `if`. Nếu `false`, thực hiện khối lệnh trong khối lệnh `else`: 
    if (điều_kiện) {
        // code if true
    } else {
        // code if false
    };

    // if else if: Kiểm nha nhiều điều kiện liên tiếp: 
    if (điều_kiện_1) {
        // code 1
    } else if (điều_kiện_2) {
        // code 2
    } else {
        // code 3
    }
```
 