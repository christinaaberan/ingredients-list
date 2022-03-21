import React, { useEffect, useState } from 'react';

const IngredientList = (props) => {
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		props.viewItem(props.ingredients[0]);
	}, []);

	const onClick = (fn, i, e) => {
		e.preventDefault();
		fn(i);
	};

	const filteredList = props.ingredients.filter((ingredient) => {
		return (
			ingredient.name.toLowerCase().includes(searchField.toLowerCase()) ||
			ingredient.location.toLowerCase().includes(searchField.toLowerCase()) ||
			ingredient.dosage.toLowerCase().includes(searchField.toLowerCase())
		);
	});

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};

	return (
		<div>
			<div id="sidebar-search" className="search">
				<input type="text" name="search" placeholder="Search" onChange={handleChange} />
			</div>
			{filteredList.map((item, key) => (
				<a
					className={`list-item ${
						item.name === props.currentItem.name && props.showForm === false
							? 'list-item--currentItem'
							: ''
					}`}
					href="#"
					key={key}
					onClick={(e) => onClick(props.viewItem, item, e)}
				>
					<div>
						<ListItem info={item} key={key} />
					</div>
					<div
						className="list-item__arrow"
						style={{
							maskImage: 'url(assets/Caret-Right.svg)',
							WebkitMaskImage: 'url(assets/Caret-Right.svg)',
							maskRepeat: 'no-repeat',
							WebkitMaskRepeat: 'no-repeat'
						}}
					></div>
				</a>
			))}
			<>
				<a
					href="#"
					onClick={(e) => onClick(props.viewForm, true, e)}
					className={`list-item list-item--addnew ${props.viewForm ? 'currentItem' : ''}`}
				>
					<span
						className="plus-icon"
						style={{
							maskImage: 'url(assets/icon-plus.svg)',
							WebkitMaskImage: 'url(assets/icon-plus.svg)',
							maskRepeat: 'no-repeat',
							WebkitMaskRepeat: 'no-repeat'
						}}
					></span>
					Add a new ingredient
				</a>
			</>
		</div>
	);
};

const ListItem = (props) => {
	return (
		<>
			<div className="list-item__name">
				<span>{props.info.name}</span>
			</div>
			<div className="list-item__dosage">
				<span>{props.info.dosage}</span>
			</div>
			<div className="list-item__location">
				<span><span style={{maskImage: 'url(assets/location.svg)', WebkitMaskImage: 'url(assets/location.svg)'}}></span>{props.info.location}</span>
			</div>
		</>
	);
}

export default IngredientList;
