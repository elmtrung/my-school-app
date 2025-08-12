# My School App - Hệ Thống Quản Lý Trường Học

Một hệ thống quản lý trường học hoàn chỉnh được xây dựng với React.js, hỗ trợ 3 vai trò chính: Admin, Giáo viên và Học sinh.

## 🚀 Tính Năng

### 🔑 Admin

- Đăng nhập hệ thống
- Tạo, sửa, xóa tài khoản giáo viên và học sinh
- Gán tài khoản học sinh vào nhóm/lớp
- Reset mật khẩu cho người dùng
- Quản lý lớp học và môn học
- Xem thống kê hệ thống
- Cài đặt hệ thống

### 👩‍🏫 Giáo viên

- Đăng nhập, chỉnh sửa thông tin cá nhân
- Tạo/sửa/xóa bài tập (trắc nghiệm, tự luận, thực hành)
- Quản lý tài liệu học tập (PDF, video, link)
- Tạo và quản lý nhóm học sinh theo lớp, môn học
- Chấm bài và gửi phản hồi cho học sinh
- Xem tiến độ học tập của học sinh

### 👨‍🎓 Học sinh

- Đăng nhập, chỉnh sửa thông tin cá nhân
- Tham gia vào nhóm học tập
- Xem và tải xuống tài liệu theo nhóm/lớp
- Làm bài tập và xem kết quả
- Xem phản hồi từ giáo viên
- Theo dõi tiến độ học tập cá nhân

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React.js, Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Authentication**: Local Storage (demo)

## 📦 Cài Đặt

1. Clone repository:

```bash
git clone https://github.com/elmtrung/my-school-app.git
cd my-school-app
```

2. Cài đặt dependencies:

```bash
npm install
```

3. Chạy ứng dụng:

```bash
npm start
```

4. Mở trình duyệt và truy cập: `http://localhost:3000`

## 🔐 Tài Khoản Demo

### Admin

- **Username**: admin
- **Password**: admin123

### Giáo viên

- **Username**: teacher1
- **Password**: teacher123

### Học sinh

- **Username**: student1
- **Password**: student123

## 📁 Cấu Trúc Dự Án

```
src/
├── components/
│   ├── Layout.jsx                 # Layout chung
│   ├── LoginPage.jsx             # Trang đăng nhập
│   ├── admin/
│   │   └── UserManagementTable.jsx
│   ├── teacher/
│   │   └── AssignmentCreator.jsx
│   └── student/
│       └── CourseDashboard.jsx
├── contexts/
│   └── AuthContext.jsx          # Context quản lý authentication
├── pages/
│   ├── AdminDashboard.jsx       # Dashboard Admin
│   ├── TeacherDashboard.jsx     # Dashboard Giáo viên
│   └── StudentDashboard.jsx     # Dashboard Học sinh
├── App.js                       # Component chính
└── index.js                     # Entry point
```

## 🎯 Hướng Dẫn Sử Dụng

1. **Đăng nhập**: Sử dụng một trong các tài khoản demo ở trên
2. **Admin**: Quản lý người dùng, lớp học, và cài đặt hệ thống
3. **Giáo viên**: Tạo bài tập, quản lý tài liệu và chấm điểm
4. **Học sinh**: Tham gia nhóm, làm bài tập và xem kết quả

## 🔮 Tính Năng Sắp Tới

- [ ] Tích hợp Backend API
- [ ] Hệ thống thông báo realtime
- [ ] Lịch học tương tác
- [ ] Báo cáo và phân tích chi tiết
- [ ] Hỗ trợ đa ngôn ngữ
- [ ] Mobile responsive

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc submit pull request.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by [elmtrung](https://github.com/elmtrung)
