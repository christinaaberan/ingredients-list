import React, {useState} from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import IngredientDetail from './components/IngredientDetail';
import IngredientForm from './components/IngredientForm';
import Data from './data';

function App() {
  const [ingredients, setIngredients] = useState(Data);
  const [currentItem, setCurrentItem] = useState({});
  const [showForm, setShowForm] = useState(false);

  const viewForm = () => {
    setShowForm(true);
  }

  const viewItem = (item) => {
    setCurrentItem(item);
    setShowForm(false);
  }

  const addItem = (item) => {
    setIngredients([...ingredients, item]);
  }
  
  const removeItem = (itemToRemove) => {
    let updatedIngredients = ingredients.filter(item=>item!==itemToRemove);
    setIngredients(updatedIngredients)
    if(updatedIngredients.length > 0) {
      setCurrentItem(updatedIngredients[0])
    } else {
      setShowForm(true);
    }
  }

  return (
    <div className="container">
      <header className="App-header">
        <h1><em>Essential</em> Nutrients</h1>
      </header>
      <div className="sidebar">
        <IngredientList 
          ingredients={ingredients} 
          viewItem={viewItem} 
          currentItem={currentItem} 
          viewForm={viewForm}
          showForm={showForm}
        /> 
      </div>
      <section>
        {!showForm && 
          <IngredientDetail 
            ingredients={ingredients} 
            currentItem={currentItem} 
            removeItem={removeItem}
          />
        }
        {showForm && <IngredientForm addItem={addItem}/>}
      </section>
    </div>
  );
}

export default App;
