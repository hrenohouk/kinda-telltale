export default {
    name: 'Screen2',
    type: 'storyScreen',
    image: 'img_5.jpg',
    text: 'Забрав тебя и пару учёных с собой работорговцы  заковали вас  и повезли на черный рынок . Выгрузив всех рабов вас начинают оценивать ваше здоровье ',
    options: [
        {
            text: 'Притворится больным ',
            goTo: 'Screen2.1'
        },
        {
            text: 'лучше не рисковать',
            goTo: 'Screen3'
        }
    ]
};
