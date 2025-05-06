// Hành động cho nút 1
export function button1Action() {
  console.log('Nút 1 được nhấn');

  // Ví dụ: Hiển thị thông báo
  alert('Hành động của Nút 1 đã được thực thi!');

  // Ví dụ: Sửa đổi nội dung trang
  const mainContent = document.querySelector('main') || document.body;

  if (mainContent) {
    // Tạo phần tử thông báo
    const notification = document.createElement('div');
    notification.style.padding = '15px';
    notification.style.backgroundColor = '#d4edda';
    notification.style.border = '1px solid #c3e6cb';
    notification.style.borderRadius = '4px';
    notification.style.marginBottom = '15px';
    notification.style.color = '#155724';

    notification.textContent = 'Hành động của Nút 1 đã được thực thi thành công!';

    // Thêm nút đóng
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.float = 'right';
    closeButton.style.border = 'none';
    closeButton.style.background = 'none';
    closeButton.style.fontSize = '20px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#155724';

    closeButton.addEventListener('click', () => {
      mainContent.removeChild(notification);
    });

    notification.appendChild(closeButton);

    // Chèn vào đầu nội dung chính
    mainContent.insertBefore(notification, mainContent.firstChild);

    // Tự động xóa sau 5 giây
    setTimeout(() => {
      if (notification.parentNode === mainContent) {
        mainContent.removeChild(notification);
      }
    }, 5000);
  }
}
