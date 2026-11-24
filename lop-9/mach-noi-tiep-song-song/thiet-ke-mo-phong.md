# Thiết kế mô phỏng: Dòng điện trong mạch nối tiếp, song song (lớp 9)

*Bản đề xuất, chưa code. Ngày 24/10/2026.*

## A. Mô phỏng cần làm HS hiểu được gì (góc nhìn vật lí)

Một HS "hiểu thật" về mạch điện phải nắm được 7 ý lõi. Mỗi ý kèm quan niệm sai cần phá và cách mô phỏng làm cho nó thấy được.

| # | Ý lõi (cơ chế) | Quan niệm sai hay gặp | Mô phỏng phải cho thấy |
|---|---|---|---|
| 1 | **Dòng điện** là lượng điện tích đi qua một tiết diện trong 1 giây (I = q/t). Electron **có sẵn khắp dây**; đóng khoá thì điện trường lan khắp mạch gần như tức thời, **mọi electron cùng chuyển động một lúc** (tốc độ trôi chỉ cỡ 0,1 mm/s). | Electron từ pin "chạy tới" đèn rồi đèn mới sáng; dây rỗng. | Hạt có sẵn ở khắp dây, đóng khoá là cả vòng chạy đồng loạt. Có bộ đếm "số hạt qua đây mỗi giây" ở nhiều điểm. Ghi chú tỉ lệ: 1 A ≈ 6,24 × 10¹⁸ electron/giây. |
| 2 | **Điện tích được bảo toàn**: dòng điện không bị dùng hết. Thứ đèn nhận là **năng lượng**. | "Đèn ăn bớt dòng điện", đèn sau tối hơn đèn trước. | Ampe kế trước và sau đèn chỉ cùng một số. Năng lượng hiển thị riêng (thanh năng lượng, độ sáng). |
| 3 | **Hiệu điện thế** là năng lượng mỗi đơn vị điện tích nhận được hoặc nhường đi giữa **hai điểm** (1 V = 1 J/C). Nó là "độ chênh", không phải thứ chảy trong dây. | Hiệu điện thế "chạy qua" đèn; "hiệu điện thế tại một điểm"; lẫn U với I. | Bản đồ màu hoặc "độ cao" dọc mạch. Vôn kế có **hai que đo**, HS kéo que tới hai điểm bất kì. Đo hai đầu một đoạn dây cho 0 V; đo hai đầu **khoá đang mở** cho đủ U của pin (câu hỏi rất "đắt"). |
| 4 | **Pin** là nguồn duy trì một hiệu điện thế gần như không đổi, như một cái bơm năng lượng. Pin **không** phát ra một dòng cố định: I do cả mạch quyết định. Pin hết là hết năng lượng hoá học, không phải hết electron. | Pin luôn cho cùng một dòng; pin "chứa" electron rồi xả ra. | Giữ nguyên pin, đổi mạch: I mạch chính thay đổi theo. Chế độ nâng cao bật **điện trở trong** để giải thích vì sao mắc quá nhiều đèn song song thì đèn yếu đi. |
| 5 | **Điện trở** cản trở dòng điện, và là nơi năng lượng điện chuyển thành nhiệt, ánh sáng. I = U/R. | Điện trở "giữ lại" hay "tiêu thụ" dòng điện. | Hạt đi qua điện trở chậm lại thì **cả vòng** chậm theo. Điện trở nóng lên. Định luật Ohm chỉ ôn nhanh (đã có mục riêng l9-11). |
| 6 | **Nối tiếp**: I như nhau mọi điểm; U chia theo tỉ lệ R (U = U₁ + U₂); R_tđ = R₁ + R₂. Thêm đèn thì **mọi đèn** tối đi; một đèn đứt thì cả mạch tắt. | Lập luận tuần tự: đổi R ở một chỗ chỉ ảnh hưởng phần "phía sau". | Tăng R ở **một** đèn thì **mọi** ampe kế đổi **cùng lúc**, có nhấp nháy đánh dấu. |
| 7 | **Song song**: U như nhau giữa hai đầu mọi nhánh; I chia ngược tỉ lệ với R; I = I₁ + I₂; R_tđ **nhỏ hơn** điện trở nhỏ nhất; các nhánh độc lập (khi nguồn lí tưởng). Thêm nhánh thì I mạch chính **tăng**. | Thêm điện trở thì điện trở tổng luôn tăng; pin "chia đều" dòng cho các nhánh. | Hạt chia ra đúng tỉ lệ ở chỗ rẽ, gộp lại ở chỗ nhập. Bảng số tự cộng I₁ + I₂. |
| + | **Độ sáng** do công suất P = U·I quyết định, không do I hay R riêng lẻ. Nối tiếp: đèn R lớn sáng hơn; song song: đèn R nhỏ sáng hơn. | Đèn có R lớn thì luôn tối hơn. | Câu thử thách hai đèn khác nhau ở cả hai cách mắc (nối sang mục l9-13 công suất). |

