import React, { useState } from "react";
import "./Paystack.css";
import { usePaystackPayment } from "react-paystack";

const Paystack = () => {
	// Setting config object to a state to dynamically capture info from Form
	const [config, setConfig] = useState({
		name: "",
		email: "",
		amount: 0,
		publicKey: "pk_test_c7ed2f7ea919bcddf3828375e170b8a5d49570a3",
	});

	// First initialization of the Library
	const initializePayment = usePaystackPayment(config);

	// Callback if transaction is successful
	const onSuccess = () => {
		alert("Payment Successful, check your email for confirmation");
	};

	// Callback if payment gateway is closed
	const onClose = () => {
		alert("Opps, Payment not completed");
	};

	const handleChange = (e) => {
		const valueName = e.target.name;
		const value = e.target.value;
		setConfig({ ...config, [valueName]: value });
		console.log(config);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Trigger Payment Gateway on Form Submit
		initializePayment(onSuccess, onClose);
	};

	return (
		<>
			<div className="my-header text-center">
				<h5>Paystack in React Demo</h5>
			</div>
			<div className="container">
				<div className="row mt-5">
					<div className="col-sm-4 mx-auto my-form text-center">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Enter Name"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Enter Email"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="mb-3">
								<input
									type="tel"
									id="amount"
									name="amount"
									placeholder="Enter Amount"
									required
									onChange={handleChange}
								/>
							</div>
							<div>
								<button type="submit">Pay Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Paystack;
