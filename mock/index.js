const appData = {
    appQuote: 'Find the best music for your code',
    homeScreen: {
        commercial: {
            label: 'Commercial',
            id: '#commercial',
            isActive: true,
            items: [
                {
                    label: 'POP',
                    key: 'pop',
                    bgImage: ''
                },
                {
                    label: 'Urban',
                    key: 'urban',
                    bgImage: ''
                },
                {
                    label: 'World',
                    key: 'world',
                    bgImage: ''
                },
                {
                    label: 'Others',
                    key: 'others',
                    bgImage: ''
                },
                {
                    label: 'Cloud Rap',
                    bgImage: ''
                },
                {
                    label: 'Groove',
                    key: 'groove',
                    bgImage: ''
                },
                {
                    label: 'Electronica',
                    key: 'electronica',
                    bgImage: ''
                }
            ]
        },
        freelicense: {
            label: 'Free License',
            id: '#free-license',
            isActive: false,
            items: [
                {
                    label: 'Rock',
                    key: 'rock',
                    bgImage: ''
                },
                {
                    label: 'Jazz',
                    key: 'jazz',
                    bgImage: ''
                },
                {
                    label: 'Cinematic',
                    bgImage: '',
                    key: 'cinematic'
                },
                {
                    label: 'Accoustic',
                    key: 'accoustic',
                    bgImage: ''
                }
            ]
        }
    }
}

module.exports = {
    appData
}