# Đề xuất thiết kế: Khúc xạ ánh sáng và phản xạ toàn phần (KHTN 9)

*Bản đề xuất 24/10/2026, chờ Shin duyệt. Chưa code.* Cơ sở: [khao-sat.md](khao-sat.md).

Một file HTML, 6 tab, song ngữ VI/EN, nút **Định tính / Định lượng** (giống mô phỏng thấu kính). Kéo đèn laser là thao tác chính; thanh trượt cho n, góc, môi trường. Mỗi tab mở bằng một câu **dự đoán** (chọn đáp án trước, rồi mới hiện kết quả).

Bảng chọn môi trường dùng chung: không khí, nước, nước đá, dầu ăn, mica, thuỷ tinh, kim cương, "vật liệu bí ẩn"; định lượng thì có thanh trượt n từ 1,00 đến 2,50.

## Tab 1. Vì sao tia sáng bị gãy? (n = c/v)
*Yêu cầu: chứng tỏ ánh sáng bị khúc xạ; chiết suất = c/v.*
- Dự đoán: tia laser từ không khí chiếu xiên vào nước sẽ đi thẳng, gãy về phía pháp tuyến, gãy ra xa, hay không vào được? (nhắm quan niệm sai 1, 2)
- Ba cách xem bật chuyển được trên cùng một hình:
  - **Tia sáng** (như SGK).
  - **Mặt sóng**: các vạch đỉnh sóng chạy, vào nước thì sít lại (bước sóng ngắn hơn) và xoay hướng.
  - **Hàng người khoác tay**: hàng người đi từ sân xuống cát, người chạm cát trước đi chậm trước, hàng xoay. Có nút "chiếu vuông góc" để thấy cả hàng chạm cùng lúc thì không xoay (quan niệm sai 4).
- Đồng hồ tốc độ đặt kéo được vào hai môi trường: hiện v; ô tính n = c/v ngay bên cạnh. Ghi chú quan niệm sai 10: dầu ăn nhẹ hơn nước nhưng ánh sáng trong dầu chậm hơn.

## Tab 2. Phòng thí nghiệm: định luật khúc xạ
*Yêu cầu: thí nghiệm rút ra và phát biểu định luật; vận dụng n = sin i / sin r.*
- Bàn giống SGK: **khối bán trụ** trên **bảng chia độ tròn**, kéo đèn laser quanh mép bảng (hoặc thanh trượt góc tới). Hiện i, r, tia phản xạ mờ.
- Nút **"Ghi số liệu"** thêm một dòng vào bảng: i, r, i/r, sin i, sin r, sin i/sin r.
- **Hai đồ thị cạnh nhau**: r theo i (đường cong) và sin r theo sin i (đường thẳng qua gốc). HS thấy i/r không cố định mà sin i/sin r cố định = n (quan niệm sai 6; kể chuyện bảng số liệu của Ptolemy).
- Nút **đổi chiều ánh sáng** (chiếu từ phía thuỷ tinh ra), thấy đường đi thuận nghịch và tia gãy ra xa pháp tuyến (quan niệm sai 3).
- Nút **xoay bàn**: mặt phân cách nằm ngang, thẳng đứng hoặc xiên (quan niệm sai 5).
- Định lượng: bài tập ngắn tự sinh số liệu, ví dụ "i = 45°, nước, tính r", bấm kiểm tra bằng thước đo.
- Thử thách: **vật liệu bí ẩn**, đo vài cặp i, r để tìm n và đoán đó là chất gì.

## Tab 3. Phản xạ toàn phần
*Yêu cầu: thí nghiệm rút ra điều kiện xảy ra phản xạ toàn phần, xác định góc tới hạn.*
- Đèn laser đặt **trong** nước/thuỷ tinh/kim cương chiếu ra không khí (bán trụ đặt ngược).
- Độ sáng tia khúc xạ và tia phản xạ theo **Fresnel thật**, kèm hai thanh % năng lượng (phản xạ + khúc xạ = 100%). Tăng i: tia khúc xạ mờ dần, là sát mặt, tia phản xạ sáng dần đến 100% (quan niệm sai 7).
- Dự đoán trước: "Khi tăng góc tới, tia khúc xạ sẽ biến mất đột ngột hay mờ dần?"
- HS tự tìm góc tới hạn, ghi vào bảng cho từng chất; định lượng thì so với sin i_gh = 1/n.
- Nút **đảo chiều**: đèn ở không khí chiếu vào nước, kéo đến 89° vẫn không có phản xạ toàn phần, từ đó tự rút ra hai điều kiện (n₁ > n₂ và i ≥ i_gh) (quan niệm sai 8).
- Ghi chú ở góc tới hạn: tia "sát mặt" có độ sáng gần bằng 0, không phải một tia sáng thật chạy dọc mặt nước (quan niệm sai 9).

