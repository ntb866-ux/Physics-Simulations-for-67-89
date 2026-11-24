# Cảm ứng điện từ, máy phát điện xoay chiều (KHTN 9): thiết kế

Bản đầu index.html hoàn thành 25/10/2026 theo thiết kế này (có chỉnh: điện kế thang ±1 mA; chế độ nam châm quay lấy từ thông dạng sin, lõi sắt ×500).

## Yêu cầu cần đạt (KHTN 2018, lớp 9, Điện từ)
- l9-14: Thực hiện thí nghiệm để rút ra được: khi số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín biến thiên thì trong cuộn dây đó xuất hiện dòng điện cảm ứng.
- l9-15: Thực hiện thí nghiệm để nêu được nguyên tắc tạo ra dòng điện xoay chiều (dòng điện luân phiên đổi chiều).
- l9-16: Lấy được ví dụ chứng tỏ dòng điện xoay chiều có tác dụng nhiệt, phát sáng, tác dụng từ, tác dụng sinh lí.

## Khảo sát nhanh
PhET "Faraday's Law" (nam châm qua 1 hoặc 2 cuộn dây, đèn/vôn kế), PhET "Faraday's Electromagnetic Lab" (cuộn dây thu, nam châm điện, máy phát quay bằng bánh xe nước), Walter Fendt "Generator" (vành khuyên và cổ góp), physicslens AC generator. Điểm còn thiếu mà mô phỏng này bổ sung: đếm số đường sức qua tiết diện cuộn dây (đúng lời YCCĐ), các trường hợp "có chuyển động mà không có dòng", và so sánh song song AC với DC cho 4 tác dụng.

## Bốn tab
1. **Thí nghiệm Faraday**: kéo nam châm hoặc cuộn dây dọc trục; vẽ đường sức (gieo đều theo từ thông nên số đường qua cuộn dây tỉ lệ từ thông), tô sáng đường đi qua cuộn dây; điện kế số 0 ở giữa có quán tính kim; công tắc kín/hở; thanh trượt số vòng (100–1000), độ mạnh nam châm; nút đảo cực, tự đưa vào–rút ra; đồ thị số đường sức–t và i–t.
2. **Khi nào có dòng cảm ứng?** 7 tình huống, HS dự đoán Có/Không rồi chạy: đưa lại gần–ra xa; nam châm đứng yên trong cuộn dây; nam châm và cuộn dây cùng chuyển động; quay nam châm trước cuộn dây; đóng/ngắt nam châm điện; nam châm quay quanh trục của chính nó; mạch hở. Bảng tự điền kết quả, rút kết luận "mạch kín + số đường sức biến thiên".
3. **Máy phát điện xoay chiều**: hai kiểu (khung dây quay giữa hai cực, có vành khuyên–chổi than; nam châm quay, cuộn dây đứng yên). Tần số 0,5–50 Hz, chế độ xem chậm; tải là điện kế hoặc hai LED mắc ngược chiều; dao động kí e(t), Emax = NBSω, T, f, số lần đổi chiều/s = 2f; tuỳ chọn cổ góp để so sánh với máy phát một chiều. Điện kế không theo kịp 50 Hz (đúng thực tế).
4. **Tác dụng của dòng xoay chiều**: so sánh song song nguồn một chiều 12 V và xoay chiều 12 V hiệu dụng: nhiệt (cùng tốc độ nóng, p(t) = i²R luôn ≥ 0), phát sáng (LED nhấp nháy 50 lần/s, đèn sợi đốt gần như không), từ (đinh sắt luôn bị hút, kim nam châm dao động theo chiều dòng), sinh lí (bảng mức dòng qua cơ thể theo IEC 60479-1: 0,5 mA cảm nhận, ~10 mA không buông ra được, 30 mA ngưỡng aptomat chống giật, >50 mA rung tim).

