import NetworkNode from 'events';

const anotherNetworkNode = new NetworkNode();


class Network {

    constructor(source) {
        source.on('send', this.handle);
    }

    // request(data) {
    //     return {response: 'foo'};
    // }

    handle(data) {

        // wait for response
        anotherNetworkNode.on('networkResponse', (response) => {
            console.log(`[net-recv] ${response}`);
        });

        // send to network
        anotherNetworkNode.emit('networkRequest', data);
        console.log(`[net-send] ${data}`);
    }

}

export default Network;