// Hành động cho nút 2
export function button2Action() {
  console.log('Nút 2 được nhấn');

  // Ví dụ: Thay đổi màu nền trang
  const originalBackgroundColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = '#f0f8ff'; // Màu xanh nhạt

  // Tạo thông báo nổi
  const message = document.createElement('div');
  message.textContent = 'Màu nền đã thay đổi! Nhấp để hoàn tác.';
  message.style.position = 'fixed';
  message.style.bottom = '20px';
  message.style.right = '20px';
  message.style.padding = '10px 15px';
  message.style.backgroundColor = '#cce5ff';
  message.style.border = '1px solid #b8daff';
  message.style.borderRadius = '4px';
  message.style.color = '#004085';
  message.style.zIndex = '9999';
  message.style.cursor = 'pointer';

  // Thêm sự kiện nhấp chuột để hoàn tác màu nền
  message.addEventListener('click', () => {
    document.body.style.backgroundColor = originalBackgroundColor;
    document.body.removeChild(message);
  });

  document.body.appendChild(message);

  // Tự động xóa sau 10 giây
  setTimeout(() => {
    if (message.parentNode === document.body) {
      document.body.removeChild(message);
      document.body.style.backgroundColor = originalBackgroundColor;
    }
  }, 10000);

  // Ví dụ: Lưu giá trị sử dụng GM_setValue
  GM_setValue('button2Clicked', Date.now());
}
