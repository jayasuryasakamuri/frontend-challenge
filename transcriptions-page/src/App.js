import React,{useState} from 'react';
import Header from './components/Header'
import TranscriptionsList from './components/TranscriptionsList'
import GlobalStyles from './components/GlobalStyles'
import API from './utils/Api';
import AddNewItem from './components/AddNewItem'

const App = () => {
	const [items, setItems]= useState([]);

	const fetchItems = async ()=>{
		const response = await API.get();
		setItems(response.data);
	}
	
	const uploadItems = async ()=>{
		if(items.length > 0){
			const response = await API.post('',items);
			response.data.length>0 && alert('Data uploaded successfully');
		}else{
			alert('Data is empty...');
		}
	}

	const addNewItem = ()=>{
		var id = items.length > 0 ? items[items.length - 1].id + 1 : items.length + 1;
		setItems([...items,{
			id : id,
			text : 'Content',
			voice : 'New Item'
		}]);
	}

	const changeItemValue=(id,key,ref)=>{
		let updatedItems = items.map(item =>{
			if(item.id === id && item[key] !== ref.current.innerText.trim()){
				item[key] = ref.current.innerHTML.trim();
			}
			return item; 
		})
		setItems(updatedItems);
	}

	const deleteItem = (id)=>{
		setItems(items.filter(item => id !== item.id));
	}

	return (
		<>
			<GlobalStyles />
			<Header uploadItems={uploadItems} fetchItems = {fetchItems}/>
			<TranscriptionsList items={items} changeItemValue={changeItemValue} deleteItem={deleteItem}/>
			<AddNewItem addNewItem={addNewItem}/>
		</>
	);
}

export default App;
