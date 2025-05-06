# User Script Menu

Một userscript tùy chỉnh tạo menu nổi trên trang web với các nút hành động có thể tùy biến.

## Tính năng

- Menu nổi có thể kéo thả trên trang web
- Ba nút hành động mẫu với các chức năng khác nhau
- Có thể dễ dàng mở rộng thêm các nút hành động mới
- Tương thích với Tampermonkey và các trình quản lý userscript khác

## Cài đặt

1. Cài đặt [Tampermonkey](https://www.tampermonkey.net/) hoặc trình quản lý userscript tương tự
2. Mở file `dist/userscript.user.js` trong repository này
3. Tampermonkey sẽ tự động phát hiện và hiển thị trang cài đặt
4. Nhấn nút "Cài đặt" để thêm script vào Tampermonkey

## Phát triển

### Yêu cầu

- Node.js (phiên bản 14 trở lên)
- npm (đi kèm với Node.js)

### Cài đặt môi trường phát triển

```bash
# Clone repository
git clone https://github.com/ljkenji/UserScriptMenu.git
cd UserScriptMenu

# Cài đặt dependencies
npm install
```

### Cấu trúc dự án

```
userscript-project/
├── dist/                    # File output sau khi build
│   └── userscript.user.js
├── src/
│   ├── actions/
│   │   ├── button1.js       # Hành động cho nút 1
│   │   ├── button2.js       # Hành động cho nút 2
│   │   └── button3.js       # Hành động cho nút 3
│   ├── styles/
│   │   └── menu.css         # CSS cho menu và các thành phần
│   ├── menu.js              # Xử lý tạo và hiển thị menu
│   └── main.js              # Entry point chính
├── webpack.config.js        # Cấu hình webpack
└── userscript.meta.js       # Metadata (header) cho Tampermonkey
```

### Lệnh build

```bash
# Build một lần
npm run build

# Build tự động khi có thay đổi
npm run watch
```

## Tùy chỉnh

### Thêm nút hành động mới

1. Tạo file mới trong thư mục `src/actions/`, ví dụ: `button4.js`
2. Định nghĩa và export hàm xử lý hành động trong file đó
3. Import hàm vào file `main.js`
4. Thêm nút mới vào mảng `menuItems` trong file `main.js`
5. Build lại dự án bằng lệnh `npm run build`

### Tùy chỉnh giao diện

Bạn có thể tùy chỉnh giao diện bằng cách sửa đổi CSS trong file `src/styles/menu.css`.

## Phiên bản

Phiên bản hiện tại: **1.0.2**

### Lịch sử thay đổi

#### v1.0.2
- Dịch tất cả ghi chú trong mã nguồn sang tiếng Việt
- Cập nhật các thông báo và nội dung hiển thị sang tiếng Việt
- Thêm thông tin phiên bản chi tiết trong userscript.meta.js
- Thêm các trường metadata mới: namespace, homepage, supportURL, updateURL, downloadURL, license, icon

#### v1.0.1
- Tách CSS ra file riêng `src/styles/menu.css`
- Cải thiện cấu trúc dự án
- Sửa các cảnh báo về `window.event` đã bị deprecated

#### v1.0.0
- Phiên bản đầu tiên
- Tạo menu nổi với 3 nút hành động mẫu
- Hỗ trợ kéo thả menu

## Giấy phép

ISC
