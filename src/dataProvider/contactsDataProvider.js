export default class ContactsDataProvider {
    constructor() {
        this.contactsDIC = {};

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
    createData() {
        let result = [];
        for (let i = 0; i < 20; i++) {
            result.push(
                { header:  require('../images/b8.jpg'), 
                name: '昵称' + i, description: '描述' + i, 
                isOnline: (i / 2 == 0) == true ? '在线' : '离线' }
            );
        }
        return result;
    }
}