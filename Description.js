import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor() {
    let authorLink = "https://www.dessertperson.com/";
    let authorPhoto = "https://images.squarespace-cdn.com/content/v1/5a4c53e70abd044fbe68cea4/1598414601618-VFS7UIUEL2DF5JYYWBAX/Claire+Portrait.jpg?format=2500w";
    let authorName = "Claire Saffitz";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
            <div>
               <h1>Recipe Title</h1>
               <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}


export default RecipeDescription;