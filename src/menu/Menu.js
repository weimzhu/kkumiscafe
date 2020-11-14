function Menu() {
    let menuItems = [
        {
            itemName: "Kkumi Coffee",
            price: "$3.99"
        },
        {
            itemName: "Weimo Croissant",
            price: "$1.99"
        },
        {
            itemName: "Arin Latte",
            price: "$2.99"
        }
    ]

    return(
        <div>
            <h4>Todays Menu:</h4>
            <ul>
                <li>Item: {menuItems[0].itemName} - Price: {menuItems[0].price}</li>
                <li>Item: {menuItems[1].itemName} - Price: {menuItems[1].price}</li>
                <li>Item: {menuItems[2].itemName} - Price: {menuItems[2].price}</li>
            </ul>
        </div>
    );
}

export default Menu