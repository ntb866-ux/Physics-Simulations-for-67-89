# Nhúng mô phỏng vào slide / trang web

1. Mở trang chủ, bấm **Nhúng** ở mô phỏng cần dùng.
2. Chọn tab muốn mở sẵn (và tích "Ẩn thanh tab" nếu muốn khoá vào đúng tab đó).
3. Chép đoạn `<iframe …>` dán vào slide HTML, Google Sites, Canva ("Nhúng"), Moodle/LMS.

## Tham số trên đường dẫn
| Tham số | Tác dụng |
|---|---|
| `?embed=1` | Ẩn tiêu đề và chân trang |
| `&tab=N` | Mở sẵn tab thứ N (đếm từ 1) |
| `&notabs=1` | Ẩn thanh tab (cần đi kèm `tab=N`) |

Ví dụ: `lop-8/archimedes-su-noi/?embed=1&tab=2&notabs=1`

## Ghi chú
- Google Slides không nhúng được iframe: dùng link thường (nút **Mở**) rồi gắn vào slide.
- PowerPoint: dùng add-in "Web Viewer" và dán link.
- Xem `mau-slide-nhung.html` để thấy slide HTML mẫu.
- Thêm mô phỏng mới: chép `index.html` vào `lop-N/<ten>/` và thêm dòng `<script src="../../embed.js"></script>` ngay trước `</body>`.
