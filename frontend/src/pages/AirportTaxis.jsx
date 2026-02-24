import React from 'react';
import { DatePicker, Input, TimePicker, ConfigProvider } from 'antd';
import { Button } from '@mui/material';
import dayjs from 'dayjs';

const AirportTaxis = () => {
  const disabledDate = (current) => current && current < dayjs().startOf('day');

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#003b95' } }}>
      <div className="w-full flex flex-col items-center bg-gray-50 min-h-screen">
        
        {/* Banner */}
        <div className="w-full bg-[#003b95] text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-3">Xe đưa đón sân bay giá rẻ</h1>
            <p className="text-xl opacity-90">Taxi sân bay đáng tin cậy, giá trọn gói, tài xế đợi sẵn</p>
          </div>
        </div>

        {/* Search Bar cho Airport Taxis */}
        <div className="max-w-6xl w-full -mt-10 px-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              
              {/* Điểm đón (Sân bay) */}
              <div className="md:col-span-4 border rounded-lg p-2 flex items-center gap-2 bg-white">
                <i className="fa-solid fa-plane-arrival text-gray-400 ml-2"></i>
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Điểm đón</span>
                  <Input placeholder="Nhập sân bay..." variant="borderless" className="w-full" />
                </div>
              </div>

              {/* Điểm đến (Khách sạn/Địa chỉ) */}
              <div className="md:col-span-4 border rounded-lg p-2 flex items-center gap-2 bg-white">
                <i className="fa-solid fa-location-dot text-gray-400 ml-2"></i>
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Điểm đến</span>
                  <Input placeholder="Khách sạn, địa chỉ..." variant="borderless" className="w-full" />
                </div>
              </div>

              {/* Ngày và Giờ */}
              <div className="md:col-span-2 border rounded-lg p-2 bg-white">
                <span className="text-[10px] font-bold text-gray-500 uppercase px-3">Ngày đón</span>
                <DatePicker disabledDate={disabledDate} variant="borderless" className="w-full" />
              </div>

              <div className="md:col-span-2 border rounded-lg p-2 bg-white">
                <span className="text-[10px] font-bold text-gray-500 uppercase px-3">Giờ đón</span>
                <TimePicker format="HH:mm" variant="borderless" className="w-full" />
              </div>
            </div>

            {/* Nút Tìm kiếm */}
            <div className="flex justify-end mt-2">
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#006ce4', 
                  px: 8, 
                  py: 1.5, 
                  fontWeight: 'bold', 
                  textTransform: 'none',
                  fontSize: '16px'
                }}
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>

        {/* Lợi ích */}
        <div className="max-w-6xl w-full mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-4">
            <div className="text-3xl">⏱️</div>
            <div>
              <h4 className="font-bold">Xác nhận tức thì</h4>
              <p className="text-sm text-gray-500">Đặt xe chỉ trong vài phút</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-4">
            <div className="text-3xl">🤝</div>
            <div>
              <h4 className="font-bold">Dịch vụ đón khách</h4>
              <p className="text-sm text-gray-500">Tài xế đợi sẵn ở sảnh đến</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-4">
            <div className="text-3xl">💰</div>
            <div>
              <h4 className="font-bold">Giá cố định</h4>
              <p className="text-sm text-gray-500">Không phí ẩn, không lo kẹt xe</p>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default AirportTaxis;