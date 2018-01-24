//import {} from ''

export default class NewsDataProvider {
    constructor() {

    }
    getList() {
        let result = this.createNewsList();
        return new Promise((reslove,reject)=>{
            reslove(result);
        })

    }
    createNewsList() {
        let result = [];
        for (let i = 0; i < 15; i++) {
            result.push({ name: '用户名' + i, header:  require('../assets/images/b1.jpg'), content: '内容简介' + i });
        }
        return result;
    }
}