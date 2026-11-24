# Vẽ tia sáng qua thấu kính: đối chiếu bản hiện có và thiết kế phần mới

Mô phỏng: Thấu kính và sự tạo ảnh (KHTN 9), https://claude.ai/artifact/WGZS9f4Wbb8QuurrQN7nfK. Bước 1 (đối chiếu + thiết kế) viết ngày 02/11/2026.

## 1. Nguyên lí: một định luật sinh ra mọi quy tắc

Với thấu kính mỏng, tia đi gần trục chính, mọi tia sáng đều tuân theo đúng **một** định luật:

> Tia tới gặp thấu kính ở độ cao **y** (tính từ quang tâm O), có độ dốc **u**. Tia ló có độ dốc **u′ = u − y/f**.
> (f > 0: thấu kính hội tụ; f < 0: thấu kính phân kì. Độ dốc = độ cao tăng thêm khi đi được 1 cm dọc trục.)

Cả năm quy tắc vẽ tia đều được suy ra từ định luật này:

| Quy tắc | Suy ra từ u′ = u − y/f |
|---|---|
| ① Tia qua quang tâm O truyền thẳng | y = 0 nên u′ = u |
| ② Tia song song trục chính → tia ló qua F′ (TKPK: đường kéo dài qua tiêu điểm cùng phía tia tới) | u = 0 nên u′ = −y/f, tia ló cắt trục cách O đúng f |
| ③ Tia qua F (TKPK: hướng tới tiêu điểm bên kia) → tia ló song song trục chính | u = y/f nên u′ = 0 |
| ④ Chùm tia song song (xiên) → hội tụ tại **tiêu điểm phụ** F′₁ trên **tiêu diện ảnh**, là giao của **trục phụ** (đường qua O, song song chùm tia) với tiêu diện | Khi tới mặt phẳng cách O một khoảng f, mọi tia ở độ cao y + u′f = u·f, không phụ thuộc y |
| ⑤ Các tia xuất phát từ một điểm P trên **tiêu diện vật** → ló ra song song với trục phụ PO | u = (y − p)/f nên u′ = −p/f, không phụ thuộc y, đúng bằng độ dốc của PO |

Quy tắc ④ cho phép vẽ tia ló của **một tia bất kì**: vẽ trục phụ qua O song song với tia tới, trục phụ cắt tiêu diện ảnh tại F′₁, tia ló đi qua F′₁. Với TKPK thì đường kéo dài của tia ló đi qua F′₁.

**Nói cho học sinh lớp 9:**
- Thấu kính bẻ tia sáng càng mạnh khi tia đi càng xa tâm. Đúng ở tâm thì hai mặt kính gần như song song, giống một tấm kính phẳng mỏng, nên tia đi thẳng.
- Tiêu diện là "bức tường vô hình" dựng đứng tại tiêu điểm. Mọi chùm tia song song đi vào đều gặp nhau tại một điểm trên bức tường đó. Muốn biết điểm nào thì vẽ tia đi qua tâm O (tia này không bị bẻ), cùng hướng với chùm.
- Đi ngược lại: ánh sáng phát ra từ một điểm trên bức tường đó, sau khi qua thấu kính, thành chùm song song.

**Vì sao mô phỏng không thể vẽ sai quy tắc:** chương trình không vẽ riêng từng quy tắc. Mọi tia đều được tính bằng đúng một công thức u′ = u − y/f, nên năm quy tắc tự động đúng. Phép phóng to theo chiều đứng (để vật nhỏ dễ nhìn) chỉ kéo giãn hình theo một phương, nên vẫn giữ nguyên đường thẳng, đường song song và giao điểm. Ở bước 3 sẽ có thêm bài kiểm thử tự động: thử hàng nghìn vị trí ngẫu nhiên và đo lại từng quy tắc trên chính các đoạn thẳng đã vẽ.

## 2. Đối chiếu bản hiện có

**Đúng:**
- Tab 2–6 dùng đúng định luật trên. Tab 3, đặt vật đúng tại F: các tia ló song song với nhau, đúng quy tắc ⑤. Đã kiểm tra mã tính tia và các trường hợp trong tab 6.
- Tab 1 dò tia bằng định luật khúc xạ thật (n = 1,5), nên quy tắc chỉ đúng gần đúng. Đây là chủ ý, vì tab này dạy hiện tượng quang sai cầu.
- Máy chiếu phóng to: tụ quang gồm hai thấu kính. Các tia chiếu sáng thoả định luật với f₁ ≈ 4,6 cm và f₂ ≈ 22,8 cm, rồi hội tụ vào quang tâm vật kính và đi thẳng qua đó. Đúng.

**Cần sửa:**

