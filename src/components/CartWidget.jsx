const CartWidget = () => {
	return (
		<div>
			<span>
				<svg
					className="cart-icon"
					viewBox="0 0 24 24"
					fill= "none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3 4H5L7.2 14.2C7.3 14.8 7.8 15.2 8.4 15.2H17.4C18 15.2 18.5 14.8 18.6 14.2L20 7H6"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>

					<circle
						cx="9"
						cy="19"
						r="1.8"
						fill="currentColor"
					/>

					<circle
						cx="17"
						cy="19"
						r="1.8"
						fill="currentColor"
					/>
				</svg>
			</span>
		</div>
	)
}

export default CartWidget