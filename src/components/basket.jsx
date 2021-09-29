const [basket, setBasket] = useState()

useEffect(() => {
    commerce.basket.retrieve()
        .then(res => {
            setBasket(res)
        })
}, [])

const addToBasket = (catId, catInfo) => {

    if (catInfo) {
        commerce.basket.add(catId, 1, catInfo)
            .then(res => {
                setBasket(res.basket)
            })
    } else {
        window.alert('Please Select a Cat!')
    }
}


/*        function Basket(){

            const commerce = new Commerce(process.env.REACT_APP_PUBLICKEY_SANDBOX)

            const [basket,setBasket] = useState()


        } */

return (
    <div className="Basket">
        <Nav basket={basket} emptyBasket={emptyBasket} />
        <Grid centred stackable padded relaxed>
            <Grid.Column className='left-column' width={5}>
                <LeftPanel />
            </Grid.Column>
            <Grid.Column width={9}>
                <ProductContainer
                    addToBasket={addToBasket}
                />
            </Grid.Column>
        </Grid>
        <Footer />
    </div>

);
<Nav basket={basket} emptyBasket={emptyBasket} />



