# Khảo sát: Khúc xạ ánh sáng và phản xạ toàn phần (KHTN 9)

*Bước chuẩn bị trước khi làm mô phỏng (mục l9-03 và l9-04 trong danh mục). Ngày 24/10/2026.*

## 1. Chương trình yêu cầu gì

Trích chương trình KHTN 2018, lớp 9, mạch "Ánh sáng":

- Thực hiện thí nghiệm chứng tỏ được khi truyền từ môi trường này sang môi trường khác, tia sáng có thể bị khúc xạ (bị lệch khỏi phương truyền ban đầu).
- Nêu được chiết suất có giá trị bằng tỉ số tốc độ ánh sáng trong không khí (hoặc chân không) với tốc độ ánh sáng trong môi trường.
- Thực hiện được thí nghiệm để rút ra và phát biểu được định luật khúc xạ ánh sáng.
- Vận dụng được biểu thức n = sin i / sin r trong một số trường hợp đơn giản.
- Thực hiện thí nghiệm để rút ra được điều kiện xảy ra phản xạ toàn phần và xác định được góc tới hạn.

Nhận xét:
- Có **5 yêu cầu**, trong đó **3 yêu cầu bắt đầu bằng "thực hiện thí nghiệm"**. Mô phỏng phải là một bàn thí nghiệm thật sự (đo góc, ghi bảng, rút quy luật), không chỉ là hình minh hoạ.
- Chương trình gắn chiết suất với **tốc độ ánh sáng** (n = c/v). Đây là chỗ SGK hay chỉ nói một câu; mô phỏng nên cho HS *thấy* ánh sáng chậm lại thì vì sao tia bị gãy.
- Lăng kính, tán sắc (l9-05) và "thấu kính là nhiều lăng kính nhỏ" là các yêu cầu khác. Phần thấu kính đã có trong mô phỏng *Thấu kính và sự tạo ảnh* (tab 1: ghép lăng kính thành thấu kính). Mô phỏng này **không làm lại** phần đó.

## 2. Cơ chế khoa học (cho GV)

**Vì sao ánh sáng chậm lại trong môi trường?** Ánh sáng là sóng điện từ. Khi vào thuỷ tinh, điện trường của sóng làm các electron trong nguyên tử dao động; các electron này phát lại sóng thứ cấp cùng tần số nhưng trễ pha. Sóng tới chồng với sóng thứ cấp tạo thành một sóng tổng truyền với tốc độ pha v = c/n nhỏ hơn c. Từng photon không "đi chậm" giữa các nguyên tử; cái chậm là sóng tổng.

**Vì sao chậm lại thì tia bị gãy?** Tần số f không đổi khi qua mặt phân cách, nên bước sóng giảm: λ₂ = v₂/f. Dọc theo mặt phân cách, các đỉnh sóng hai bên phải khớp nhau (sóng liên tục). Khoảng cách giữa hai đỉnh đo dọc mặt phân cách là λ₁/sin i ở bên này và λ₂/sin r ở bên kia, nên:

> sin i / sin r = λ₁/λ₂ = v₁/v₂ = n₂/n₁

Từ không khí (n₁ ≈ 1) vào môi trường n: **sin i / sin r = n** đúng như biểu thức của chương trình. Một cách nhìn tương đương là **nguyên lí Fermat**: ánh sáng đi theo đường mất ít thời gian nhất.

**Phản xạ một phần luôn có.** Ở mọi mặt phân cách, một phần ánh sáng phản xạ lại (công thức Fresnel). Chiếu vuông góc vào thuỷ tinh: R = ((n−1)/(n+1))² ≈ 4%. Càng chiếu xiên, phần phản xạ càng lớn.

**Phản xạ toàn phần.** Khi đi từ môi trường chiết quang hơn sang kém hơn (n₁ > n₂), góc khúc xạ lớn hơn góc tới. Tăng i thì r tiến tới 90°, phần phản xạ tăng dần, tia khúc xạ mờ dần và là sát mặt phân cách. Tại góc tới hạn sin i_gh = n₂/n₁, r = 90°. Với i > i_gh thì sin r tính ra lớn hơn 1, không có góc nào thoả mãn: không có sóng truyền sang môi trường kia (chỉ có một "sóng tắt dần" thấm sâu cỡ một bước sóng rồi tắt), **100% năng lượng phản xạ lại**. Gương thường chỉ phản xạ khoảng 90%, nên phản xạ toàn phần là "gương tốt nhất".

