import React from 'react';
// Import icons
import { BookOpen, FileText, Video } from 'lucide-react';

// Dữ liệu mẫu
const course = {
  name: 'Lớp Toán 10A1',
  teacher: 'Trần Thị Bích',
  materials: [
    { id: 1, type: 'pdf', title: 'Chương 1: Mệnh đề - Tập hợp.pdf' },
    { id: 2, type: 'video', title: 'Video: Giải bài tập mệnh đề' },
    { id: 3, type: 'link', title: 'Bài đọc thêm về Logic học' },
  ],
  assignments: [
    { id: 1, title: 'Bài tập trắc nghiệm Chương 1', status: 'Chưa làm' },
    { id: 2, title: 'Bài tập tự luận cuối chương', status: 'Đã nộp' },
  ],
};

// Component con để hiển thị icon tương ứng
const TypeIcon = ({ type }) => {
  if (type === 'pdf') return <FileText className="text-red-500" />;
  if (type === 'video') return <Video className="text-blue-500" />;
  return <BookOpen className="text-green-500" />;
};

function CourseDashboard() {
  return (
    <div className="p-6 bg-gray-100">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">{course.name}</h1>
        <p className="text-lg text-gray-600">Giáo viên: {course.teacher}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cột Tài liệu học tập */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">Tài liệu học tập</h2>
          <ul className="space-y-3">
            {course.materials.map(material => (
              <li key={material.id} className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                <TypeIcon type={material.type} />
                <span className="ml-4 text-gray-800">{material.title}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Cột Bài tập */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">Bài tập cần làm</h2>
          <ul className="space-y-4">
            {course.assignments.map(assignment => (
              <li key={assignment.id} className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">{assignment.title}</p>
                  <span className={`text-sm font-medium ${
                    assignment.status === 'Chưa làm' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {assignment.status}
                  </span>
                </div>
                <button className="px-4 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                  {assignment.status === 'Chưa làm' ? 'Làm bài' : 'Xem lại'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseDashboard;