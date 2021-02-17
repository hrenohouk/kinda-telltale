export default {
    name: 'testScreen2',
    type: 'interactiveScreen',
    image: 'img_2.jpg',
    text: 'Описание задания',
    timerFailedScreen: 'testScreen1',
    options: [
        {
            top: 38,
            left: 82,
            width: 7,
            height: 7,
            goTo: 'testScreen1'
        },
        {
            top: 38,
            left: 17,
            width: 7,
            height: 7,
            goTo: ''
        },
        {
            top: 77,
            left: 46,
            width: 7,
            height: 7,
            goTo: ''
        }
    ]
};
