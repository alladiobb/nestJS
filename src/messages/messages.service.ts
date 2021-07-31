import { Injectable } from '@nestjs/common';
import { Message } from './message';

@Injectable()
export class MessagesService {
    //Simulando uma tabela
    public messages: Message[] = [
        {
            id: 1,
            text: 'Mensagem 1'
        },
        {
            id: 2,
            text: 'Mensagem 2'
        }
    ];
    //Simuando um consulta no DB
    findAll(){
        return this.messages;
    }

    findById(id:number){
        return this.messages.find( (message) => message.id ===id);

    }

    create(message: Message ){
        return this.messages.push(message);
    }

    update(id:number, message: Message){
        const index = this.messages.findIndex((message) => message.id ===id);
        this.messages[index]=message;
        return message;
    }
}
