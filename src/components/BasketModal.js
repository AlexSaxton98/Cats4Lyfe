{props.basket && props.basket.total_unique_items > 0 ? (
    <>
        <Item.Group divided>
            {props.basket.line_items.map(item => (
                <Item key={item.id}>
                    <BasketItems item={item}/>
                </Item>
            ))}
        </Item.Group>
    </>
) 
:
(
    // This is our Modal when there are ZERO items/products in our cart

    <>
        <Modal.Header>Cats4Lyfe Basket</Modal.Header>
        <Modal.Content image>
            <Image wrapped size='huge' src={cartImg} />
            <Modal.Description>
                <Header>Your Basket is currently Empty</Header>
                <p>
                    Would you like to choose a Cat?
                </p>
            </Modal.Description>
        </Modal.Content>
    </>
)}