"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/components/Input";

export function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Mock unavailable dates (e.g., 10th-15th of the current month)
  const unavailableDates = [10, 11, 12, 13, 14, 15];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isUnavailable = (day: number) => {
    // Only apply mockup unavailable dates to current month for simplicity
    const today = new Date();
    return currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear() && 
           unavailableDates.includes(day);
  };

  const handleDateClick = (day: number) => {
    if (isUnavailable(day)) return;

    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (clickedDate > startDate) {
        setEndDate(clickedDate);
      } else {
        setStartDate(clickedDate);
      }
    }
  };

  const isSelected = (day: number) => {
    if (!startDate) return false;
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (endDate) {
      return d >= startDate && d <= endDate;
    }
    return d.getTime() === startDate.getTime();
  };

  const isEndpoint = (day: number) => {
    if (!startDate) return false;
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return (
      d.getTime() === startDate.getTime() || 
      (endDate && d.getTime() === endDate.getTime())
    );
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="w-full bg-surface-container-low rounded-xl p-4 border border-outline-variant/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold flex items-center gap-2">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button 
            type="button"
            onClick={prevMonth}
            className="p-1 rounded hover:bg-surface-container"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            type="button"
            onClick={nextMonth}
            className="p-1 rounded hover:bg-surface-container"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
          <div key={d} className="text-[10px] font-bold text-secondary uppercase bg-surface-container-low min-h-[44px] flex items-center justify-center">
            {d}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-sm font-medium">
        {blanks.map(b => (
          <div key={`b-${b}`} className="aspect-square flex justify-center items-center opacity-0 min-h-[44px]"></div>
        ))}
        {days.map(d => {
          const unavailable = isUnavailable(d);
          const selected = isSelected(d);
          const endpoint = isEndpoint(d);
          
          return (
            <button
              key={d}
              type="button"
              disabled={unavailable}
              onClick={() => handleDateClick(d)}
              className={cn(
                "aspect-square flex items-center justify-center min-h-[44px] rounded-lg transition-colors border border-transparent",
                unavailable ? "opacity-30 cursor-not-allowed bg-surface-container-high line-through decoration-primary/50" : "hover:border-primary/30",
                selected && !endpoint && "bg-primary/10 text-primary rounded-none",
                endpoint && "bg-primary text-white font-bold shadow-md transform scale-105 z-10",
                !unavailable && !selected && "bg-surface hover:bg-surface-container-highest"
              )}
            >
              {d}
            </button>
          );
        })}
      </div>
{/* 
      <div className="mt-4 flex flex-col gap-2 border-t border-outline-variant/10 pt-4">
        <div className="flex justify-between items-center bg-surface p-3 rounded-lg">
          <span className="text-secondary text-xs uppercase font-bold tracking-widest">Pickup</span>
          <span className="font-bold font-mono text-sm">{startDate ? startDate.toLocaleDateString() : "Select Date"}</span>
        </div>
        <div className="flex justify-between items-center bg-surface p-3 rounded-lg">
          <span className="text-secondary text-xs uppercase font-bold tracking-widest">Return</span>
          <span className="font-bold font-mono text-sm">{endDate ? endDate.toLocaleDateString() : "Select Date"}</span>
        </div>
      </div> */}
    </div>
  );
}
