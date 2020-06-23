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

        channel.sendToQueue(Queue, Buffer.from('Hey, this is rabbitmq test project'));
        console.log(`Message is sent ${Queue}`);

    })
})