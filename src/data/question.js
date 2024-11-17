export const questions = [
        {
          question: "Thành phần nào của hệ điều hành chịu trách nhiệm kiểm soát hoạt động?",
          options: ["Kernel", "Control program", "Resource allocater", "CPU"],
          answer: "Kernel",
        },
        {
          question: "Thành phần nào của hệ điều hành tồn tại trong bộ nhớ suốt ca làm việc cho?",
          options: ["Kernel", "Control program", "Resource allocater", "CPU"],
          answer: "Kernel",
        },
        {
          question: "Lời gọi hệ thống (system calls) là lệnh dùng để giao tiếp giữa hệ điều hành?",
          options: ["Chương trình", "Người dùng", "Tiến trình", "Phần cứng"],
          answer: "Chương trình",
        },
        {
          question: "Đặc điểm nào sau đây không phải là của hệ điều hành đơn chương?",
          options: [
            "Là hệ thống mà nhiều tác vụ có thể được nạp đồng thời vào bộ nhớ",
            "Là hệ thống chỉ có 1 CPU",
            "Là hệ thống chỉ có 1 tác vụ được lưu trong bộ nhớ tại thời điểm thực",
            "Là hệ thống mà tác vụ được thực thi tuần tự",
          ],
          answer: "Là hệ thống mà nhiều tác vụ có thể được nạp đồng thời vào bộ nhớ",
        },
        {
          question: "Trong hệ điều hành nào tiến trình được nạp vào hệ thống ở bất kỳ?",
          options: [
            "Hệ điều hành chia sẻ thời gian",
            "Hệ điều hành tập trung",
            "Hệ điều hành phân tán",
            "Hệ điều hành thời gian thực",
          ],
          answer: "Hệ điều hành chia sẻ thời gian",
        },
        {
          question: "Trong hệ điều hành nào CPU được chia sẻ giữa những người dùng?",
          options: [
            "Hệ điều hành tập trung",
            "Hệ điều hành phân tán",
            "Hệ điều hành chia sẻ thời gian",
            "Hệ điều hành thời gian thực",
          ],
          answer: "Hệ điều hành tập trung",
        },
        {
          question: "Các hệ thống đa chương trình có chia sẻ thời gian được gọi là hệ?",
          options: ["Tập trung", "Đa chương trình", "Chia sẻ thời gian", "Đa nhiệm"],
          answer: "Tập trung",
        },
        {
          question: "Kỹ thuật nào cho phép chạy cùng lúc nhiều hệ điều hành trên máy tính?",
          options: ["Ảo hóa", "Chia sẻ thời gian", "Điện toán đám mây", "Đa nhiệm"],
          answer: "Ảo hóa",
        },
        {
          question: "Nguyên tắc nào sau đây không phải là nguyên tắc thiết kế và xây dựng hệ điều hành?",
          options: [
            "Nguyên tắc tương đối trong định vị",
            "Nguyên tắc khởi tạo khi cài đặt",
            "Nguyên tắc Macro Processor",
            "Nguyên tắc đặc quyền",
          ],
          answer: "Nguyên tắc tương đối trong định vị",
        },
        {
          question: "Trong nguyên tắc thiết kế nào hệ điều hành được xây dựng từ các?",
          options: [
            "Nguyên tắc modul",
            "Nguyên tắc Macro Processor",
            "Nguyên tắc khởi tạo khi cài đặt",
            "Nguyên tắc giá trị chuẩn",
          ],
          answer: "Nguyên tắc modul",
        },   
        {
            question: "Phát biểu sau đây đúng hay sai? \"Một tiến trình chính là một chương trình.\"",
            options: ["Đúng", "Sai"],
            answer: "Đúng",
          },
          {
            question: "Hãy chọn câu trả lời đúng cho câu hỏi sau: Nhân của hệ điều hành hoạt động trong chế độ nào?",
            options: ["Chế độ đặc quyền.", "Chế độ hệ thống.", "Chế độ nhân.", "Cả 3 ý đều đúng."],
            answer: "Chế độ đặc quyền.",
          },
          {
            question: "Cấu trúc nào sau đây của hệ điều hành sử dụng nguyên tắc modul hóa?",
            options: ["Cấu trúc vi nhân.", "Cấu trúc phân lớp.", "Cấu trúc nguyên khối.", "Cấu trúc lai."],
            answer: "Cấu trúc vi nhân.",
          },
          {
            question: "Nhược điểm của cấu trúc nguyên khối là gì?",
            options: [
              "Thiếu tính mềm dẻo và độ tin cậy của hệ thống không cao.",
              "Tốc độ chậm, khó xác định số lớp và phân chia thành phần của lớp.",
              "Đòi hỏi nhiều tài nguyên hệ thống và thời gian khi chuyển đổi giữa các thành phần.",
              "Chiếm dụng dung lượng bộ nhớ lớn.",
            ],
            answer: "Thiếu tính mềm dẻo và độ tin cậy của hệ thống không cao.",
          },
          {
            question: "Phát biểu sau đây đúng hay sai? \"Trong cấu trúc phân lớp của hệ điều hành, mỗi lớp có thể tương tác trực tiếp với lớp bất kỳ.\"",
            options: ["Đúng", "Sai"],
            answer: "Đúng",
          },
          {
            question: "Cơ chế bộ nhớ ảo bắt đầu được sử dụng trong hệ điều hành của các máy tính thế hệ nào?",
            options: ["1", "2", "3", "4"],
            answer: "1",
          },
          {
            question: "Công nghệ chính của thế hệ máy tính thứ hai là?",
            options: ["Bóng bán dẫn", "Ống chân không", "Vi xử lý", "Mạch tích hợp"],
            answer: "Bóng bán dẫn",
          },
          {
            question: "Công nghệ chính của thế hệ máy tính thứ tư là?",
            options: ["Bóng bán dẫn", "Ống chân không", "Vi xử lý", "Mạch tích hợp"],
            answer: "Bóng bán dẫn",
          },
          {
            question: "Chức năng nào của hệ điều hành đóng vai trò tạo giao diện giữa máy tính và người dùng?",
            options: ["Hệ thống bảo vệ", "Quản lý bộ nhớ", "Quản lý phần cứng.", "Bộ dịch lệnh"],
            answer: "Hệ thống bảo vệ",
          },
          {
            question: "Câu nào sau đây là không chính xác?",
            options: [
              "Tiến trình là một chương trình đang ở trong bộ nhớ.",
              "Tiến trình tự quyết định thời điểm cần dừng hoạt động đang xử lý để phục vụ tiến trình khác.",
              "Các tiến trình có thể liên lạc với nhau thông qua hệ điều hành.",
              "Tiến trình là một chương trình đang hoạt động.",
            ],
            answer: "Tiến trình là một chương trình đang ở trong bộ nhớ.",
          },
          {
            question: "Tiến trình yêu cầu một tài nguyên nhưng chưa được đáp ứng vì tài nguyên không sẵn sàng, chuyển đổi trạng thái nào xảy ra?",
            options: ["Running -> Ready", "Ready -> Running", "Running -> Blocked", "Blocked -> Ready"],
            answer: "Running -> Ready",
          },
          {
            question: "Giả sử tiến trình A sinh ra tiến trình B, C. Câu nào sau đây là không đúng?",
            options: [
              "Tiến trình B và C không sử dụng chung con trỏ lệnh",
              "Tiến trình B và C không sử dụng chung tập thanh ghi",
              "Tiến trình B và C không sử dụng chung stack",
              "Tiến trình B và C không sử dụng chung không gian địa chỉ.",
            ],
            answer: "Tiến trình B và C không sử dụng chung con trỏ lệnh",
          },
          {
            question: "Deadlock là gì?",
            options: [
              "Là hiện tượng một tiến trình luôn trong trạng thái chờ",
              "Là hiện tượng một tiến trình bị dừng khi đang hoạt động bình thường",
              "Là hiện tượng hệ điều hành tự động tắt máy tính",
              "Là hiện tượng các chương trình không cho phép người dùng truy cập",
            ],
            answer: "Là hiện tượng một tiến trình luôn trong trạng thái chờ",
          },
          {
            question: "Các bước mà một tiến trình thực hiện để sử dụng tài nguyên?",
            options: ["Yêu cầu, sử dụng, giải phóng", "Tìm kiếm, yêu cầu, sử dụng, giải phóng", "Sử dụng, chuyển tiếp, giải phóng", "Sử dụng, giải phóng"],
            answer: "Yêu cầu, sử dụng, giải phóng",
          },
          {
            question: "Tiến trình đang thực thi sẽ chuyển về loại danh sách nào khi xảy ra sự kiện?",
            options: ["Danh sách sẵn sàng (Ready list)", "Danh sách tác vụ (Job list)", "Danh sách chờ đợi (Waiting list)", "Không câu nào đúng"],
            answer: "Danh sách sẵn sàng (Ready list)",
          },
          {
            question: "Câu nào sau đây phát biểu không chính xác?",
            options: [
              "Tiến trình xử lí tín hiệu theo cách riêng của nó",
              "Tiến trình xử lí tín hiệu bằng cách gọi hàm xử lí tín hiệu",
              "Tiến trình có thể trao đổi dữ liệu",
              "Tiến trình có thể thông báo cho nhau về một sự kiện",
            ],
            answer: "Tiến trình xử lí tín hiệu theo cách riêng của nó",
          },
          {
            question: "Phương pháp nhanh nhất để trao đổi thông tin giữa các tiến trình là gì?",
            options: ["Đường ống", "Vùng nhớ chia sẻ", "Trao đổi thông điệp", "Socket"],
            answer: "Đường ống",
          },
          {
            question: "Kĩ thuật nào sau đây là liên lạc trực tiếp giữa hai tiến trình?",
            options: ["Đường ống (Pipe)", "Vùng nhớ chia sẻ", "Trao đổi thông điệp", "Socket"],
            answer: "Đường ống (Pipe)",
          },
          {
            question: "Trong các giải pháp đồng bộ tiến trình sau, giải pháp nào vi phạm nguyên tắc đồng bộ?",
            options: ["Sử dụng biến cờ hiệu", "Sử dụng luân phiên", "Giải pháp Peterson", "Tất cả các đáp án đều đúng"],
            answer: "Sử dụng biến cờ hiệu",
          },
          {
            question: "Trong đồ thị cấp phát tài nguyên, tiến trình được thể hiện bằng hình nào?",
            options: ["Hình tròn", "Hình thoi", "Hình vuông", "Hình tam giác"],
            answer: "Hình tròn",
          },
          {
            question: "Cho ba tiến trình P1, P2, P3 với Burst time tương ứng là: 20, 3, 3. Cho biết thời gian bắt đầu của tiến trình P1?",
            options: ["0", "23", "26", "20"],
            answer: "0",
          },
          {
            question: "Cho ba tiến trình P1, P2, P3 với các Burst time tương ứng là: 20, 2, 3. Xác định thời gian kết thúc của tiến trình P2?",
            options: ["3", "25", "17", "14"],
            answer: "3",
          },
          {
            question: "Cho ba tiến trình P1, P2, P3 với Burst time tương ứng là: 20, 3, 3. Xác định thời gian bắt đầu của P2?",
            options: ["0", "20", "23", "26"],
            answer: "0",
          },
          {
            question: "Cho ba tiến trình P1, P2, P3 với Burst time tương ứng là: 20, 3, 4. Thời gian kết thúc của P3 là bao nhiêu?",
            options: ["0", "7", "27", "20"],
            answer: "0",
          },
          {
            question: "Cho ba tiến trình P1, P2, P3 với Burst time tương ứng là: 20, 3, 4. Cho biết thời gian chờ của P2?",
            options: ["0", "24", "20", "7"],
            answer: "0",
          },
          {
            question: "Cho 4 tiến trình P1, P2, P3, P4 trong danh sách hàng đợi, với các Arrival times và Burst times. Sắp xếp thứ tự thực hiện theo SJF?",
            options: ["P3 > P2 > P4 > P1", "P3 > P2 > P1 > P4", "P1 > P3 > P2 > P4", "P1 > P2 > P3 > P4"],
            answer: "P3 > P2 > P4 > P1",
          },
          {
            question: "Tính hiệu quả của hệ điều hành được hiểu là gì?",
            options: [
              "Hệ điều hành phải có hệ thống trợ giúp, hướng dẫn đầy đủ cho người sử dụng.",
              "Các tài nguyên của hệ thống phải được khai thác một cách triệt để sao cho hiệu quả tối ưu.",
              "Mọi thông báo, mọi hoạt động của hệ điều hành phải chuẩn xác tuyệt đối.",
              "Hệ điều hành phải phải duy trì hoạt động đồng bộ trong toàn hệ thống.",
            ],
            answer: "Hệ điều hành phải có hệ thống trợ giúp, hướng dẫn đầy đủ cho người sử dụng.",
          },
          {
            question: "Trong nguyên tắc thiết kế nào của hệ điều hành các modul chương trình độc lập với nhau?",
            options: ["Nguyên tắc lặp chức năng.", "Nguyên tắc modul.", "Nguyên tắc tương đối trong định vị.", "Nguyên tắc khởi tạo khi cài đặt."],
            answer: "Nguyên tắc lặp chức năng.",
          },
          {
            question: "Phát biểu sau đây đúng hay sai? \"Hệ điều hành tập trung được cài đặt trên một hệ thống duy nhất và quản lý tập trung tài nguyên.\"",
            options: ["Đúng", "Sai"],
            answer: "Đúng",
          },
          {
            question: "Trong đồ thị cấp phát tài nguyên, tiến trình được thể hiện bằng hình nào?",
            options: ["Hình tròn", "Hình thoi", "Hình vuông", "Hình tam giác"],
            answer: "Hình tròn",
          },
          {
            question: "Cho 3 tiến trình P1, P2, P3 trong danh sách hàng đợi, với các Arrival time và Burst time. Thứ tự thực hiện theo FCFS là gì?",
            options: ["P1 > P2 > P3", "P1 > P3 > P2", "P3 > P2 > P1", "P1 > P2 > P3"],
            answer: "P1 > P2 > P3",
          },
          {
            question: "Cho ba tiến trình P1, P2, P3 với Burst time tương ứng là: 12, 6, 2. Thời gian chờ của P3 là bao nhiêu?",
            options: ["0", "6", "18", "20"],
            answer: "0",
          },
          {
            question: "Phương pháp nhanh nhất để trao đổi thông tin giữa các tiến trình?",
            options: ["Đường ống", "Vùng nhớ chia sẻ", "Trao đổi thông điệp", "Socket"],
            answer: "Đường ống",
          },
          {
            question: "Kỹ thuật nào sau đây là liên lạc trực tiếp giữa hai tiến trình?",
            options: ["Đường ống (Pipe)", "Vùng nhớ chia sẻ", "Trao đổi thông điệp", "Socket"],
            answer: "Đường ống (Pipe)",
          },
          {
            question: "Cho 3 tiến trình P1, P2, P3 trong danh sách hàng đợi. Arrival time và Burst time được cho, thời gian kết thúc của P2 là?",
            options: ["2", "5", "7", "0"],
            answer: "2",
          },
          {
            question: "Trong các giải pháp đồng bộ tiến trình sau, giải pháp nào vi phạm nguyên tắc đồng bộ?",
            options: ["Sử dụng biến cờ hiệu", "Sử dụng luân phiên", "Giải pháp Peterson", "Tất cả các đáp án đều đúng"],
            answer: "Sử dụng biến cờ hiệu",
          },
          {
            question: "Cho 3 tiến trình P1, P2, P3 trong danh sách hàng đợi. Xác định thời gian chờ của P1?",
            options: ["0", "6", "12", "20"],
            answer: "0",
          },
          {
            question: "Trong đồ thị cấp phát tài nguyên, tài nguyên được thể hiện bằng hình nào?",
            options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình thoi"],
            answer: "Hình vuông",
          },
          {
            question: "Nhược điểm của giải thuật FCFS là gì?",
            options: [
              "Có thể dẫn đến Starvation",
              "Thời gian chờ dài đối với các tiến trình có thời gian Burst lớn.",
              "Không công bằng với các tiến trình ngắn.",
              "Ưu tiên sai cho tiến trình đầu tiên trong hàng đợi.",
            ],
            answer: "Thời gian chờ dài đối với các tiến trình có thời gian Burst lớn.",
          },
          {
            question: "Hệ điều hành nào sau đây thuộc loại đa nhiệm?",
            options: ["Windows", "MS-DOS", "FreeDOS", "CP/M"],
            answer: "Windows",
          },
          {
            question: "Nhược điểm của cấu trúc vi nhân là gì?",
            options: [
              "Thiếu tính mềm dẻo và độ tin cậy của hệ thống không cao.",
              "Tốc độ chậm, khó xác định số lớp và phân chia thành phần của lớp.",
              "Đòi hỏi nhiều tài nguyên hệ thống và thời gian khi chuyển đổi giữa các tiến trình.",
              "Chiếm dụng dung lượng bộ nhớ lớn."
            ],
            answer: "Thiếu tính mềm dẻo và độ tin cậy của hệ thống không cao."
          },
          {
            question: "Nếu hệ điều hành có cấu trúc vi nhân, lỗi của các modul chạy trong chế độ người dùng có gây ảnh hưởng đến nhân không?",
            options: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            question: "Cơ chế phân chia thời gian bắt đầu được sử dụng trong hệ điều hành của thế hệ máy tính nào?",
            options: ["1", "2", "3", "4"],
            answer: "1"
          },
          {
            question: "Bộ nhớ ảo được vận hành dựa trên cơ chế nào?",
            options: [
              "Cơ chế phân trang.",
              "Cơ chế phân đoạn.",
              "Cơ chế phân lô.",
              "Tất cả các ý đều sai."
            ],
            answer: "Cơ chế phân trang."
          },
          {
            question: "Công nghệ chính của thế hệ máy tính thứ nhất là?",
            options: ["Bóng bán dẫn", "Ống chân không", "Vi xử lý", "Mạch tích hợp"],
            answer: "Bóng bán dẫn"
          },
          {
            question: "Phát triển và ngăn chặn các khả năng sai sót của các tiến trình thuộc chức năng nào của hệ điều hành?",
            options: [
              "Hệ thống bảo vệ",
              "Quản lý hệ thống vào/ra",
              "Quản lý tiến trình",
              "Quản lý bộ nhớ"
            ],
            answer: "Hệ thống bảo vệ"
          },
          {
            question: "Máy tính thế hệ nào hỗ trợ ngôn ngữ máy và hợp ngữ?",
            options: [
              "Thế hệ thứ nhất",
              "Thế hệ thứ hai",
              "Thế hệ thứ ba",
              "Thế hệ thứ tư"
            ],
            answer: "Thế hệ thứ nhất"
          },
          {
            question: "Hệ điều hành đa nhiệm (multi-task) cho phép gì?",
            options: [
              "Nạp nhiều chương trình cùng lúc vào bộ nhớ.",
              "Cấp giờ CPU cho cùng lúc nhiều chương trình.",
              "Nhiều người sử dụng cùng lúc sử dụng một chương trình.",
              "Tất cả các ý đều đúng."
            ],
            answer: "Nạp nhiều chương trình cùng lúc vào bộ nhớ."
          },
          {
            question: "Thành phần nào sau đây là thành phần bắt buộc của hệ điều hành?",
            options: [
              "Nhân của hệ điều hành.",
              "Các chương trình tiện ích.",
              "Các chương trình ứng dụng.",
              "Tất cả các ý đều sai."
            ],
            answer: "Nhân của hệ điều hành."
          },
          {
            question: "Kỹ thuật nào sau đây cho phép giảm thời gian chạy không tải của CPU?",
            options: [
              "Đa chương trình.",
              "Đa nhiệm.",
              "Phân chia thời gian.",
              "Xử lý theo lô."
            ],
            answer: "Đa chương trình."
          },
          {
            question: "Trong cấu trúc vi nhân (microkernel) các mô đun liên lạc với nhau theo cơ chế nào?",
            options: [
              "Trực tiếp gọi hàm.",
              "Chuyển thông điệp.",
              "Truy cập dữ liệu của các mô đun khác.",
              "Khác."
            ],
            answer: "Trực tiếp gọi hàm."
          },
          {
            question: "Giả sử máy tính có 2 chế độ: chế độ đặc quyền và chế độ người dùng. Thao tác nào sau đây chỉ được thực hiện ở chế độ đặc quyền?",
            options: [
              "Cấm các ngắt.",
              "Đặt giờ cho bộ định thời gian.",
              "Thay đổi nội dung thanh ghi.",
              "Tất cả các thao tác nêu trên."
            ],
            answer: "Cấm các ngắt."
          },
          {
            question: "Trong trường hợp hệ thống dùng loại tài nguyên có một thực thể, giải pháp nào sau đây có thể được sử dụng?",
            options: [
              "Giải thuật chạy lại tiến trình (Rollback).",
              "Giải thuật đồ thị cấp phát tài nguyên (Resource allocation graph).",
              "Giải thuật đồ thị chờ tài nguyên (Wait for Graph).",
              "Giải thuật nhà băng (Banker)."
            ],
            answer: "Giải thuật chạy lại tiến trình (Rollback)."
          },
          {
            question: "Phương pháp giải quyết Deadlock nào mà Hệ điều hành sử dụng giải thuật ngăn chặn?",
            options: [
              "Phương pháp Ngăn chặn (preventing).",
              "Phương pháp Phòng tránh (avoiding).",
              "Phương pháp Phát hiện và Khôi phục.",
              "Phương pháp Bỏ qua Deadlock."
            ],
            answer: "Phương pháp Ngăn chặn (preventing)."
          },
          {
            question: "Phương pháp giải quyết Deadlock nào mà Hệ điều hành sử dụng việc ngăn chặn?",
            options: [
              "Phương pháp Ngăn chặn (preventing)",
              "Phương pháp Phòng tránh (avoiding)",
              "Phương pháp Phát hiện và Khôi phục",
              "Phương pháp Bỏ qua Deadlock."
            ],
            answer: "Phương pháp Ngăn chặn (preventing)"
          },
          {
            question: "Các giải thuật tránh Deadlock dựa trên ý tưởng nào?",
            options: [
              "Luôn kiểm tra đồ thị có chu trình không.",
              "Luôn giữ chuỗi thứ tự tiến trình được cấp phát tài nguyên ở trạng thái an toàn.",
              "Luôn cấp tài nguyên ít nhất có thể.",
              "Cấp tài nguyên nhiều nhất có thể."
            ],
            answer: "Luôn kiểm tra đồ thị có chu trình không."
          },
          {
            question: "Hệ điều hành ngăn chặn deadlock bằng cách đặt ra quy định: Nếu tiến trình giữ tài nguyên mà vẫn yêu cầu thêm thì?",
            options: [
              "Ngăn chặn điều kiện “loại trừ tương hỗ” (Mutual exclusion)",
              "Ngăn chặn điều kiện “giữ và chờ tài nguyên” (Hold and Wait)",
              "Ngăn chặn điều kiện “không trưng dụng” (Non-preemption)",
              "Ngăn chặn điều kiện “chờ xoay vòng” (Circular wait)"
            ],
            answer: "Ngăn chặn điều kiện “loại trừ tương hỗ” (Mutual exclusion)"
          },
          {
            question: "Cạnh yêu cầu trong đồ thị cấp tài nguyên có dạng nào?",
            options: [
              "Nét liền từ tiến trình tới tài nguyên.",
              "Nét đứt đoạn từ tài nguyên tới tiến trình.",
              "Nét liền từ tài nguyên tới tiến trình.",
              "Nét đứt đoạn từ tiến trình tới tài nguyên."
            ],
            answer: "Nét liền từ tiến trình tới tài nguyên."
          },
          {
            question: "Bộ định thời nào quyết định thời điểm chuyển một tiến trình từ bộ nhớ vào CPU?",
            options: [
              "Bộ định thời CPU (CPU scheduler).",
              "Bộ định thời công việc (Job scheduler).",
              "Bộ định thời trung hạn (Medium-term scheduler).",
              "Bộ định thời thiết bị (Device scheduler)."
            ],
            answer: "Bộ định thời CPU (CPU scheduler)."
          },
          {
            question: "Thuật toán nào sau đây là thuật toán có thể điều phối theo nguyên tắc FIFO?",
            options: [
              "FIFO",
              "Xoay vòng",
              "Điều phối với độ ưu tiên",
              "Tất cả các đáp án đều đúng"
            ],
            answer: "FIFO"
          },
          {
            question: "Linux Kernel có cấu trúc gì?",
            options: ["Lai.", "Phân lớp.", "Nguyên khối.", "Vi nhân"],
            answer: "Lai."
          },
          {
            question: "Hiện tượng phân mảnh là gì?",
            options: [
              "Tổng vùng nhớ trống đủ để thoã mãn nhu cầu nhưng các vùng nhớ không liền nhau.",
              "Vùng nhớ bị phân thành nhiều vùng không liên tục.",
              "Vùng nhớ trống được dồn lại từ các mảnh bộ nhớ nhỏ rời rạc.",
              "Không câu nào đúng."
            ],
            answer: "Tổng vùng nhớ trống đủ để thoã mãn nhu cầu nhưng các vùng nhớ không liền nhau."
          },
          {
            question: "Địa chỉ tương đối là gì?",
            options: [
              "Địa chỉ vật lí",
              "Địa chỉ logic",
              "Không gian vật lí",
              "Không gian địa chỉ"
            ],
            answer: "Địa chỉ vật lí"
          },
          {
            question: "Việc ánh xạ địa chỉ logic sang địa chỉ vật lý được thực hiện bởi thành phần nào?",
            options: ["CU", "PMU", "MMU", "PTE"],
            answer: "CU"
          },
          {
            question: "Thuật toán chọn vùng trống nhỏ nhất trong số các vùng trống có kích thước đủ lớn là gì?",
            options: ["Next-fit", "Worst-fit", "Best-fit", "First-fit"],
            answer: "Best-fit"
          },
          {
            question: "Để giải quyết vấn đề bảng trang lớn chiếm nhiều bộ nhớ có thể dùng phương pháp nào?",
            options: [
              "Phân trang hai mức.",
              "Phân đoạn.",
              "Bảng trang được lưu trữ trong bộ nhớ chính.",
              "Tất cả các phương pháp trên."
            ],
            answer: "Phân trang hai mức."
          },
          {
            question: "Giả sử tiến trình được cấp 3 khung, không gian nhớ logic của tiến trình chia thành bao nhiêu trang?",
            options: ["2", "3", "4", "5"],
            answer: "3"
          },
          {
            question: "Giả sử không gian nhớ logic gồm 16 trang, mỗi trang có kích thước là 4 KB. Số bit cần thiết để biểu diễn địa chỉ logic là bao nhiêu?",
            options: ["12", "13", "16", "17"],
            answer: "16"
          },
          {
            question: "Giả sử không gian nhớ logic gồm 32 trang, mỗi trang có kích thước là 1 KB. Số bit cần thiết để biểu diễn địa chỉ logic là bao nhiêu?",
            options: ["11", "12", "15", "16"],
            answer: "15"
          },
          {
            question: "Một tiến trình phải có tối đa bao nhiêu luồng (thread)?",
            options: ["1", "0", "2", "Không xác định"],
            answer: "Không xác định"
          },
          {
            question: "Trong hệ thống tài nguyên có nhiều thực thể (instance), nếu đồ thị cấp phát tài nguyên không có chu trình thì điều gì xảy ra?",
            options: [
              "Chắc chắn không xảy ra Deadlock (tắc nghẽn).",
              "Có thể có hoặc không xảy ra Deadlock (tắc nghẽn).",
              "Chắc chắn xảy ra Deadlock (tắc nghẽn).",
              "Deadlock (tắc nghẽn) ngay lập tức."
            ],
            answer: "Chắc chắn không xảy ra Deadlock (tắc nghẽn)."
          },
          {
            question: "Phát biểu sau đây đúng hay sai? \"Hệ quản lý máy ảo (virtual machine) chia sẻ tài nguyên vật lý giữa các máy ảo.\"",
            options: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            question: "Tiền thân của Windows Explorer là gì?",
            options: [
              "Interface Manager",
              "Windows Executive",
              "MS-DOS Executive",
              "Program Manager"
            ],
            answer: "MS-DOS Executive"
          },
          {
            question: "Các ứng dụng quen thuộc của Microsoft như Word, Excel bắt đầu xuất hiện trên phiên bản Windows nào?",
            options: ["Windows 1.0", "Windows 2.0", "Windows 3.0", "Windows 3.1"],
            answer: "Windows 2.0"
          },
          {
            question: "Giả sử không gian nhớ logic gồm 64 trang, mỗi trang có kích thước là 2 KB. Số bit cần thiết để biểu diễn địa chỉ logic là bao nhiêu?",
            options: ["11", "12", "16", "18"],
            answer: "16"
          },
          {
            question: "Hiện tượng phân mảnh bên ngoài là gì?",
            options: [
              "Khi tổng vùng nhớ trống đủ để thoã mãn nhu cầu nhưng không liên tục.",
              "Khi các vùng nhớ trống không sử dụng được do bị phân mảnh.",
              "Khi các vùng nhớ trống không đủ kích thước để chứa tiến trình.",
              "Khi bộ nhớ vật lý không còn đủ tài nguyên."
            ],
            answer: "Khi tổng vùng nhớ trống đủ để thoã mãn nhu cầu nhưng không liên tục."
          },
          {
            question: "Hiện tượng phân mảnh bên trong xảy ra khi nào?",
            options: [
              "Khi một tiến trình chiếm dụng nhiều tài nguyên hơn cần thiết.",
              "Khi một tiến trình được cấp phát bộ nhớ nhưng không sử dụng hết.",
              "Khi bộ nhớ bị chia thành các khối không đồng đều.",
              "Khi tổng vùng nhớ trống đủ để thoã mãn nhu cầu nhưng không liên tục."
            ],
            answer: "Khi một tiến trình được cấp phát bộ nhớ nhưng không sử dụng hết."
          },
          {
            question: "Khi nào hệ điều hành sử dụng kỹ thuật thay thế trang?",
            options: [
              "Khi bộ nhớ chính đã đầy.",
              "Khi tiến trình yêu cầu một trang không có trong bộ nhớ chính.",
              "Khi tiến trình yêu cầu một trang không nằm trong không gian địa chỉ.",
              "Khi không đủ không gian trong bộ nhớ ảo."
            ],
            answer: "Khi bộ nhớ chính đã đầy."
          },
          {
            question: "Thuật toán thay thế trang nào ưu tiên trang ít được sử dụng nhất?",
            options: ["FIFO", "LRU", "Optimal", "Clock"],
            answer: "LRU"
          },
          {
            question: "Thuật toán thay thế trang nào chọn trang lâu nhất chưa được sử dụng để thay thế?",
            options: ["FIFO", "LRU", "Optimal", "Clock"],
            answer: "LRU"
          },
          {
            question: "Thuật toán thay thế trang nào không yêu cầu ghi nhớ lịch sử sử dụng trang?",
            options: ["FIFO", "LRU", "Optimal", "Clock"],
            answer: "FIFO"
          },
          {
            question: "Bảng trang trong bộ nhớ được sử dụng để làm gì?",
            options: [
              "Ánh xạ địa chỉ logic sang địa chỉ vật lý.",
              "Quản lý các tiến trình trong bộ nhớ.",
              "Giảm hiện tượng phân mảnh bộ nhớ.",
              "Cải thiện tốc độ truy xuất bộ nhớ."
            ],
            answer: "Ánh xạ địa chỉ logic sang địa chỉ vật lý."
          },
          {
            question: "Trong hệ điều hành, tác vụ của bộ lập lịch dài hạn là gì?",
            options: [
              "Quyết định tiến trình nào sẽ được nạp vào bộ nhớ chính.",
              "Quyết định tiến trình nào sẽ được cấp CPU.",
              "Quyết định tiến trình nào sẽ được cấp tài nguyên I/O.",
              "Quyết định tiến trình nào sẽ được hủy bỏ."
            ],
            answer: "Quyết định tiến trình nào sẽ được nạp vào bộ nhớ chính."
          },
          {
            question: "Bộ lập lịch ngắn hạn (short-term scheduler) quyết định điều gì?",
            options: [
              "Tiến trình nào sẽ được chuyển từ trạng thái Ready sang Running.",
              "Tiến trình nào sẽ được chuyển từ trạng thái Blocked sang Ready.",
              "Tiến trình nào sẽ được nạp vào bộ nhớ chính.",
              "Tiến trình nào sẽ được chuyển từ Running sang Terminated."
            ],
            answer: "Tiến trình nào sẽ được chuyển từ trạng thái Ready sang Running."
          } 
  ];
  