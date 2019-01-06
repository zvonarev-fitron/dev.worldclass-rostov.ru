import axios from 'axios';

export const Tables = {
    namespaced: true,
    state: {
        users: {
            selectRowId: 0,
            selectFieldFilterObj: {},
            props: [
                {code: 'id', title: 'Ид', type: 'int', visible: true, sort: false},
                {code: 'login', title: 'Логин', type: 'str', visible: true, sort: false},
                {code: 'phone', title: 'Телефон', type: 'phone', visible: true, sort: false},
                {code: 'email', title: 'Почта', type: 'email', visible: true, sort: false},
                {code: 'lastname', title: 'Фамилия', type: 'str', visible: true, sort: false},
                {code: 'name', title: 'Имя', type: 'str', visible: true, sort: false},
                {code: 'surname', title: 'Отчество', type: 'str', visible: true, sort: false},
                {code: 'active', title: 'Статус', type: 'bool', visible: true, sort: false},
                {code: 'create_at', title: 'Создан', type: 'date', visible: false, sort: false},
                {code: 'updated_at', title: 'Изменен', type: 'date', visible: false, sort: false},
            ],
            search: null,
            listCount: [
                { count: 10, active: false },
                { count: 15, active: false },
                { count: 20, active: false },
                { count: 25, active: false },
                { count: 30, active: true },
                { count: 35, active: false },
                { count: 40, active: false },
                { count: 45, active: false },
                { count: 50, active: false }
            ],
            items: [],
        },

        roles: {
            selectRowId: 0,
            selectFieldFilterObj: {},
            props: [
                {code: 'id', title: 'Идентификатор', type: 'int', visible: true, sort: false},
                {code: 'name', title: 'Имя', type: 'str', visible: true, sort: false},
                {code: 'active', title: 'Статус', type: 'bool', visible: true, sort: false},
                {code: 'create_at', title: 'Создан', type: 'date', visible: true, sort: false}
            ],
            search: null,
            listCount: [
                { count: 10, active: false },
                { count: 15, active: false },
                { count: 20, active: false },
                { count: 25, active: false },
                { count: 30, active: true },
                { count: 35, active: false },
                { count: 40, active: false },
                { count: 45, active: false },
                { count: 50, active: false }
            ],
            items: [],
        },


        columns: {
            selectRowId: 0,
            selectFieldFilterObj: {},
            props: [
                {code: 'id', title: 'Идентификатор', type: 'int', visible: true, sort: false},
                {code: 'name', title: 'Имя', type: 'str', visible: true, sort: false},
                {code: 'phone', title: 'Телефон', type: 'phone', visible: true, sort: false},
                {code: 'email', title: 'Почта', type: 'email', visible: true, sort: false},
                {code: 'active', title: 'Статус', type: 'bool', visible: true, sort: false},
                {code: 'create_at', title: 'Создан', type: 'date', visible: true, sort: false}
            ],
            search: null,
            listCount: [
                { count: 10, active: false },
                { count: 15, active: false },
                { count: 20, active: false },
                { count: 25, active: false },
                { count: 30, active: true },
                { count: 35, active: false },
                { count: 40, active: false },
                { count: 45, active: false },
                { count: 50, active: false }
            ],
            items: [
                // { id: '1', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '2', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '3', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '4', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '5', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '6', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '7', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '8', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '9', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '10', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '11', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '12', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '13', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '14', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '15', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '16', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '17', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '18', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '19', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '20', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '21', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '22', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '23', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '24', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' },
                // { id: '25', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: true, create_at: '02-11-2018' }
            ],
        },


        debug: false,
    },
    getters: {
        getUsers: (state) => { return state.users; },
        getRoles: (state) => { return state.roles; }
    },
    actions: {
        readUsers: async ({ state, commit }) => {
            let count = 0;
            let table = state.users;
            for(let i = 0; i < table.listCount.length; i++)
                count = table.listCount[i].active ? table.listCount[i].count : count;
            let send = {
                fieldsearch: table.selectFieldFilterObj.code,
                search: table.search,
                count: count,
            };

            // console.log(send);
            // return;

            let data =  await axios.post('/admin/users', send);
            if(200 == data.status) commit('setUsers', data.data);
            else console.log('Статус - ' + data.status);
        },
        readRoles: async ({ state, commit }) => {
            let count = 0;
            let table = state.roles;
            for(let i = 0; i < table.listCount.length; i++)
                count = table.listCount[i].active ? table.listCount[i].count : count;
            let send = {
                fieldsearch: table.selectFieldFilterObj.code,
                search: table.search,
                count: count,
            };
            let data =  await axios.post('/admin/roles', send);
            if(200 == data.status) commit('setRoles', data.data);
            else console.log('Статус - ' + data.status);
        },
    },
    mutations: {
        setSortUsers: (state, obj) => { state.users.selectFieldFilterObj = obj; },
        setUsers: (state, data) => {
            let p = [];
            for(let i = 0; i < data.length; i++){
                p[i] = {};
                for(let j = 0; j < state.users.props.length; j++){
                    p[i][state.users.props[j].code] = data[i][state.users.props[j].code];
                }
            }
            state.users.items = p;
        },
        setSortRoles: (state, obj) => { state.roles.selectFieldFilterObj = obj; },
        setRoles: (state, data) => { state.roles.items = data; },
    }
};
