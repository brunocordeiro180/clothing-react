import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51Ixh5AIjl0abA5xLzUvS69dIYuj0HCDsonUhNYA2Pkuh56IvPoDP4nVwnEthyIWOmX2w0my6KMMw14TIrioWYqXN00krqjQxKL'

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout 
			label='Pay Now'
			name='Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton;