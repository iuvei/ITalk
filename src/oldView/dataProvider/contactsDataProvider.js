export default class ContactsDataProvider {
    constructor() {
        this.contactsDIC = {};

    }
    getAllCategory() {
        return [
            { code: '1', name: '朋友' },
            { code: '2', name: '家人' },
            { code: '3', name: '同学' },
            { code: '4', name: '同事' },
            { code: '5', name: '爱人' }
        ]
    }
    getList(groupId) {
        if (this.contactsDIC[groupId] == undefined) {
            return new Promise((reslove, reject) => {
                this.contactsDIC[groupId] = this.createData();
                return reslove(this.contactsDIC[groupId]);
            })
        } else {
            return new Promise((reslove, reject) => {
                return reslove(this.contactsDIC[groupId]);
            })
        }

    }
    //---------------
    createCategroy() {
        let result = [];
        for (let i = 0; i < 6; i++) {
            result.push(
                {
                    id: i,
                    name: '朋友'
                }
            );
        }
    }
    createData() {
        let result = [
            {
                key:'1',
                header: require('../images/b8.jpg'),
                name: '昵称1',
                description: '一段描述1',
                isOnline: '在线',
                group: 'family',
                hide:true,

            },
            {
                key:'2',
                header: require('../images/b8.jpg'),
                name: '昵称2',
                description: '一段描述2',
                isOnline: '在线',
                group: 'work',
                hide:false,

            }
        ];
        /*
        for (let i = 1; i < 6; i++) {
            result.push(
                {
                    key: String(i+1),
                    header: require('../images/b8.jpg'),
                    name: '昵称' + i,
                    description: '一段描述' + i,
                    isOnline: (i % 2 == 0) == true ? '在线' : '离线',
                    group: (i % 2 == 0) == true ?'family':'work',

                }
            );
        }*/
        return result;
    }
}