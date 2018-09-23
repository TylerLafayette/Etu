'use strict';

var ApiContracts = require('authorizenet').APIContracts;
var ApiControllers = require('authorizenet').APIControllers;
var SDKConstants = require('authorizenet').Constants;
var utils = require('./utils.js');
var constants = require('./constants.js');

function chargeCreditCard(data, callback) {
    var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(constants.apiLoginKey);
    merchantAuthenticationType.setTransactionKey(constants.transactionKey);

    var creditCard = new ApiContracts.CreditCardType();
    creditCard.setCardNumber(data.creditCard.cardNumber);
    creditCard.setExpirationDate(data.creditCard.cardNumber);
    creditCard.setCardCode(data.creditCard.cardCode);

    var paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);

    var orderDetails = new ApiContracts.OrderType();
    orderDetails.setInvoiceNumber('INV-12345');
    orderDetails.setDescription('A Donation to Charity');

    var tax = new ApiContracts.ExtendedAmountType();
    tax.setAmount('4.26');
    tax.setName('level2 tax name');
    tax.setDescription('level2 tax');

    var duty = new ApiContracts.ExtendedAmountType();
    duty.setAmount('8.55');
    duty.setName('International');
    duty.setDescription('If applicable');

    var shipping = new ApiContracts.ExtendedAmountType();
    shipping.setAmount('8.55');
    shipping.setName('Overnight');
    shipping.setDescription('Not applicable');

    var billTo = new ApiContracts.CustomerAddressType();
    billTo.setFirstName(data.name.split(" ")[0]);
    billTo.setLastName(data.name.split(" ")[1]);
    billTo.setCompany(data.billTo.company);
    billTo.setAddress(data.billTo.address);
    billTo.setCity(data.billTo.city);
    billTo.setState(data.billTo.state);
    billTo.setZip(data.billTo.zip);
    billTo.setCountry(data.billTo.country);

    var shipTo = new ApiContracts.CustomerAddressType();
    shipTo.setFirstName(data.name.split(" ")[0]);
    shipTo.setLastName(data.name.split(" ")[1]);
    shipTo.setCompany(data.shipTo.company);
    shipTo.setAddress(data.shipTo.address);
    shipTo.setCity(data.shipTo.city);
    shipTo.setState(data.shipTo.state);
    shipTo.setZip(data.shipTo.zip);
    shipTo.setCountry(data.shipTo.country);

    var lineItem_id1 = new ApiContracts.LineItemType();
    lineItem_id1.setItemId('1');
    lineItem_id1.setName('Donation');
    lineItem_id1.setDescription('Donation to charity');
    lineItem_id1.setQuantity('18');
    lineItem_id1.setUnitPrice(45.00);

    var lineItemList = [];
    lineItemList.push(lineItem_id1);

    var lineItems = new ApiContracts.ArrayOfLineItem();
    lineItems.setLineItem(lineItemList);

    var userField_a = new ApiContracts.UserField();
    userField_a.setName('A');
    userField_a.setValue('Aval');

    var userField_b = new ApiContracts.UserField();
    userField_b.setName('B');
    userField_b.setValue('Bval');

    var userFieldList = [];
    userFieldList.push(userField_a);
    userFieldList.push(userField_b);

    var userFields = new ApiContracts.TransactionRequestType.UserFields();
    userFields.setUserField(userFieldList);

    var transactionSetting1 = new ApiContracts.SettingType();
    transactionSetting1.setSettingName('duplicateWindow');
    transactionSetting1.setSettingValue('120');

    var transactionSetting2 = new ApiContracts.SettingType();
    transactionSetting2.setSettingName('recurringBilling');
    transactionSetting2.setSettingValue('false');

    var transactionSettingList = [];
    transactionSettingList.push(transactionSetting1);
    transactionSettingList.push(transactionSetting2);

    var transactionSettings = new ApiContracts.ArrayOfSetting();
    transactionSettings.setSetting(transactionSettingList);

    var transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(utils.getRandomAmount());
    transactionRequestType.setLineItems(lineItems);
    transactionRequestType.setUserFields(userFields);
    transactionRequestType.setOrder(orderDetails);
    transactionRequestType.setTax(tax);
    transactionRequestType.setDuty(duty);
    transactionRequestType.setShipping(shipping);
    transactionRequestType.setBillTo(billTo);
    transactionRequestType.setShipTo(shipTo);
    transactionRequestType.setTransactionSettings(transactionSettings);

    var createRequest = new ApiContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);

    //pretty print request
    console.log(JSON.stringify(createRequest.getJSON(), null, 2));

    var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());
    //Defaults to sandbox
    //ctrl.setEnvironment(SDKConstants.endpoint.production);

    ctrl.execute(function () {

        var apiResponse = ctrl.getResponse();

        var response = new ApiContracts.CreateTransactionResponse(apiResponse);

        //pretty print response
        console.log(JSON.stringify(response, null, 2));

        if (response != null) {
            if (response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK) {
                if (response.getTransactionResponse().getMessages() != null) {
                    console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
                    console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
                    console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
                    console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
                }
                else {
                    console.log('Failed Transaction.');
                    if (response.getTransactionResponse().getErrors() != null) {
                        console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                        console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                    }
                }
            }
            else {
                console.log('Failed Transaction. ');
                if (response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null) {

                    console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                    console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                }
                else {
                    console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
                    console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
                }
            }
        }
        else {
            console.log('Null Response.');
        }

        callback(response);
    });
}

if (require.main === module) {
    chargeCreditCard(function () {
        console.log('chargeCreditCard call complete.');
    });
}

module.exports.chargeCreditCard = chargeCreditCard;