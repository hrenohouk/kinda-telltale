export default {
    name: 'testScreen1',
    type: 'storyScreen',
    image: 'img_1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada aliquam nibh et elementum. Nam sed cursus tortor, sit amet finibus neque. Proin tempor gravida magna, nec malesuada leo rhoncus eu. Sed fringilla odio et quam commodo, vel ultricies nisl mattis. Nunc at convallis tortor. Nullam ipsum lorem, porttitor et dapibus non, efficitur et odio. Etiam ultricies, tellus in pellentesque aliquet, ante elit elementum ante, eu lobortis mauris felis in libero. Nulla nec dui vestibulum ex finibus rhoncus vel scelerisque nisi. Phasellus et maximus nibh. Donec sed lectus arcu. Cras ipsum ligula, scelerisque quis varius eu, lacinia ultrices metus.',
    options: [
        {
            text: 'Огромный заголовок варинта с нормальным переходом',
            goTo: 'testScreen2'
        },
        {
            text: 'Огромный заголовок варинта с херней',
            goTo: ''
        },
        {
            text: 'Выбор 3',
            goTo: ''
        }
    ]
};
