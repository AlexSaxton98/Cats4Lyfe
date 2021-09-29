const iconDisplay = () => {

    if (props.basket && props.basket.total_unique_items > 0) {
        return(
            <Label color='green' >
                <Icon name='shopping cart' size='big'/>
                {props.basket.total_unique_items}
            </Label>
        )
    } else {
        return (
            <Icon name='shopping cart' size='large'/>
        )
    }
}

<Modal trigger={iconDisplay()} className='cart-model' closeIcon>
    <CartModal cart={props.basket} />
</Modal>