const state = {
    tasks: {
        'ID1': {
            name: 'Go to shop',
            completed: false,
            dueDate: '10/03/1999',
            dueTime: '18:30'
        },
        'ID2': {
            name: 'Get pananas',
            completed: false,
            dueDate: '20/10/2004',
            dueTime: '02:20'
        },
        'ID3': {
            name: 'Get apples',
            completed: false,
            dueDate: '12/12/2002',
            dueTime: '12:00'
        }
    }
}

const mutations = {
    
}

const actions = {
    
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}