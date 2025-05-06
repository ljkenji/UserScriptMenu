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

  // Thêm thanh kéo thả
  const handle = document.createElement('div');
  handle.className = 'user-script-menu-handle';
  handle.textContent = '≡ Kéo thả';

  element.insertBefore(handle, element.firstChild);

  handle.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    if (!e) return;
    e.preventDefault();
    // Lấy vị trí con trỏ chuột khi bắt đầu
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // Gọi hàm mỗi khi con trỏ di chuyển
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (!e) return;
    e.preventDefault();
    // Tính toán vị trí con trỏ mới
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Đặt vị trí mới cho phần tử
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // Dừng di chuyển khi nhả chuột
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
