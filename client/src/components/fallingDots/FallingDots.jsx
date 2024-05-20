import React, { useEffect, useState } from 'react';
import './fallingDots.css';

const FallingDots = () => {
  const [dots, setDots] = useState([]);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    let intervalId;
    const startDots = () => { // Функция для создания новых точек
      intervalId = setInterval(() => {
        const dot = { // Создаем новую точку с случайным id и координатами
          id: Math.random(),
          x: Math.random() * window.innerWidth,
          y: -10,
        };
        setDots(prevDots => [...prevDots, dot]); // Добавляем новую точку в состояние
        setTimeout(() => { // Удаляем точку через 15 секунд
          setDots(prevDots => prevDots.filter(d => d.id !== dot.id));
        }, 15000);
      }, 600);
    };

    const stopDots = () => { // Функция для остановки создания новых точек
      clearInterval(intervalId);
    };

    document.addEventListener('visibilitychange', () => { // Слушатель событий для отслеживания видимости страницы
      if (document.visibilityState === 'hidden') { // Если страница не видна, останавливаем создание новых точек
        stopDots();
        setIsPageVisible(false);
      } else { // Если страница видна, начинаем создание новых точек
        startDots();
        setIsPageVisible(true);
      }
    });

    startDots(); // Начинаем создание новых точек при первом рендере

    return () => {
      stopDots();
      document.removeEventListener('visibilitychange', stopDots);
    };
  }, []); // Очищаем слушатель событий и останавливаем создание новых точек при размонтировании компонента

  return (
    <div className="falling-dots-container">
      {dots.map(dot => (
        <div
          key={dot.id}
          className={`dot ${isPageVisible ? '' : 'paused'}`}
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingDots;