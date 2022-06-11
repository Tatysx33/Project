new Vue({
el: '#app',
data: {
  saludar: 'Hello student! welcome back!',
}
});


new Vue({
el: '#app2',
data: {
  type: 'only numbers are allow in this space',
  num:'',

  //active: true
},
methods:{
  accept: function(){
    console.log(this.num);
  }
}

});
