import React, { useState } from 'react';
import Layout from '../components/Layout';
import UserManagementTable from '../components/admin/UserManagementTable';
import { Users, GraduationCap, BookOpen, Settings, BarChart3, UserCheck } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const menuItems = [
    { id: 'users', label: 'Quản lý người dùng', icon: Users },
    { id: 'classes', label: 'Quản lý lớp học', icon: GraduationCap },
    { id: 'subjects', label: 'Quản lý môn học', icon: BookOpen },
    { id: 'statistics', label: 'Thống kê', icon: BarChart3 },
    { id: 'settings', label: 'Cài đặt hệ thống', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagementTable />;
      case 'classes':
        return <ClassManagement />;
      case 'subjects':
        return <SubjectManagement />;
      case 'statistics':
        return <Statistics />;
      case 'settings':
        return <SystemSettings />;
      default:
        return <UserManagementTable />;
    }
  };

  return (
    <Layout title="Quản Trị Hệ Thống">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md rounded-lg mr-6">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu Quản Trị</h2>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-md transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

// Class Management Component
const ClassManagement = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Lớp 10A1', teacher: 'Trần Thị Bích', students: 35, subject: 'Toán' },
    { id: 2, name: 'Lớp 11B2', teacher: 'Phạm Thị Dung', students: 32, subject: 'Văn' },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quản Lý Lớp Học</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Tạo lớp mới
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tên lớp</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Giáo viên chủ nhiệm</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Số học sinh</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Môn học chính</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Hành động</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {classes.map((cls) => (
              <tr key={cls.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{cls.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{cls.teacher}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{cls.students}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{cls.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Chỉnh sửa</button>
                  <button className="text-red-600 hover:text-red-900">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Subject Management Component  
const SubjectManagement = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Toán', code: 'MATH', teachers: 3, classes: 8 },
    { id: 2, name: 'Văn', code: 'LIT', teachers: 2, classes: 6 },
    { id: 3, name: 'Tiếng Anh', code: 'ENG', teachers: 4, classes: 10 },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quản Lý Môn Học</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Thêm môn học
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{subject.name}</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{subject.code}</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Giáo viên:</span>
                <span className="font-medium">{subject.teachers}</span>
              </div>
              <div className="flex justify-between">
                <span>Lớp học:</span>
                <span className="font-medium">{subject.classes}</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                Chỉnh sửa
              </button>
              <button className="flex-1 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Statistics Component
const Statistics = () => {
  const stats = [
    { label: 'Tổng số người dùng', value: 150, color: 'blue' },
    { label: 'Giáo viên', value: 25, color: 'green' },
    { label: 'Học sinh', value: 125, color: 'purple' },
    { label: 'Lớp học', value: 12, color: 'yellow' },
    { label: 'Môn học', value: 8, color: 'red' },
    { label: 'Bài tập', value: 45, color: 'indigo' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Thống Kê Tổng Quan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</h3>
              <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Hoạt Động Gần Đây</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <UserCheck className="text-blue-600" size={20} />
            <span className="text-gray-700">5 học sinh mới được thêm vào hệ thống</span>
            <span className="text-sm text-gray-500 ml-auto">2 giờ trước</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <BookOpen className="text-green-600" size={20} />
            <span className="text-gray-700">Bài tập Toán lớp 10A1 đã được tạo</span>
            <span className="text-sm text-gray-500 ml-auto">4 giờ trước</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <GraduationCap className="text-yellow-600" size={20} />
            <span className="text-gray-700">Lớp 12C2 đã hoàn thành bài kiểm tra</span>
            <span className="text-sm text-gray-500 ml-auto">1 ngày trước</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// System Settings Component
const SystemSettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Cài Đặt Hệ Thống</h2>
      
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Cài đặt chung</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Cho phép đăng ký tự động</span>
              <input type="checkbox" className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Gửi email thông báo</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Bảo mật</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Yêu cầu xác thực 2 yếu tố</span>
              <input type="checkbox" className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Đăng xuất tự động sau 30 phút</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">Sao lưu dữ liệu</h3>
          <div className="space-y-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Tạo bản sao lưu
            </button>
            <p className="text-sm text-gray-600">Lần sao lưu cuối: 2 ngày trước</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
