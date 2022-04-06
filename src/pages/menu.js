import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import menuStyles from "./menu.module.scss";

const Menu = () => {
	const data = useStaticQuery(graphql`
		query  {
			contentfulMenuIntro {
				intro
			}
			contentfulAllergener {
	      		info
	      	}
	      allContentfulPizzaRosse {
	        edges {
	          node {
	            title
	            ingredients
	        	price
	        	allergies
	        }
	        }
	      }
	      allContentfulPizzaBianche {
	        edges {
	          node {
	            title
	            ingredients
	        	price
	        	allergies
	        }
	        }
	      }
	      allContentfulPanini {
	        edges {
	          node {
	            title
	            ingredients
	            price
	            allergies
	        	}
	        }
	      }
	      allContentfulSmaretterOgSalater {
	      	edges {
	      		node {
	      			name 
	      			ingredients
	      			price
	      			allergies
	      		}
	      	}
	      }
	      allContentfulEmpanadas {
	      	edges {
	      		node {
	      			name
	      			ingredients
	      			price
	      			allergies
	      		}
	      	}
	      }
	      allContentfulDrikke {
	      	edges {
	      		node {
	      			title
	      			price
	      		}
	      	}
	      }
	      allContentfulKaker {
	      	edges {
	      		node {
	      			name
	      			ingredients
	      			price
	      			allergies
	      		}
	      	}
	      }
	  }
	    
	`)
	return (
		<div className={menuStyles.container} id="menu">
			<div className={menuStyles.content} >
				<div className={menuStyles.header}>
					<h2>MENY</h2>
					<h3>{data.contentfulMenuIntro.intro}</h3>
				</div>
				<ul className={menuStyles.rett}>
					<h3>PIZZA ROSSE</h3>
					{data.allContentfulPizzaRosse.edges.map((pizza) => {
						return(
							<li>
								<h4>{pizza.node.title}</h4>
								<p className={menuStyles.ingridients}>{pizza.node.ingredients}</p>
								<p className={menuStyles.pris}>{pizza.node.price},-</p>
								<p className={menuStyles.allergies}>Allergener: {pizza.node.allergies}</p>
							</li>
						)
					})}
				</ul>
				<ul className={menuStyles.rett}>
					<h3>PIZZA BIANCHE</h3>
					{data.allContentfulPizzaBianche.edges.map((pizzaB) => {
						return(
							<li>
								<h4>{pizzaB.node.title}</h4>
								<p className={menuStyles.ingridients}>{pizzaB.node.ingredients}</p>
								<p className={menuStyles.pris}>{pizzaB.node.price},-</p>
								<p className={menuStyles.allergies}>Allergener: {pizzaB.node.allergies}</p>
							</li>
						)
					})}
				</ul>
				<ul className={menuStyles.rett}>
					<h3>PANINI</h3>
					{data.allContentfulPanini.edges.map((panini) => {
						return(
							<li>
								<h4>{panini.node.title}</h4>
								<p className={menuStyles.ingridients}>{panini.node.ingredients}</p>
								<p className={menuStyles.pris}>{panini.node.price},-</p>
								<p className={menuStyles.allergies}>Allergener: {panini.node.allergies}</p>
							</li>
						)
					})}
				</ul>
				<ul className={menuStyles.rett}>
					<h3>SMÅRETTER OG SALATER</h3>
					{data.allContentfulSmaretterOgSalater.edges.map((retter) => {
						return(
							<li>
								<h4>{retter.node.name}</h4>
								<p className={menuStyles.ingridients}>{retter.node.ingredients}</p>
								<p className={menuStyles.pris}>{retter.node.price},-</p>
								<p className={menuStyles.allergies}>Allergener: {retter.node.allergies}</p>
							</li>
						)
					})}
				</ul>
				<ul className={menuStyles.rett}>
					<h3>EMPANADAS</h3>
					{data.allContentfulEmpanadas.edges.map((empanadas) => {
						return(
							<li>
								<h4>{empanadas.node.name}</h4>
								<p className={menuStyles.ingridients}>{empanadas.node.ingredients}</p>
								<p className={menuStyles.pris}>{empanadas.node.price},-</p>
								<p className={menuStyles.allergies}>Allergener: {empanadas.node.allergies}</p>
							</li>
						)
					})}
				</ul>
				<ul className={menuStyles.rett}>
					<h3>DRIKKE</h3>
					{data.allContentfulDrikke.edges.map((drikke) => {
						return(
							<li>
								<h4>{drikke.node.title}</h4>
								<p className={menuStyles.pris}>{drikke.node.price},-</p>
							</li>
						)
					})}
				</ul>
				<div className={menuStyles.allergiesInfo}>
					<p>{data.contentfulAllergener.info}</p>
				</div>
			</div>
			<div className={menuStyles.button}>
           		<a href="https://wolt.com/nb/nor/oslo/restaurant/caminito"><p>Levering - WOLT</p></a>
          	</div>
 			<div className={menuStyles.button}>
            	<a href="tel:+4740075985"><p>Bestill på telefon</p></a>
            </div>
            <div className={menuStyles.button}>
            	<a href="https://www.google.no/maps/place/Caminito/@59.9341012,10.7598655,17z/data=!3m1!4b1!4m5!3m4!1s0x46416e6b4db67355:0xa89c036126202276!8m2!3d59.9341012!4d10.7620542?hl=no">
            		<p>Besøk</p>
            	</a>
            </div>          
		</div>
	)
}

export default Menu;