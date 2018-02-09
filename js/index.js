var temp;
var celsius5;
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday", "Wednesday", "Thursday"];
$("#day").html(days[d.getDay()]);
$("#one").html(days[d.getDay()+1]);
$("#two").html(days[d.getDay()+2]);
$("#three").html(days[d.getDay()+3]);
$("#four").html(days[d.getDay()+4]);
$("#five").html(days[d.getDay()+5]);

var now = new Date;

Date.prototype.customFormat = function(formatString){
  var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
  YY = ((YYYY=this.getFullYear())+"").slice(-2);
  MM = (M=this.getMonth()+1)<10?('0'+M):M;
  MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
  DD = (D=this.getDate())<10?('0'+D):D;
  DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
  th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
  formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
  h=(hhh=this.getHours());
  if (h==0) h=24;
  if (h>12) h-=12;
  hh = h<10?('0'+h):h;
  hhhh = hhh<10?('0'+hhh):hhh;
  AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
  mm=(m=this.getMinutes())<10?('0'+m):m;
  ss=(s=this.getSeconds())<10?('0'+s):s;
  return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
};

$("#today").html(now.customFormat( "#DDDD# #MMMM# #M#, #YYYY#" ))


function fccApi(lat, lon){
  $.ajax({
    type:'GET',
    url: 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon,
    success: function(data){
      //console.log('success',data);
      temp = data
      $("#city").html(data.name);
      $("#description").html(data.weather[0].main);
      $("#degrees").html(celsiusToF(data.main.temp) + "&#8457");
      $("#maxmin").html(celsiusToF(data.main.temp_max) +"                "+ celsiusToF(data.main.temp_min));
      $("#icon").html("<img src=" +data.weather[0].icon+">");
      
    }
  })
};

function celsiusToF(celsius){
  return Math.round(celsius * 1.8 + 32)
};

function convertTempC(){
   $("#degrees").html(Math.round(temp.main.temp) + "&#8451");
  $("#maxmin").html(Math.round(temp.main.temp_max) +"                "+ Math.round(temp.main.temp_min));
  $("#onetemp").html(Math.round(celsius5.list[7].main.temp_max) +" "+ Math.round(celsius5.list[5].main.temp_min));
      $("#twotemp").html(Math.round(celsius5.list[15].main.temp_max) +" "+ Math.round(celsius5.list[13].main.temp_min));
      $("#threetemp").html(Math.round(celsius5.list[23].main.temp_max) +" "+ Math.round(celsius5.list[21].main.temp_min));
      $("#fourtemp").html(Math.round(celsius5.list[31].main.temp_max) +" "+ Math.round(celsius5.list[29].main.temp_min));
      $("#fivetemp").html(Math.round(celsius5.list[38].main.temp_max) +" "+ Math.round(celsius5.list[27].main.temp_min));
  $("#f").removeClass("active");
  $("#c").addClass("active");
  
}

function convertTempF(){
  $("#degrees").html(celsiusToF(temp.main.temp) + "&#8457");
  $("#maxmin").html(celsiusToF(temp.main.temp_max) +"                "+ celsiusToF(temp.main.temp_min));
  $("#onetemp").html(celsiusToF(celsius5.list[7].main.temp_max) +" "+ celsiusToF(celsius5.list[5].main.temp_min));
      $("#twotemp").html(celsiusToF(celsius5.list[15].main.temp_max) +" "+ celsiusToF(celsius5.list[13].main.temp_min));
      $("#threetemp").html(celsiusToF(celsius5.list[23].main.temp_max) +" "+ celsiusToF(celsius5.list[21].main.temp_min));
      $("#fourtemp").html(celsiusToF(celsius5.list[31].main.temp_max) +" "+ celsiusToF(celsius5.list[29].main.temp_min));
      $("#fivetemp").html(celsiusToF(celsius5.list[38].main.temp_max) +" "+ celsiusToF(celsius5.list[27].main.temp_min));
  $("#f").addClass("active");
  $("#c").removeClass("active");
  
}
function apiCall (lat, lon){

    $.ajax({
    type:'GET',
    url: 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric&APPID=906950328a1952c0e76cd482933f117d',
    success: function(data){
     console.log('success', data)
      celsius5 = data;
  $("#onetemp").html(celsiusToF(data.list[7].main.temp_max) +" "+ celsiusToF(data.list[5].main.temp_min));
      $("#twotemp").html(celsiusToF(data.list[15].main.temp_max) +" "+ celsiusToF(data.list[13].main.temp_min));
      $("#threetemp").html(celsiusToF(data.list[23].main.temp_max) +" "+ celsiusToF(data.list[21].main.temp_min));
      $("#fourtemp").html(celsiusToF(data.list[31].main.temp_max) +" "+ celsiusToF(data.list[29].main.temp_min));
      $("#fivetemp").html(celsiusToF(data.list[38].main.temp_max) +" "+ celsiusToF(data.list[27].main.temp_min));
      $("#description").html(data.weather[0].main);
      
    }
  })
}

function getGeo(){
  if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(function(position) {
      return apiCall(position.coords.latitude, position.coords.longitude), fccApi(position.coords.latitude, position.coords.longitude);
  });
}
};
getGeo();