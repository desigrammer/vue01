var Vue = require('vue');
var VueResource = require('vue-resource');
Vue.use(VueResource);

cbFunc = function(jsonData){
    vm.address = jsonData.results[0].address1 + jsonData.results[0].address2 + jsonData.results[0].address3;
};

var vm = new Vue({
    el: '#app',
    data: {
        zipcode: "2700116",
        address: "千葉県"
    },
    methods: {
        sendQuery: function(e) {
            var options = {
                jsonp: 'cbFunc'
            }           
            this.$http.jsonp(
                'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + this.zipcode + '&callback=cbFunc',
                options
            ).then(function(data){
                // console.log(response.json());
            }, function(error) {
                console.log(error);
            });
        }
    }
});
