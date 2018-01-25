export default class personalStatusDataProvider{
    constructor(){

    }
    getCategory(){

    }
    createCategory(){
        let result=[];
        for(let i=1;i<8;i++){
            result.push(
                {
                    id:i,
                    name:'游戏',
                }
            );
        }
    }
}