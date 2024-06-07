import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import '../index.css'

// Определение компонента Loading
const Loading = ({ children, loading, loadingClass }) => {
  // Если loading равен true, то выполняем следующий код
  if (loading) {
    // Используем метод React.Children.map для перебора дочерних элементов
    return React.Children.map(children, (child) => {
      // Проверяем, есть ли у дочернего элемента свойство className
      // и содержит ли оно класс, указанный в loadingClass
      if (child.props.className && child.props.className.includes(loadingClass)) {
        return <CircularProgress color='inherit' className='loading' style={{ position: 'absolute', left: '50%', top: '50%' }}/>; // Если условие выше истинно, то заменяем дочерний элемент на спиннер
      }
      return child; // Если условие выше ложно, то возвращаем дочерний элемент без изменений
    });
  }

  return children; // Если loading равен false, то возвращаем дочерние элементы без изменений
};

// Определение propTypes для компонента Loading
Loading.propTypes = {
  children: PropTypes.node.isRequired, // children - обязательный проп, должен быть узлом React
  loading: PropTypes.bool.isRequired, // loading - обязательный проп, должен быть булевым значением
  loadingClass: PropTypes.string.isRequired // loadingClass - обязательный проп, должен быть строкой
};

export default Loading;