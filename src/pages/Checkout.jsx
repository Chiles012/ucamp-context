import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const Checkout = () => {

    return (
        <PayPalScriptProvider
            options={{
                "client-id": "AXdOdJ89dt4nBzamGWa9n4cyeO7MWmftLbXGATCeh3Au0fJzfhDFBypRYzEsmib-HjOU0vVucdMGhapC",
            }}
        >
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "2.96",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    )

}

export default Checkout;