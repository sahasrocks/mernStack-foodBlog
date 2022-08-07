import chicken from '../images/chicken.jpeg'
import paneer from '../images/paneer.jpeg'
import aloo from '../images/aloo.jpeg'

//in case we are not able to see image in browser import the path of image like above
const articles =[
    {
    name :"chicken-tikka",
    title : "Chicken Tikka",
    thumbnail:chicken,
    content :[
        "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era. The dish is popular in India, Bangladesh and Pakistan.It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken.</li>The word tikka (Tike in Turkish, and Tikə in Azerbaijani) is a Persian word, meaning 'bits' or 'pieces'. It is also a chicken dish served in Punjabi cuisine. The Kashmiri version of the dish, however, is grilled over red-hot coals, and does not always contain boneless pieces. The pieces are brushed with ghee (clarified butter) at intervals to increase its flavour, while being continuously fanned. It is typically eaten with green coriander and tamarind chutney served with onion rings and lemon, or used in preparing a chicken tikka masala.A chicken tikka sizzler is a dish where chicken tikka is served on a heat"
    ]
    },
    {
        name :"paneer-tikka",
        title : "Paneer Tikka",
        thumbnail:paneer,
        content :[
            'It’s a famous Indian appetizer where pieces of paneer (Indian cottages cheese) and marinated with yogurt and spices and then grilled until charred.  Onion, bell peppers and tomatoes are also added to the marination along with paneer.  Once cooked, it’s served with cilantro mint chutney, onion slices and lemon wedges.  How to Make Paneer Tikka The process is pretty simple, you marinate the paneer with spices and yogurt, let it sit for a bit so that the flavors mix well together and then arrange the paneer cubes along with onion and peppers in a skewer and grill.  However, the taste of paneer tikka lies in its marination of course.  So to make a good paneer tikka you first need to make a very good marinade.  My marinade includes lots of spices and Greek yogurt. Now if you can’t find Greek yogurt that’s okay. You may use regular yogurt too, just make sure to strain it for 3-4 hours before using.  You really need thick yogurt to mari'
        ]
    },
    {
        name :"aloo-tikka",
        title : "Aloo Tikka",
        thumbnail:aloo,
        content :["Tandoori aloo or aloo tikka is one of our favorite starter dish which we order often in restaurants. The recipe posted here shares both the Oven grilling as well Pan frying methods for cooking the potatoes. Below picture is of the pan fried aloo tikka.  This aloo tikka recipe uses curd for marination. usually I marinate the potatoes for a couple of hours, but you can also marinate them overnight in the refrigerator.  The recipe is spicy. So if you cannot tolerate spicy food, then reduce the amount of Kashmiri red chilli powder in the marination.  Tandoori aloo goes very well as starter snack. You can also wrap them in chapati rolls and serve as a wrap."]
    }
]
export default articles