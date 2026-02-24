import React, { useState } from 'react';
import { DatePicker, Select, Checkbox, ConfigProvider } from 'antd';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
// Đảm bảo bạn đã cài đặt @mui/icons-material
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const { RangePicker } = DatePicker;

const CarRental = () => {
  const [differentLocation, setDifferentLocation] = useState(false);
  
  // Vô hiệu hóa các ngày đã qua
  const disabledDate = (current) => {
    return current && current < dayjs().startOf('day');
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#003b95' } }}>
      <div className="w-full flex flex-col items-center bg-gray-50 min-h-screen text-black">
        
        {/* Banner - Dùng mã màu HEX trực tiếp để tránh lỗi Tailwind config */}
        <div className="w-full bg-[#003b95] text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-3 text-white">Thuê xe cho mọi loại hành trình</h1>
            <p className="text-xl opacity-90 text-white">Ưu đãi lớn từ các thương hiệu hàng đầu thế giới</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-6xl w-full -mt-10 px-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 flex flex-col gap-4">
            
            <div className="mb-2">
              <Checkbox 
                onChange={(e) => setDifferentLocation(e.target.checked)}
                className="font-medium text-black"
              >
                Trả xe tại địa điểm khác
              </Checkbox>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Điểm nhận */}
              <div className={`border rounded-lg p-2 flex items-center gap-2 bg-white ${differentLocation ? 'md:col-span-3' : 'md:col-span-5'}`}>
                <LocationOnIcon className="text-gray-400" />
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Địa điểm nhận xe</span>
                  <Select
                    showSearch
                    placeholder="Sân bay, thành phố..."
                    variant="borderless"
                    className="w-full"
                    options={[
                      { value: 'SGN', label: 'Sân bay Tân Sơn Nhất (SGN)' },
                      { value: 'HAN', label: 'Sân bay Nội Bài (HAN)' },
                    ]}
                  />
                </div>
              </div>

              {/* Điểm trả (Nếu có) */}
              {differentLocation && (
                <div className="md:col-span-3 border rounded-lg p-2 flex items-center gap-2 bg-white transition-all">
                  <LocationOnIcon className="text-red-500" />
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Địa điểm trả xe</span>
                    <Select placeholder="Địa điểm trả..." variant="borderless" className="w-full" />
                  </div>
                </div>
              )}

              {/* Lịch trình */}
              <div className={`${differentLocation ? 'md:col-span-4' : 'md:col-span-5'} border rounded-lg p-2 bg-white`}>
                <span className="text-[10px] font-bold text-gray-500 uppercase px-3">Ngày nhận & trả</span>
                <RangePicker 
                  disabledDate={disabledDate} 
                  variant="borderless" 
                  className="w-full" 
                  format="DD/MM/YYYY HH:mm"
                  showTime={{ format: 'HH:mm' }}
                />
              </div>

              {/* Nút tìm kiếm */}
              <div className="md:col-span-2">
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    height: '100%', 
                    backgroundColor: '#006ce4', 
                    '&:hover': { backgroundColor: '#005bb8' },
                    fontWeight: 'bold', 
                    textTransform: 'none'
                  }}
                >
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Blocks */}
        <div className="max-w-6xl w-full mt-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-black">
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-4xl mb-2">✔️</span>
            <h3 className="font-bold text-lg">Hủy miễn phí</h3>
            <p className="text-gray-500 text-sm">Hầu hết các đơn đặt xe đều có thể hủy trước 48 giờ</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-4xl mb-2">🏢</span>
            <h3 className="font-bold text-lg">Hơn 900 công ty</h3>
            <p className="text-gray-500 text-sm">Kết nối với các đối tác uy tín như Hertz, Avis, Europcar</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-4xl mb-2">✨</span>
            <h3 className="font-bold text-lg">Không phí ẩn</h3>
            <p className="text-gray-500 text-sm">Giá hiển thị là giá cuối cùng bạn phải trả</p>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default CarRental;