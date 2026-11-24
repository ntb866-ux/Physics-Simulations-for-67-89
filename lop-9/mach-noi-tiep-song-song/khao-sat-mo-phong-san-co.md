# Khảo sát: các mô phỏng sẵn có về mạch nối tiếp, song song

*Bước chuẩn bị trước khi làm mô phỏng lớp 9 (mục l9-12 trong danh mục). Ngày 24/10/2026.*

## 1. Chương trình yêu cầu gì (KHTN 9, mạch "Điện")

Trích chương trình KHTN 2018, lớp 9:

- Nêu được (không yêu cầu thành lập) công thức điện trở tương đương của đoạn mạch nối tiếp, song song; tính được trong trường hợp đơn giản.
- **Thực hiện thí nghiệm để rút ra được:** trong đoạn mạch nối tiếp, cường độ dòng điện như nhau tại mọi điểm; trong đoạn mạch song song, tổng cường độ dòng điện các nhánh bằng cường độ mạch chính.
- Tính được cường độ dòng điện trong đoạn mạch nối tiếp, song song đơn giản.
- Lắp được mạch và đo được cường độ dòng điện trong đoạn mạch nối tiếp; trong đoạn mạch song song.

Nhận xét: trọng tâm của chương trình là **cường độ dòng điện** (đo ở nhiều điểm) và **điện trở tương đương**. Quan hệ hiệu điện thế (U = U₁ + U₂; song song thì U như nhau) không ghi thành yêu cầu riêng, nhưng cần để tính I nên mô phỏng vẫn phải có vôn kế. Kiến thức nền từ lớp 8: mắc mạch đơn giản, đo I và U bằng ampe kế, vôn kế.

## 2. Các mô phỏng sẵn có trình bày thế nào

### PhET – Circuit Construction Kit: DC (ĐH Colorado)
Nổi tiếng nhất, có bản tiếng Việt, chạy trên trình duyệt.
- **Cách tương tác:** HS tự kéo thả pin, dây, đèn, điện trở, công tắc để lắp mạch tự do. Hai màn hình: Intro (lắp mạch cơ bản) và Lab (thêm vật dẫn/cách điện, dụng cụ đo).
- **Mô hình dòng điện:** chấm tròn chạy trong dây, chọn hiển thị *electron* hoặc *chiều dòng điện quy ước*. Độ sáng đèn theo công suất.
- **Đo:** ampe kế, vôn kế có que đo, ampe kìm không tiếp xúc; bật/tắt hiển thị giá trị; kí hiệu sơ đồ theo chuẩn IEC/IEEE.
- **Đơn giản hoá (chính PhET ghi trong hướng dẫn GV):** hoạt hình electron chỉ mang tính minh hoạ, tốc độ và mật độ không đọc theo nghĩa đen, và *ở các nhánh song song mật độ hạt có thể không đều*; dây không lí tưởng (dài thì điện trở tăng); pin có điện trở trong nhỏ; ngắn mạch thì hiện lửa.
- **Điểm mạnh:** tự do, gần thí nghiệm thật, đẹp, miễn phí.
- **Hạn chế cho lớp học VN:** lắp mạch tự do bằng kéo thả rất khó trên điện thoại và mất thời gian trên lớp; không có kịch bản "dự đoán → đo → kết luận" sẵn (GV phải tự soạn phiếu); muốn so sánh I ở 3 điểm phải đặt và di chuyển ampe kế, dễ lạc mục tiêu; không có phần điện trở tương đương; hoạt hình không đều ở nhánh song song có thể vô tình gợi ý sai.

### Falstad Circuit Simulator (Paul Falstad)
- **Cách tương tác:** chọn mạch mẫu hoặc tự vẽ; chạy trên trình duyệt; tiếng Anh.
- **Mô hình:** chấm vàng chạy theo chiều quy ước, **màu dây thể hiện điện thế** (xanh lá = điện thế dương, xám = 0, đỏ = âm), đồ thị theo thời gian.
- **Điểm mạnh:** chính xác, thấy được "độ cao điện thế" dọc mạch, rất mạnh cho GV.
- **Hạn chế:** giao diện kĩ sư, nhiều chữ, quá sức HS THCS; không có hướng dẫn sư phạm.

### Các nguồn khác (Physics Classroom Circuit Builder, Olabs Ấn Độ...)
- Thiên về bài tập lắp mạch hoặc phòng thí nghiệm ảo từng bước, chủ yếu tiếng Anh.

### Tài liệu Việt Nam
- Chủ yếu là bài giảng PowerPoint, hình tĩnh, video thí nghiệm và lí thuyết (VietJack, Hoatieu, Loigiaihay theo ba bộ SGK). Rất ít mô phỏng tương tác tiếng Việt bám đúng yêu cầu cần đạt; GV thường mở PhET.

## 3. Chỗ HS hay hiểu sai, và các mô phỏng xử lí đến đâu

