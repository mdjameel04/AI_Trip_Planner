import { Button } from '@/components/ui/button';
import { Timeline } from '@/components/ui/timeline';
import { Clock, ExternalLink, Star, Ticket, Timer, Wallet } from 'lucide-react';
import { div } from 'motion/react-client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';

const TRIP_DATA = {    
        "destination": "Delhi",
        "duration": "2 Days",
        "origin": "Mumbai",
        "budget": "Moderate (Average Side)",
        "group_size": "1 (Solo Traveler)",
        "hotels": [
            {
                "hotel_name": "The Park New Delhi",
                "hotel_address": "15 Parliament Street, Connaught Place, New Delhi, Delhi 110001",
                "price_per_night": "INR 6500 - 8500",
                "hotel_image_url": "https://example.com/park_delhi.jpg",
                "geo_coordinates": {
                    "latitude": 28.6323,
                    "longitude": 77.2167
                },
                "rating": 8.5,
                "description": "Centrally located hotel offering modern amenities and excellent access to major cultural sites. Known for comfortable stay within a moderate price range."
            },
            {
                "hotel_name": "Bloomrooms @ Janpath",
                "hotel_address": "51/3, Janpath Lane, Janpath, New Delhi, Delhi 110001",
                "price_per_night": "INR 4000 - 5500",
                "hotel_image_url": "https://example.com/bloomrooms_janpath.jpg",
                "geo_coordinates": {
                    "latitude": 28.6215,
                    "longitude": 77.2125
                },
                "rating": 8,
                "description": "A reliable, clean, and budget-conscious option perfect for solo travelers, located near many central attractions."
            },
            {
                "hotel_name": "Ginger Hotel Delhi Aroma Highcourt",
                "hotel_address": "A-74, Naraina Vihar, Phase I, New Delhi, Delhi 110028",
                "price_per_night": "INR 4500 - 6000",
                "hotel_image_url": "https://example.com/ginger_naraina.jpg",
                "geo_coordinates": {
                    "latitude": 28.579,
                    "longitude": 77.1554
                },
                "rating": 7.8,
                "description": "A smart basic hotel providing essential comforts for a moderate stay, slightly outside the immediate central buzz."
            }
        ],
        "itinerary": [
            {
                "day": 1,
                "day_plan": "Exploring Old Delhi's Mughal Heritage and Spice Routes.",
                "best_time_to_day": "Morning (9:00 AM) to Evening (7:00 PM)",
                "activities": [
                    {
                        "place_name": "Red Fort (Lal Qila)",
                        "place_details": "A massive 17th-century fort complex that served as the main residence of the Mughal emperors. Essential for understanding Mughal architecture.",
                        "place_image_url": "https://example.com/red_fort.jpg",
                        "geo_coordinates": {
                            "latitude": 28.6586,
                            "longitude": 77.241
                        },
                        "place_address": "Netaji Subhash Marg, Chandni Chowk, New Delhi, Delhi 110006",
                        "ticket_pricing": "INR 65 (Foreigners: INR 600)",
                        "time_travel_each_location": "2 hours",
                        "best_time_to_visit": "Morning (9:00 AM - 11:00 AM) to avoid heat and crowds."
                    },
                    {
                        "place_name": "Jama Masjid",
                        "place_details": "One of the largest mosques in India, built by Shah Jahan. Offers stunning views of Old Delhi from its minarets.",
                        "place_image_url": "https://example.com/jama_masjid.jpg",
                        "geo_coordinates": {
                            "latitude": 28.6506,
                            "longitude": 77.2403
                        },
                        "place_address": "Meena Bazar, Jama Masjid, New Delhi, Delhi 110006",
                        "ticket_pricing": "Free (Small fee for camera/minaret climb)",
                        "time_travel_each_location": "1.5 hours",
                        "best_time_to_visit": "Late Morning (11:00 AM - 12:30 PM)"
                    },
                    {
                        "place_name": "Chandni Chowk Market Exploration & Food Tour",
                        "place_details": "Dive into the bustling heart of Old Delhi. Experience the spice market (Khari Baoli) and sample iconic local street food (Parathas, Jalebi).",
                        "place_image_url": "https://example.com/chandni_chowk.jpg",
                        "geo_coordinates": {
                            "latitude": 28.6556,
                            "longitude": 77.2309
                        },
                        "place_address": "Chandni Chowk Area",
                        "ticket_pricing": "Variable (Food cost only)",
                        "time_travel_each_location": "3 hours",
                        "best_time_to_visit": "Lunchtime / Afternoon (1:00 PM - 4:00 PM)"
                    }
                ]
            },
            {
                "day": 2,
                "day_plan": "Exploring New Delhi's Administrative Wonders and Spiritual Calm.",
                "best_time_to_day": "Morning (9:30 AM) to Late Afternoon (5:00 PM)",
                "activities": [
                    {
                        "place_name": "Humayun's Tomb",
                        "place_details": "The tomb of the Mughal Emperor Humayun, often considered the precursor to the Taj Mahal. A magnificent example of early Mughal architecture set in serene gardens.",
                        "place_image_url": "https://example.com/humayuns_tomb.jpg",
                        "geo_coordinates": {
                            "latitude": 28.5931,
                            "longitude": 77.2401
                        },
                        "place_address": "Mathura Road, Nizamuddin East, New Delhi, Delhi 110013",
                        "ticket_pricing": "INR 40 (Foreigners: INR 510)",
                        "time_travel_each_location": "2 hours",
                        "best_time_to_visit": "Early Morning (9:30 AM - 11:30 AM) for photography and peace."
                    },
                    {
                        "place_name": "India Gate & Rajpath Drive",
                        "place_details": "A war memorial dedicated to Indian soldiers, symbolizing the central axis of Lutyens' Delhi. Great for understanding the modern administrative layout.",
                        "place_image_url": "https://example.com/india_gate.jpg",
                        "geo_coordinates": {
                            "latitude": 28.6129,
                            "longitude": 77.2295
                        },
                        "place_address": "Rajpath, New Delhi, Delhi 110001",
                        "ticket_pricing": "Free",
                        "time_travel_each_location": "1 hour",
                        "best_time_to_visit": "Midday/Afternoon (12:30 PM - 2:00 PM)"
                    },
                    {
                        "place_name": "Qutub Minar Complex",
                        "place_details": "A UNESCO World Heritage Site featuring the world's tallest brick minaret, showcasing historical layering of architecture from early Islamic rule.",
                        "place_image_url": "https://example.com/qutub_minar.jpg",
                        "geo_coordinates": {
                            "latitude": 28.5229,
                            "longitude": 77.1865
                        },
                        "place_address": "Mehrauli, New Delhi, Delhi 110030",
                        "ticket_pricing": "INR 40 (Foreigners: INR 510)",
                        "time_travel_each_location": "2 - 2.5 hours",
                        "best_time_to_visit": "Late Afternoon (3:00 PM - 5:00 PM) for better light."
                    }
                ]
            }
        ]
    }

const Itinerary = () => {
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
         {TRIP_DATA?.hotels.map((hotel,index)=>(
         <HotelCardItem  hotel={hotel} />
         ))}
        </div>
      ),
    },
    ...TRIP_DATA?.itinerary.map((dayData)=>({
 title:`Day ${dayData?.day}`,
 content: (
    <div>
        <p>Best Time :{dayData?.best_time_to_day} </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {dayData?.activities.map((activity,index)=>(
          <PlaceCardItem  activity={activity}/> 
        ))}
    </div>
    </div>
 )
    }))
    
  ];
  return (
    <div className="relative w-full h-[83vh] overflow-auto ">
      <Timeline data={data} tripData= {TRIP_DATA} />
    </div>
  )
}

export default Itinerary