export const searchData = [
    {
        searchText: 'Admin',
        expectedCount: 1
    },
    {
        searchText: 'admin',
        expectedCount: 1
    },
    {
        searchText: 'Recruitment',
        expectedCount: 1
    },
    {
        searchText: 'My',
        expectedCount: 1
    },
    {
        searchText: 'an',
        expectedCount: 2
    },
    {
        searchText: 'a',
        expectedCount: 6
    },
    {
        searchText: ' ',
        expectedCount: 1
    },
    {
        searchText: 'w',
        expectedCount: 0
    },
    {
        searchText: 'Apple',
        expectedCount: 0
    },
    {
        searchText: '!@#$%^&*',
        expectedCount: 0
    },
    {
        searchText: '   ',
        expectedCount: 0
    },
    {
        searchText: 'Admin ',
        expectedCount: 0
    }
]