
require('./bootstrap');

window.Vue = require('vue');

import { CometChat } from "@cometchat-pro/chat/CometChat";


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login-component', require('./views/Login.vue').default);
Vue.component('register-component', require('./views/Register.vue').default);
Vue.component('chat-component', require('./views/Chat.vue').default);


let cometChatAppSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(process.env.MIX_COMMETCHAT_APP_REGION)
    .build();

CometChat.init(process.env.MIX_COMMETCHAT_APP_ID, cometChatAppSetting).then(
    () => {
        console.log("Initialization completed successfully");

        const app = new Vue({
            el: '#app',
        });
    },
    (error) => {
        console.log("Initialization failed with error:", error);
    }
);
