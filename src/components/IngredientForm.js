import React, {useState} from 'react'

const IngredientForm = ({addItem}) => {
	const [name, setName] = useState('');
	const [dosage, setDosage] = useState('');
	const [desc, setDesc] = useState('');
	const [foundin, setFoundin] = useState('');
	const [form, setForm] = useState('');
	const [source, setSource] = useState('');
	const [supplier, setSupplier] = useState('');
	const [location, setLocation] = useState(''); 
	const [img, setImg] = useState('');

	const onSubmit = (e) => {
		e.preventDefault()
		if(name === ''){
			alert("Please enter a name")
			return false
		}
		addItem({ name, dosage, desc, foundin, form, source, supplier, location, img })
	}
	return (
		<div>
			<form>
				<div className="form-control">
					<label>Name:</label>
					<input 
						type="text" 
						name="name" 
						placeholder="eg. Folate" 
						value={name} 
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Dosage:</label>
					<input 
						type="text"
						name="dosage"
						placeholder="eg. 600mcg"
						value={dosage} 
						onChange={(e) => setDosage(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Description:</label>
					<input 
						type="text" 
						name="desc"
						value={desc} 
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Found in:</label>
					<input 
						type="text" 
						name="foundin"
						value={foundin} 
						onChange={(e) => setFoundin(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Form:</label>
					<input 
						type="text" 
						name="form"
						value={form} 
						onChange={(e) => setForm(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Source:</label>
					<input 
						type="text" 
						name="source"
						value={source} 
						onChange={(e) => setSource(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Supplier:</label>
					<input 
						type="text" 
						name="supplier"
						value={supplier} 
						onChange={(e) => setSupplier(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Location:</label>
					<input 
						type="text" 
						name="name"
						value={location} 
						onChange={(e) => setLocation(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Image:</label>
					<input 
						type="file" 
						accepts=".jpg,.png" 
						name="img"
						value={img} 
						onChange={(e) => setImg(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label></label>
					<input type="submit" value="Save Ingredient" onClick={onSubmit}/>
				</div>
			</form>
		</div>
	)
}

export default IngredientForm