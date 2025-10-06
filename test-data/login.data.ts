export const loginData = {
    validCredentials:[
        {
            userName: 'Admin',
            password: 'admin123'
        },
        {
            userName: 'admin',
            password: 'admin123'
        },
        {
            userName: 'Admin  ',
            password: 'admin123'
        },
    ],
    invalidCredentials:[
        {
            userName: 'Admin',
            password: 'abcd'
        },
        {
            userName: 'abcd',
            password: 'admin123'
        },
        {
            userName: 'abcd',
            password: 'abcd'
        },
        {
            userName: '!@#$%^&*()',
            password: '!@#$%^&*()'
        },
        {
            userName: '  Admin',
            password: 'admin123'
        },
        {
            userName: '   Admin  ',
            password: 'admin123'
        }
    ]
    
}
    