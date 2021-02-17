export default {
    name: 'Screen4_int',
    type: 'interactiveScreen',
    image: 'img_int1.jpg',
    text: 'Сделай что нибудь',
    timerFailedScreen: 'Screen4_3',
    options: [
        {
            top: 36,
            left: 71,
            width: 7,
            height: 7,
            goTo: 'Screen5'
        },
        {
            top: 9,
            left: 48,
            width: 7,
            height: 7,
            goTo: 'Screen4_1'
        },
        {
            top: 74,
            left: 77,
            width: 7,
            height: 7,
            goTo: 'Screen4_2'
        }
    ]
};
