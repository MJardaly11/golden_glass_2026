export default function Menu() {
  const cocktails = [
    {
      name: "Mojito",
      desc: "Fresh mint, lime, soda and special flavors",
      price: "$12",
      img: "/mohito.jpg"
    },
    {
      name: "Sunset Cocktail",
      desc: "Orange juice with tropical premium mix",
      price: "$14",
      img: "/sunset.jpg"
    },
    {
      name: "Blue Lagoon",
      desc: "Refreshing blue drink with lemon touch",
      price: "$13",
      img:"/bluelagoon.jpg"
    },
    {
    name: "Pina Colada",
    desc: "Coconut and pineapple blended smooth",
    price: "$15",
    img: "/pina.jpg"
  },
  {
    name: "Margarita",
    desc: "Tequila, lime, and triple sec on the rocks",
    price: "$13",
    img: "/margarita.jpg"
  },
  {
    name: "Strawberry Daiquiri",
    desc: "Frozen strawberry, rum, and lime blend",
    price: "$14",
    img: "/Strawberry Daiquiri.jpg"
  },
  {
    name: "Cosmopolitan",
    desc: "Vodka, cranberry, and lime with a citrus kick",
    price: "$14",
    img: "/Cosmopolitan.jpg"
  },
  {
    name: "Whiskey Sour",
    desc: "Bourbon, lemon juice, and a touch of sugar",
    price: "$13",
    img: "/Whiskey Sour.jpg"
  },
  {
    name: "Espresso Martini",
    desc: "Vodka, coffee liqueur, and fresh espresso",
    price: "$16",
    img: "/Espresso Martini.jpg"
  }
  ];

  return (
    <section className="menu">
      <h2>Our Special Menu</h2>
      
      <div className="menu-container">
        {cocktails.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span className="price">{item.price}</span>
          </div>
          
        ))}
      </div>
      

      <h3 className="table-title">Full Drink List</h3>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Drink</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mojito</td>
            <td>Classic Cuban cocktail with mint</td>
            <td>$12</td>
          </tr>
          <tr>
            <td>Blue Lagoon</td>
            <td>Refreshing blue drink with lemon touch </td>
            <td>$13</td>
          </tr>
          <tr>
            <td>Espresso Martini</td>
            <td>Vodka, coffee liqueur, fresh espresso</td>
            <td>$16</td>
          </tr>
          <tr>
            <td> Margarita</td>
            <td>Tequila, Lime, and triple sec on the rocks </td>
            <td>$13</td>
          </tr>
          <tr>
            <td> Pina Colada</td>
            <td>Coconut and Pineapple blended smooth </td>
            <td>$15</td>
          </tr>
          <tr>
            <td> Sunset Cocktail</td>
            <td>Orange juice with tropical premium mix</td>
            <td>$14</td>
          </tr>
          <tr>
            <td> Strawberry Daiquiri</td>
            <td>White Rum, Fresh Strawberry, Lime Juice </td>
            <td>$14</td>
          </tr>
          <tr>
            <td> Cosmopolitan</td>
            <td>Vodka, Triple sec, Cranberry Juice</td>
            <td>$14</td>
          </tr>
          <tr>
            <td> Whiskey Sour</td>
            <td>Whiskey, Garnish, Fresh Lemon Juice</td>
            <td>$13</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}