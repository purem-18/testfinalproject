import bruschetta from "../images/menu/bruschetta.jpg"
import stuffedGrapeLeaves from "../images/menu/stuffedGrapeLeaves.jpg"
import falafelplate from "../images/menu/falafelPlate.jpg"
import marghertiapizza from "../images/menu/margheritaPizza.jpg"
import spaghetti from "../images/menu/Spaghetti Carbonara.jpg"
import grilledsalmon from "../images/menu/Grilled Salmon.jpg"
import lambkofta from "../images/menu/Lamb Kofta.jpg"
import vegmoussaka from "../images/menu/Vegetarian Moussaka.jpg"
import turkishlahmacun from "../images/menu/Turkish Lahmacun.jpg"
import seafoodrisotto from "../images/menu/Seafood Risotto.jpg"
import greeksalad from "../images/menu/greek salad.jpg"
import eggplant from "../images/menu/Eggplant Caponata.jpg"
import spinachfetapie from "../images/menu/Spinach and Feta Pie.jpg"
import baklava from "../images/menu/Baklava.jpg"
import lemoncake from "../images/menu/Lemon Delight Cake.jpg"
import cappuccino from "../images/menu/Classic Cappuccino.jpg"
import turkishtea from "../images/menu/Traditional Turkish Tea.jpg"
import icedmediterraneanlemonade from "../images/menu/Iced Mediterranean Lemonade.jpg"
import orangejuice from "../images/menu/Freshly Squeezed Orange Juice.jpg"

export const menuData = {
    starters: [
      {
        id: 13,
        name: 'Bruschetta',
        price: '$8.99',
        description: 'Toasted bread topped with fresh tomatoes, garlic, and basil',
        cooking: 'Drizzled with olive oil and served warm',
        image: bruschetta
      },
      {
        id: 8,
        name: 'Stuffed Grape Leaves',
        price: '$9.99',
        description: 'Rice, herbs, and pine nuts rolled in tender grape leaves',
        cooking: 'Steamed with a touch of lemon',
        image: stuffedGrapeLeaves
      },
      {
        id: 11,
        name: 'Falafel Plate',
        price: '$11.99',
        description: 'Crispy chickpea fritters served with hummus and pita bread',
        cooking: 'Fried to golden perfection',
        image: falafelplate
      }
    ],
    mainCourses: [
      {
        id: 1,
        name: 'Margherita Pizza',
        price: '$12.99',
        description: 'Classic pizza with tomato sauce, mozzarella, and basil',
        cooking: 'Wood-fired in a brick oven',
        image: marghertiapizza
      },
      {
        id: 2,
        name: 'Spaghetti Carbonara',
        price: '$14.99',
        description: 'Creamy pasta with pancetta, eggs, and Parmesan cheese',
        cooking: 'Tossed in a hot pan to create a silky sauce',
        image: spaghetti
      },
      {
        id: 3,
        name: 'Grilled Salmon',
        price: '$18.99',
        description: 'Fresh Atlantic salmon with lemon and herbs',
        cooking: 'Grilled to perfection on an open flame',
        image: grilledsalmon
      },
      {
        id: 5,
        name: 'Lamb Kofta',
        price: '$16.99',
        description: 'Spiced ground lamb skewers served with tzatziki',
        cooking: 'Char-grilled to perfection',
        image: lambkofta
      },
      {
        id: 6,
        name: 'Vegetarian Moussaka',
        price: '$13.99',
        description: 'Layered eggplant, zucchini, and lentils with béchamel sauce',
        cooking: 'Baked until golden and bubbly',
        image: vegmoussaka
      },
      {
        id: 7,
        name: 'Turkish Lahmacun',
        price: '$11.99',
        description: 'Thin flatbread topped with spiced minced meat and vegetables',
        cooking: 'Baked in a traditional oven',
        image: turkishlahmacun
      },
      {
        id: 9,
        name: 'Seafood Risotto',
        price: '$17.99',
        description: 'Creamy Arborio rice with shrimp, mussels, and saffron',
        cooking: 'Slow-cooked and finished with Parmesan',
        image: seafoodrisotto
      }
    ],
    salads: [
      {
        id: 4,
        name: 'Greek Salad',
        price: '$10.99',
        description: 'Crisp cucumbers, tomatoes, Kalamata olives, and feta cheese',
        cooking: 'Tossed with olive oil and oregano',
        image: greeksalad
      },
      {
        id: 10,
        name: 'Eggplant Caponata',
        price: '$12.49',
        description: 'Sicilian-style eggplant stew with olives and capers',
        cooking: 'Simmered to a rich, tangy finish',
        image: eggplant
      },
      {
        id: 12,
        name: 'Spinach and Feta Pie',
        price: '$10.99',
        description: 'Flaky phyllo pastry filled with spinach, feta, and herbs',
        cooking: 'Baked to golden crispiness',
        image: spinachfetapie
      }
    ],
    desserts: [
      {
        id: 14,
        name: 'Baklava',
        price: '$7.99',
        description: 'Layers of phyllo dough with honey and chopped nuts',
        cooking: 'Baked and drizzled with syrup',
        image: baklava
      },
      {
        id: 15,
        name: 'Lemon Delight Cake',
        price: '$7.99',
        description: 'Light lemon sponge cake with a tangy citrus glaze',
        cooking: 'Baked to a fluffy finish and chilled before serving',
        image: lemoncake
      }
    ],
    beverages: {
      hot: [
        {
          id: 16,
          name: 'Classic Cappuccino',
          price: '$4.99',
          description: 'Rich espresso with steamed milk and a thick layer of foam',
          cooking: 'Brewed fresh and topped with cocoa powder',
          image: cappuccino
        },
        {
          id: 17,
          name: 'Traditional Turkish Tea',
          price: '$3.99',
          description: 'Strong black tea served in a tulip-shaped glass',
          cooking: 'Brewed traditionally with a double teapot',
          image: turkishtea
        }
      ],
      cold: [
        {
          id: 18,
          name: 'Iced Mediterranean Lemonade',
          price: '$4.49',
          description: 'Fresh lemons, mint, and a splash of orange blossom water',
          cooking: 'Served over crushed ice for a refreshing finish',
          image: icedmediterraneanlemonade
        },
        {
          id: 19,
          name: 'Freshly Squeezed Orange Juice',
          price: '$5.49',
          description: 'Sweet, hand-pressed oranges with no added sugar',
          cooking: 'Served chilled in a tall glass',
          image: orangejuice
        }
      ]
    }
  };