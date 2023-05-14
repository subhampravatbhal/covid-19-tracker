// $('.get_data').on('click',function(){
//       console.log("Inside get");
//  //it also manegeble
//       $.ajax({
//         type: 'GET',
//         url: 'https://corona.lmao.ninja/v2/countries/India',//this type also manageble
//         data: {},
//         sucess: function(data){
//           console.log("data",data)
          
//           $(data).each(function(key,val){
//             console.log("data",key,val);
//             $('.mytable').append('<li>'+val.country+'</li>')
//           })
//     }
//   })
// })



$(document).ready(function(){
           
           $.ajax({
               type: 'GET',
               url:'https://covid-india-cases.herokuapp.com/states/',
               success: function(data){
               console.log('covid data',data)
             $(data).each( function(i,item){
                $('#state').append('<option>'+item.state+'</option>')
                
                console.log(data[25].state,data[25].active,data[25].deaths,data[25].noOfCases,data[25].cured);
              
                });
          



            // `<option>${item.state}</option>`
            


        //             
        //              $('.cases').append('<li>'+data.cases+'</li>')
        //              $('.deaths').append('<li>'+data.deaths+'</li>')
        //              $('.todayCases').append('<li>'+data.todayCases+'</li>')
        //              $('.todayDeaths').append('<li>'+data.todayDeaths+'</li>')
        //              $('.active').append('<li>'+data.active+'</li>')
            
        
                }
          });
        
       });

    // async function getcoviddata(){
    //   const jsondata = await fetch('https://covid-india-cases.herokuapp.com/states/');
   
    //   const data = await jsondata.json();
      
    // }
    // getcoviddata()
