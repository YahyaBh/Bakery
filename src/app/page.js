import "./page.scss";

export default function Home() {
  return (

    <body>

      <nav>
        <h3>Delice Bites</h3>


        <div>
          <ul>
            <li><a href="/">À propos de nous</a></li>
            <li><a href="/about">Nos produits</a></li>
            <li><a href="/contact">Offres spéciales</a></li>
            <li><a href="/contact">Contactez-nous</a></li>
          </ul>
        </div>


        <button>Commander en ligne</button>

      </nav>



      <div className="hero">
        <div className="hero-text">

          <div className="hero-content">
            <h1>Bienvenue chez
              Delice Bites</h1>
            <p>
              Plongez dans un monde de saveurs exquises et de douceurs faites avec passion. Depuis
              notre ouverture en 2003, nous nous efforçons de vous offrir des pâtisseries raffinées
              qui allient tradition et modernité. Chez Delice Bites, chaque bouchée est une expérience
              unique.
            </p>

            <div className="hero-search">
              <input type="text" placeholder="Pâtisseries fines" maxLength={'60'} minLength={'3'} />
              <button>Recherche</button>

              <img className="hero-search-img" src={'/assets/images/heroChocolate.png'} alt="Chocolate-Search" />
            </div>
          </div>


          <img className="img-cup-cake" src={'/assets/images/heroCupCake.png'} />

          <img className="img-cake" src={'/assets/images/heroCake.png'} />

        </div>
      </div>

      <div className="services">
        <div className="services-container">
          <div className="text-container">
            <h2>Découvrez nos créations</h2>
            <p>
              Parcourez notre collection de pâtisseries, conçues pour émerveiller vos sens. Que vous soyez fan de desserts classiques ou en quête de nouveautés gourmandes, nous avons de quoi satisfaire tous les palais.
            </p>

            <button> Explorer les pâtisseries</button>
          </div>

          <div className="img-container">
            <div className="cube-container">
              <div className="div1">
                <img className="img-cake" src={'/assets/images/heroCake.png'} />
              </div>
              <div className="div2">
                <img className="img-cake" src={'/assets/images/heroCake.png'} />
              </div>
              <div className="div3">
                <img className="img-cake" src={'/assets/images/heroCake.png'} />
              </div>
              <div className="div4">
                <img className="img-cake" src={'/assets/images/heroCake.png'} />
              </div>
              <div className="div5">
                <img className="img-cake" src={'/assets/images/heroCake.png'} />
              </div>
              <div className="div6">
                <img className="img-cake" src={'/assets/images/heroCake.png'} />
              </div>
              <div className="div7">
                <img className="img-cake" src={'/assets/images/heroCake.png'} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="promos">

        <div className="text-container">
          <h2>Découvrez nos <br/> créations -20%</h2>

          <p>
            Restez à l’affût de nos promotions exclusives et bénéficiez de réductions sur une sélection de pâtisseries. C’est l’occasion de découvrir nos nouveautés à des prix irrésistibles.
          </p>

        </div>


        <div className="cake-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="cake" key={index}>
              <img className="img-cake" src={'/assets/images/cakeExample.png'} />

              <div className="description">
                <div className="text">
                  <h4>Chocolate Cake</h4>
                  <h3>200 DH</h3>
                </div>

                <div className="buy">
                  <button className="button-55" role="button">&#8599;</button>
                </div>
              </div>
            </div>
          ))}


        </div>

        <button className="button-more">Voir Les Offres</button>


      </div>


      <div className="categories">

        <div className="left-category">

          <h2>
            Catégories
            de produits
          </h2>

          <p>Chez Delice Bites, nous avons une sélection variée de
            pâtisseries qui sauront satisfaire toutes vos envies
            gourmandes. Que vous soyez à la recherche d’un gâteau
            d’anniversaire, de viennoiseries fraîches ou d’une option
            sans gluten, nous avons tout ce qu’il vous faut.</p>
        </div>



        <div className="right-category">
          <div className="div1">
            <p>Pâtisseries fines </p> <span>12</span>
          </div>
          <div className="div2">
            <p>Gâteaux </p> <span>12</span>
          </div>
          <div className="div3">
            <p>Gâteaux d anniversaire</p>  <span>22</span>
          </div>
          <div className="div4">
            <p>boissons</p> <span>12</span>
          </div>
          <div className="div5">
            <p>Produits sans gluten </p> <span>9</span>
          </div>
          <div className="div6">
            <p>...</p>
          </div>
          <div className="div7">
            <p>Tartes et viennoiseries</p>  <span>10</span>
          </div>
        </div>


      </div>


      <div className="contact">

        <h2>Nous contacter</h2>

        <p>Une question ou une commande spéciale ? Nous sommes à votre
          disposition ! Remplissez notre formulaire de contact et nous reviendrons
          vers vous rapidement.
        </p>


        <img className="left-image" src={'/assets/images/contactCroissant.png'} alt="Croissant" />
        <img className="right-image" src={'/assets/images/contactCupcake.png'} alt="Cupcake" />

        <form action="">

          <div className="double">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prenom" />
          </div>

          <input type="email" placeholder="Email" />
          <textarea placeholder="Votre message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>


      <footer>
        <h2>Delice Bites</h2>

        <div className="socials">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </footer>

      <script src="https://kit.fontawesome.com/f10e85b721.js" crossOrigin="anonymous"></script>
    </body>
  );
}
