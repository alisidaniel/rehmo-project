const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (connError, connection) => {
    if(connError){
        throw connError
    }

    //Create channel
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError
        }
        //Assert queue
        const Queue = 'Danikeys';
        channel.assertQueue(Queue);

        //Receiver message 
        channel.consume(Queue, (msg) => {
            console.log(`Message received ${msg.content}`);
        })

    },{
        noAck:true
    })
})