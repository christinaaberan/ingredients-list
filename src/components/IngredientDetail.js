import React, { useState } from 'react';

const IngredientDetail = ({ currentItem, removeItem }) => {
	const [slideIndex, setSlideIndex] = useState(0);
	const onClick = (fn, i, e) => {
		e.preventDefault();
		fn(i);
	};

	const plusSlides = (n) => {
		let slides = currentItem.articles;
		if (slideIndex + n >= slides.length) {
			setSlideIndex(0);
		} else if (slideIndex + n < 0) {
			setSlideIndex(slides.length - 1);
		} else {
			setSlideIndex(slideIndex + n);
		}
	};
	return (
		<div className="ingredient-detail">
			<div className="ingredient-detail__header">
				<img
					src={`assets${currentItem.imagePath}`}
					alt={currentItem.name}
					className="ingredient-detail__image"
				/>
				<div>
					<h2 className="ingredient-detail__name">{currentItem.name}</h2>
					<span className="ingredient-detail__dosage">{currentItem.dosage}</span>
				</div>
			</div>
			<p className="ingredient-detail__description">{currentItem.description}</p>
			<p className="ingredient-detail__list">
				<span>
					<strong>Found In</strong> <em>{currentItem.foundIn}</em>
					<br />
				</span>
				<span>
					<strong>Form</strong> <em>{currentItem.form}</em>
					<br />
				</span>
				<span>
					<strong>Source</strong> <em>{currentItem.source}</em>
					<br />
				</span>
				<span>
					<strong>Supplier</strong> <em>{currentItem.foundIn}</em>
					<br />
				</span>
				<span>
					<strong>Final Location of Manufacturing</strong> <em>{currentItem.location}</em>
					<br />
				</span>
			</p>
			{currentItem.articles && (
				<div className="articles">
					<div className="articles__header">
						<hr />
						<h3>
							Read some <em>Research</em>
						</h3>
					</div>
					<div className="articles__slideshow">
						{currentItem.articles.map((item, key) => (
							<div
								className={`slide ${
									slideIndex === key || currentItem.articles.length <= 1 ? 'currentSlide' : ''
								}`}
								key={key}
							>
								<p key={key}>
									<a href={item.link}>{item.title}</a>
									<br />
									<br />
									<i>
										{item.author} - {item.year}
									</i>
								</p>
							</div>
						))}
						{currentItem.articles.length > 1 && (
							<>
								<a className="prev" onClick={() => plusSlides(-1)}>
									<img src="assets/Caret-Left.svg"></img>
								</a>
								<a className="next" onClick={() => plusSlides(1)}>
									<img src="assets/Caret-Right.svg"></img>
								</a>
							</>
						)}
					</div>
				</div>
			)}
			<a style={{ fontSize: 'small' }} href="" onClick={(e) => onClick(removeItem, currentItem, e)}>
				Remove this item
			</a>
		</div>
	);
};

export default IngredientDetail;