**Số liệu dùng trong mô phỏng** (ánh sáng vàng, gần 589 nm):

| Môi trường | n | v (×10⁸ m/s) | i_gh khi ra không khí |
|---|---|---|---|
| Không khí | 1,0003 (lấy 1) | 3,00 | — |
| Nước đá | 1,31 | 2,29 | 49,8° |
| Nước | 1,33 | 2,25 | 48,8° |
| Thuỷ tinh thường | 1,50 | 2,00 | 41,8° |
| Nhựa mica (acrylic) | 1,49 | 2,01 | 42,2° |
| Dầu ăn | ≈ 1,47 | 2,04 | 42,9° |
| Kim cương | 2,42 | 1,24 | 24,4° |

## 3. Diễn giải đơn giản cho HS

- **Hàng người khoác tay nhau** đi từ sân xi măng xuống bãi cát. Người chạm cát trước đi chậm lại trước, người còn trên sân vẫn đi nhanh, nên cả hàng xoay hướng. Ánh sáng cũng thế: vào nước, thuỷ tinh thì chậm lại, nên "xoay" về phía pháp tuyến. Chiếu thẳng vuông góc thì cả hàng chạm cát cùng lúc, không xoay.
- **Xe đẩy hai bánh** lăn từ sàn nhẵn sang thảm: bánh nào chạm thảm trước chậm trước, xe rẽ.
- **Nhân viên cứu hộ**: muốn tới người đuối nước nhanh nhất thì chạy trên cát (nhanh) dài hơn một chút rồi mới bơi (chậm). Đường nhanh nhất là đường gãy khúc, không phải đường thẳng. Ánh sáng "chọn" đúng đường đó.
- **Phản xạ toàn phần**: ánh sáng từ nước muốn ra không khí mà chiếu quá xiên thì "không ra được cửa", bị bật lại toàn bộ như gặp gương.

## 4. Nguồn gốc thuật ngữ

- **Khúc xạ**: Hán Việt 曲 *khúc* (cong, gãy khúc) + 射 *xạ* (bắn, chiếu ra): "tia chiếu bị cong/gãy". Tiếng Trung hiện đại dùng 折射 *zhéshè* (bẻ gãy + chiếu), tiếng Nhật 屈折 *kussetsu* (uốn + gãy). Tiếng Anh *refraction* từ Latinh *refringere*, quá khứ phân từ *refractus*: *re-* (ngược lại) + *frangere* (bẻ gãy), cùng gốc với *fracture* (gãy xương), *fragment* (mảnh vỡ). Người Hy Lạp (Ptolemy) gọi là κλάσις *klasis*, "sự bẻ gãy". Hầu như mọi ngôn ngữ đều thấy hiện tượng này như **tia sáng bị bẻ gãy**, giống chiếc bút "gãy" trong cốc nước.
- **Chiết suất**: 折 *chiết* (bẻ gãy) + 率 *suất* (tỉ lệ): "tỉ lệ bẻ gãy". Trung: 折射率, Nhật: 屈折率, Anh: *refractive index* (*index* Latinh là "ngón trỏ, cái chỉ ra").
- **Phản xạ toàn phần**: 反射 *phản xạ* (chiếu ngược lại) + 全部 *toàn phần* (toàn bộ). Trung: 全反射 hoặc 全内反射, Nhật: 全反射 *zenhansha*, Anh: *total internal reflection* (chữ *internal* nhấn mạnh: chỉ xảy ra khi ánh sáng ở **bên trong** môi trường chiết quang hơn đi ra), Pháp: *réflexion totale*.
- **Góc tới hạn**: "giới hạn của góc tới". Trung/Nhật: 臨界角 *lâm giới giác* (góc chạm đến ranh giới). Anh: *critical angle*, từ Hy Lạp κρίνειν *krinein* (phân định, quyết định): góc **quyết định** ánh sáng ra được hay không.
- **Pháp tuyến**: 法線, *pháp* = khuôn phép, chuẩn. Anh: *normal*, từ Latinh *norma* là **cái thước thợ mộc (ê-ke)**. Pháp tuyến đúng nghĩa đen là "đường dựng bằng ê-ke", tức vuông góc.

