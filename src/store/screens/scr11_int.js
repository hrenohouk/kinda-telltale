export default {
    name: 'Screen11_int',
    type: 'interactiveScreen',
    image: 'img_int2.jpg',
    text: 'Нажимай на кнопки',
    timerFailedScreen: 'Screen11_1',
    options: [
        {
            top: 73,
            left: 55,
            width: 4,
            height: 3,
            goTo: 'Screen11_2'
        },
        {
            top: 79,
            left: 44,
            width: 2,
            height: 3,
            goTo: 'Screen11_3'
        },
        {
            top: 56,
            left: 30,
            width: 5,
            height: 3,
            goTo: 'Screen11_4'
        }
    ]
};
