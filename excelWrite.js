// Requiring module 
const reader = require('xlsx') 
  
// Reading our test file 
const file = reader.readFile('./temp.xlsx') 
  
// Sample data set 
let student_data = [{ 
    Name:'Soham', 
    Age:22, 
    Branch:'CSE', 
    Marks: 70 
}, 
{ 
    Name:'Ivy', 
    Age:21, 
    Branch:'ECE', 
    Marks:80 
}] 
  
const ws = reader.utils.json_to_sheet(student_data) 
  
reader.utils.book_append_sheet(file,ws,"Sheet2") 
  
// Writing to our file 
reader.writeFile(file,'./temp.xlsx') 