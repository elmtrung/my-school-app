import React, { useState } from 'react';
import Layout from '../components/Layout';
import { BookOpen, Users, FileText, BarChart3, Plus, Edit, Trash2, Eye, Calendar, Upload } from 'lucide-react';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('assignments');

  const menuItems = [
    { id: 'assignments', label: 'Quản lý bài tập', icon: FileText },
    { id: 'materials', label: 'Tài liệu học tập', icon: BookOpen },
    { id: 'groups', label: 'Nhóm học sinh', icon: Users },
    { id: 'grades', label: 'Chấm điểm & Phản hồi', icon: BarChart3 },
    { id: 'profile', label: 'Thông tin cá nhân', icon: Edit },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'assignments':
        return <AssignmentManagement />;
      case 'materials':
        return <MaterialManagement />;
      case 'groups':
        return <GroupManagement />;
      case 'grades':
        return <GradeManagement />;
      case 'profile':
        return <TeacherProfile />;
      default:
        return <AssignmentManagement />;
    }
  };

  return (
    <Layout title="Bảng Điều Khiển Giáo Viên">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md rounded-lg mr-6">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu Giáo Viên</h2>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-md transition-colors ${
                      activeTab === item.id
                        ? 'bg-green-100 text-green-700 border-r-2 border-green-500'
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

// Assignment Management Component
const AssignmentManagement = () => {
  const [assignments, setAssignments] = useState([
    { 
      id: 1, 
      title: 'Bài tập Đại số', 
      type: 'multiple_choice', 
      class: 'Lớp 10A1', 
      dueDate: '2024-01-15',
      submissions: 25,
      totalStudents: 30,
      status: 'active'
    },
    { 
      id: 2, 
      title: 'Luận văn Hình học', 
      type: 'essay', 
      class: 'Lớp 11B2', 
      dueDate: '2024-01-20',
      submissions: 18,
      totalStudents: 28,
      status: 'draft'
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: '', type: 'multiple_choice', class: '', dueDate: '', description: ''
  });

  const getTypeText = (type) => {
    switch (type) {
      case 'multiple_choice': return 'Trắc nghiệm';
      case 'essay': return 'Tự luận';
      case 'practical': return 'Thực hành';
      default: return 'Khác';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Đang hoạt động';
      case 'draft': return 'Bản nháp';
      case 'completed': return 'Đã hoàn thành';
      default: return 'Khác';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Quản Lý Bài Tập</h2>
            <p className="text-gray-600 mt-1">Tạo và quản lý bài tập cho học sinh</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <Plus size={20} />
            Tạo bài tập mới
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Tổng bài tập</p>
              <p className="text-2xl font-bold text-gray-800">{assignments.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Đang hoạt động</p>
              <p className="text-2xl font-bold text-gray-800">
                {assignments.filter(a => a.status === 'active').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Edit className="text-yellow-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Bản nháp</p>
              <p className="text-2xl font-bold text-gray-800">
                {assignments.filter(a => a.status === 'draft').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BarChart3 className="text-purple-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Đã nộp</p>
              <p className="text-2xl font-bold text-gray-800">
                {assignments.reduce((acc, a) => acc + a.submissions, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Danh Sách Bài Tập</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tiêu đề</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Loại</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lớp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hạn nộp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tiến độ</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Hành động</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {assignments.map((assignment) => (
                  <tr key={assignment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                        {getTypeText(assignment.type)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.class}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm text-gray-900">
                          {assignment.submissions}/{assignment.totalStudents}
                        </div>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assignment.status)}`}>
                        {getStatusText(assignment.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-900 p-2 rounded-md hover:bg-blue-50" title="Xem">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-900 p-2 rounded-md hover:bg-green-50" title="Chỉnh sửa">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-red-50" title="Xóa">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Assignment Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tạo Bài Tập Mới</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const newAssignmentWithId = {
                  ...newAssignment,
                  id: Math.max(...assignments.map(a => a.id)) + 1,
                  submissions: 0,
                  totalStudents: 30,
                  status: 'draft'
                };
                setAssignments([...assignments, newAssignmentWithId]);
                setNewAssignment({ title: '', type: 'multiple_choice', class: '', dueDate: '', description: '' });
                setShowCreateModal(false);
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tiêu đề bài tập</label>
                    <input
                      type="text"
                      required
                      value={newAssignment.title}
                      onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Loại bài tập</label>
                    <select
                      value={newAssignment.type}
                      onChange={(e) => setNewAssignment({...newAssignment, type: e.target.value})}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="multiple_choice">Trắc nghiệm</option>
                      <option value="essay">Tự luận</option>
                      <option value="practical">Thực hành</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Lớp</label>
                    <select
                      required
                      value={newAssignment.class}
                      onChange={(e) => setNewAssignment({...newAssignment, class: e.target.value})}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Chọn lớp</option>
                      <option value="Lớp 10A1">Lớp 10A1</option>
                      <option value="Lớp 10A2">Lớp 10A2</option>
                      <option value="Lớp 11B1">Lớp 11B1</option>
                      <option value="Lớp 11B2">Lớp 11B2</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Hạn nộp</label>
                    <input
                      type="date"
                      required
                      value={newAssignment.dueDate}
                      onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mô tả</label>
                    <textarea
                      rows={3}
                      value={newAssignment.description}
                      onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder="Mô tả chi tiết về bài tập..."
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Tạo bài tập
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Material Management Component
const MaterialManagement = () => {
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Giáo trình Đại số', type: 'pdf', size: '2.5 MB', uploadDate: '2024-01-10', downloads: 45 },
    { id: 2, title: 'Video bài giảng Hình học', type: 'video', size: '15.2 MB', uploadDate: '2024-01-08', downloads: 32 },
    { id: 3, title: 'Liên kết Khan Academy', type: 'link', size: '-', uploadDate: '2024-01-05', downloads: 28 },
  ]);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'video': return '🎥';
      case 'link': return '🔗';
      default: return '📎';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'pdf': return 'bg-red-100 text-red-800';
      case 'video': return 'bg-blue-100 text-blue-800';
      case 'link': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Tài Liệu Học Tập</h2>
            <p className="text-gray-600 mt-1">Quản lý tài liệu, video và liên kết học tập</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Upload size={20} />
            Thêm tài liệu
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <div key={material.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getTypeIcon(material.type)}</span>
                <h3 className="text-lg font-semibold text-gray-800 truncate">{material.title}</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Loại:</span>
                <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(material.type)}`}>
                  {material.type.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Kích thước:</span>
                <span className="font-medium">{material.size}</span>
              </div>
              <div className="flex justify-between">
                <span>Ngày tải lên:</span>
                <span className="font-medium">{material.uploadDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Lượt tải:</span>
                <span className="font-medium text-blue-600">{material.downloads}</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                Xem
              </button>
              <button className="flex-1 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
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

// Group Management Component
const GroupManagement = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: 'Nhóm Toán Nâng cao', class: 'Lớp 10A1', students: 15, subject: 'Toán', created: '2024-01-01' },
    { id: 2, name: 'Ôn thi THPT', class: 'Lớp 12C1', students: 25, subject: 'Toán', created: '2024-01-03' },
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Quản Lý Nhóm Học Sinh</h2>
            <p className="text-gray-600 mt-1">Tạo và quản lý các nhóm học tập</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Plus size={20} />
            Tạo nhóm mới
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group) => (
          <div key={group.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{group.name}</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{group.subject}</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Lớp:</span>
                <span className="font-medium">{group.class}</span>
              </div>
              <div className="flex justify-between">
                <span>Học sinh:</span>
                <span className="font-medium text-blue-600">{group.students} thành viên</span>
              </div>
              <div className="flex justify-between">
                <span>Ngày tạo:</span>
                <span className="font-medium">{group.created}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                Xem thành viên
              </button>
              <button className="flex-1 px-3 py-2 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                Chỉnh sửa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Grade Management Component
const GradeManagement = () => {
  const [submissions, setSubmissions] = useState([
    { id: 1, studentName: 'Nguyễn Văn An', assignment: 'Bài tập Đại số', submittedDate: '2024-01-14', score: null, status: 'pending' },
    { id: 2, studentName: 'Trần Thị Bích', assignment: 'Bài tập Đại số', submittedDate: '2024-01-13', score: 8.5, status: 'graded' },
    { id: 3, studentName: 'Lê Minh Cảnh', assignment: 'Luận văn Hình học', submittedDate: '2024-01-15', score: null, status: 'pending' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'graded': return 'bg-green-100 text-green-800';
      case 'late': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Chờ chấm';
      case 'graded': return 'Đã chấm';
      case 'late': return 'Nộp muộn';
      default: return 'Khác';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800">Chấm Điểm & Phản Hồi</h2>
        <p className="text-gray-600 mt-1">Chấm bài và gửi phản hồi cho học sinh</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Bài Nộp Cần Chấm</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Học sinh</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bài tập</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ngày nộp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Điểm</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Hành động</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {submissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{submission.studentName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {submission.assignment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {submission.submittedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {submission.score !== null ? (
                        <span className="text-sm font-medium text-green-600">{submission.score}/10</span>
                      ) : (
                        <span className="text-sm text-gray-400">Chưa chấm</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(submission.status)}`}>
                        {getStatusText(submission.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-900 px-3 py-1 text-sm border border-blue-600 rounded hover:bg-blue-50">
                          Xem bài
                        </button>
                        {submission.status === 'pending' && (
                          <button className="text-green-600 hover:text-green-900 px-3 py-1 text-sm border border-green-600 rounded hover:bg-green-50">
                            Chấm điểm
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Teacher Profile Component
const TeacherProfile = () => {
  const [profile, setProfile] = useState({
    name: 'Trần Thị Bích',
    email: 'bich.tt@school.edu.vn',
    phone: '0123456789',
    subject: 'Toán',
    experience: '5 năm',
    education: 'Thạc sĩ Toán học',
    bio: 'Giáo viên toán với nhiều năm kinh nghiệm giảng dạy.'
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Thông Tin Cá Nhân</h2>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            {isEditing ? 'Lưu thay đổi' : 'Chỉnh sửa'}
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            ) : (
              <p className="text-gray-900">{profile.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            ) : (
              <p className="text-gray-900">{profile.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
            {isEditing ? (
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            ) : (
              <p className="text-gray-900">{profile.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Môn học</label>
            {isEditing ? (
              <select
                value={profile.subject}
                onChange={(e) => setProfile({...profile, subject: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="Toán">Toán</option>
                <option value="Văn">Văn</option>
                <option value="Tiếng Anh">Tiếng Anh</option>
                <option value="Vật Lý">Vật Lý</option>
                <option value="Hóa Học">Hóa Học</option>
              </select>
            ) : (
              <p className="text-gray-900">{profile.subject}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kinh nghiệm</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.experience}
                onChange={(e) => setProfile({...profile, experience: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            ) : (
              <p className="text-gray-900">{profile.experience}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trình độ học vấn</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.education}
                onChange={(e) => setProfile({...profile, education: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            ) : (
              <p className="text-gray-900">{profile.education}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Giới thiệu</label>
          {isEditing ? (
            <textarea
              rows={4}
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          ) : (
            <p className="text-gray-900">{profile.bio}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
