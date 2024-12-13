async function getData() {
    const URL = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";
    const response = await fetch(URL); 
    console.log(response.ok);
    console.log(response.status);
    


    const data = await response.json();
    
    console.log(data);
    //data.results.forEach(element => {
     //   console.log(element); 
   
   // });
   const tableBody = document.querySelector("#dataTable tbody");
   // insert the data in the table body
   data.results.forEach((element) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${element.year}</td>
      <td>${element.semester}</td>
      <td>${element.the_programs}</td>
      <td>${element.nationality}</td>
      <td>${element.colleges}</td>
      <td>${element.number_of_students}</td>
    `;
    tableBody.appendChild(row); //appends each row to the table body
  });




}

getData();
