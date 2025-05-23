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

### Hướng dẫn build chi tiết

Khi bạn thực hiện thay đổi trong mã nguồn, bạn cần build lại dự án để tạo ra file output mới. Có nhiều cách để thực hiện điều này:

#### Sử dụng npm scripts (Khuyến nghị)

```bash
# Build một lần
npm run build

# Hoặc build tự động khi có thay đổi
npm run watch
```

#### Sử dụng webpack trực tiếp

```bash
# Build một lần
npx webpack

# Build với chế độ development
npx webpack --mode=development

# Build với chế độ production (mặc định)
npx webpack --mode=production

# Build và theo dõi các thay đổi
npx webpack --watch
```

#### Quy trình build

1. Webpack đọc file entry point (`src/main.js`)
2. Webpack phân tích và xử lý tất cả các import và dependencies
3. Webpack biên dịch và tối ưu hóa mã nguồn
4. Webpack tạo ra file output (`dist/userscript.user.js`)
5. Webpack thêm metadata từ file `userscript.meta.js` vào đầu file output

Sau khi build thành công, bạn có thể cài đặt file `dist/userscript.user.js` vào Tampermonkey hoặc trình quản lý userscript khác.

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

Phiên bản hiện tại: **1.0.6**

### Lịch sử thay đổi

#### v1.0.6
- Bổ sung hướng dẫn build chi tiết trong README
- Thêm thông tin về quy trình build và cách sử dụng webpack trực tiếp

#### v1.0.5
- Cập nhật tên và mô tả trong README
- Cải thiện tài liệu hướng dẫn
- Đổi tên "Kéo thả" thành "Di chuyển" để rõ ràng hơn

#### v1.0.4
- Đổi tên các nút để phù hợp với chức năng:
  - "Button 1" -> "Thông báo"
  - "Button 2" -> "Đổi màu nền"
  - "Button 3" -> "Hộp thoại"
- Cập nhật nội dung hiển thị trong các chức năng
- Cải thiện hộp thoại để hiển thị thông tin hệ thống

#### v1.0.3
- Cải thiện chức năng kéo thả menu:
  - Cho phép di chuyển menu đến bất kỳ vị trí nào trên màn hình
  - Giới hạn menu trong phạm vi màn hình
  - Cố định kích thước menu, không cho phép thay đổi kích thước
  - Thêm hỗ trợ cho thiết bị cảm ứng
- Cải thiện giao diện thanh kéo thả

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
