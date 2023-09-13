# Sử dụng một hình ảnh Node.js làm cơ sở
FROM node:14

# Thiết lập thư mục làm việc trong Docker container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Biên dịch TypeScript thành JavaScript (điều này giả sử bạn đã cài đặt TypeScript)
RUN npm run build

# Mở cổng mà ứng dụng sẽ lắng nghe (thay đổi số cổng tùy theo ứng dụng của bạn)
EXPOSE 5001

# Khởi chạy ứng dụng
CMD [ "node", "dist/index.js" ]
