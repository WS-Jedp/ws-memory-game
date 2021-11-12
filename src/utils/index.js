export const Images = [
    {
        id: 1,
        url: '/img/memo-01.jpg'
    },
    {
        id: 2,
        url: '/img/memo-02.jpg'
    },
    {
        id: 3,
        url: '/img/memo-03.jpg'
    },
    {
        id: 4,
        url: '/img/memo-04.jpg'
    },
    {
        id: 5,
        url: '/img/memo-05.jpg'
    },
    {
        id: 6,
        url: '/img/memo-06.jpg'
    },
    {
        id: 7,
        url: '/img/memo-07.jpg'
    },
    {
        id: 8,
        url: '/img/memo-08.jpg'
    },
    {
        id: 9,
        url: '/img/memo-09.jpg'
    },
    {
        id: 10,
        url: '/img/memo-10.jpg'
    },
]

export const DoubleImages = [...Images, ...Images]

export const ShuffleArray = array => {
    let currentIndex = array.length, randomIndex

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}