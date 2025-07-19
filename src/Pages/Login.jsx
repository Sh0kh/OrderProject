import React, { useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Swal from 'sweetalert2';

const Login = () => {
  const [phone, setPhone] = useState('+998');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    // Foydalanuvchi kiritgan qiymatni to'g'ridan-to'g'ri o'zlashtirish
    setPhone(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const loginData = {
        phone: phone,
        password: password,
      };

      console.log('Yuborilayotgan ma\'lumotlar:', loginData);

      const response = await axios.post('/api/login', loginData);
      console.log('API javobi:', response.data);

      const token = response.data.token;
      const role = response.data.role || 'user';

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        Swal.fire({
          title: 'Muvaffaqiyatli!',
          icon: 'success',
          position: 'top-end',
          timer: 3000,
          timerProgressBar: true,
          showCloseButton: true,
          toast: true,
          showConfirmButton: false,
        });

        // Rolga qarab yo'nalishni belgilash
        if (role === 'admin' || role === 'teacher') {
          navigate('/admin/dashboard');
        } else {
          navigate('/');
        }
      } else {
        throw new Error('Token topilmadi');
      }
    } catch (error) {
      console.error('Xatolik:', error.response?.data);
      
      Swal.fire({
        title: 'Xatolik!',
        text: error.response?.data?.message || error.message || 'Xatolik yuz berdi.',
        icon: 'error',
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        toast: true,
        showConfirmButton: false,
      });
    }
  };

  // Enter tugmasini bosish orqali kirish
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffff]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div className="space-y-4">
          <Input 
            label="Telefon raqam" 
            value={phone} 
            onChange={handlePhoneChange} 
            type="text" 
            required 
            onKeyPress={handleKeyPress}
          />
          <Input 
            label="Parol" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            color="gray" 
            type="password" 
            required 
            onKeyPress={handleKeyPress}
          />
          <Button 
            fullWidth 
            color="gray" 
            onClick={handleLogin} 
            className="bg-black text-white hover:bg-gray-800"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;