## B. Nguyên tắc thiết kế

1. **Nhiều cách biểu diễn gắn với nhau, cùng một mạch:** hình thật ↔ sơ đồ kí hiệu ↔ hạt chuyển động ↔ màu hiệu điện thế ↔ số đo/bảng ↔ mô hình tương tự. Chỉnh một thanh trượt thì mọi cách biểu diễn đổi cùng lúc.
2. **Dự đoán, quan sát, giải thích:** trước mỗi thí nghiệm HS bấm chọn dự đoán (bị khoá lại), sau đó mới hiện số. Cuối cùng là câu "giải thích bằng lời của em".
3. **Đo bằng đồng hồ, không chỉ nhìn độ sáng.** Đặt sẵn nhiều ampe kế, vôn kế. Có nút "ghi số liệu" vào bảng để làm phiếu học tập.
4. **Hoạt hình trung thực:** mật độ hạt đều khắp mạch; tốc độ hạt tỉ lệ với I; số hạt ở chỗ rẽ nhánh chia đúng tỉ lệ dòng. Không có hạt nào "sinh ra" từ pin.
5. **Thấy cả hệ thống:** khi đổi một đại lượng, làm nổi bật mọi đồng hồ thay đổi (chống lập luận tuần tự).
6. **Tình huống sự cố:** đèn đứt, khoá mở, ngắn mạch (cảnh báo nguy hiểm, nối sang cầu chì l8-12).
7. **Tăng dần độ khó:** 1 đèn → nối tiếp → song song → hỗn hợp (thử thách, vượt yêu cầu cần đạt, để HS khá).
8. **Câu hỏi chẩn đoán** lấy từ nghiên cứu (bộ DIRECT, Shipstone) làm câu dự đoán.
9. **Nói rõ đơn giản hoá:** dây không điện trở, nguồn lí tưởng ở chế độ mặc định, đèn coi như tuân theo định luật Ohm (đèn thật có R tăng khi nóng), tốc độ hạt trên màn hình chỉ tượng trưng.

## C. Cấu trúc các tab

### Tab 1. Hình dung dòng điện và hiệu điện thế (theo yêu cầu của Shin)
- Bên trái: mạch thật 1 pin + 1–2 đèn, có thanh trượt **U của pin** và **R**, công tắc, chọn nối tiếp/song song.
- Bên phải: **mô hình tương tự**, chọn 1 trong 4: **Mạch nước kín**, **Xích xe đạp**, **Thang máy – máng trượt**, **Đám đông qua cửa**. Mô hình chuyển động **theo đúng số liệu của mạch**: tăng U thì bơm mạnh hơn, thang máy nâng cao hơn, xích căng hơn.
- **Bảng đối chiếu** (bấm vào một thành phần của mạch thì thành phần tương ứng trong mô hình sáng lên):

