const ShoeCard = ({imgURL,changeBigShoeImage,BigShoeImg}) => {
    const handleClick = () => {
        if(BigShoeImg !== imgURL.bigShoe)
        {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
	return(
		<div className={`border-2 rounded-xl ${bigShoeImg === imgURL ? 'border-coral-red':'border-transparent'}cursor-pointer max-sm:flex-1`}
		onClick ={handleClick}>
	<div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-49 rounded-xl max-sm: p-4">
	<img src={imgURL.thumbnail} 
	    alt ="shoe collection"
	    width = {127} 
	    height = {103} 
	    className = "object-contain"/>

		</div>
		</div>
	)
}

export default ShoeCard