| # | Chỗ | Vấn đề | Cách sửa |
|---|---|---|---|
| 1 | Tab 3, TKPK | Đường kéo dài nét đứt của tia song song trục chính chỉ vẽ tới B′, không chạm tiêu điểm. Ví dụ d = 28 cm, f = 10 cm: ảnh cách O 7,4 cm, còn tiêu điểm cách O 10 cm. HS không thấy được quy tắc ②. | Kéo dài nét đứt tới tiêu điểm (hoặc tới B′ nếu B′ xa hơn). |
| 2 | Tab 2 | Không có nét đứt cho: tia của TKPK hướng tới F′ (phần sau thấu kính), và tia của TKHT có đường kéo dài qua F (đèn đặt giữa F và O). HS không thấy tia đó "nhắm" vào tiêu điểm. | Vẽ nét đứt khi tia đúng quy tắc ③. |
| 3 | Tab 3 (vật gần F), tab 5 máy chiếu phóng to | Tia dựng hình gặp mặt phẳng thấu kính **ngoài mép kính**. Ví dụ f = 10, d = 12, h = 3: tia qua F gặp thấu kính ở độ cao 15 cm, kính chỉ cao 5 cm. Ở máy chiếu, tia song song ở độ cao 2,4 cm, vật kính chỉ cao 2,3 cm, nên tia đi qua chỗ không có kính. | Khi tia dựng hình ra ngoài mép: vẽ phần kéo dài của thấu kính bằng nét đứt, kèm ghi chú "tia dựng hình: coi như thấu kính được kéo dài". Máy chiếu: tăng cỡ vật kính. |
| 4 | Tab 5, máy ảnh | Có vẽ tia qua F nhưng không đánh dấu điểm F. | Thêm điểm F. |
| 5 | Tab 6 | Mọi tia ló đều có nét đứt kéo dài ngược về phía trước, kể cả khi ảnh thật. Thừa nét, và trái quy ước "nét đứt chỉ dùng cho đường kéo dài và ảnh ảo". | Chỉ vẽ khi cần: ảnh ảo, hoặc tia song song qua TKPK. |
| 6 | Toàn bộ | Chưa có quy tắc ④ ⑤: không có trục phụ, tiêu diện, tiêu điểm phụ. | Phần mới ở mục 3. |

**Một điểm cần Shin chọn: kí hiệu tiêu điểm của TKPK.** Bản hiện tại đặt tên theo vị trí: F bên trái (phía ánh sáng tới), F′ bên phải, cho cả hai loại thấu kính. Theo cách này, tia song song qua TKPK có đường kéo dài qua F, còn tia hướng tới F′ ló ra song song. Đây là cách của SGK Vật lí 9 cũ. Cách chặt chẽ (Vật lí 11) thì khác: "tiêu điểm ảnh F′" là nơi các tia song song hội tụ, hoặc đường kéo dài của chúng gặp nhau. Với TKPK, F′ nằm cùng phía ánh sáng tới. Khi thêm tiêu điểm phụ (F′₁ nằm trên tiêu diện ảnh), cách đặt tên theo vị trí sẽ ra "tiêu diện ảnh đi qua F", dễ gây rối. Cần khớp với bộ sách Shin dạy.

## 3. Thiết kế phần mới: tab "Vẽ tia sáng" (đặt ngay sau tab 2)

**Thanh trên:** chọn hội tụ/phân kì, chỉnh tiêu cự f, bật/tắt tiêu diện và trục phụ.

**Bốn chế độ:**
1. **Ba tia đặc biệt.** Điểm sáng S kéo được tới bất cứ đâu. Hiện 3 tia và ảnh S′ (thật hoặc ảo). Chương trình tự báo các trường hợp đặc biệt:
   - S nằm trên tiêu diện: tia qua F song song với mặt thấu kính nên không tới được thấu kính, không có ảnh (ảnh ở vô cực).
   - S nằm trên trục chính: ba tia trùng nhau, phải dùng tia bất kì.
2. **Tia bất kì** (Mở rộng). Kéo đèn chiếu một tia theo hướng tuỳ ý. Nút "Từng bước" dựng lần lượt:
   1. trục phụ qua O, song song với tia tới;
   2. tiêu diện ảnh;
   3. tiêu điểm phụ F′₁;
   4. tia ló qua F′₁ (TKPK: đường kéo dài qua F′₁).

   Có thêm "Cách 2": tia tới cắt tiêu diện vật tại P, tia ló song song với PO.
3. **Điểm trên tiêu diện** (Mở rộng). Điểm sáng P chỉ trượt trên tiêu diện vật và phát ra một chùm tia (chỉnh được số tia). Chùm ló ra song song với trục phụ PO. Với TKPK: chùm tia hội tụ hướng tới một điểm trên tiêu diện phía sau thấu kính, ló ra song song.
4. **Chùm song song xiên** (Mở rộng). Xoay góc chùm tia: chùm hội tụ tại tiêu điểm phụ trên tiêu diện ảnh (TKPK: đường kéo dài các tia ló gặp nhau tại đó).

**Bảng "Quy tắc"** đặt cạnh hình: năm quy tắc, quy tắc nào đang được dùng thì sáng lên. Ở mức định lượng có thêm số đo kiểm chứng ngay trên hình, ví dụ:
- góc tia tới 12,3° và góc tia ló 12,3° (tia qua O);
- khoảng cách từ tia ló tới F′₁ là 0,00 cm.

**HS tự vẽ** (kiểm tra từng bước). Máy cho một tia tới ngẫu nhiên, HS làm lần lượt:
1. xoay trục phụ quanh O cho song song với tia tới;
2. chấm điểm F′₁ trên tiêu diện;
3. kéo tia ló.

Nếu sai, máy chỉ đúng quy tắc bị vi phạm và cho gợi ý.

**Mức định tính / định lượng:**
- Định tính: chế độ 1 và xem chế độ 2–4, không có số.
- Định lượng: thêm dựng từng bước, số đo và phần HS tự vẽ.

## 4. Kế hoạch và model đề xuất

| Bước | Việc | Model đề xuất |
|---|---|---|
| 1 | Đối chiếu + thiết kế (tài liệu này) | Opus 5.5 medium (xong) |
| 2 | Sửa 5 lỗi + viết tab "Vẽ tia sáng" vào index.html | Sonnet 5.5 medium |
| 3 | Kiểm thử tự động: bắt mọi đoạn tia đã vẽ, đo lại 5 quy tắc trên hàng nghìn trường hợp ngẫu nhiên; kiểm tra điện thoại, sáng/tối, tiếng Anh; đăng bản 4 | Opus 5.5 medium (kiểm tra khoa học) |