## 5. Lịch sử ngắn (dùng để mở bài)

- **Ptolemy** (thế kỉ 2) đo góc tới và góc khúc xạ không khí–nước, lập bảng nhưng tưởng quan hệ gần như tỉ lệ thuận. Đây đúng là quan niệm sai của HS ngày nay ("r tỉ lệ với i").
- **Ibn Sahl** (Baghdad, 984) đã dùng quy luật sin dưới dạng hình học để thiết kế thấu kính đốt.
- **Harriot** (1602) và **Snell** (1621) tìm lại định luật nhưng không công bố; **Descartes** công bố năm 1637. Vì vậy tiếng Anh gọi là *Snell's law*, tiếng Pháp gọi là *loi de Descartes*.
- **Colladon** (Geneva, 1842) dẫn ánh sáng đi cong theo một vòi nước chảy ra từ thùng, minh hoạ cho bài giảng. **Tyndall** (London, 1854) phổ biến thí nghiệm này. Đó là tổ tiên của cáp quang.

## 6. Các mô phỏng sẵn có trình bày thế nào

### PhET – Bending Light (ĐH Colorado)
Phổ biến nhất, có bản tiếng Việt, chạy trên trình duyệt.
- **Màn hình:** *Intro* (hai môi trường, đổi n, xoay đèn laser), *More Tools* (thước đo góc, máy đo cường độ, đồng hồ tốc độ, máy dò sóng, đổi bước sóng), *Prisms* (lăng kính nhiều hình, ánh sáng trắng tán sắc).
- **Mô hình:** chọn xem dạng **tia** hoặc **sóng**; cường độ tia phản xạ/khúc xạ theo công thức Fresnel (phân cực s), độ sáng tia thay đổi theo góc. Thuỷ tinh n = 1,50 ở 650 nm.
- **Điểm mạnh:** đúng vật lí, có cường độ phản xạ một phần, có tìm n của vật liệu bí ẩn, đẹp.
- **Hạn chế cho lớp học VN:** khám phá tự do, không có kịch bản dự đoán → đo → kết luận; HS phải tự đọc thước đo góc, tự ghi số; **không có bảng số liệu và đồ thị sin i theo sin r**, nên phần "rút ra định luật" GV phải tự dựng; mặt phân cách luôn nằm ngang (xem quan niệm sai số 5); không có hiện tượng đời sống (cá, đồng xu, ảo ảnh) và ứng dụng (sợi quang, kim cương, lăng kính phản xạ toàn phần).

### Falstad – Ripple Tank và Snell's Law applet
- Ripple Tank mô phỏng **sóng thật** (phương trình sóng): thấy mặt sóng đổi bước sóng, gãy hướng, phản xạ toàn phần, cả sóng tắt dần. Có bản trình duyệt miễn phí.
- **Điểm mạnh:** đúng bản chất sóng, rất trực quan cho GV.
- **Hạn chế:** giao diện kĩ sư, tiếng Anh, không đo góc, không dành cho HS THCS.

### OLabs (Ấn Độ), Physics Classroom (Mỹ), các phòng thí nghiệm ảo khác
- OLabs: thí nghiệm khối thuỷ tinh hộp chữ nhật, cắm đinh ghim, đo góc, theo kiểu từng bước của phòng thực hành. Physics Classroom: bài học + câu hỏi luyện tập, có ví dụ hàng lính đi xuống bãi cỏ. Chủ yếu tiếng Anh.

### Tài liệu Việt Nam
- Cả ba bộ SGK đều có bài: Cánh diều Bài 3 "Khúc xạ ánh sáng và phản xạ toàn phần"; Kết nối tri thức Bài 5 (Khúc xạ) và Bài 6 (Phản xạ toàn phần); Chân trời sáng tạo Bài 6. Thí nghiệm SGK dùng khối bán trụ thuỷ tinh/nhựa trên bảng chia độ tròn, đèn laser.
- Trên mạng chủ yếu là PowerPoint, video, lời giải (Loigiaihay, VietJack, Hoatieu). Không thấy mô phỏng tương tác tiếng Việt bám yêu cầu cần đạt; GV thường mở PhET.

