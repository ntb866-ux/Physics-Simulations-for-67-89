# Mô phỏng Khối lượng riêng, lực đẩy Archimedes và sự nổi (KHTN 8) — thiết kế và chỗ đang dừng

**Trạng thái (27/10/2026):** XONG bản đầu index.html (6 tab, 14 video, 160 KB). Kiểm thử: 35 phép, 36 đạt (2 sửa sai lỗi test). Artifact v2: https://claude.ai/artifact/N5KNDX531X6625wQKcG4vy · Link đã cập nhật danh-muc-mo-phong.md (l8-01, l8-02) · media/DANH-SACH-VIDEO.md viết xong. Chưa chốt (chưa hướng dẫn GV, phiếu HS).

## Yêu cầu cần đạt (KHTN 8, "Khối lượng riêng và áp suất") — phủ l8-01 + l8-02
- Định nghĩa khối lượng riêng, D = m/V; liệt kê đơn vị thường dùng (kg/m³, g/cm³, g/mL).
- Thí nghiệm xác định khối lượng riêng của khối hộp chữ nhật, vật bất kì, một lượng chất lỏng.
- Thí nghiệm khảo sát tác dụng của chất lỏng lên vật đặt trong chất lỏng: điều kiện định tính vật nổi, vật chìm; định luật Archimedes.

## Khuôn mẫu kĩ thuật
Dùng lại khung của mo-phong/lop-6/luc-hap-dan/index.html (CSS, I18N VI/EN, size(), arrow(), graph(), PRED, nút g 9,8/10, "Che số liệu"). F_A = d·V, d = g·D.

## 6 tab
1. **Khối lượng riêng**: (a) khối hộp trên cân điện tử, chọn chất (gỗ 600, nhựa 1400, nhôm 2700, sắt 7800, đồng 8900) + thanh trượt a, b, c; (b) vật bất kì: kéo vật vào ống đong 100 mL (đá cuội 78 g/30 cm³, ốc sắt 31,2 g/4 cm³, chìa khoá đồng thau 17 g/2 cm³, bi thuỷ tinh 5 g/2 cm³); (c) chất lỏng: cốc 50 g, đổ V mL (cồn 790, dầu 920, nước 1000, nước biển 1025, nước muối đặc 1200, mật ong 1420). Bảng ghi + đồ thị m–V (đường thẳng qua gốc, độ dốc = D).
2. **Lực đẩy Archimedes**: lực kế treo vật hình trụ, kéo lên/xuống trên bình tràn; nước tràn sang cốc hứng (mô hình mực nước thật: nhấc vật lên thì mực nước tụt dưới vòi). Số chỉ = max(0, P − F_A), vật gỗ thì nổi (dây chùng). Bật/tắt mũi tên áp suất mặt trên/dưới (p = ρgh). Đồ thị F_A theo độ sâu (tăng rồi đứng yên khi chìm hẳn).
3. **F_A phụ thuộc vào gì**: hai lực kế A/B cạnh nhau; nút mẫu: cùng thể tích khác chất (sắt/nhôm 100 cm³), cùng khối lượng khác chất (sắt 100 cm³ / nhôm 289 cm³), cùng vật khác chất lỏng, cùng vật khác độ sâu.
4. **Nổi – lơ lửng – chìm**: bể 60 cm, kéo vật vào: khúc gỗ 8 kg (606 kg/m³), bi sắt 30 g, trứng 60 g (1080), nến 100 g (900), nước đá 50 g (917), táo 180 g (800), đá cuội 300 g (2600), vật tuỳ chỉnh (m, V). Chất lỏng + thanh "pha muối" (ρ ≈ 998 + 7,1S + 0,02S², S% NaCl), thuỷ ngân 13 534 (sắt nổi). Mực nước dâng theo thể tích chìm. Nhấn mạnh hiểu sai "vật nặng thì chìm" (gỗ 8 kg nổi, bi 30 g chìm).
5. **Thuyền đất nặn**: 60 g đất nặn (1600), thanh trượt từ "vo tròn" đến thành dày t = 20 → 1,5 mm (hộp hở L×L×0,4L, giải L bằng chia đôi); thêm bi 5 g đến khi chìm; so khối lượng riêng trung bình với nước.
6. **Ứng dụng**: tàu ngầm (V 3000 m³, vỏ 2700 t, két dằn 450 m³, nước biển 1025); khinh khí cầu (2800 m³, nhiệt độ trong 20–120 °C, ρ_ngoài = 1,204·e^(−h/8400), độ cao cân bằng); tỉ trọng kế (20 g, bầu 15 cm³, thân 0,5 cm² dài 22 cm, thang chia không đều).