| Mạch điện | Mạch nước kín | Xích xe đạp | Thang máy – máng trượt | Đám đông qua cửa |
|---|---|---|---|---|
| Electron | Nước trong ống (luôn đầy) | Mắt xích | Viên bi | Người |
| Pin | Máy bơm | Người đạp, đĩa trước | Thang máy nâng bi | Người điều phối đẩy lên, hay dốc lối đi |
| Hiệu điện thế | Chênh lệch áp suất | Độ căng (lực kéo) xích | Chênh lệch độ cao | Sức ép, độ dốc |
| Cường độ dòng điện | Lưu lượng (lít/giây) | Số mắt xích qua 1 điểm/giây | Số bi qua 1 điểm/giây | Số người qua cửa/giây |
| Điện trở, đèn | Đoạn ống hẹp, tua bin | Bánh sau có phanh, ma sát | Máng trượt có gờ cản | Cửa hẹp |
| Năng lượng ở đèn | Làm quay tua bin | Làm quay bánh, phanh nóng | Bi mất độ cao, máng nóng lên | Người tốn sức chen qua |
| Khoá mở | Khoá van | Tháo xích | Máng bị ngắt | Đóng cửa |
| Song song | Ống chia nhiều nhánh | (khó diễn tả) | Nhiều máng cùng độ cao | Nhiều cửa cạnh nhau |

- Ô **"Mô hình này đúng ở đâu, sai ở đâu?"** cho từng mô hình. Ví dụ: ống nước bị cắt thì nước tràn ra, còn dây điện bị cắt thì electron không bay ra ngoài; xích xe đạp không có mạch song song.
- **Phóng to dây tóc** (Shin hỏi 24/10): electron được điện trường tăng tốc rồi va chạm ion mạng tinh thể, ion rung mạnh hơn (nóng, sáng); electron ra khỏi đèn vẫn nguyên, chỉ mất thế năng e·U. Trong dây tóc mảnh, electron trôi nhanh hơn (cùng I, tiết diện nhỏ). Hình ảnh cho HS: bi lăn xuống cầu thang có gờ.
- Gợi ý dùng: xích xe đạp cho ý 1, 2, 6; thang máy cho ý 3; nước và đám đông cho ý 7.

### Tab 2. Pin, điện trở và đo đạc (ôn nhanh lớp 8 và định luật Ohm)
Một vòng mạch. Vôn kế hai que kéo tự do; ampe kế đặt ở nhiều điểm; đồ thị I theo U. Câu hỏi: vôn kế đặt hai đầu khoá mở chỉ bao nhiêu?

### Tab 3. Mạch nối tiếp
2–3 đèn/điện trở, 3–4 ampe kế cố định, vôn kế từng đèn. Dự đoán: I giảm dần / như nhau / tăng? Tháo một đèn. Kết luận: I như nhau, U = U₁ + U₂ + ..., R_tđ = R₁ + R₂ + ...

### Tab 4. Mạch song song
2–3 nhánh, ampe kế mạch chính và từng nhánh, công tắc từng nhánh. Dự đoán: thêm nhánh thì I mạch chính tăng hay giảm? Bảng tự cộng I₁ + I₂ + I₃. Bật điện trở trong (nâng cao).

### Tab 5. Điện trở tương đương – "hộp đen"
HS chỉnh R của một hộp kín sao cho ampe kế chỉ như đoạn mạch thật, rồi so với công thức.

### Tab 6. Thử thách và ứng dụng
Độ sáng hai đèn khác nhau ở hai cách mắc; vì sao điện trong nhà mắc song song; dây đèn trang trí; bài tính I sinh số ngẫu nhiên.

## D. Phạm vi so với danh mục
Mô phỏng này phủ chính mục **l9-12**. Tab 1–2 chạm tới **l8-09** (dòng điện), **l8-11** (đo I, U) và **l9-11** (định luật Ohm) ở mức ôn. Các mục đó vẫn giữ trong danh mục; có thể làm riêng sau hoặc đánh dấu "phủ một phần".
