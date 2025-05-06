// Mã xử lý menu
export function createMenu(menuItems) {
  // Tạo container cho menu
  const menuContainer = document.createElement('div');
  menuContainer.className = 'user-script-menu';

  // Tạo tiêu đề menu
  const menuTitle = document.createElement('h3');
  menuTitle.textContent = 'Menu Script Người Dùng';
  menuTitle.className = 'user-script-menu-title';
  menuContainer.appendChild(menuTitle);

  // Tạo các nút cho từng mục menu
  menuItems.forEach(item => {
    const button = document.createElement('button');
    button.className = 'user-script-menu-button';
    button.textContent = item.label;
    button.addEventListener('click', () => {
      item.action();
    });
    menuContainer.appendChild(button);
  });

  // Thêm nút đóng
  const closeButton = document.createElement('button');
  closeButton.className = 'user-script-menu-button user-script-menu-close';
  closeButton.textContent = 'Đóng Menu';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(menuContainer);

    // Thêm nút để mở lại menu
    const reopenButton = document.createElement('button');
    reopenButton.textContent = 'Mở Menu';
    reopenButton.className = 'user-script-menu-reopen';

    reopenButton.addEventListener('click', () => {
      document.body.removeChild(reopenButton);
      createMenu(menuItems);
    });

    document.body.appendChild(reopenButton);
  });

  menuContainer.appendChild(closeButton);

  // Thêm menu vào trang
  document.body.appendChild(menuContainer);

  // Làm cho menu có thể kéo thả
  makeDraggable(menuContainer);

  return menuContainer;
}

// Hàm để làm cho một phần tử có thể kéo thả
function makeDraggable(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let isDragging = false;

  // Thêm thanh kéo thả
  const handle = document.createElement('div');
  handle.className = 'user-script-menu-handle';
  handle.textContent = '≡ Kéo thả';

  element.insertBefore(handle, element.firstChild);

  // Thêm sự kiện mousedown cho thanh kéo thả
  handle.addEventListener('mousedown', dragMouseDown);

  // Thêm sự kiện touchstart cho thiết bị di động
  handle.addEventListener('touchstart', dragTouchStart, { passive: false });

  function dragMouseDown(e) {
    if (!e) return;
    e.preventDefault();
    isDragging = true;

    // Lấy vị trí con trỏ chuột khi bắt đầu
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Thêm các sự kiện để theo dõi di chuyển và kết thúc
    document.addEventListener('mouseup', closeDragElement);
    document.addEventListener('mousemove', elementDrag);

    // Thay đổi kiểu con trỏ khi đang kéo
    document.body.style.cursor = 'move';
    handle.style.cursor = 'move';
  }

  function dragTouchStart(e) {
    if (!e || !e.touches) return;
    e.preventDefault();
    isDragging = true;

    // Lấy vị trí chạm khi bắt đầu
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;

    // Thêm các sự kiện để theo dõi di chuyển và kết thúc
    document.addEventListener('touchend', closeTouchElement);
    document.addEventListener('touchmove', elementTouchDrag, { passive: false });
  }

  function elementDrag(e) {
    if (!e || !isDragging) return;
    e.preventDefault();

    // Tính toán vị trí con trỏ mới
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Tính toán vị trí mới cho phần tử
    let newTop = element.offsetTop - pos2;
    let newLeft = element.offsetLeft - pos1;

    // Đảm bảo menu không bị kéo ra ngoài màn hình
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const menuWidth = element.offsetWidth;
    const menuHeight = element.offsetHeight;

    // Giới hạn vị trí trong màn hình
    newTop = Math.max(0, Math.min(windowHeight - menuHeight, newTop));
    newLeft = Math.max(0, Math.min(windowWidth - menuWidth, newLeft));

    // Đặt vị trí mới cho phần tử
    element.style.top = newTop + "px";
    element.style.left = newLeft + "px";
  }

  function elementTouchDrag(e) {
    if (!e || !e.touches || !isDragging) return;
    e.preventDefault();

    // Tính toán vị trí chạm mới
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;

    // Tính toán vị trí mới cho phần tử
    let newTop = element.offsetTop - pos2;
    let newLeft = element.offsetLeft - pos1;

    // Đảm bảo menu không bị kéo ra ngoài màn hình
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const menuWidth = element.offsetWidth;
    const menuHeight = element.offsetHeight;

    // Giới hạn vị trí trong màn hình
    newTop = Math.max(0, Math.min(windowHeight - menuHeight, newTop));
    newLeft = Math.max(0, Math.min(windowWidth - menuWidth, newLeft));

    // Đặt vị trí mới cho phần tử
    element.style.top = newTop + "px";
    element.style.left = newLeft + "px";
  }

  function closeDragElement() {
    // Dừng di chuyển khi nhả chuột
    isDragging = false;
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', elementDrag);

    // Khôi phục kiểu con trỏ
    document.body.style.cursor = '';
    handle.style.cursor = 'move';
  }

  function closeTouchElement() {
    // Dừng di chuyển khi kết thúc chạm
    isDragging = false;
    document.removeEventListener('touchend', closeTouchElement);
    document.removeEventListener('touchmove', elementTouchDrag);
  }
}
