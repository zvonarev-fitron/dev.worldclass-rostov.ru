export const UserTable = {
    namespaced: true,
    state: {
        columns: {
            props: [
                {code: 'id', title: 'Идентификатор', type: 'int', visible: true, sort: null},
                {code: 'name', title: 'Имя', type: 'str', visible: true, sort: null},
                {code: 'phone', title: 'Телефон', type: 'phone', visible: true, sort: null},
                {code: 'email', title: 'Почта', type: 'email', visible: true, sort: null},
                {code: 'active', title: 'Статус', type: 'bool', visible: true, sort: null},
                {code: 'create_at', title: 'Создан', type: 'date', visible: true, sort: null}
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
            ]
        }
    },
    mutations: {
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
