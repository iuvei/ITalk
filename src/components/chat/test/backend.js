import firebase from 'firebase';

export default class Backend{
    uid='';
    messagesRef=null;
    constructor(){
        firebase.initializeApp({
            apiKey:'',
            authDomain:'',
            databaseURL:'',
            storageBucket:'',
        });
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setUid(user.uid);
            }else{
                firebase.auth().signInAnonymously().catch((error)=>{
                    alert(error.message);
                })
            }
        })
    }

    setUid(value){this.uid=value}

    getUid(){return this.uid}

    loadMessage(callback){
        this.messagesRef=firebase.database().ref('message');
        this.messagesRef.off();
        const onReceive=(data)=>{
            const message=data.val();
            callback({
                _id:data.key,
                text:message.text,
                createAt:new Date(message.createAt),
                user:{
                    id:message.user.id,
                    name:message.user.name,
                },
            });
        };
        this.messagesRef.limitToLast(20).on('child_added',onReceive);
    }

    sendMessage(message){
        for(let i=0;i<message.length;i++){
            this.messagesRef.push(
                {
                    text:message[i].text,
                    user:message[i].user,
                    createAt:firebase.database.ServerValue.TIMESTAMP,
                }
            );
        }
    }

    closeChat(){
        if(this.messagesRef){
            this.messagesRef.off();
        }
    }
}