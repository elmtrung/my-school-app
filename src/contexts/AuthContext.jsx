import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kiểm tra localStorage để restore user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    // Simulate API call - replace with actual API
    const mockUsers = [
      { 
        id: 1, 
        username: 'admin', 
        password: 'admin123', 
        role: 'admin', 
        name: 'Administrator',
        email: 'admin@school.edu.vn'
      },
      { 
        id: 2, 
        username: 'teacher1', 
        password: 'teacher123', 
        role: 'teacher', 
        name: 'Trần Thị Bích',
        email: 'bich.tt@school.edu.vn',
        subject: 'Toán'
      },
      { 
        id: 3, 
        username: 'student1', 
        password: 'student123', 
        role: 'student', 
        name: 'Nguyễn Văn An',
        email: 'an.nv@school.edu.vn',
        class: 'Lớp 10A1'
      }
    ];

    const user = mockUsers.find(u => 
      u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      const { password, ...userWithoutPassword } = user;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword };
    } else {
      return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    login,
    logout,
    updateUser,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
