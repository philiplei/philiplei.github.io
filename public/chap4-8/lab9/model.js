// model.js - a very simple db module for lab4. save data in memory.

var todoDB = {
    nextid: 8,
    total: 7,
    todos: [
        { id: 1, due: '2014-05-01', task: 'COMP312 Test 1', category: 'study', priority: 3 },
        { id: 2, due: '2014-05-02', task: 'Project presentation', category: 'study', priority: 3 },
        { id: 3, due: '2014-05-04', task: 'Buy bday gift', category: 'home', priority: 1 },
        { id: 4, due: '2014-05-06', task: 'Mary\'s birthday', category: 'home', priority: 2 },
        { id: 5, due: '2014-05-08', task: 'COMP312 HW 2', category: 'study', priority: 2 },
        { id: 6, due: '2014-05-20', task: 'HK trip', category: 'home', priority: 1 },
        { id: 7, due: '2014-06-01', task: 'COMP312 Test 2', category: 'study', priority: 4 }    
    ]
};

function addEvent(obj, callback) {
  obj.id = todoDB.nextid;
  todoDB.nextid++;
  todoDB.todos.push(obj);
  callback(null, {insertId: obj.id});
}

function searchEvent(id, callback) {
  for (var i=0; i<todoDB.todos.length; i++) {
     // the condition relies on automatic type conversion..
     if (todoDB.todos[i].id==id) 
       return callback(null, todoDB.todos[i]);
  }
  return callback(null, []);
}

function getEvents(options, callback) {
  var events = todoDB.todos;
  var re = /^\d\d\d\d-\d\d-\d\d$/;
  if (re.test(options.start)) {
    events = events.filter(function(x) { return (x.due>=options.start); });
  }
  if (re.test(options.end)) {
    events = events.filter(function(x) { return (x.due<=options.end); });
  }
  return callback(null, { count: todoDB.total, data: events } );
}

function updateEvent(obj, callback) {
  for (var i=0; i<todoDB.todos.length; i++) {
    if (todoDB.todos[i].id!==obj.id) continue;
    var a = todoDB.todos[i];
    a.due = obj.due;
    a.task = obj.task;
    a.category = obj.category;
    a.priority = obj.priority;
    // return true;
    // use callback to return #row affected?
  }
  callback(null, {});
}

function deleteEvent(id, callback) {
  todoDB.todos = todoDB.todos.filter(function(x) { return (x.id!=id); });
  callback(null, {});
}

exports.addEvent = addEvent;
exports.searchEvent = searchEvent;
exports.getEvents = getEvents;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;