## Tab 4. Hiện tượng quanh ta
*Nối khúc xạ với điều mắt nhìn thấy (quan niệm sai 11). Chọn một trong các cảnh:*
1. **Đồng xu trong cốc**: mắt đặt sao cho vừa không thấy đồng xu; kéo mực nước dâng lên, đồng xu "hiện ra". Vẽ tia từ đồng xu đến mắt.
2. **Bể bơi trông nông hơn / cá ở đâu**: kéo mắt người quan sát, thấy ảnh của cá (hoặc đáy bể) nằm cao hơn chỗ thật. Định lượng: độ sâu biểu kiến ≈ h/n khi nhìn gần thẳng đứng (bể 2 m trông như 1,5 m). Kèm câu hỏi: muốn đâm trúng cá thì nhắm cao hơn hay thấp hơn?
3. **Cửa sổ Snell (cá nhìn lên)**: đặt mắt dưới nước nhìn lên: cả bầu trời thu vào một vòng tròn góc mở khoảng 97°, ngoài vòng tròn là ảnh phản chiếu của đáy (phản xạ toàn phần). Ý tưởng lấy từ bài "cá vàng" của Nhật.
4. **Que thuỷ tinh tàng hình**: nhúng que thuỷ tinh vào nước rồi vào dầu (thanh trượt n chất lỏng); khi n bằng nhau thì không còn khúc xạ và phản xạ, que "biến mất". Rất bất ngờ với HS, giải thích vì sao ta nhìn thấy vật trong suốt.
5. **Ảo ảnh trên đường nóng**: lớp không khí sát mặt đường nóng có n nhỏ hơn; tia sáng từ bầu trời cong dần rồi đi lên mắt, ta thấy "vũng nước". (Ghi rõ: đây là khúc xạ liên tục qua nhiều lớp, mô phỏng chia thành nhiều lớp mỏng.)

## Tab 5. Ứng dụng phản xạ toàn phần
1. **Sợi quang**: kéo để uốn cong sợi, ánh sáng nảy bên trong đi theo; uốn quá gắt thì ánh sáng rò ra (góc tới nhỏ hơn i_gh). Có lõi/vỏ với n khác nhau.
2. **Vòi nước dẫn sáng (Colladon, 1842)**: dòng nước cong chảy ra từ thùng, laser chiếu vào lỗ, ánh sáng đi cong theo dòng nước. Kể chuyện lịch sử ra đời cáp quang.
3. **Kim cương lấp lánh**: mặt cắt viên kim cương; chỉnh độ sâu phần đáy, thấy cắt chuẩn thì ánh sáng phản xạ toàn phần quay lại mặt trên, cắt quá sâu hoặc quá nông thì ánh sáng lọt ra đáy. So sánh với thuỷ tinh giả kim cương (i_gh 41,8° so với 24,4°).
4. **Lăng kính phản xạ toàn phần**: lăng kính vuông cân 45° trong kính tiềm vọng và ống nhòm, so với gương thường (100% so với khoảng 90%).

## Tab 6. Luyện tập và thử thách
- Vẽ tia trên lưới: cho mặt phân cách (có cả thẳng đứng, xiên) và tia tới, HS kéo để vẽ tia khúc xạ/phản xạ rồi bấm kiểm tra.
- Trò chơi: đặt đèn laser và chọn môi trường để tia đi tới đích (ví dụ chiếu trúng con cá, hoặc đưa ánh sáng ra khỏi bể qua đúng một mặt).
- Câu hỏi trắc nghiệm nhanh nhắm các quan niệm sai trong khảo sát.

## Đúng khoa học và đơn giản hoá (ghi trong mô phỏng)
- Ánh sáng đơn sắc vàng (≈ 589 nm); chiết suất lấy theo bảng trong khảo sát. Không có tán sắc (để dành cho mô phỏng lăng kính).
- Độ sáng tia theo Fresnel, lấy trung bình hai phân cực (ánh sáng tự nhiên); bỏ qua hấp thụ trong môi trường.
- Mặt sóng và hàng người là mô hình minh hoạ: tốc độ trên màn hình được làm chậm hàng tỉ lần.
- Ảo ảnh: chia lớp không khí thành nhiều lớp mỏng có n giảm dần (mô hình gần đúng của chiết suất thay đổi liên tục).

## Điều cần Shin chọn
1. Có giữ đủ 6 tab không, hay gộp tab 6 vào cuối các tab khác.
2. Có làm luôn **lăng kính và tán sắc ánh sáng trắng** (mục l9-05) thành một tab ở đây, hay để thành mô phỏng riêng.
3. Ở tab 4 và 5, cảnh nào Shin muốn ưu tiên hoặc bỏ.
