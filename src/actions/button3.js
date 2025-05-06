// Hành động cho nút 3
export function button3Action() {
  console.log('Nút 3 được nhấn');

  // Ví dụ: Tạo hộp thoại modal
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '10000';

  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fff';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '5px';
  modalContent.style.maxWidth = '500px';
  modalContent.style.width = '80%';

  const modalHeader = document.createElement('div');
  modalHeader.style.display = 'flex';
  modalHeader.style.justifyContent = 'space-between';
  modalHeader.style.alignItems = 'center';
  modalHeader.style.marginBottom = '15px';

  const modalTitle = document.createElement('h3');
  modalTitle.textContent = 'Hộp thoại Nút 3';
  modalTitle.style.margin = '0';

  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '24px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.padding = '0';
  closeButton.style.lineHeight = '1';

  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  const modalBody = document.createElement('div');
  modalBody.innerHTML = `
    <p>Đây là hộp thoại modal được tạo bởi hành động Nút 3.</p>
    <p>Bạn có thể sử dụng nó cho nhiều mục đích như:</p>
    <ul>
      <li>Hiển thị thông tin</li>
      <li>Thu thập dữ liệu người dùng</li>
      <li>Hiển thị cài đặt</li>
    </ul>
  `;

  const modalFooter = document.createElement('div');
  modalFooter.style.marginTop = '20px';
  modalFooter.style.textAlign = 'right';

  const okButton = document.createElement('button');
  okButton.textContent = 'OK';
  okButton.style.padding = '8px 16px';
  okButton.style.backgroundColor = '#007bff';
  okButton.style.color = '#fff';
  okButton.style.border = 'none';
  okButton.style.borderRadius = '4px';
  okButton.style.cursor = 'pointer';

  okButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modalFooter.appendChild(okButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modal.appendChild(modalContent);

  // Đóng modal khi nhấp chuột bên ngoài nội dung
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  document.body.appendChild(modal);

  // Ví dụ: Lấy giá trị sử dụng GM_getValue
  const lastButton2Click = GM_getValue('button2Clicked', null);
  if (lastButton2Click) {
    const lastClickTime = new Date(lastButton2Click);
    console.log('Lần nhấn Nút 2 cuối cùng:', lastClickTime.toLocaleString());
  }
}