## Mô hình vật lí
- Nam châm thẳng: hai cực từ điểm cách tâm 0,042 m, μ0q = 4·10⁻⁵ Wb (B trong nam châm ≈ 0,2 T). Từ thông qua vòng bán kính a đồng trục: Φ = (q/2)[g(x−xS) − g(x−xN)], g(d) = d/√(d²+a²); lệch trục thì tích phân số. Cuộn dây a = 2,8 cm, dài 4 cm.
- e = −N ΔΦ/Δt; i = e/(R cuộn + R điện kế); bỏ qua tự cảm.
- Máy phát: e = NBSω sin ωt (N = 200, B = 0,2 T, S = 20 cm²).

## Video tiếng Anh đã chọn (chỉ kiểm tra tiêu đề, kênh; thời lượng ghi "?" là chưa kiểm tra được)
| Tab | Tên file offline | Video | Kênh | Thời lượng |
|---|---|---|---|---|
| 1 | tab1-thi-nghiem.mp4 | https://www.youtube.com/watch?v=h_7cKCGiVmQ Magnet in Coil | WSU Physics Videos | 2:00 |
| 1 (phụ) | tab1-so-vong-day.mp4 | https://www.youtube.com/watch?v=Hh58afwzHfA Faraday's Law Demo: Induction Coils | Physics Demos (Utah State) | 3:25 |
| 2 | tab2-thi-nghiem.mp4 | https://www.youtube.com/watch?v=SRsKXScqGGE Electromagnetic induction phenomenon – Experiment | Everest Physics | ? |
| 2 (phụ) | tab2-thi-nghiem-2.mp4 | https://www.youtube.com/watch?v=b-tPc7t4JZs Generator effect / Electromagnetic induction with coil and magnet | Physics with Simon Poliakoff | ? |
| 3 | tab3-ung-dung.mp4 | https://www.youtube.com/watch?v=Lx6UfiEU3Q0 How a hydro generator works | TranspowerNZ | ? |
| 3 (phụ) | tab3-thi-nghiem.mp4 | https://www.youtube.com/watch?v=JwuO9XrH_aI Genecon Hand Crank Generator – Demos & Experiments | James Lincoln | 4:40 |
| 4 | tab4-hien-tuong.mp4 | https://www.youtube.com/watch?v=9zE5EtHQk_g Electricity – AC flicker in a light bulb | Adam Vulic | ? |
| 4 (phụ) | tab4-led-quay-cham.mp4 | https://www.youtube.com/watch?v=3wdljou1M8Q 1/6 Slow Motion (300fps) LED Light Bulb | Environmental Radiation LLC | ? |

## Hiểu sai cần nhắm
- Nam châm nằm yên trong cuộn dây vẫn có dòng.
- Dòng lớn nhất khi nam châm ở sâu nhất (thật ra phụ thuộc tốc độ biến thiên).
- Cứ có chuyển động là có dòng (cùng chuyển động; quay quanh trục của chính nó).
- Dòng xoay chiều đổi chiều nên tác dụng nhiệt triệt tiêu; đèn trong nhà sáng liên tục; điện xoay chiều an toàn hơn.

## Nguồn gốc thuật ngữ (để đưa vào phần giải thích)
cảm ứng 感應 (chịu tác động mà đáp lại) / induction < Latin inducere "dẫn vào"; Trung 電磁感應, Nhật 電磁誘導. Xoay chiều / 交流 (giao lưu) / alternating < Latin alternare "luân phiên". Điện kế / galvanometer (theo Galvani). Generator < Latin generare "sinh ra"; dynamo < Hy Lạp dynamis "sức mạnh".

## Làm tiếp
Viết index.html theo thiết kế trên (khung giao diện giống các mô phỏng lớp 7 và lớp 6), kiểm tra bằng Playwright, đăng artifact, cập nhật danh-muc-mo-phong.md (l9-14, l9-15, l9-16) và nhắn luồng bảng theo dõi.
