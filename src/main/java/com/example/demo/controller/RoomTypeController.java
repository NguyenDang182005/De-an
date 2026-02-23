package com.example.demo.controller;

import com.example.demo.model.entity.RoomType;
import com.example.demo.model.service.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room-types")
@CrossOrigin(origins = "*")
public class RoomTypeController {

    @Autowired
    private RoomTypeService roomTypeService;

    @GetMapping("/hotel/{hotelId}")
    public List<RoomType> getRoomTypesByHotel(@PathVariable Long hotelId) {
        return roomTypeService.getRoomTypesByHotel(hotelId);
    }

    @PostMapping
    public RoomType createRoomType(@RequestBody RoomType roomType) {
        return roomTypeService.saveRoomType(roomType);
    }
}
