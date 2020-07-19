import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

class PubSub {
    constructor() {
        this.pubnub = new PubNub(pubnubConfig);

        this.pubnub.subscribe ({ channels: [MESSAGE_CHANNEL] });
    }

    addListener = listenerConfig => {
        this.pubnub.addListener(listenerConfig);
    }
}

pubnub.addListener ({
  message: messageObject => {
      console.log('messageObject', messageObject);
  }
});

setTimeout(() => {
    pubnub.publish({
        message: 'foo',
        channel: MESSAGE_CHANNEL
     });
}, 1000);




