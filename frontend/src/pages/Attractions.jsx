import React from 'react';
import { DatePicker, Input, ConfigProvider } from 'antd';
import { Button } from '@mui/material';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const Attractions = () => {
  const disabledDate = (current) => current && current < dayjs().startOf('day');

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#003b95' } }}>
      <div className="w-full flex flex-col items-center bg-gray-50 min-h-screen">
        
        {/* Banner */}
        <div className="w-full bg-[#003b95] text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-3">Địa điểm tham quan, hoạt động và trải nghiệm</h1>
            <p className="text-xl opacity-90">Khám phá những điều tuyệt vời nhất tại điểm đến của bạn</p>
          </div>
        </div>

        {/* Search Bar cho Attractions */}
        <div className="max-w-6xl w-full -mt-10 px-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Địa điểm */}
            <div className="md:col-span-5 border rounded-lg p-2 flex items-center gap-2 bg-white">
              <i className="fa-solid fa-location-dot text-gray-400 ml-2"></i>
              <div className="flex flex-col w-full">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Bạn muốn đi đâu?</span>
                <Input 
                  placeholder="Thành phố, điểm tham quan..." 
                  variant="borderless" 
                  className="w-full"
                />
              </div>
            </div>

            {/* Ngày dự kiến */}
            <div className="md:col-span-4 border rounded-lg p-2 bg-white">
              <span className="text-[10px] font-bold text-gray-500 uppercase px-3">Thời gian</span>
              <RangePicker 
                disabledDate={disabledDate} 
                variant="borderless" 
                className="w-full" 
                placeholder={['Từ ngày', 'Đến ngày']}
              />
            </div>

            {/* Nút Tìm kiếm */}
            <div className="md:col-span-3">
              <Button 
                variant="contained" 
                fullWidth
                sx={{ 
                  height: '100%', 
                  backgroundColor: '#006ce4', 
                  fontWeight: 'bold', 
                  textTransform: 'none',
                  fontSize: '16px',
                  borderRadius: '4px'
                }}
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>

        {/* Danh mục gợi ý */}
        <div className="max-w-6xl w-full mt-12 px-4 mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Khám phá theo danh mục</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Văn hóa', icon: '🏛️' },
              { name: 'Ẩm thực', icon: '🍲' },
              { name: 'Thiên nhiên', icon: '🌳' },
              { name: 'Giải trí', icon: '🎡' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md cursor-pointer transition-all flex flex-col items-center">
                <span className="text-4xl mb-2">{item.icon}</span>
                <span className="font-semibold text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Attractions;