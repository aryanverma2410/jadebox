import express from 'express'
import {} from 'dotenv/config'
import { v4 as uuidv4 } from 'uuid'
import Paytm from 'paytmchecksum'
// const PaytmChecksum = require('./PaytmChecksum.js')
const router = express.Router()
router.post('/payment', (req, res) => {
	const { amount, email } = req.body
	const totalAmount = JSON.stringify(amount)
	var params = {}

	/* initialize an array */
	;(params['MID'] = process.env.PAYTM_MID),
		(params['WEBSITE'] = process.env.PAYTM_WEBSITE),
		(params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID),
		(params['INDUSTRY_TYPE_ID'] = process.env.INDUSTRY_TYPE_ID),
		(params['ORDER_ID'] = uuidv4()),
		(params['CUST_ID'] = process.env.CUST_ID),
		(params['TXN_AMOUNT'] = totalAmount),
		(params['CALLBACK_URL'] = 'http://localhost:4001/api/callback'),
		(params['EMAIL'] = email),
		(params['MOBILE_NO'] = '9140382988')

	/**
	 * Generate checksum by parameters we have
	 * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
	 */
	var paytmChecksum = PaytmChecksum.generateSignature(
		params,
		process.env.PAYTM_MERCHANT_KEY
	)
	paytmChecksum
		.then(function (checksum) {
			let paytmParams = {
				...params,
				CHECKSUMHASH: checksum,
			}
			res.json(paytmParams)
		})
		.catch(function (error) {
			console.log(error)
		})
})
export default router
