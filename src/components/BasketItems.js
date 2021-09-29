return (
    <>
        <Item.Image size='tiny' src={props.item.media.source} />
        <Item.Content verticalAlign='middle'>
            <Item.Header>{props.item.name}</Item.Header>
            <Item.Meta>
                <span>{props.item.variants[0]}</span>
            </Item.Meta>

            // added

            <div className='quan-group'>
                <Button
                negative
                className='quan-buttons'
                >
                    <Icon name='plus' />
                </Button>
            </div>
            <Item.Extra className='items-total'>
                <Header floated='right'>${props.item.line_total.formatted_with_symbol}</Header>
            </Item.Extra>
        </Item.Content>

    </>

);