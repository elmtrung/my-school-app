import React, { useState } from 'react';
import Layout from '../components/Layout';
import { BookOpen, Users, FileText, BarChart3, User, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Trang chủ', icon: BarChart3 },
    { id: 'groups', label: 'Nhóm học tập', icon: Users },
    { id: 'materials', label: 'Tài liệu học tập', icon: BookOpen },
    { id: 'assignments', label: 'Bài tập', icon: FileText },
    { id: 'grades', label: 'Kết quả học tập', icon: CheckCircle },
    { id: 'profile', label: 'Thông tin cá nhân', icon: User },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <StudentOverview />;
      case 'groups':
        return <StudentGroups />;
      case 'materials':
        return <StudentMaterials />;
      case 'assignments':
        return <StudentAssignments />;
      case 'grades':
        return <StudentGrades />;
      case 'profile':
        return <StudentProfile />;
      default:
        return <StudentOverview />;
    }
  };

  return (
    <Layout title="Bảng Điều Khiển Học Sinh">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md rounded-lg mr-6">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu Học Sinh</h2>
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

// Student Overview Component
const StudentOverview = () => {
  const upcomingAssignments = [
    { id: 1, title: 'Bài tập Đại số', subject: 'Toán', dueDate: '2024-01-20', status: 'pending' },
    { id: 2, title: 'Luận văn Văn học', subject: 'Văn', dueDate: '2024-01-22', status: 'pending' },
    { id: 3, title: 'Thí nghiệm Vật lý', subject: 'Vật lý', dueDate: '2024-01-25', status: 'pending' },
  ];

  const recentGrades = [
    { id: 1, assignment: 'Kiểm tra Toán', score: 8.5, maxScore: 10, date: '2024-01-15' },
    { id: 2, assignment: 'Bài tập Văn', score: 9.0, maxScore: 10, date: '2024-01-12' },
    { id: 3, assignment: 'Thực hành Hóa', score: 7.5, maxScore: 10, date: '2024-01-10' },
  ];

  const getScoreColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Chào mừng trở lại!</h2>
        <p className="text-blue-100">Hôm nay bạn có 3 bài tập cần hoàn thành và 2 tài liệu mới để xem.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Bài tập chờ</p>
              <p className="text-2xl font-bold text-gray-800">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Đã hoàn thành</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <BarChart3 className="text-yellow-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Điểm trung bình</p>
              <p className="text-2xl font-bold text-gray-800">8.3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Nhóm học tập</p>
              <p className="text-2xl font-bold text-gray-800">4</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Assignments */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="text-orange-500" size={20} />
            Bài Tập Sắp Hết Hạn
          </h3>
          <div className="space-y-3">
            {upcomingAssignments.map((assignment) => {
              const daysLeft = getDaysUntilDue(assignment.dueDate);
              return (
                <div key={assignment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                    <p className="text-sm text-gray-600">{assignment.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{assignment.dueDate}</p>
                    <p className={`text-xs font-medium ${
                      daysLeft <= 1 ? 'text-red-600' : 
                      daysLeft <= 3 ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {daysLeft <= 0 ? 'Quá hạn' : `${daysLeft} ngày`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Xem tất cả bài tập
          </button>
        </div>

        {/* Recent Grades */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart3 className="text-green-500" size={20} />
            Kết Quả Gần Đây
          </h3>
          <div className="space-y-3">
            {recentGrades.map((grade) => (
              <div key={grade.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{grade.assignment}</h4>
                  <p className="text-sm text-gray-600">{grade.date}</p>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${getScoreColor(grade.score, grade.maxScore)}`}>
                    {grade.score}/{grade.maxScore}
                  </p>
                  <p className="text-xs text-gray-500">
                    {Math.round((grade.score / grade.maxScore) * 100)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Xem tất cả kết quả
          </button>
        </div>
      </div>

      {/* Study Calendar */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="text-blue-500" size={20} />
          Lịch Học Tuần Này
        </h3>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, index) => (
            <div key={index} className="p-2 bg-gray-50 rounded">
              <p className="text-sm font-medium text-gray-600">{day}</p>
              <p className="text-lg font-bold text-gray-800">{15 + index}</p>
              {index < 5 && (
                <div className="mt-1 text-xs text-blue-600 bg-blue-100 rounded px-1">
                  {index % 2 === 0 ? 'Toán' : 'Văn'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Student Groups Component
const StudentGroups = () => {
  const [joinedGroups, setJoinedGroups] = useState([
    { id: 1, name: 'Nhóm Toán Nâng cao', teacher: 'Trần Thị Bích', members: 15, subject: 'Toán', joinDate: '2024-01-01' },
    { id: 2, name: 'Luyện thi THPT', teacher: 'Phạm Thị Dung', members: 25, subject: 'Tổng hợp', joinDate: '2024-01-03' },
  ]);

  const [availableGroups, setAvailableGroups] = useState([
    { id: 3, name: 'Nhóm Văn học hiện đại', teacher: 'Nguyễn Văn Nam', members: 20, subject: 'Văn', description: 'Khám phá văn học Việt Nam hiện đại' },
    { id: 4, name: 'Tiếng Anh giao tiếp', teacher: 'Sarah Johnson', members: 18, subject: 'Tiếng Anh', description: 'Luyện tập kỹ năng giao tiếp tiếng Anh' },
  ]);

  const handleJoinGroup = (groupId) => {
    const group = availableGroups.find(g => g.id === groupId);
    if (group) {
      const newGroup = {
        ...group,
        joinDate: new Date().toISOString().split('T')[0]
      };
      setJoinedGroups([...joinedGroups, newGroup]);
      setAvailableGroups(availableGroups.filter(g => g.id !== groupId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800">Nhóm Học Tập</h2>
        <p className="text-gray-600 mt-1">Tham gia và quản lý các nhóm học tập</p>
      </div>

      {/* Joined Groups */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Nhóm Đã Tham Gia</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {joinedGroups.map((group) => (
            <div key={group.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-gray-800">{group.name}</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{group.subject}</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Giáo viên:</span>
                  <span className="font-medium">{group.teacher}</span>
                </div>
                <div className="flex justify-between">
                  <span>Thành viên:</span>
                  <span className="font-medium">{group.members} người</span>
                </div>
                <div className="flex justify-between">
                  <span>Ngày tham gia:</span>
                  <span className="font-medium">{group.joinDate}</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                  Xem chi tiết
                </button>
                <button className="flex-1 px-3 py-2 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
                  Rời nhóm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Groups */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Nhóm Có Thể Tham Gia</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableGroups.map((group) => (
            <div key={group.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-gray-800">{group.name}</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{group.subject}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{group.description}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Giáo viên:</span>
                  <span className="font-medium">{group.teacher}</span>
                </div>
                <div className="flex justify-between">
                  <span>Thành viên:</span>
                  <span className="font-medium">{group.members} người</span>
                </div>
              </div>
              <button 
                onClick={() => handleJoinGroup(group.id)}
                className="w-full mt-4 px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                Tham gia nhóm
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Student Materials Component
const StudentMaterials = () => {
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Giáo trình Đại số', type: 'pdf', group: 'Nhóm Toán Nâng cao', size: '2.5 MB', uploadDate: '2024-01-10' },
    { id: 2, title: 'Video bài giảng Hình học', type: 'video', group: 'Nhóm Toán Nâng cao', size: '15.2 MB', uploadDate: '2024-01-08' },
    { id: 3, title: 'Bài tập mẫu Văn học', type: 'pdf', group: 'Luyện thi THPT', size: '1.8 MB', uploadDate: '2024-01-05' },
    { id: 4, title: 'Liên kết Khan Academy', type: 'link', group: 'Nhóm Toán Nâng cao', size: '-', uploadDate: '2024-01-05' },
  ]);

  const [selectedGroup, setSelectedGroup] = useState('all');

  const filteredMaterials = selectedGroup === 'all' 
    ? materials 
    : materials.filter(m => m.group === selectedGroup);

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

  const groups = [...new Set(materials.map(m => m.group))];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Tài Liệu Học Tập</h2>
            <p className="text-gray-600 mt-1">Xem và tải xuống tài liệu từ các nhóm học tập</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Lọc theo nhóm:</span>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Tất cả nhóm</option>
              {groups.map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <div key={material.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getTypeIcon(material.type)}</span>
                <h3 className="text-lg font-semibold text-gray-800 truncate">{material.title}</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Nhóm:</span>
                <span className="font-medium text-blue-600">{material.group}</span>
              </div>
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
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Xem
              </button>
              <button className="flex-1 px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                Tải xuống
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Không có tài liệu nào trong nhóm đã chọn.</p>
        </div>
      )}
    </div>
  );
};

// Student Assignments Component
const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([
    { 
      id: 1, 
      title: 'Bài tập Đại số', 
      subject: 'Toán', 
      teacher: 'Trần Thị Bích',
      dueDate: '2024-01-20', 
      status: 'pending',
      type: 'multiple_choice',
      description: 'Giải các bài tập về phương trình bậc 2'
    },
    { 
      id: 2, 
      title: 'Luận văn Văn học', 
      subject: 'Văn', 
      teacher: 'Phạm Thị Dung',
      dueDate: '2024-01-22', 
      status: 'submitted',
      type: 'essay',
      description: 'Viết luận về tác phẩm Truyện Kiều'
    },
    { 
      id: 3, 
      title: 'Thí nghiệm Vật lý', 
      subject: 'Vật lý', 
      teacher: 'Lê Văn Cường',
      dueDate: '2024-01-15', 
      status: 'graded',
      type: 'practical',
      description: 'Thí nghiệm về định luật Ohm',
      score: 8.5
    },
  ]);

  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredAssignments = selectedStatus === 'all' 
    ? assignments 
    : assignments.filter(a => a.status === selectedStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'graded': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Chưa làm';
      case 'submitted': return 'Đã nộp';
      case 'graded': return 'Đã chấm';
      case 'overdue': return 'Quá hạn';
      default: return 'Khác';
    }
  };

  const getTypeText = (type) => {
    switch (type) {
      case 'multiple_choice': return 'Trắc nghiệm';
      case 'essay': return 'Tự luận';
      case 'practical': return 'Thực hành';
      default: return 'Khác';
    }
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Bài Tập</h2>
            <p className="text-gray-600 mt-1">Xem và làm các bài tập được giao</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Lọc theo trạng thái:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Tất cả</option>
              <option value="pending">Chưa làm</option>
              <option value="submitted">Đã nộp</option>
              <option value="graded">Đã chấm</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssignments.map((assignment) => {
          const daysLeft = getDaysUntilDue(assignment.dueDate);
          return (
            <div key={assignment.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assignment.status)}`}>
                  {getStatusText(assignment.status)}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Môn học:</span>
                  <span className="font-medium">{assignment.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span>Giáo viên:</span>
                  <span className="font-medium">{assignment.teacher}</span>
                </div>
                <div className="flex justify-between">
                  <span>Loại:</span>
                  <span className="font-medium">{getTypeText(assignment.type)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Hạn nộp:</span>
                  <span className={`font-medium ${
                    daysLeft <= 1 ? 'text-red-600' : 
                    daysLeft <= 3 ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {assignment.dueDate}
                  </span>
                </div>
                {assignment.score && (
                  <div className="flex justify-between">
                    <span>Điểm:</span>
                    <span className="font-medium text-green-600">{assignment.score}/10</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-4">{assignment.description}</p>

              <div className="flex gap-2">
                {assignment.status === 'pending' && (
                  <button className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    Làm bài
                  </button>
                )}
                {assignment.status === 'submitted' && (
                  <button className="flex-1 px-3 py-2 text-sm bg-gray-600 text-white rounded hover:bg-gray-700">
                    Xem bài đã nộp
                  </button>
                )}
                {assignment.status === 'graded' && (
                  <button className="flex-1 px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                    Xem kết quả
                  </button>
                )}
                <button className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                  Chi tiết
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Không có bài tập nào với trạng thái đã chọn.</p>
        </div>
      )}
    </div>
  );
};

// Student Grades Component
const StudentGrades = () => {
  const [grades, setGrades] = useState([
    { id: 1, assignment: 'Kiểm tra Toán học kỳ 1', subject: 'Toán', score: 8.5, maxScore: 10, date: '2024-01-15', feedback: 'Bài làm tốt, cần cải thiện phần hình học.' },
    { id: 2, assignment: 'Bài tập lớn Văn học', subject: 'Văn', score: 9.0, maxScore: 10, date: '2024-01-12', feedback: 'Luận điểm rõ ràng, ngôn ngữ hay.' },
    { id: 3, assignment: 'Thực hành Hóa học', subject: 'Hóa', score: 7.5, maxScore: 10, date: '2024-01-10', feedback: 'Cần cẩn thận hơn trong các thí nghiệm.' },
    { id: 4, assignment: 'Bài kiểm tra Tiếng Anh', subject: 'Tiếng Anh', score: 8.8, maxScore: 10, date: '2024-01-08', feedback: 'Pronunciation tốt, grammar cần luyện thêm.' },
  ]);

  const [selectedSubject, setSelectedSubject] = useState('all');

  const filteredGrades = selectedSubject === 'all' 
    ? grades 
    : grades.filter(g => g.subject === selectedSubject);

  const getScoreColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGradeText = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 85) return 'Xuất sắc';
    if (percentage >= 70) return 'Giỏi';
    if (percentage >= 55) return 'Khá';
    if (percentage >= 40) return 'Trung bình';
    return 'Yếu';
  };

  const calculateAverage = () => {
    if (filteredGrades.length === 0) return 0;
    const total = filteredGrades.reduce((sum, grade) => sum + (grade.score / grade.maxScore) * 10, 0);
    return (total / filteredGrades.length).toFixed(1);
  };

  const subjects = [...new Set(grades.map(g => g.subject))];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Kết Quả Học Tập</h2>
            <p className="text-gray-600 mt-1">Xem điểm số và phản hồi từ giáo viên</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Điểm trung bình</p>
              <p className="text-2xl font-bold text-blue-600">{calculateAverage()}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Lọc theo môn:</span>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Tất cả môn</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGrades.map((grade) => (
          <div key={grade.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{grade.assignment}</h3>
                <p className="text-sm text-gray-600">{grade.subject} • {grade.date}</p>
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${getScoreColor(grade.score, grade.maxScore)}`}>
                  {grade.score}/{grade.maxScore}
                </p>
                <p className="text-sm text-gray-500">
                  {Math.round((grade.score / grade.maxScore) * 100)}% • {getGradeText(grade.score, grade.maxScore)}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    (grade.score / grade.maxScore) * 100 >= 80 ? 'bg-green-500' :
                    (grade.score / grade.maxScore) * 100 >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${(grade.score / grade.maxScore) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Phản hồi từ giáo viên:</h4>
              <p className="text-sm text-gray-600">{grade.feedback}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredGrades.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Chưa có kết quả nào cho môn học đã chọn.</p>
        </div>
      )}
    </div>
  );
};

// Student Profile Component
const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: 'Nguyễn Văn An',
    email: 'an.nv@school.edu.vn',
    phone: '0987654321',
    class: 'Lớp 10A1',
    studentId: 'HS2024001',
    dateOfBirth: '2006-05-15',
    address: 'Hà Nội, Việt Nam',
    parentName: 'Nguyễn Văn Bình',
    parentPhone: '0123456789'
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Thông Tin Cá Nhân</h2>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mã học sinh</label>
            <p className="text-gray-900">{profile.studentId}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lớp</label>
            <p className="text-gray-900">{profile.class}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ngày sinh</label>
            {isEditing ? (
              <input
                type="date"
                value={profile.dateOfBirth}
                onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.dateOfBirth}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.address}</p>
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Thông Tin Phụ Huynh</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên phụ huynh</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.parentName}
                  onChange={(e) => setProfile({...profile, parentName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="text-gray-900">{profile.parentName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại phụ huynh</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profile.parentPhone}
                  onChange={(e) => setProfile({...profile, parentPhone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="text-gray-900">{profile.parentPhone}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
