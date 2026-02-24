import React from 'react';
import { DatePicker, Select, InputNumber, ConfigProvider } from 'antd';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import GroupIcon from '@mui/icons-material/Group';

const { RangePicker } = DatePicker;

const FlightAndHotel = () => {
  const disabledDate = (current) => current && current < dayjs().startOf('day');

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#003b95' } }}>
      <div className="w-full flex flex-col items-center bg-gray-50 min-h-screen">
        
        {/* Banner Đặc trưng cho Packages */}
        <div className="w-full bg-linear-to-r from-booking-blue to-blue-800 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-3">Chuyến đi trọn gói: Máy bay + Khách sạn</h1>
            <p className="text-xl opacity-90">Tiết kiệm lên đến 15% khi đặt cả hai cùng lúc</p>
          </div>
        </div>

        {/* Search Bar kết hợp */}
        <div className="max-w-6xl w-full -mt-10 px-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 flex flex-col gap-4">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Điểm đi */}
              <div className="md:col-span-3 border rounded-lg p-2 flex items-center gap-2 bg-white">
                <FlightTakeoffIcon className="text-blue-500" />
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Điểm đi</span>
                  <Select showSearch placeholder="Hà Nội (HAN)" variant="borderless" className="w-full"
                    options={[{ value: 'HAN', label: 'Hà Nội' }, { value: 'SGN', label: 'TP. HCM' }]} />
                </div>
              </div>

              {/* Điểm đến (Vừa là sân bay vừa là nơi ở) */}
              <div className="md:col-span-3 border rounded-lg p-2 flex items-center gap-2 bg-white">
                <HotelIcon className="text-blue-500" />
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Điểm đến / Khách sạn</span>
                  <Select showSearch placeholder="Đà Nẵng" variant="borderless" className="w-full"
                    options={[{ value: 'DAD', label: 'Đà Nẵng' }, { value: 'PQC', label: 'Phú Quốc' }]} />
                </div>
              </div>

              {/* Lịch trình */}
              <div className="md:col-span-4 border rounded-lg p-2 bg-white">
                <span className="text-[10px] font-bold text-gray-400 uppercase px-3">Thời gian đi & về</span>
                <RangePicker disabledDate={disabledDate} variant="borderless" className="w-full" />
              </div>

              {/* Số người */}
              <div className="md:col-span-2 border rounded-lg p-2 flex items-center gap-2 bg-white">
                <GroupIcon className="text-gray-400" />
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Khách</span>
                  <InputNumber min={1} defaultValue={2} variant="borderless" className="w-full" />
                </div>
              </div>
            </div>

            {/* Nút Tìm kiếm to bản */}
            <div className="flex justify-end mt-2">
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  backgroundColor: '#006ce4', 
                  px: 6, 
                  py: 1.5, 
                  fontWeight: 'bold', 
                  textTransform: 'none',
                  borderRadius: '4px'
                }}
              >
                Tìm kiếm gói tiết kiệm
              </Button>
            </div>
          </div>
        </div>

        {/* Phần nội dung quảng cáo gói */}
        <div className="max-w-6xl w-full mt-12 px-4 mb-20">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-blue-900">Tại sao nên đặt theo gói?</h3>
                    <ul className="mt-2 text-blue-800 list-disc list-inside space-y-1">
                        <li>Giá rẻ hơn so với đặt lẻ từng dịch vụ</li>
                        <li>Quản lý chuyến đi dễ dàng tại một nơi</li>
                        <li>Đã bao gồm bảo hiểm hành trình cơ bản</li>
                    </ul>
                </div>
                <div className="hidden md:block text-6xl opacity-20 text-blue-900">
                    ✈️+🏨
                </div>
            </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default FlightAndHotel;