### Ý tưởng hay từ các nước
- **Anh (IOP Spark, Episode 317):** bể sóng có tấm kính chìm (nước nông hơn thì sóng chậm), cho sóng tới thẳng trước rồi mới xiên; ví dụ **hàng lính**, **xe trượt bánh lên lề cỏ**, **cứu hộ trên bờ sông** (nguyên lí Fermat). Lời khuyên: "tia sáng chỉ gãy ở chỗ tốc độ thay đổi"; đo góc so với pháp tuyến; nhấn mạnh **tính thuận nghịch** của đường truyền.
- **Nhật (tài liệu thành phố Oita, lớp 7):** cho HS nhìn **cá vàng trong bể từ dưới mặt nước lên**, thấy ảnh cá trên mặt nước, dự đoán ảnh rồi vẽ tia; sau đó dùng đèn tăng dần góc tới trong nước để thấy góc khúc xạ tiến tới 90° rồi ánh sáng phản xạ hết. Quay video bằng máy tính bảng để xem lại. Bài kiểm tra 2022 cho thấy HS yếu nhất ở chỗ **quy luật tại mặt phân cách nước/thuỷ tinh với không khí**.
- **Thí nghiệm đời sống kinh điển:** đồng xu "hiện ra" khi đổ nước vào cốc; bút chì "gãy"; bể bơi trông nông hơn (độ sâu biểu kiến ≈ h/n); **cửa sổ Snell** (cá dưới nước thấy cả bầu trời thu vào một hình tròn góc mở 97°, ngoài vòng tròn là gương phản chiếu đáy); **ảo ảnh trên đường nhựa nóng** (chiết suất thay đổi dần, tia cong dần); **que thuỷ tinh tàng hình trong dầu ăn** (chiết suất bằng nhau thì không có khúc xạ, không có phản xạ, không thấy mặt phân cách); vòi nước dẫn sáng Colladon; kim cương lấp lánh; lăng kính 45° trong ống nhòm, kính tiềm vọng.

## 7. Chỗ HS hay hiểu sai

| Quan niệm sai | Bằng chứng | PhET xử lí? |
|---|---|---|
| 1. **Thuỷ tinh, nước trong suốt nên tia đi thẳng**, không gãy | Khảo sát 213 HS lớp 9 *sau khi đã học*: 57,7% vẽ tia đi thẳng từ không khí vào thuỷ tinh, 56,8% từ nước ra không khí; chỉ 5–9% trả lời đúng có giải thích (Rev. Mex. Fís. E) | Thấy được nếu HS tự thử, không có dự đoán trước |
| 2. **Tia không vào được** vì thuỷ tinh "đặc", bị bật lại | 21,1% HS cùng khảo sát | Có phản xạ một phần, không làm nổi bật |
| 3. **Luôn "gãy về phía pháp tuyến"** cả khi từ nước/thuỷ tinh ra không khí | Hubber 2005 (Úc); Mohapatra 1988: do SGK chỉ vẽ trường hợp không khí → thuỷ tinh | Có thể đổi chiều, không dẫn dắt |
| 4. **Chiếu vuông góc thì tia vẫn gãy** hoặc bật thẳng ngược lại | 16% và 23,9% HS | — |
| 5. **Không vẽ được khi mặt phân cách thẳng đứng** (chỉ quen mặt nằm ngang) | Andersson & Kärrqvist 1983, IOP Spark | Không, mặt luôn ngang |
| 6. **r tỉ lệ thuận với i** (như bảng của Ptolemy) | Lỗi kinh điển khi chỉ có bảng i, r | Không có bảng/đồ thị |
| 7. **Phản xạ toàn phần xảy ra đột ngột**, trước góc tới hạn không có tia phản xạ | Sách và hình vẽ thường bỏ tia phản xạ yếu | Có (độ sáng Fresnel) |
| 8. **Phản xạ toàn phần xảy ra theo cả hai chiều** (cả không khí → nước) | Quên điều kiện n₁ > n₂ | Có thể thử, không dẫn dắt |
| 9. **Ở góc tới hạn tia "chạy dọc mặt nước"** như một tia thật đi mãi | Hiểu sai hình vẽ r = 90° | — |
| 10. **Ánh sáng chậm lại vì môi trường "đặc" hơn** (nhầm với khối lượng riêng) | Lẫn chiết quang với khối lượng riêng; dầu nhẹ hơn nước nhưng chiết quang hơn | — |
| 11. **Mắt nhìn vật ở đúng chỗ của vật** (không hiểu vì sao bể nông hơn, đồng xu nổi lên) | HS không nối khúc xạ với ảnh nhìn thấy | Không có |

