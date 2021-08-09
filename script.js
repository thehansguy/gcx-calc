const GRADING_FEES = 2,
    HANDLING_FEES = 1.5,
    STORAGE_FUMUGATION_FEES = 0.8,
    E_WR_FEES = 2,
    TRADING_FEES = 0.0091,
    REGULATORY_FEES = 0.002

let netpermt_amt_,
    gradingandrebagging_amt_,
    handling_amt_,
    storageandfumugation_amt_,
    ewr_amt_,
    trading_amt_,
    regulatrory_amt_,
    Total_WH_Fees_,
    pricepermt_,
    priceperbag_;

let netpermt_amt__,
    gradingandrebagging_amt__,
    handling_amt__,
    storageandfumugation_amt__,
    ewr_amt__,
    trading_amt__,
    regulatrory_amt__,
    Total_WH_Fees__,
    pricepermt__,
    priceperbag__;

function finalProcessButton(getInputFromUser, getNumberOfMonthsFromUser) {

    let _input,
        _input_number_of_months,
        output_;

    getInputFromUser = document.getElementById("input1js").value;
    getNumberOfMonthsFromUser = document.getElementById("input2js").value;

    _input = getInputFromUser;
    _input_number_of_months = getNumberOfMonthsFromUser;

    Total_WH_Fees__ = totalWHFees(_input_number_of_months);
    NetPerMT(_input);
    pricepermt__ = pricepermt();
    priceperbag__ = priceperbag();

    if (getInputFromUser <= 0) {
        outputToUser = "";
    }
    else {
        output_ = priceperbag__; //process function and result;
        outputToUser = output_ + ".00";

        return document.getElementById("outputjs").innerHTML = outputToUser;
    }


}

function NetPerMT(input) {
    netpermt_amt_ = input * 20
    netpermt_amt__ = netpermt_amt_
    return netpermt_amt_
}

function gradingAndRebaggingAmount() {
    gradingandrebagging_amt_ = GRADING_FEES * 20
    gradingandrebagging_amt__ = gradingandrebagging_amt_
    return gradingandrebagging_amt_
}

function handlingAmount() {
    handling_amt_ = HANDLING_FEES * 20
    handling_amt__ = handling_amt_
    return handling_amt_
}

function storageAndFumugationAmount(inputNumberOfMonths) {
    storageandfumugation_amt_ = 20 * STORAGE_FUMUGATION_FEES * inputNumberOfMonths
    storageandfumugation_amt__ = storageandfumugation_amt_
    return storageandfumugation_amt_
}

function ewrAmount() {
    ewr_amt_ = E_WR_FEES * 1
    ewr_amt__ = ewr_amt_
    return ewr_amt_
}

function totalWHFees(inputNumberOfMonths) {
    Total_WH_Fees_ = gradingAndRebaggingAmount() +
        handlingAmount() +
        storageAndFumugationAmount(inputNumberOfMonths) +
        ewrAmount()
    Total_WH_Fees__ = Total_WH_Fees_
    return Total_WH_Fees_
}

function pricepermt() {
    pricepermt_ = Math.round((netpermt_amt__ + Total_WH_Fees__) / (1 - (TRADING_FEES + REGULATORY_FEES)))
    pricepermt_ = pricepermt_ //to int
    pricepermt__ = pricepermt_
    return pricepermt_
}

function priceperbag() {
    priceperbag_ = Math.round(pricepermt__ / 20)
    priceperbag_ = priceperbag_ //to int
    priceperbag__ = priceperbag_
    return priceperbag_
}

function tradingAmount() {
    trading_amt_ = pricepermt() * TRADING_FEES
    trading_amt__ = trading_amt_
    return trading_amt_
}

let input1js = document.getElementById("input1js").value;
let input2js = document.getElementById("input2js").value;

let input2change = document.getElementById("input2js");
input2change.addEventListener("change", finalProcessButton);
