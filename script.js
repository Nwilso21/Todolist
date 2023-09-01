function newItem(){
  let list = $('<li></li>');
  let item =$('#input').val();
  list.append(item);

  if(item === ''){
    alert("You have to enter an item")
  }else{
    $('#list').append(list);
  }


  function crossOut(){
    list.classList.toggle("strike");
  }
  list.on("dblclick", function crossOut() {
		list.toggleClass("strike");
	});
  
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  list.append(crossOutButton);

  crossOutButton.on("click", deleteItem);

  function deleteItem(){
    list.addClass("delete");
  }
  $('#list').sortable;

  

}