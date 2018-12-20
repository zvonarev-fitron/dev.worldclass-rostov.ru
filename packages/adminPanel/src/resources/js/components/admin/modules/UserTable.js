import axios from 'axios';

export const UserTable = {
    namespaced: true,
    state: {
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
                { id: '1', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '2', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '3', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '4', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '5', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '6', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '7', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '8', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '9', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '10', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '11', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '12', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '13', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '14', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '15', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '16', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '17', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '18', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '19', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '20', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '21', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '22', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '23', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '24', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' },
                { id: '25', name: 'Алексей', phone: '79525848858', email: 'zvon.lexa@yandex.ru', active: 'true', create_at: '02-11-2018' }
            ],
        },
        debug: false,
    },
    mutations: {
        setSort: (state, obj) => { state.columns.selectFieldFilterObj = obj; },
        read: (state) => {
            let count = 0;
            for(let i = 0; i < state.columns.listCount.length; i++)
                count = state.columns.listCount[i].active ? state.columns.listCount[i].count : count;

//            state.debug = 'search = ' + state.columns.search + ', count = ' + count;

            let send = {
                fieldsearch: state.columns.selectFieldFilterObj.code,
                search: state.columns.search,
                count: count,
            };
            axios.post('/admin/users', send)
                .then(responce => {
                    state.columns.items = responce.data;
//                    state.debug = responce.data;
                })
                .catch(e => {
                    state.debug = e;
                })
        },

        // columnVisibilite: (key, state) => {
        //     state.columns.props[key].visible = !state.columns.props[key].visible;
        // },
        showColumn: (state, code) => {
            for(let prop of state.columns.props){
                if(code == prop.code){

                    console.log(code + ' -- ' + prop.visible);

                    return 'qawsedrf';  //prop.visible;
                }
            }
        },
        textAlign(state, code) {
            let r = 'center';
            for(let prop of state.columns.props){
                if(code == prop.code) {
                    if('phone' == prop.type) {
                        r = 'right';
                        break;
                    }
                    if('str' == prop.type){
                        r = 'center';
                        break;
                    }
                    if('int' == prop.type){
                        r = 'left';
                        break;
                    }
                }
            }
            return 'text-align: ' + r + ';';
        }
    }
};
