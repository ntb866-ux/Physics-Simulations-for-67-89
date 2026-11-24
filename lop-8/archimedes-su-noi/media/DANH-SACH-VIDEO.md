# Danh sách video cho mô phỏng lực đẩy Archimedes và sự nổi (l8-01, l8-02)

Bản offline: tải video từ YouTube theo danh sách dưới, lưu vào thư mục `media/` với tên file tương ứng (không cần phần mở rộng .mp4, code tự thêm).

**Mã môi trường (ENV):**
- `file:// ` → cố gắng phát `media/<tên>.mp4`; nếu không có → không phát, hiển thị "Không tìm thấy file video"
- Hoặc truy cập web (GitHub Pages) → video từ `media/` hoặc fallback YouTube iframe
- Hoặc `claude.ai` → click mở YouTube trong thẻ mới

| Tab | Loại | Tiêu đề | Link YouTube | Thời lượng | Tên file |
|---|---|---|---|---|---|
| 1 | Thí nghiệm | Khối lượng riêng: cân vật bất kì | https://youtu.be/HLDrvfTNbaE | Chưa kiểm tra | `tab1-thi-nghiem-1` |
| 1 | Thí nghiệm | Khối lượng riêng: so sánh trực quan | https://youtu.be/x8A96JXJioE | Chưa kiểm tra | `tab1-thi-nghiem-2` |
| 1 | Hiện tượng | Khối lượng riêng của một số chất | https://youtu.be/CyUXiYL-lq0 | Chưa kiểm tra | `tab1-hien-tuong` |
| 2 | Thí nghiệm | Lực đẩy Archimedes: bình tràn | https://youtu.be/eZ5kRLYECuc | Chưa kiểm tra | `tab2-thi-nghiem-1` |
| 2 | Thí nghiệm | Lực đẩy Archimedes: lực kế | https://youtu.be/HQ5CBZqlnzE | Chưa kiểm tra | `tab2-thi-nghiem-2` |
| 3 | Thí nghiệm | So sánh lực đẩy hai vật | https://youtu.be/PvrQ5Zv7MB0 | Chưa kiểm tra | `tab3-thi-nghiem` |
| 4 | Hiện tượng | Nổi/chìm/lơ lửng: gỗ, sắt, cây | https://youtu.be/O4-_dSHLzkw | Chưa kiểm tra | `tab4-hien-tuong-1` |
| 4 | Hiện tượng | Nổi/chìm/lơ lửng: muối | https://youtu.be/t9tv95Kw8TU | Chưa kiểm tra | `tab4-hien-tuong-2` |
| 4 | Hiện tượng | Nổi/chìm/lơ lửng: mật độ tương đối | https://youtu.be/4Cautn05awg | Chưa kiểm tra | `tab4-hien-tuong-3` |
| 5 | Thí nghiệm | Tàu từ đất nặn: chế tạo và kiểm tra | https://youtu.be/ANg4PX-fIDU | Chưa kiểm tra | `tab5-thi-nghiem-1` |
| 5 | Thí nghiệm | Tàu từ đất nặn: sức nặng tối đa | https://youtu.be/fbMt6IeSHEA | Chưa kiểm tra | `tab5-thi-nghiem-2` |
| 6 | Ứng dụng | Tàu ngầm: ballast và lặn/nổi | https://youtu.be/xbaNe48j3KE | Chưa kiểm tra | `tab6-ung-dung-tau-ngam` |
| 6 | Ứng dụng | Khinh khí cầu nóng: độ cao cân bằng | https://youtu.be/P4awUtlWW94 | Chưa kiểm tra | `tab6-ung-dung-khinh-khi-cau` |
| 6 | Ứng dụng | Tỉ trọng kế: đo độ mặn nước | https://youtu.be/KfOWu1kBWP0 | Chưa kiểm tra | `tab6-ung-dung-ti-trong-ke` |

**Ghi chú:**
- Thời lượng bị chặn YouTube ở máy làm việc, nên cập nhật sau nếu biết thêm thông tin.
- Mỗi video có một thumbnail `.jpg` cùng tên file (nếu có).
- Tên file có thể sửa trong `index.html` section `const VIDS = { ... }` nếu cần.
