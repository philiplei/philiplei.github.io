$.get('/searchTodo?before=2016-10-10', (data, textstatus) => {
  console.dir(data); console.log('ok'); console.dir(textstatus);
}).fail( (jqXHR, textStatus, errorThrown) => {
  console.dir(textStatus); console.log('error');
  console.dir(errorThrown);
})


$.get('/searchTodo', { before: '2016-10-10' },
  (data) => {
    console.log('json data in response: ');
    console.dir(data);
}).fail( (jqXHR, textStatus, errorThrown) => {
  console.log('error');
  console.dir(jqXHR);
  console.dir(textStatus);
  console.dir(errorThrown);
})


$.post('/updateTodo',
  { xxid: 3, what: 'Woow!' },
  (data) => {
    console.log('success');  // data is undefined for 204 responses
  }
).fail( (jqXHR) => {
  console.log('error');
  console.log(jqXHR.status);
  console.log(jqXHR.statusText);
})
