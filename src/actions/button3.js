// Hành động cho nút Hộp thoại
export function button3Action() {
  console.log('Nút Hộp thoại được nhấn');

  // Tạo hộp thoại modal
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
  modalTitle.textContent = 'Thông tin hệ thống';
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
    <p>Đây là hộp thoại hiển thị thông tin hệ thống.</p>
    <p>Thông tin trình duyệt:</p>
    <ul>
      <li>Trình duyệt: ${navigator.userAgent}</li>
      <li>Ngôn ngữ: ${navigator.language}</li>
      <li>Độ phân giải: ${window.screen.width} x ${window.screen.height}</li>
      <li>Thời gian: ${new Date().toLocaleString()}</li>
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

  // Lấy giá trị sử dụng GM_getValue
  const lastColorChange = GM_getValue('colorChangeClicked', null);
  if (lastColorChange) {
    const lastChangeTime = new Date(lastColorChange);
    console.log('Lần thay đổi màu nền cuối cùng:', lastChangeTime.toLocaleString());

    // Thêm thông tin về lần thay đổi màu nền cuối cùng vào modal
    const lastChangeInfo = document.createElement('p');
    lastChangeInfo.style.marginTop = '15px';
    lastChangeInfo.style.fontSize = '12px';
    lastChangeInfo.style.color = '#6c757d';
    lastChangeInfo.textContent = `Lần thay đổi màu nền cuối cùng: ${lastChangeTime.toLocaleString()}`;
    modalBody.appendChild(lastChangeInfo);
  }
}
