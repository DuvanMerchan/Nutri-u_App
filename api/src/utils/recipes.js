
/*let recipes = {
0
: 
{id: 716426, name: 'Cauliflower, Brown Rice, and Vegetable Fried Rice', healthScore: 76, image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg', summary: 'Cauliflower, Brown Rice, and Vegetable Fried Rice …42">Easy Vegetable Fried Brown Rice with Egg</a>.', …}
1
: 
{id: 715594, name: 'Homemade Garlic and Basil French Fries', healthScore: 77, image: 'https://spoonacular.com/recipeImages/715594-312x231.jpg', summary: 'The recipe Homemade Garlic and Basil French Fries …lt and Garlic Mayonnaise</a> for similar recipes.', …}
2
: 
{id: 715497, name: 'Berry Banana Breakfast Smoothie', healthScore: 63, image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg', summary: 'If you have around <b>5 minutes</b> to spend in th…st-smoothie-774875">Berry Breakfast Smoothie</a>.', …}
3
: 
{id: 644387, name: 'Garlicky Kale', healthScore: 92, image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg', summary: 'Garlicky Kale might be just the side dish you are …">Garlicky Kale Crostini</a> for similar recipes.', …}
4
: 
{id: 716268, name: 'African Chicken Peanut Stew', healthScore: 100, image: 'https://spoonacular.com/recipeImages/716268-312x231.jpg', summary: 'Need a <b>gluten free and dairy free main course</…-Pot African Peanut Stew</a> for similar recipes.', …}
5
: 
{id: 716381, name: 'Nigerian Snail Stew', healthScore: 89, image: 'https://spoonacular.com/recipeImages/716381-312x231.jpg', summary: 'Nigerian Snail Stew might be just the main course …877">Maple Snail Cookies</a> for similar recipes.', …}
6
: 
{id: 782601, name: 'Red Kidney Bean Jambalaya', healthScore: 100, image: 'https://spoonacular.com/recipeImages/782601-312x231.jpg', summary: 'Red Kidney Bean Jambalaya might be just the <b>Cre…6">Red Kidney Bean Curry</a> for similar recipes.', …}
7
: 
{id: 794349, name: 'Broccoli and Chickpea Rice Salad', healthScore: 100, image: 'https://spoonacular.com/recipeImages/794349-312x231.jpg', summary: 'Need a <b>gluten free and vegan main course</b>? B…li-salad-29686">Chickpean And Broccoli Salad</a>.', …}
8
: 
{id: 715446, name: 'Slow Cooker Beef Stew', healthScore: 100, image: 'https://spoonacular.com/recipeImages/715446-312x231.jpg', summary: 'If you want to add more <b>gluten free and dairy f…oker-beef-stew-770894">Slow-Cooker Beef Stew</a>.', …}
9
: 
{id: 715415, name: 'Red Lentil Soup with Chicken and Turnips', healthScore: 73, image: 'https://spoonacular.com/recipeImages/715415-312x231.jpg', summary: 'Need a <b>gluten free and dairy free main course</… Lentil and Chicken Soup</a> for similar recipes.', …}
10
: 
{id: 766453, name: "Hummus and Za'atar", healthScore: 100, image: 'https://spoonacular.com/recipeImages/766453-312x231.jpg', summary: `The recipe Hummus and Za'atar is ready <b>in aroun…5">Za'atar Bread Rolls (Manaiesh Bi Za'atar)</a>.`, …}
11
: 
{id: 716627, name: 'Easy Homemade Rice and Beans', healthScore: 60, image: 'https://spoonacular.com/recipeImages/716627-312x231.jpg', summary: 'Need a <b>gluten free and vegan main course</b>? E…e-A-Roni and Green Beans</a> for similar recipes.', …}
12
: 
{id: 716408, name: 'Greek-Style Baked Fish: Fresh, Simple, and Delicious', healthScore: 65, image: 'https://spoonacular.com/recipeImages/716408-312x231.jpg', summary: 'You can never have too many main course recipes, s…>Delicious Greek Pastitsio {Casserole-Style}</a>.', …}
13
: 
{id: 795751, name: 'Chicken Fajita Stuffed Bell Pepper', healthScore: 75, image: 'https://spoonacular.com/recipeImages/795751-312x231.jpg', summary: 'Chicken Fajita Stuffed Bell Pepper might be just t…Red Bell Pepper Rellenos</a> for similar recipes.', …}
14
: 
{id: 640941, name: 'Crunchy Brussels Sprouts Side Dish', healthScore: 100, image: 'https://spoonacular.com/recipeImages/640941-312x231.jpg', summary: 'Crunchy Brussels Sprouts Side Dish might be just t…s, Apricots, and Walnuts</a> for similar recipes.', …}
15
: 
{id: 798400, name: 'Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant', healthScore: 87, image: 'https://spoonacular.com/recipeImages/798400-312x231.jpg', summary: 'The recipe Spicy Black-Eyed Pea Curry with Swiss C…ss Chard Quinoa Bibimbap</a> for similar recipes.', …}
16
: 
{id: 756814, name: 'Powerhouse Almond Matcha Superfood Smoothie', healthScore: 54, image: 'https://spoonacular.com/recipeImages/756814-312x231.jpg', summary: 'Powerhouse Almond Matcha Superfood Smoothie might …Decadent Superfood Treat</a> for similar recipes.', …}
17
: 
{id: 729366, name: 'Plantain Salad', healthScore: 72, image: 'https://spoonacular.com/recipeImages/729366-312x231.jpg', summary: 'Plantain Salad might be just the main course you a…Mango and Cucumber Salad</a> for similar recipes.', …}
18
: 
{id: 715769, name: 'Broccolini Quinoa Pilaf', healthScore: 74, image: 'https://spoonacular.com/recipeImages/715769-312x231.jpg', summary: 'If you want to add more <b>Mediterranean</b> recip…ese and Chard Quinoa with Roasted Broccolini</a>.', …}
19
: 
{id: 782600, name: 'Quinoa Salad with Vegetables and Cashews', healthScore: 66, image: 'https://spoonacular.com/recipeImages/782600-312x231.jpg', summary: 'You can never have too many side dish recipes, so …etables and Quinoa Salad</a> for similar recipes.', …}
20
: 
{id: 642605, name: 'Farro With Mushrooms and Asparagus', healthScore: 80, image: 'https://spoonacular.com/recipeImages/642605-312x231.jpg', summary: 'Need a <b>dairy free and vegetarian side dish</b>?…rro And Porcini Mushrooms (farro Con Funghi)</a>.', …}
21
: 
{id: 715540, name: 'Summer Berry Salad', healthScore: 95, image: 'https://spoonacular.com/recipeImages/715540-312x231.jpg', summary: 'Summer Berry Salad might be just the side dish you…ken & Berry Summer Salad</a> for similar recipes.', …}
22
: 
{id: 636589, name: 'Butternut Squash Frittata', healthScore: 100, image: 'https://spoonacular.com/recipeImages/636589-312x231.jpg', summary: 'Butternut Squash Frittatan is a <b>gluten free</b>…uash and Quinoa Frittata</a> for similar recipes.', …}
23
: 
{id: 640062, name: 'Corn Avocado Salsa', healthScore: 71, image: 'https://spoonacular.com/recipeImages/640062-312x231.jpg', summary: 'The recipe Corn Avocado Salsa could satisfy your M…">Corn and Avocado Salsa</a> for similar recipes.', …}
24
: 
{id: 715495, name: 'Turkey Tomato Cheese Pizza', healthScore: 33, image: 'https://spoonacular.com/recipeImages/715495-312x231.jpg', summary: 'You can never have too many main course recipes, s…6">Cheese & Tomato Pizza</a> for similar recipes.', …}
25
: 
{id: 715421, name: 'Cheesy Chicken Enchilada Quinoa Casserole', healthScore: 38, image: 'https://spoonacular.com/recipeImages/715421-312x231.jpg', summary: 'Cheesy Chicken Enchilada Quinoa Casserole might be…Rice Enchilada Casserole</a> for similar recipes.', …}
26
: 
{id: 716432, name: 'Finger Foods: Frittata Muffins', healthScore: 49, image: 'https://spoonacular.com/recipeImages/716432-312x231.jpg', summary: 'Finger Foods: Frittata Muffins #incredibleEGG migh…ds versus Refined Foods}</a> for similar recipes.', …}
27
: 
{id: 716437, name: 'Chilled Cucumber Avocado Soup with Yogurt and Kefir', healthScore: 54, image: 'https://spoonacular.com/recipeImages/716437-312x231.jpg', summary: 'Chilled Cucumber Avocado Soup with Yogurt and Kefi…ucumber Mint Yogurt Soup</a> for similar recipes.', …}
28
: 
{id: 639535, name: 'Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather', healthScore: 72, image: 'https://spoonacular.com/recipeImages/639535-312x231.jpg', summary: 'Need a <b>vegan main course</b>? Citrusy Pecan Gar…ld-Weather Venison Chili</a> for similar recipes.', …}
29
: 
{id: 652417, name: 'Moroccan chickpea and lentil stew', healthScore: 96, image: 'https://spoonacular.com/recipeImages/652417-312x231.jpg', summary: 'Moroccan chickpean and lentil stew is a <b>dairy f…>Moroccan Chickpean and Lentil Soup (Harira)</a>.', …}
30
: 
{id: 794538, name: 'Almond Joy Protein Shake', healthScore: 78, image: 'https://spoonacular.com/recipeImages/794538-312x231.jpg', summary: 'Almond Joy Protein Shake might be just the beverag…Dairy-Free Protein Shake</a> for similar recipes.', …}
31
: 
{id: 648320, name: 'Jade Buddha Salmon Tartare', healthScore: 100, image: 'https://spoonacular.com/recipeImages/648320-312x231.jpg', summary: 'If you want to add more <b>gluten free, dairy free…recipes/salmon-tartare-40377">Salmon Tartare</a>.', …}
32
: 
{id: 769774, name: 'Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)', healthScore: 89, image: 'https://spoonacular.com/recipeImages/769774-312x231.jpg', summary: 'You can never have too many side dish recipes, so …a Stuffed Sweet Potatoes</a> for similar recipes.', …}
33
: 
{id: 649931, name: 'Lentil Salad With Vegetables', healthScore: 100, image: 'https://spoonacular.com/recipeImages/649931-312x231.jpg', summary: 'Lentil Salad With Vegetables might be just the sid…ot Vegetables and Lentil</a> for similar recipes.', …}
34
: 
{id: 661925, name: 'Strawberry-Mango Quinoa Salad', healthScore: 65, image: 'https://spoonacular.com/recipeImages/661925-312x231.jpg', summary: 'Strawberry-Mango Quinoa Salad might be just the si… Quinoan and Mango Salad</a> for similar recipes.', …}
35
: 
{id: 660228, name: 'Skinny Kale Basil Pesto', healthScore: 88, image: 'https://spoonacular.com/recipeImages/660228-312x231.jpg', summary: 'If you have around <b>approximately 45 minutes</b>…gan Kale Pesto & Crazy For Kale Launch party</a>.', …}
36
: 
{id: 715447, name: 'Easy Vegetable Beef Soup', healthScore: 65, image: 'https://spoonacular.com/recipeImages/715447-312x231.jpg', summary: 'Easy Vegetable Beef Soup might be just the main co…Easy Vegetable Beef Soup</a> for similar recipes.', …}
37
: 
{id: 715543, name: 'Homemade Guacamole', healthScore: 34, image: 'https://spoonacular.com/recipeImages/715543-312x231.jpg', summary: 'Need a <b>caveman, gluten free, primal, and whole …6945">Homemade Guacamole</a> for similar recipes.', …}
38
: 
{id: 641975, name: 'Easy Ginger Beef Broccoli', healthScore: 70, image: 'https://spoonacular.com/recipeImages/641975-312x231.jpg', summary: 'Easy Ginger Beef Broccoli might be just the main c…">Easy Beef and Broccoli</a> for similar recipes.', …}
39
: 
{id: 652423, name: 'Moroccan Couscous and Chickpea Salad', healthScore: 56, image: 'https://spoonacular.com/recipeImages/652423-312x231.jpg', summary: 'Moroccan Couscous and Chickpea Salad might be just…ine with Quinoa Couscous</a> for similar recipes.', …}
40
: 
{id: 660306, name: 'Slow Cooker: Pork and Garbanzo Beans', healthScore: 75, image: 'https://spoonacular.com/recipeImages/660306-312x231.jpg', summary: 'Slow Cooker: Pork and Garbanzo Beans might be just…ow Cooker Pork and Beans</a> for similar recipes.', …}
41
: 
{id: 715424, name: 'The Best Chili', healthScore: 34, image: 'https://spoonacular.com/recipeImages/715424-312x231.jpg', summary: 'The recipe The Best Chili is ready <b>in about 2 h…Jerk Chili + Weekly Menu</a> for similar recipes.', …}
42
: 
{id: 662670, name: 'Swiss Chard Wraps', healthScore: 90, image: 'https://spoonacular.com/recipeImages/662670-312x231.jpg', summary: 'You can never have too many side dish recipes, so …>Swiss Chard</a> are very similar to this recipe.', …}
43
: 
{id: 716195, name: 'Spicy Indian-Style Hummus', healthScore: 40, image: 'https://spoonacular.com/recipeImages/716195-312x231.jpg', summary: `Spicy Indian-Style Hummus might be just the hor d'…2">Indian- Style Chicken</a> for similar recipes.`, …}
44
: 
{id: 663559, name: 'Tomato and lentil soup', healthScore: 100, image: 'https://spoonacular.com/recipeImages/663559-312x231.jpg', summary: 'Tomato and lentil soup takes about <b>about 45 min…d-lentil-soup-482854">Tomato and Lentil Soup</a>.', …}
45
: 
{id: 633942, name: 'Balsamic Roasted Vegetables', healthScore: 62, image: 'https://spoonacular.com/recipeImages/633942-312x231.jpg', summary: 'Balsamic Roasted Vegetables is a side dish that se…getables-570095">Balsamic Roasted Vegetables</a>.', …}
46
: 
{id: 715521, name: 'Turkey Avocado BLT Salad', healthScore: 33, image: 'https://spoonacular.com/recipeImages/715521-312x231.jpg', summary: 'Turkey Avocado BLT Salad might be just the main co…do-turkey-salad-376639">Avocado Turkey Salad</a>.', …}
47
: 
{id: 716276, name: 'Doughnuts', healthScore: 39, image: 'https://spoonacular.com/recipeImages/716276-312x231.jpg', summary: 'Need a <b>vegetarian morn meal</b>? Doughnuts coul…390430">No-Fry Doughnuts</a> for similar recipes.', …}
48
: 
{id: 658509, name: 'Roasted Broccoli with Lemon and Garlic', healthScore: 70, image: 'https://spoonacular.com/recipeImages/658509-312x231.jpg', summary: 'Roasted Broccoli with Lemon and Garlic might be ju…ed Garlic Lemon Broccoli</a> for similar recipes.', …}
49
: 
{id: 782622, name: 'Chocolate Peanut Butter Cinnamon Smoothie', healthScore: 100, image: 'https://spoonacular.com/recipeImages/782622-312x231.png', summary: 'Chocolate Peanut Butter Cinnamon Smoothie is a <b>…e Peanut Butter Smoothie</a> for similar recipes.', …}
50
: 
{id: 664547, name: 'Vegetable Dip', healthScore: 100, image: 'https://spoonacular.com/recipeImages/664547-312x231.jpg', summary: `You can never have too many hor d'oeuvre recipes, …959">Buffalo Chicken Dip</a> for similar recipes.`, …}
51
: 
{id: 661340, name: 'Spinach Salad with Strawberry Vinaigrette', healthScore: 78, image: 'https://spoonacular.com/recipeImages/661340-312x231.jpg', summary: 'Spinach Salad with Strawberry Vinaigrette might be…h Strawberry Vinaigrette</a> for similar recipes.', …}
52
: 
{id: 715385, name: 'Slow Cooker Baked Potato Soup', healthScore: 44, image: 'https://spoonacular.com/recipeImages/715385-312x231.jpg', summary: 'Slow Cooker Baked Potato Soup might be just the ma…Loaded Baked Potato Soup</a> for similar recipes.', …}
53
: 
{id: 716406, name: 'Asparagus and Pea Soup: Real Convenience Food', healthScore: 44, image: 'https://spoonacular.com/recipeImages/716406-312x231.jpg', summary: 'You can never have too many soup recipes, so give …m Real Food, Real Simple</a> for similar recipes.', …}
54
: 
{id: 658579, name: 'Roasted Endive Salad With Prosciutto, Figs and Pistachios', healthScore: 100, image: 'https://spoonacular.com/recipeImages/658579-312x231.jpg', summary: 'If you have around <b>around 45 minutes</b> to spe…Roasted Figs</a> are very similar to this recipe.', …}
55
: 
{id: 765011, name: 'Snap Pea and Green Bean Salad with Arugula Pesto', healthScore: 46, image: 'https://spoonacular.com/recipeImages/765011-312x231.jpg', summary: 'Snap Pean and Green Bean Salad with Arugula Pesto …Salad with Arugula Pesto</a> for similar recipes.', …}
56
: 
{id: 647875, name: 'Indian-Style Dill and Turmeric Potato Salad', healthScore: 100, image: 'https://spoonacular.com/recipeImages/647875-312x231.jpg', summary: 'Need a <b>gluten free, whole 30, and vegan side di…a with Turmeric and Dill</a> for similar recipes.', …}
57
: 
{id: 157344, name: 'Spicy Salad with Kidney Beans, Cheddar, and Nuts', healthScore: 75, image: 'https://spoonacular.com/recipeImages/157344-312x231.jpg', summary: 'Spicy Salad with Kidney Beans, Cheddar, and Nuts m… Beans – Meatless Monday</a> for similar recipes.', …}
58
: 
{id: 639851, name: 'Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes', healthScore: 81, image: 'https://spoonacular.com/recipeImages/639851-312x231.jpg', summary: 'Need a <b>gluten free, dairy free, fodmap friendly…with Olive Oil and Herbs</a> for similar recipes.', …}
59
: 
{id: 633921, name: 'Balsamic & Honey Glazed Salmon with Lemony Asparagus', healthScore: 80, image: 'https://spoonacular.com/recipeImages/633921-312x231.jpg', summary: 'Need a <b>gluten free, dairy free, and pescatarian…th Asparagus</a> are very similar to this recipe.', …}
60
: 
{id: 660405, name: 'Smoky Black Bean Soup With Sweet Potato & Kale', healthScore: 100, image: 'https://spoonacular.com/recipeImages/660405-312x231.jpg', summary: 'Need a <b>gluten free, dairy free, and vegetarian …an and Sweet Potato Soup</a> for similar recipes.', …}
61
: 
{id: 637162, name: 'Carrot and Cabbage Salad With Coriander+cumin Dry Rub', healthScore: 100, image: 'https://spoonacular.com/recipeImages/637162-312x231.jpg', summary: 'Carrot and Cabbage Salad With Coriander+cumin Dry …With Cumin And Coriander</a> for similar recipes.', …}
62
: 
{id: 716221, name: 'Split Pea and Mushroom Soup', healthScore: 76, image: 'https://spoonacular.com/recipeImages/716221-312x231.jpg', summary: 'Split Pean and Mushroom Soup might be just the mai…p-661395">Split-Pea Soup</a> for similar recipes.', …}
63
: 
{id: 632252, name: 'Alouette® Stuffed Mushroom Caps', healthScore: 52, image: 'https://spoonacular.com/recipeImages/632252-312x231.jpg', summary: 'Alouette® Stuffed Mushroom Caps is a <b>dairy free…2">Stuffed Mushroom Caps</a> for similar recipes.', …}
64
: 
{id: 982371, name: 'Instant Pot Quinoa Grain Bowl', healthScore: 100, image: 'https://spoonacular.com/recipeImages/982371-312x231.jpg', summary: 'If you have about <b>13 minutes</b> to spend in th…uinoa-pilaf-947662">Instant Pot Quinoa Pilaf</a>.', …}
65
: 
{id: 632244, name: 'Alouette Chicken Paprika', healthScore: 55, image: 'https://spoonacular.com/recipeImages/632244-312x231.jpg', summary: 'You can never have too many main course recipes, s…Alouette® Cranberry Brie</a> for similar recipes.', …}
66
: 
{id: 655235, name: 'Peanut Butter and Jelly Smoothie', healthScore: 32, image: 'https://spoonacular.com/recipeImages/655235-312x231.jpg', summary: 'Peanut Butter and Jelly Smoothie might be just the…hie-472194">Peanut Butter and Jelly Smoothie</a>.', …}
67
: 
{id: 1095753, name: 'Roasted Cauliflower Detox Bowl with Tahini Sauce', healthScore: 100, image: 'https://spoonacular.com/recipeImages/1095753-312x231.jpg', summary: 'The recipe Roasted Cauliflower Detox Bowl with Tah…er in Lemon-Tahini Sauce</a> for similar recipes.', …}
68
: 
{id: 633344, name: 'Bacon Wrapped Pork Tenderloin', healthScore: 51, image: 'https://spoonacular.com/recipeImages/633344-312x231.jpg', summary: 'Bacon Wrapped Pork Tenderloin is a <b>caveman, glu… Wrapped Pork Tenderloin</a> for similar recipes.', …}
69
: 
{id: 715573, name: 'Simple Skillet Lasagna', healthScore: 39, image: 'https://spoonacular.com/recipeImages/715573-312x231.jpg', summary: 'Simple Skillet Lasagna might be just the main cour…a-383790">Simple Lasagna</a> for similar recipes.', …}
70
: 
{id: 716361, name: 'Stir Fried Quinoa, Brown Rice and Chicken Breast', healthScore: 56, image: 'https://spoonacular.com/recipeImages/716361-312x231.jpg', summary: 'Stir Fried Quinoa, Brown Rice and Chicken Breast m…own Rice {Meat Optional}</a> for similar recipes.', …}
71
: 
{id: 664090, name: 'Turkish Chicken Salad with Home-made Cacik Yogurt Sauce', healthScore: 83, image: 'https://spoonacular.com/recipeImages/664090-312x231.jpg', summary: 'You can never have too many main course recipes, s…t and Cucumber Dip Cacik</a> for similar recipes.', …}
72
: 
{id: 651977, name: 'Mini Stuffed Mexican Bell Peppers', healthScore: 92, image: 'https://spoonacular.com/recipeImages/651977-312x231.jpg', summary: 'The recipe Mini Stuffed Mexican Bell Peppers could…tuffed Mini Bell Peppers</a> for similar recipes.', …}
73
: 
{id: 636602, name: 'Butternut Squash Soup (In Half An Hour!)', healthScore: 86, image: 'https://spoonacular.com/recipeImages/636602-312x231.jpg', summary: 'Butternut Squash Soup (In Half An Hour!) might be …: Half-Hour Veggie Chili</a> for similar recipes.', …}
74
: 
{id: 661259, name: 'Spinach and Gorgonzola Stuffed Flank Steak', healthScore: 81, image: 'https://spoonacular.com/recipeImages/661259-312x231.jpg', summary: 'Spinach and Gorgonzola Stuffed Flank Steak might b…k-446715">Spinach & Feta Stuffed Flank Steak</a>.', …}
75
: 
{id: 716423, name: 'Grilled Zucchini with Goat Cheese and Balsamic-Honey Syrup', healthScore: 27, image: 'https://spoonacular.com/recipeImages/716423-312x231.jpg', summary: 'Grilled Zucchini with Goat Cheese and Balsamic-Hon…Pecans, Blue Cheese and Honey Balsamic Syrup</a>.', …}
76
: 
{id: 634548, name: 'Beans With Smoked Pork Hock', healthScore: 81, image: 'https://spoonacular.com/recipeImages/634548-312x231.jpg', summary: 'Beans With Smoked Pork Hock might be just the side…590">Collard Greens with Ham and Smoked Hock</a>.', …}
77
: 
{id: 646651, name: 'Herb chicken with sweet potato mash and sautéed broccoli', healthScore: 78, image: 'https://spoonacular.com/recipeImages/646651-312x231.jpg', summary: 'Herb chicken with sweet potato mash and sautéed br…n with sweet potato mash</a> for similar recipes.', …}
78
: 
{id: 792072, name: 'Dressed Up Kale Salad', healthScore: 44, image: 'https://spoonacular.com/recipeImages/792072-312x231.jpg', summary: 'Need a <b>gluten free and vegan side dish</b>? Dre…ms, Kale and a Fried Egg</a> for similar recipes.', …}
79
: 
{id: 632269, name: 'Amaranth and Roast Veggie Salad', healthScore: 87, image: 'https://spoonacular.com/recipeImages/632269-312x231.jpg', summary: 'Amaranth and Roast Veggie Salad might be just the …uliflower Amaranth Salad</a> for similar recipes.', …}
80
: 
{id: 659143, name: 'Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony "Caviar" Dressing', healthScore: 100, image: 'https://spoonacular.com/recipeImages/659143-312x231.jpg', summary: 'You can never have too many main course recipes, s…ple And Watercress Salad</a> for similar recipes.', …}
81
: 
{id: 715533, name: 'Filet Mignon Soft Tacos', healthScore: 36, image: 'https://spoonacular.com/recipeImages/715533-312x231.jpg', summary: 'The recipe Filet Mignon Soft Tacos could satisfy y…ilet-mignon-pasta-702027">Filet Mignon Pasta</a>.', …}
82
: 
{id: 640921, name: 'Stuffed Artichoke Main Dish', healthScore: 78, image: 'https://spoonacular.com/recipeImages/640921-312x231.jpg', summary: 'Need a <b>gluten free main course</b>? Stuffed Art…mmertime Main-Dish Salad</a> for similar recipes.', …}
83
: 
{id: 639411, name: 'Cilantro Lime Halibut', healthScore: 67, image: 'https://spoonacular.com/recipeImages/639411-312x231.jpg', summary: 'Cilantro Lime Halibut is a <b>caveman, gluten free…with Ginger and Cilantro</a> for similar recipes.', …}
84
: 
{id: 646043, name: 'Gujarati Dry Mung Bean Curry', healthScore: 100, image: 'https://spoonacular.com/recipeImages/646043-312x231.jpg', summary: 'The recipe Gujarati Dry Mung Bean Curry is ready <…3">Korean Mung With Bean</a> for similar recipes.', …}
85
: 
{id: 975070, name: 'Instant Pot Chicken Taco Soup', healthScore: 83, image: 'https://spoonacular.com/recipeImages/975070-312x231.jpg', summary: 'Need a <b>gluten free and dairy free main course</…-pot-taco-soup-953509">Instant Pot Taco Soup</a>.', …}
86
: 
{id: 636608, name: 'Butternut Squash, Arugula and Goat Cheese Quinoa', healthScore: 100, image: 'https://spoonacular.com/recipeImages/636608-312x231.jpg', summary: 'Butternut Squash, Arugulan and Goat Cheese Quinoan…gula, and Roasted Garlic Goat Cheese Tartine</a>.', …}
87
: 
{id: 715391, name: 'Slow Cooker Chicken Taco Soup', healthScore: 27, image: 'https://spoonacular.com/recipeImages/715391-312x231.jpg', summary: 'Slow Cooker Chicken Taco Soup might be just the ma…eef or Chicken Taco Soup</a> for similar recipes.', …}
88
: 
{id: 716330, name: 'Chicken and Mango Skewer', healthScore: 61, image: 'https://spoonacular.com/recipeImages/716330-312x231.jpg', summary: 'Chicken and Mango Skewer might be just the main co…r-301739">Caprese Skewer</a> for similar recipes.', …}
89
: 
{id: 636230, name: 'Broccoli with cheese soup', healthScore: 52, image: 'https://spoonacular.com/recipeImages/636230-312x231.jpg', summary: 'Broccoli with cheese soup requires around <b>aroun…oli-cheese-soup-973016">Broccoli Cheese Soup</a>.', …}
90
: 
{id: 652393, name: 'Moosewood Lentil Soup', healthScore: 100, image: 'https://spoonacular.com/recipeImages/652393-312x231.jpg', summary: 'Moosewood Lentil Soup is a <b>gluten free and vega…osewood Restaurant Almost Fat-Free Cornbread</a>.', …}
91
: 
{id: 640117, name: 'Corn-Crusted Fish Tacos With Jalapeno-Lime Sauce and Spicy Black Beans', healthScore: 72, image: 'https://spoonacular.com/recipeImages/640117-312x231.jpg', summary: 'You can never have too many main course recipes, s…-801518">Fish Tacos with Jalapeno Lime Sauce</a>.', …}
92
: 
{id: 644826, name: 'Gluten Free Dairy Free Sugar Free Chinese Chicken Salad', healthScore: 99, image: 'https://spoonacular.com/recipeImages/644826-312x231.jpg', summary: 'The recipe Gluten Free Dairy Free Sugar Free Chine…-Free, No Refined Sugar)</a> for similar recipes.', …}
93
: 
{id: 642085, name: 'Easy Roasted Vegetables', healthScore: 100, image: 'https://spoonacular.com/recipeImages/642085-312x231.jpg', summary: 'Easy Roasted Vegetables is a <b>gluten free, dairy…7141">Easy Herb-Roasted Chicken & Vegetables</a>.', …}
94
: 
{id: 662968, name: 'Tempered Spicy Potatoes', healthScore: 94, image: 'https://spoonacular.com/recipeImages/662968-312x231.jpg', summary: 'Need a <b>gluten free, whole 30, and vegan side di…es-43778">Spicy Potatoes</a> for similar recipes.', …}
95
: 
{id: 659109, name: 'Salmon Quinoa Risotto', healthScore: 100, image: 'https://spoonacular.com/recipeImages/659109-312x231.jpg', summary: 'Salmon Quinoa Risotto is a <b>gluten free, dairy f…o-472468">Quinoa Risotto</a> for similar recipes.', …}
96
: 
{id: 646738, name: "Herbivoracious' White Bean and Kale Soup", healthScore: 72, image: 'https://spoonacular.com/recipeImages/646738-312x231.jpg', summary: "Herbivoracious' White Bean and Kale Soup could be …nd Kale Soup</a> are very similar to this recipe.", …}
97
: 
{id: 633221, name: 'Baby Beet Salad', healthScore: 63, image: 'https://spoonacular.com/recipeImages/633221-312x231.jpg', summary: 'Baby Beet Salad might be just the side dish you ar… Feta, Walnuts & Arugula</a> for similar recipes.', …}
98
: 
{id: 659135, name: 'Salmon with roasted vegetables', healthScore: 100, image: 'https://spoonacular.com/recipeImages/659135-312x231.jpg', summary: 'Salmon with roasted vegetables is a main course th…tables-176441">Roasted Salmon and Vegetables</a>.', …}
}*/