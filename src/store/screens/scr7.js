export default {
    name: 'Screen7',
    type: 'storyScreen',
    image: 'img_8.jpg',
    text: 'Купив потрёпанный корабль класса "Соколо" тебе нужно нанять команду',
    options: [
        {
            text: 'Нанять дорогую команду',
            goTo: 'Screen8'
        },
        {
            text: 'Нанять более дешевую команду',
            goTo: 'Screen7_1'
        }
    ]
};