## 8. Gợi ý: mô phỏng của dự án nên làm khác/tốt hơn ở đâu

- **Không cạnh tranh với PhET ở khám phá tự do.** Làm bàn thí nghiệm dựng sẵn giống SGK VN (bán trụ trên bảng chia độ tròn), kéo đèn laser quanh bảng, **bảng số liệu tự ghi và đồ thị sin i – sin r** để HS *rút ra* định luật đúng như chương trình yêu cầu.
- **Dự đoán trước mỗi phần**, nhắm thẳng vào quan niệm sai 1–4, 7, 8 (khảo sát cho thấy HS đã học vẫn sai rất nhiều).
- **Cho thấy vì sao gãy**: chế độ mặt sóng / hàng người, nối n với tốc độ v (yêu cầu "chiết suất = c/v" mà SGK chỉ nêu).
- **Mặt phân cách xoay được** (ngang, đứng, xiên) và **đổi chiều ánh sáng** (thuận nghịch).
- **Phản xạ một phần luôn hiển thị bằng độ sáng thật (Fresnel)** + thanh % năng lượng, để HS thấy phản xạ toàn phần là quá trình tăng dần tới 100%, không phải công tắc bật/tắt.
- **Hiện tượng đời sống và ứng dụng** mà các mô phỏng nước ngoài thiếu: đồng xu, bể bơi, cửa sổ Snell, ảo ảnh, que thuỷ tinh tàng hình, sợi quang, kim cương, lăng kính phản xạ toàn phần.
- Giữ ranh giới với mô phỏng thấu kính: không làm lăng kính/thấu kính ở đây.

## Nguồn
- Chương trình GDPT 2018 môn KHTN THCS (thư viện dự án: tai-lieu/Chuong-trinh-2018-KHTN-THCS.pdf), lớp 9 – Ánh sáng.
- PhET, *Bending Light – HTML teacher guide*: https://phet.colorado.edu/files/teachers-guide/bending-light-html-guide_en.pdf
- Falstad Ripple Tank: https://falstad.com/apps/RippleTank · Snell's law applet: https://falstad.com/nw/snell.html
- IOP Spark, *Episode 317: Reflection and refraction of waves*: https://spark.iop.org/episode-317-reflection-and-refraction-waves
- IOP Spark, *Some students struggle to draw ray diagrams showing refraction when the boundary is vertical*: https://spark.iop.org/some-students-struggle-draw-ray-diagrams-showing-refraction-when-boundary-depicted-vertical-if-they
- Khảo sát quan niệm khúc xạ của 213 HS lớp 9 (Revista Mexicana de Física E): https://rmf.smf.mx/ojs/index.php/rmf-e/article/download/4706/5949/14405
- Hubber (2005), Asia-Pacific Forum on Science Learning and Teaching 6(1): https://eduhk.hk/apfslt/v6_issue1/hubber/hubber5.htm
- Thành phố Oita (Nhật), tài liệu khoa học lớp 7 về khúc xạ, phản xạ toàn phần: https://www.city.oita.oita.jp/o189/kosodate/gakkokyoiku/documents/chu1rika.pdf
- Lịch sử định luật khúc xạ (A. Young, SDSU): https://aty.sdsu.edu/explain/optics/discovery.html
- Colladon và vòi nước dẫn sáng 1842: https://skullsinthestars.com/2013/09/16/1842-jean-daniel-colladon-guides-light-with-water · https://en.wikipedia.org/wiki/Jean-Daniel_Colladon
- SGK KHTN 9 Cánh diều Bài 3: https://loigiaihay.com/giai-khtn-9-bai-3-trang-19-20-21-canh-dieu-a157529.html
