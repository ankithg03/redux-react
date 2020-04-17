import React from 'react'


const QUERY_SR = `
query{
  FilteredPlayerCollection(
    filter:
    {
      id:{
        lt:"20"
      }
      name:{
         in:["Ankith","Arijit P"]
      }
      
    }
  ) {
      players
      {
        id
        name
        email
        role	
      }  
    }
  }
`;
fetch('http://127.0.0.1:8000/graphql', 
    {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' ,
        'Access-Control-Allow-Credentials': 'true'
    },
        body: QUERY_SR,
        
    })
    .then(res => res.json())
    .then(res => console.log(res.data))
const MyCompo = () => (
   
<div>
{
    
}
</div>  
);
  export default MyCompo;