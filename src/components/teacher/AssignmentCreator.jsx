import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

function AssignmentCreator() {
  const [assignmentType, setAssignmentType] = useState('multiple_choice');
  const [questions, setQuestions] = useState([{ text: '', options: ['', ''], answer: 0 }]);

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: ['', ''], answer: 0 }]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };
  
  return (
    <div className="p-6 bg-gray-50 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tạo Bài Tập Mới</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* Tiêu đề và loại bài tập */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề bài tập</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Ví dụ: Bài kiểm tra 15 phút - Chương 1"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loại bài tập</label>
            <select
              value={assignmentType}
              onChange={(e) => setAssignmentType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
            >
              <option value="multiple_choice">Trắc nghiệm</option>
              <option value="essay">Tự luận</option>
            </select>
          </div>
        </div>

        <hr className="my-6" />

        {/* Phần câu hỏi */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Nội dung câu hỏi</h2>
        
        {assignmentType === 'multiple_choice' ? (
          <div className="space-y-6">
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="p-4 border border-gray-200 rounded-lg relative">
                <button onClick={() => removeQuestion(qIndex)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                  <X size={18}/>
                </button>
                <label className="block text-sm font-medium text-gray-700 mb-2">Câu hỏi {qIndex + 1}</label>
                <input type="text" placeholder="Nhập nội dung câu hỏi..." className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, oIndex) => (
                     <div key={oIndex} className="flex items-center">
                       <input type="radio" name={`q_${qIndex}_answer`} className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"/>
                       <input type="text" placeholder={`Lựa chọn ${oIndex + 1}`} className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"/>
                     </div>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={addQuestion} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
              <Plus size={16}/> Thêm câu hỏi
            </button>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Đề bài tự luận</label>
            <textarea
              rows="8"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Nhập nội dung đề bài tự luận tại đây..."
            ></textarea>
          </div>
        )}

        {/* Nút lưu */}
        <div className="mt-8 flex justify-end">
            <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Lưu bài tập
            </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentCreator;