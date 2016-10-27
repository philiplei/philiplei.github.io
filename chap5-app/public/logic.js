// logic.js

function addTodoAction() {
  var query = {
    due: $('#addform input[name=due]').val(),
    what: $('#addform input[name=what]').val(),
    category: $('#addform input[name=category]').val(),
    done: $('#addform input[name=done]').val()
  };
  $.post('/addTodo', query, (data) => {
    // insert successful, go to refresh the task table
    $.magnificPopup.close();
    refreshTable();
  });
}

function delTodoAction () {
  var query = { id: $(this).data('id_Todo') };
  //alert('To delete ' + query);
  $.post('/deleteTodo', query, (data) => {
    // delete successful, go to refresh the task table
    refreshTable();
  });
}

function updateTodoAction () {
  var query = { id: $(this).data('id_Todo') };
  var row = $(this).parent().parent();
  row.find('td').slice(0,4).attr('contenteditable', 'true').addClass('editing');
  row.find('td').eq(0).focus();

  var thisButton = $(this);
  setTimeout( () => {
    thisButton.unbind('click', updateTodoAction);
    thisButton.text('save').bind('click', saveUpdateTodoAction);
    // disable the 'delete' button
    thisButton.next().prop('disabled', true);
  }, 0);
}

function saveUpdateTodoAction () {
  var row = $(this).parent().parent();
  var thisButton = $(this);
  setTimeout( () => {
    thisButton.unbind('click', saveUpdateTodoAction);
    thisButton.text('update').bind('click', updateTodoAction);
    thisButton.next().prop('disabled', false);
  }, 0);
  row.find('td').slice(0,4).attr('contenteditable', 'false').removeClass('editing');

  var query = { id: $(this).data('id_Todo') };
  query.due = row.children().eq(0).text();
  query.what = row.children().eq(1).text();
  query.category = row.children().eq(2).text();
  query.done = row.children().eq(3).text();
  $.post('/updateTodo', query, (data) => {
    // update successful, go to refresh the task table
    refreshTable();
  });
}

function fillTodoTable (tasks) {
  var tbody = $('table#todo tbody');
  tbody.empty();
  for (atask of tasks) {
    var row = '<tr><td>'+atask.due+'</td>';
    row += '<td>'+atask.what+'</td>';
    row += '<td>'+atask.category+'</td>';
    row += '<td>'+atask.done+'</td>';
    row += '</tr>';
    var r = $(row);
    var aUpdate = $('<button type=button>edit</button>');
    aUpdate.data('id_Todo', atask.id);
    aUpdate.on('click', updateTodoAction);
    var aDel = $('<button type=button>delete</button>');
    aDel.data('id_Todo', atask.id);
    aDel.on('click', delTodoAction);
    $('<td>').append(aUpdate).append(aDel).appendTo(r);
    tbody.append(r);
  }
}

function refreshTable() {
  $.get('/getTodo', (data) => {
    //console.dir(data);
    fillTodoTable(data.task);
  });
}

refreshTable();

$('#btn1').on('click', (e) => {
  addTodoAction();
});

$('#btn2').on('click', (e) => {
  refreshTable();
});

$('.popup-link').magnificPopup({
   type:'inline', showCloseBtn: true, enableEscapeKey: true
});
