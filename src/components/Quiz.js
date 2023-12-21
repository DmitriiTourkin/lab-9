import React, { useState } from 'react';
import './App.css'
export default function Quiz() {
    const quizData = [
        {
            id: 0,
            questionText: 'Какая правильная команда для создания нового проекта React?',
            optionToAnswer: [
                {id: 0, optionText: 'npx create-react-app myReactApp'},
                {id: 1, optionText: 'npm create-react-app myReactApp'},
                {id: 2, optionText: 'npx create-react-app'},
                {id: 3, optionText: 'npx create-react-app'},
            ],
            rightAnswerId: 0,
        },
        {
            id: 1,
            questionText: 'На что myReactApp ссылается следующая команда?',
            optionToAnswer: [
                {id: 0, optionText: 'Тип приложения для создания'},
                {id: 1, optionText: 'Ссылка на существующее приложение'},
                {id: 2, optionText: 'Имя, которое вы хотите использовать для нового приложения'},
                {id: 3, optionText: 'Каталог для создания нового приложения'},
            ],
            rightAnswerId: 0,

        },
        {
            id: 2,
            questionText: 'Какая команда используется для запуска локального сервера разработки React?',
            optionToAnswer: [
                {id: 0, optionText: 'npm start'},
                {id: 1, optionText: 'npm server'},
                {id: 2, optionText: 'npm build'},
                {id: 3, optionText: 'npm run dev'},
            ],
            rightAnswerId: 0,

        },
        {
            id: 3,
            questionText: 'Какой порт локального хоста по умолчанию используется сервером разработки React?',
            optionToAnswer: [
                {id: 0, optionText: '3000'},
                {id: 1, optionText: '8080'},
                {id: 2, optionText: '3500'},
                {id: 3, optionText: '5000'},
            ],
            rightAnswerId: 0,

        },
        {
            id: 4,
            questionText: 'Для разработки и запуска кода React, Node.js требуется',
            optionToAnswer: [
                {id: 0, optionText: 'True'},
                {id: 1, optionText: 'False'},
            ],
            rightAnswerId: 0,
        },
        {
            id: 5,
            questionText: 'Какой тип элемента будет отображаться из следующего кода?\n' +
                '\n' +
                'function Car() {\n' +
                '  return <h1>Ford Mustang</h1>;\n' +
                '}\n' +
                '\n' +
                'const root = createRoot(document.getElementById(\'root\'));\n' +
                'root.render(<Car />);',
            optionToAnswer: [
                {id: 0, optionText: 'ReactDOM'},
                {id: 1, optionText: 'Component'},
                {id: 0, optionText: ''},
                {id: 1, optionText: 'h1'},
            ],
            rightAnswerId: 0,
        },
        {
            id: 6,
            questionText: 'Что такое реквизит детей?',
            optionToAnswer: [
                {id: 0, optionText: 'True'},
                {id: 1, optionText: 'False'},
            ],
            rightAnswerId: 0,
        },
        {
            id: 7,
            questionText: 'Какое ключевое слово создает константу в JavaScript?',
            optionToAnswer: [
                {id: 0, optionText: 'constant'},
                {id: 1, optionText: 'var'},
                {id: 2, optionText: 'const'},
                {id: 3, optionText: 'let'},
            ],
            rightAnswerId: 2,
        },
        {
            id: 8,
            questionText: 'Копия "реального" DOM, которая хранится в памяти, называется как?',
            optionToAnswer: [
                {id: 0, optionText: 'Shadow DOM'},
                {id: 1, optionText: 'DOM'},
                {id: 2, optionText: 'React DOM'},
                {id: 3, optionText: 'Virtual DOM'},
            ],
            rightAnswerId: 3,
        },
        {
            id: 9,
            questionText: 'Имена компонентов React должны начинаться с заглавной буквы',
            optionToAnswer: [
                {id: 0, optionText: 'False'},
                {id: 1, optionText: 'True'},
            ],
            rightAnswerId: 1,
        },
        {
            id: 10,
            questionText: 'Какой оператор можно использовать для условного отображения компонента React?',
            optionToAnswer: [
                {id: 0, optionText: '::'},
                {id: 1, optionText: '||'},
                {id: 2, optionText: '??'},
                {id: 3, optionText: '&&'},
            ],
            rightAnswerId: 3,
        },
        {
            id: 11,
            questionText: 'При визуализации списка с использованием JavaScript метода map(), что требуется для каждого отображаемого элемента?',
            optionToAnswer: [
                {id: 0, optionText: 'id'},
                {id: 1, optionText: 'key'},
                {id: 2, optionText: 'index'},
                {id: 3, optionText: 'data'},
            ],
            rightAnswerId: 1,
        },
        {
            id: 12,
            questionText: 'Какой инструмент React использует для компиляции JSX?',
            optionToAnswer: [
                {id: 0, optionText: 'Babel'},
                {id: 1, optionText: 'ReactDOM'},
                {id: 2, optionText: 'React Router'},
                {id: 3, optionText: 'JSX Compiler'},
            ],
            rightAnswerId: 0,
        },
        {
            id: 13,
            questionText: 'Как можно оптимизировать производительность функционального компонента, который всегда отображается одинаково?',
            optionToAnswer: [
                {id: 0, optionText: 'Используйье useReducer хук.'},
                {id: 1, optionText: 'Используйье useMemo хук.'},
                {id: 2, optionText: 'Используйте метод lifecycle shouldComponentUpdate'},
                {id: 3, optionText: 'Оберните его в React.memo компонент higher-order'},
            ],
            rightAnswerId: 3,
        },
        {
            id: 14,
            questionText: "Какие реквизиты будут доступны для следующего компонента?\n" +
                '\n' +
                '<Car {...props} />',
            optionToAnswer: [
                {id: 0, optionText: 'Только статические'},
                {id: 1, optionText: 'Только обновлённые'},
                {id: 2, optionText: 'Все они'},
                {id: 1, optionText: 'Дети'},
            ],
            rightAnswerId: 2,
        },
        {
            id: 15,
            questionText: 'Каков общий вариант использования для ref',
            optionToAnswer: [
                {id: 0, optionText: 'Для ссылки на другой файл JavaScript'},
                {id: 1, optionText: 'Для ссылки на функцию'},
                {id: 0, optionText: 'Для  прямого досутпа к узлу DOM'},
                {id: 1, optionText: 'Для привязки функции'},
            ],
            rightAnswerId: 2,
        },
        {
            id: 16,
            questionText: 'Как вы можете объединить следующие массивы с помощью оператора spread?\n' +
                '\n' +
                'const array1 = [1, 2, 3];\n' +
                'const array2 = [4, 5, 6];',
            optionToAnswer: [
                {id: 0, optionText: 'const combined = ...array1 + ...array2'},
                {id: 1, optionText: 'const combined = [...array1 + ...array2]'},
                {id: 2, optionText: 'const combined = [array1, array2]'},
                {id: 3, optionText: 'const combined = array1 + array2'},
            ],
            rightAnswerId: 1,
        },
        {
            id: 17,
            questionText: 'React может отображать элементы только в корневом элементе документа.',
            optionToAnswer: [
                {id: 0, optionText: 'True'},
                {id: 1, optionText: 'False'},
            ],
            rightAnswerId: 1,
        },
        {
            id: 18,
            questionText: 'Каков правильный синтаксис для импорта компонента из React?',
            optionToAnswer: [
                {id: 0, optionText: 'import { Component} from "react"'},
                {id: 1, optionText: 'import [ Component ] from "react"'},
                {id: 2, optionText: 'import Component from "react"'},
                {id: 3, optionText: 'import React.Component from "react"'},
            ],
            rightAnswerId: 0,
        },
        {
            id: 19,
            questionText: 'Найдите ошибку в этом коде:\n' +
                '\n' +
                'function car({make, model}) {\n' +
                '  return <h1>{make} {model}</h1>;\n' +
                '};',
            optionToAnswer: [
                {id: 0, optionText: 'True'},
                {id: 1, optionText: 'Удалите оператор return'},
                {id: 2, optionText: 'Оберните возврат во фрагмент'},
                {id: 3, optionText: 'Добавьте круглые скобки вокруг возвращаемого значения'}
            ],
            rightAnswerId: 0,
        },
        {
            id: 20,
            questionText: 'React разделяет пользовательский интерфейс на компоненты. Как компоненты объединяются для создания пользовательского интерфейса?',
            optionToAnswer: [
                {id: 0, optionText: 'С помощью Webpack'},
                {id: 1, optionText: 'Поместив их в структуру папок'},
                {id: 2, optionText: 'По вложенности компонентов'},
                {id: 3, optionText: 'С разделением кода'},
            ],
            rightAnswerId: 2,
        },
        {
            id: 21,
            questionText: 'Хотя хуки React обычно заменяют компоненты класса, удалять классы из React не планируется',
            optionToAnswer: [
                {id: 0, optionText: 'True'},
                {id: 1, optionText: 'False'},
            ],
            rightAnswerId: 1,
        },
        {
            id: 22,
            questionText: 'Что из следующего НЕ является правилом для реактивных перехватов?',
            optionToAnswer: [
                {id: 0, optionText: 'Хуки не могут быть условным'},
                {id: 1, optionText: 'Хуки могут вызываться только внутри компонентов функции React'},
                {id: 2, optionText: 'Хуки могуть вызываться в компонентах класс или функции'},
                {id: 3, optionText: 'Хуки могут вызываться только на верхнем уровне'},
            ],
            rightAnswerId: 2,
        },
        {
            id: 23,
            questionText: 'Для разработки и запуска кода React, Node.js требуется',
            optionToAnswer: [
                {id: 0, optionText: "{make: 'Food', model: 'Mustang'}"},
                {id: 1, optionText: "{car: 'Food', car: 'Mustang'}"},
                {id: 2, optionText: "{{make: 'Food', model: 'Mustang'}}"},
                {id: 3, optionText: "{car: {make: 'Food', model: 'Mustang'}"},
            ],
            rightAnswerId: 0,
        },
        {
            id: 24,
            questionText: 'Почему вы должны избегать копирования значений реквизитов в состояние компонента?',
            optionToAnswer: [
                {id: 0, optionText: 'Потому что это создал бы два экземпляра одного и того же состояния, которые могли бы рассинхронизироваться'},
                {id: 1, optionText: 'Потому что вы хотите разрешить передачу данных обратно к родительскому'},
                {id: 2, optionText: 'Потому что вы никогда не должны изменять состояние'},
                {id: 3, optionText: 'Поскольку значения prop не могут быть сохранены в состоянии '},
            ],
            rightAnswerId: 0,
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestionIndex].rightAnswerId) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Викторина завершена, отобразить результат
            alert(`Вы ответили правильно на ${score} из ${quizData.length} вопросов`);
        }
    };

    return (
        <div className='question-wrapper'>
            <h2>{quizData[currentQuestionIndex].questionText}</h2>
            <ul className='list-wrapper'>
                {quizData[currentQuestionIndex].optionToAnswer.map((option) => (
                    <li  className='option-wrapper' key={option.id} onClick={() => handleAnswer(option.id)}>
                        {option.optionText}
                    </li>
                ))}
            </ul>
        </div>
    );
};