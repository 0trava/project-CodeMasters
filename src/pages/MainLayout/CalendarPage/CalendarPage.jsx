import React, { useState, useEffect, useMemo } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { CalendarToolbar } from './CalendarToolbar';
import { ChoosedMonth } from './CalendarMonth/ChoosedMonth';
import { ChoosedDay } from './CalendarDay/ChoosedDay';
import './CalendarPage.css';

export const CalendarPage = () => {
  const currentDate = useMemo(() => new Date(), []);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(process.env.DB_HOST);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    if (tasks.length === 0) {
      fetchTasks();
    }
  }, [tasks]);

  return (
    <div className="calendar-page">
      <CalendarToolbar />

      <div className="calendar-content">
        <Routes>
          <Route
            path="/calendar/month/:currentDate"
            element={<ChoosedMonth tasks={tasks} />}
          />
          <Route path="/calendar/day/:selectedDate" element={<ChoosedDay />} />
          <Route
            path="/calendar"
            element={<Navigate to={`/calendar/month/${currentDate}`} />}
          />
        </Routes>
       
      </div>
    </div>
  );
};