| Quan niệm sai phổ biến | PhET / Falstad xử lí? |
|---|---|
| **"Dòng điện bị tiêu hao"**: qua mỗi đèn dòng yếu đi, đèn sau tối hơn | Đo được nếu HS tự đặt nhiều ampe kế, nhưng không dẫn dắt |
| **Lập luận tuần tự**: thay đổi ở một chỗ chỉ ảnh hưởng phần "phía sau" | Không xử lí riêng (IOP khuyên: đo nhiều điểm cùng lúc, dự đoán trước) |
| **Pin là nguồn dòng cố định**: pin luôn cho cùng một I bất kể mạch | Không làm nổi bật |
| **Mắc song song thêm đèn thì điện trở tăng / pin "chia bớt" dòng** | HS có thể tự khám phá, không có câu hỏi định hướng |
| **Electron chạy rất nhanh từ pin tới đèn** rồi mới sáng | PhET dùng hạt nhưng tự cảnh báo "không đọc theo nghĩa đen" |
| Nhầm chiều quy ước và chiều electron | PhET có nút chuyển, tốt |

## 4. Gợi ý: mô phỏng của dự án nên làm khác/tốt hơn ở đâu

**Nguyên tắc chung:** không cạnh tranh với PhET ở việc lắp mạch tự do. Làm **mạch dựng sẵn, chỉnh bằng thanh trượt và nút bấm**, mỗi phần là một kịch bản "dự đoán → đo → kết luận" bám đúng một yêu cầu cần đạt. Gộp thành một mô phỏng nhiều phần (đúng cách Shin thích).

**Phần đề xuất:**
1. **Nối tiếp – "dòng điện có bị dùng hết không?"** Mạch pin + 2–3 đèn/điện trở, đặt sẵn 3–4 ampe kế ở trước, giữa, sau các đèn. HS chọn dự đoán trước (I giảm dần / như nhau / tăng), rồi mới hiện số. Thay R ở một đèn: *mọi* ampe kế đổi cùng lúc (chống lập luận tuần tự).
2. **Song song – "chỗ rẽ nhánh".** Ampe kế mạch chính và từng nhánh; thêm/bớt nhánh, chỉnh R từng nhánh; bảng số tự ghi để HS thấy I = I₁ + I₂ (+ I₃). Câu hỏi bẫy: thêm đèn song song thì I mạch chính tăng hay giảm?
3. **Điện trở tương đương – "hộp đen".** So sánh đoạn mạch thật với một điện trở duy nhất trong hộp kín: HS chỉnh R của hộp đến khi ampe kế chỉ cùng giá trị, rồi đối chiếu công thức R = R₁ + R₂ và 1/R = 1/R₁ + 1/R₂.
4. **Bài tập tính I** (tuỳ chọn): sinh số liệu ngẫu nhiên, HS tính rồi bấm kiểm tra bằng đồng hồ đo.
5. **Ứng dụng** (tuỳ chọn): vì sao đèn trong nhà mắc song song, dây đèn nháy trang trí nối tiếp hỏng một bóng thì tắt cả dây.

**Mô hình dòng điện (điểm khác biệt chính):**
- Hạt mang điện **chuyển động đồng loạt, cùng tốc độ ở mọi điểm của mạch nối tiếp**, mật độ đều; ở chỗ rẽ nhánh hạt chia ra đúng tỉ lệ dòng, gặp lại thì gộp lại. Có bộ đếm "số hạt qua mỗi điểm trong 1 giây" cạnh ampe kế để thấy *không hạt nào mất đi*, chỉ năng lượng được chuyển cho đèn.
- Nút chuyển **chiều quy ước ↔ chiều electron**.
- Lớp màu (bật/tắt) thể hiện **hiệu điện thế** dọc mạch, kiểu "độ cao", để GV giải thích vì sao đèn sáng mà dòng không hao.

**Đúng khoa học và nói rõ đơn giản hoá:** nguồn lí tưởng (bỏ qua điện trở trong) và dây không điện trở ở chế độ mặc định; điện trở/đèn tuân theo định luật Ohm (ghi chú: đèn thật có R tăng khi nóng); tốc độ hạt trên màn hình là tượng trưng (tốc độ trôi thật chỉ cỡ mm/s). Kí hiệu theo SGK Việt Nam (IEC).

**Dùng trên lớp:** chữ to, chạy tốt trên điện thoại và máy chiếu, không cần kéo thả chính xác; một file HTML; kèm hướng dẫn GV và phiếu học tập theo quy trình dự án.

## Nguồn
- Chương trình GDPT 2018 môn KHTN THCS (thư viện dự án: tai-lieu/Chuong-trinh-2018-KHTN-THCS.pdf), phần lớp 9 – Điện.
- PhET, *Circuit Construction Kit: DC – HTML guide*: https://phet.colorado.edu/files/teachers-guide/circuit-construction-kit-dc-html-guide_en.pdf
- IOP Spark, *Many students see circuit behaviour as a sequence of causes and effects*: https://spark.iop.org/many-students-see-circuit-behaviour-sequence-causes-and-effects-rather-seeing-whole-circuit
- Engelhardt & Beichner (2004), DIRECT test về quan niệm mạch điện một chiều: https://perg.phys.ksu.edu/papers/2004/englehardt-beichner-ajp-1-04.pdf
- Lí thuyết SGK KHTN 9 (KNTT bài 12): https://vietjack.com/khoa-hoc-tu-nhien-9-kn/ly-thuyet-bai-12-doan-mach-noi-tiep-song-song.jsp
