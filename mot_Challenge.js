const book = {
    title : 'Managing Oneself',
    description : 'A PDF file',
    numberOfPage : 64,
    author : 'Peter F. Drucker',
    reading : true,
    toggleReadingStatus : function(){
        if(book.reading===true){
            book.reading = false
        }else {
            book.reading = true
        }
    }
}


book.toggleReadingStatus()
console.log(book.reading)




const  books = [
    {
title: 'Two to tango',
 description: 'blue-covered',
  numberofpages: 254,
   author: 'Craig mill',
    reading: true
},
 {
    title: 'the successor',
  description: 'greyandblack-covered',
   numberofpages: 350,
    author: 'Jerry Agada',
     reading: true
    }, 
 {
    title: 'Fundamental physics',
  description: 'multicolour-covered',
   numberofpages: 2051,
    author: 'Halliday and Resnick',
     reading: true
    },
  {
    title: 'Engineering maths',
   description: 'wine-covered',
    numberofpages: 2180,
     author: 'H K Dass',
      reading: false
    },
   {
    title: 'structural design', 
   description: 'green-covered', 
   numberofpages: 2254,
    author: 'Ashok gupta', 
    reading: false
}, 
   {
    title: 'Algorithm maths',
    description: 'pink-covered', 
    numberofpages: 1540,
     author: 'Henderson paul',
      reading: true
    }];

for (let i = 0; i < books.length; i++) {
  if(books[i].reading){
console.log(books[i])
  } 
  
}