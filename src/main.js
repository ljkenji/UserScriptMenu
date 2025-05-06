// Điểm khởi đầu chính cho userscript
import { createMenu } from './menu';
import { button1Action } from './actions/button1';
import { button2Action } from './actions/button2';
import { button3Action } from './actions/button3';
import './styles/menu.css';

// Định nghĩa các mục menu
const menuItems = [
  {
    id: 'button1',
    label: 'Thông báo',
    action: button1Action,
  },
  {
    id: 'button2',
    label: 'Đổi màu nền',
    action: button2Action,
  },
  {
    id: 'button3',
    label: 'Hộp thoại',
    action: button3Action,
  },
];

// Khởi tạo script
function init() {
  console.log('Menu Script Người Dùng đã được khởi tạo');

  // Tạo và hiển thị menu
  createMenu(menuItems);
}

// Chạy script khi trang đã được tải hoàn toàn
if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init);
}
