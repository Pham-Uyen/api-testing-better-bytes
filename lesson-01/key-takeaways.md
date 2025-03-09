# Key takeaways API testing lesson 01

## API là gì?
- APT là viết tắt của Application Programing Interface
- Ra đời vào những năm 1960s khi các hệ điều hành cần có cách để các trường trình giao tiếp với nhau và trở nên phổ biến khi web phát triển (~ những năm 2000). Đến nay, API trở thành 1 thành phần không thể thiếu
- API ra đời để giải quyết các bài toán: 
    - Các hệ thống, phần mềm có thể giao tiếp với nhau → phát triển độc lập và nhanh
    - API giúp việc xây dựng hệ thống như chơi trò lắp ghép
- API test cần thiết vì: 
    - Đảm bảo dữ liệu hoạt động đúng mong đợi (dữ liệu cần chính xác)
    - Phát hiện lỗi sớm hơn
    - Đảm bảo hiệu năng (web hoạt động tốt trong mọi điều kiện tải)
    - Bảo mật (API thường trao đổi dữ liệu nhạy cảm) => cần đảm bảo tránh được những cuộc tấn công

## Các hình thức test API phổ biến
- Functional testing: Kiểm thử chức năng, đảm bảo API hoạt động đúng mong đợi
- Load testing: Kiểm thử tải (Kiểm tra hiệu suất khi API chịu tải lớn)
- Security test: Kiểm thử bảo mật để xác định lỗ hổng bảo mật của API
- Integration testing: 
    - Kiểm thử kết hợp sau khi kiểm thử riêng lẻ từng API
    - Đảm bảo API hoạt động tốt khi kết hợp với các hệ thống khác

## Các loại API phổ biến
- WeB APIs (REST, SOAP, GraphQL): 
    - Rest API: Sử dụng các phương thức HTTP (đơn giản, dễ sử dụng, khả năng mở rộng cao)
    - SOAP: Sử dụng giao thức XML, thường được dùng trong hệ thống Enterprise cần tính bảo mật cao
    - GraphQL: Được Facebook phát triển vào 2012, thường được ứng dụng trong các hệ thống blockchain
- Library/Framework APIs: 
    - Cho phép lập trình viên sử dụng những tính năng có sẵn (Java API,.....)
- Operating system APIs: 
    - Máy tính của chúng ta, bản chất là các tập lệnh cho CPU xử lý.
    - Operating system APIs là API của tập lệnh CPU
    - Cho phép tương tác với hệ điều hành
- Hardware APIs: 
    - Cho phép phần mềm giao tiếp với phần cứng
    VD: Camera API, Printer API

## Các công cụ test API phổ biến
- Postman, Post-assured, Jmeter, ....
- Khoá học tập trung vào Postman + Playwright

## XML 
- XML: eXtensible Markup Languages
- Là "ngôn ngữ đánh dấu", "tự giải thích"
- Mỗi data trong XML nằm trong 1 thẻ mở và 1 thẻ đóng, đánh dấu vị trí này lưu giá trị gì
- Lưu ý: Viết xml nên viết đủ thẻ mở thẻ đóng xong mới viết data
- VD: 
```xml
<name>Nguyen Van A</name>
<age>20</age>
<major>Computer Science</major>
<gpa>3.7</gpa>
<courses> 
    <course>Programing Fudamentals</course>
    <course>Data Structures</course>
    <course>Web Development</course>
</courses>
```

## Json
- Json: JavaScript Object Notation 
- Là định dạng text, dùng format của Javascript Object
- Dùng để truyền dữ liệu tương tự xml nhưng nhẹ hơn 
- Không phụ thuộc vào ngôn ngữ lập trình 
- Cũng "tự giải thích" thông qua các key (key - value)
- Khoá học này chủ yêu đi vào json
- VD: 
```json
{
    "name": "Nguyen Van A",
    "age": 20,
    "major": "Computer Science",
    "gpa": 3.7,
    "courses": [
        "Programing Fudamentals",
        "Data Structure",
        "Web Development"
    ]
}
```
