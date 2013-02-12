function List()
{
	this.first = null;
	this.length = 0;
}

List.prototype.findById = function(id)
{
	var node = this.first;
	
	while(node!=null)
	{
		if(node.data.id == id)
		{
			return node.data;
		}
		
		node = node.next;
	}
	
	return null;
}

List.prototype.toString = function(){
	var data = "";
	
	var node =  this.first;
	
	while(node!=null)
	{
		data+=node.data.toString()+"<br>";
		node = node.next;
	}
	
	return data;
}


List.prototype.toArray = function(){
	var data = new Array();
	var i = 0;
	var node = this.first;
	
	while(node!=null)
	{
		data[i++]=node.data;
		node = node.next;
	}
	return data;
}

List.prototype.add = function(data){

	if(this.first==null)
	{
		var node = new Node(data);
		this.first = node;
		this.length =1;
	}
	else
	{
		var node = this.first;
		while(node.next!=null)
		{
			node = node.next;
		}
		
		node.next = new Node(data);
		this.length++;
	}
}

function Node(data)
{
	this.data = data;
	this.next = null;
}


List.prototype.clear = function()
{
	this.first = null;
}