Mỗi tab: 2 câu dự đoán, cơ chế (chênh lệch áp suất; lập luận "khối nước thay thế"), cách nói đơn giản, nguồn gốc thuật ngữ (density/密度; Ἀρχιμήδης, εὕρηκα; buoyancy ← buoy; 浮力 phù lực; 浮 phù / 沈 trầm; submarine; 輕氣球 khinh khí cầu; 比重計 tỉ trọng kế, hydrometer).

## Video (tiếng Anh) — CHƯA kiểm tra được thời lượng/nội dung (máy làm việc bị chặn YouTube)
| Tab | Loại | Tiêu đề (theo kết quả tìm kiếm) | Link | Tên file media/ |
|---|---|---|---|---|
| 1 | Thí nghiệm | Density Experiment - GCSE Physics Required Practical | https://www.youtube.com/watch?v=HLDrvfTNbaE | t1-density-practical.mp4 |
| 1 | Thí nghiệm | Measuring Density of irregular solid with Eureka can | https://www.youtube.com/watch?v=x8A96JXJioE | t1-eureka-can.mp4 |
| 1 | Hiện tượng | Making a 9 Layer Density Column! | https://www.youtube.com/watch?v=CyUXiYL-lq0 | t1-density-column.mp4 |
| 2 | Thí nghiệm | Buoyant Force in Action: Weight of Displaced Water! | https://www.youtube.com/watch?v=eZ5kRLYECuc | t2-displaced-water.mp4 |
| 2 | Thí nghiệm | Buoyant Force and Archimedes' Principle | https://www.youtube.com/watch?v=HQ5CBZqlnzE | t2-archimedes.mp4 |
| 3 | Thí nghiệm | Buoyant force on an object completely immersed ... does not depend on the density of the object | https://www.youtube.com/watch?v=PvrQ5Zv7MB0 | t3-not-density.mp4 |
| 4 | Hiện tượng | The Egg Density Experiment: Three Fates of One Egg! | https://www.youtube.com/watch?v=O4-_dSHLzkw | t4-egg-three-fates.mp4 |
| 4 | Hiện tượng | Sink or Float (BOWLING BALL!) | https://www.youtube.com/watch?v=t9tv95Kw8TU | t4-bowling-ball.mp4 |
| 4 | Hiện tượng | Steel Floats on Liquid Mercury - Density | https://www.youtube.com/watch?v=4Cautn05awg | t4-steel-mercury.mp4 |
| 5 | Thí nghiệm | Make a plasticine boat that floats on water! | https://www.youtube.com/watch?v=ANg4PX-fIDU | t5-plasticine-boat.mp4 |
| 5 | Thí nghiệm | The Mini Clay Boat Floating Contest! | https://www.youtube.com/watch?v=fbMt6IeSHEA | t5-clay-boat-contest.mp4 |
| 6 | Ứng dụng | How Submarines Go Up and Down | https://www.youtube.com/watch?v=xbaNe48j3KE | t6-submarine.mp4 |
| 6 | Ứng dụng | Why does hot air balloon float? | https://www.youtube.com/watch?v=P4awUtlWW94 | t6-hot-air-balloon.mp4 |
| 6 | Ứng dụng | How a Hydrometer Works | https://www.youtube.com/watch?v=KfOWu1kBWP0 | t6-hydrometer.mp4 |

Cách phát video dự kiến: file:// → phát media/<file>.mp4; web (GitHub Pages) → thử media/ rồi nhúng youtube-nocookie; trong artifact claude.ai → thumbnail là link mở thẻ mới. Thumbnail: media/<file>.jpg → i.ytimg.com → ô thay thế.

## Còn phải làm
Khi Shin "chốt": viết huong-dan-gv.md + phieu-hoc-tap.md. (Nếu ghép web GitHub Pages: nhắc Shin kết nối GitHub và tạo repo.)
