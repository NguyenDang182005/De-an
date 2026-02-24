import React from 'react';
import { DatePicker, Select, Radio, ConfigProvider } from 'antd';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

const { RangePicker } = DatePicker;

// Hàm chặn chọn ngày trong quá khứ (Dùng logic bạn vừa gửi)
const disabledDate = (current) => {
  // Không cho phép chọn những ngày trước ngày hôm nay
  return current && current < dayjs().startOf('day');
};

const Flights = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#003b95' } }}>
      <div className="w-full flex flex-col items-center bg-gray-50 min-h-screen">
        
        {/* Banner */}
        <div className="w-full bg-booking-blue text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-3">Tìm chuyến bay tiếp theo</h1>
            <p className="text-xl opacity-90">Đặt vé nhanh chóng, an toàn và tiết kiệm.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-6xl w-full -mt-10 px-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 flex flex-col gap-6">
            
            <Radio.Group defaultValue="roundtrip" buttonStyle="solid">
              <Radio.Button value="roundtrip">Khứ hồi</Radio.Button>
              <Radio.Button value="oneway">Một chiều</Radio.Button>
            </Radio.Group>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Điểm đi */}
              <div className="md:col-span-3 border rounded-lg p-2 hover:border-booking-blue bg-white flex items-center gap-2">
                <FlightTakeoffIcon className="text-gray-400" />
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-gray-500 uppercase font-sans">Từ đâu?</span>
                  <Select showSearch placeholder="Sân bay đi" variant="borderless" className="w-full"
                    options={[{ value: 'HAN', label: 'Hà Nội (HAN)' }, { value: 'SGN', label: 'TP. HCM (SGN)' }]} />
                </div>
              </div>

              {/* Điểm đến */}
              <div className="md:col-span-3 border rounded-lg p-2 hover:border-booking-blue bg-white flex items-center gap-2">
                <FlightLandIcon className="text-gray-400" />
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-gray-500 uppercase font-sans">Đến đâu?</span>
                  <Select showSearch placeholder="Sân bay đến" variant="borderless" className="w-full"
                    options={[{ value: 'DAD', label: 'Đà Nẵng (DAD)' }, { value: 'PQC', label: 'Phú Quốc (PQC)' }]} />
                </div>
              </div>

              {/* Ô CHỌN NGÀY XỊN BẠN VỪA GỬI */}
              <div className="md:col-span-4 border rounded-lg p-2 hover:border-booking-blue bg-white">
                <span className="text-[10px] font-bold text-gray-500 uppercase px-3 font-sans">Ngày đi - Ngày về</span>
                <RangePicker 
                  disabledDate={disabledDate} // Áp dụng logic chặn ngày quá khứ
                  variant="borderless" 
                  className="w-full" 
                  format="DD/MM/YYYY"
                  placeholder={['Ngày đi', 'Ngày về']} 
                />
              </div>

              <div className="md:col-span-2">
                <Button variant="contained" fullWidth className="h-full bg-booking-blue hover:bg-booking-dark"
                  sx={{ borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', height: '100%', textTransform: 'none' }}>
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* List vé mẫu... (giữ nguyên như trước) */}
      </div>
    </ConfigProvider>
  );
};

export default Flights;